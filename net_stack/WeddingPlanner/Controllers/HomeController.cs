using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace LoginAndRegistration.Controllers {
    public class HomeController : Controller {
        private ModelContext _context;

        public HomeController (ModelContext context) {
            _context = context;
        }

        [Route ("")]
        [HttpGet]
        public IActionResult Index () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Result");
            }
            ViewBag.FirstName = TempData["FirstName"];
            ViewBag.LastName = TempData["LastName"];
            ViewBag.Email = TempData["Email"];
            ViewBag.Password = TempData["Password"];
            ViewBag.Submission = TempData["Submission"];
            ViewBag.LoginError = TempData["LoginError"];
            ViewBag.fname = TempData["fname"];
            ViewBag.lname = TempData["lname"];
            ViewBag.emailAddress = TempData["emailAddress"];
            return View ();
        }

        [Route ("Register")]
        [HttpPost]
        public IActionResult Register (UserModel submission) {
            string check = submission.Email == null ? null : submission.Email.ToLower ();
            UserModel Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            if (ModelState.IsValid && Query == null) {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel> ();
                submission.Password = Hasher.HashPassword (submission, submission.Password);
                _context.Add (submission);
                _context.SaveChanges ();
                HttpContext.Session.SetInt32 ("UserId", submission.UserId);
                return RedirectToAction ("Result");
            } else {
                TempData["fname"] = submission.FirstName;
                TempData["lname"] = submission.LastName;
                TempData["emailAddress"] = submission.Email;
                foreach (string key in ModelState.Keys) {
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    TempData[key] = error;
                }
                if (Query != null && TempData["Email"] == null) {
                    TempData["Email"] = "Email is not unique.";
                }
                return RedirectToAction ("Index");
            }
        }

        [Route ("Login")]
        [HttpPost]
        public IActionResult Login (string email, string password) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Result");
            }
            string check = email == null ? null : email.ToLower ();
            UserModel Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            if (Query != null) {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel> ();
                var result = Hasher.VerifyHashedPassword (Query, Query.Password, password);
                if (result != 0) {
                    HttpContext.Session.SetInt32 ("UserId", Query.UserId);
                    return RedirectToAction ("Result");
                }
            }
            TempData["LoginError"] = "Wrong username or password.";
            return RedirectToAction ("Index");
        }

        [Route ("Dashboard")]
        [HttpGet]
        public IActionResult Result () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            ViewBag.Weddings = _context.Weddings
                .Include (w => w.Guests);
            ViewBag.User = _context.Users
                .Where (u => u.UserId == UserId)
                .Include (u => u.OwnedWeddings)
                .FirstOrDefault ();
            ViewBag.UserWeddings = _context.UserWeddings
                .Where(uw => uw.UserId == UserId);
            return View ();
        }

        [Route ("Logout")]
        [HttpGet]
        public IActionResult LogOut () {
            HttpContext.Session.Remove ("UserId");
            return RedirectToAction ("Index");
        }

        [Route ("New")]
        [HttpGet]
        public IActionResult NewWedding () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            return View ();
        }

        [Route ("New")]
        [HttpPost]
        public IActionResult CreateWedding (WeddingModel submission) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            if (ModelState.IsValid) {
                submission.OwnerId = (int) UserId;
                _context.Add (submission);
                _context.SaveChanges ();
                return RedirectToAction ("Result");
            } else {
                return View ("NewWedding");
            }
        }

        [Route ("Delete/{id}")]
        [HttpGet]
        public IActionResult Delete (int id) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            WeddingModel wedding = _context.Weddings.Where (w => w.WeddingId == id).FirstOrDefault ();
            if ((wedding != null && wedding.OwnerId != UserId) || wedding == null) {
                return RedirectToAction ("Result");
            }
            _context.Weddings.Remove (wedding);
            _context.SaveChanges ();
            return RedirectToAction ("Result");
        }

        [Route ("RSVP/{id}")]
        [HttpGet]
        public IActionResult RSVP(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            WeddingModel wedding = _context.Weddings.Where (w => w.WeddingId == id).FirstOrDefault ();
            if (UserId == null || wedding == null) {
                return RedirectToAction ("Index");
            }
            UserWeddingModel UserWedding = new UserWeddingModel()
            {
                UserId = (int)UserId,
                WeddingId = id
            };
            _context.Add(UserWedding);
            _context.SaveChanges();
            return RedirectToAction("Result");
        }

        [Route ("UnRSVP/{id}")]
        [HttpGet]
        public IActionResult unRSVP(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            WeddingModel wedding = _context.Weddings.Where (w => w.WeddingId == id).FirstOrDefault ();
            if (UserId == null || wedding == null) {
                return RedirectToAction ("Index");
            }
            UserWeddingModel UserWedding = _context.UserWeddings.Where(uw => (uw.UserId == UserId && uw.WeddingId == id)).FirstOrDefault();
            _context.UserWeddings.Remove(UserWedding);
            _context.SaveChanges();
            return RedirectToAction("Result");
        }

        [Route ("Wedding/{id}")]
        [HttpGet]
        public IActionResult GetWedding(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            ViewBag.Wedding = _context.Weddings
                .Where (w => w.WeddingId == id)
                .Include (w => w.Guests)
                    .ThenInclude(uw => uw.User)
                .FirstOrDefault ();
            return View();
        }
    }
}