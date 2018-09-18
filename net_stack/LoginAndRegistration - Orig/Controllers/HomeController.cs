using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using LoginAndRegistration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace LoginAndRegistration.Controllers {
    public class HomeController : Controller {
        private ModelContext _context;

        public HomeController (ModelContext context) {
            _context = context;
        }

        [Route ("")]
        [HttpGet]
        public IActionResult Index () {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId != null)
            {
                return RedirectToAction("Result");
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
            string check = submission.Email == null ? null : submission.Email.ToLower();
            UserModel Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            if (ModelState.IsValid && Query == null) {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel>();
                submission.Password = Hasher.HashPassword(submission, submission.Password);
                _context.Add(submission);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", submission.UserId);
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
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId != null)
            {
                return RedirectToAction("Result");
            }
            string check = email == null ? null : email.ToLower();
            UserModel Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            if (Query != null)
            {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel>();
                var result = Hasher.VerifyHashedPassword(Query, Query.Password, password);
                if (result != 0)
                {
                    HttpContext.Session.SetInt32("UserId", Query.UserId);
                    return RedirectToAction("Result");
                }
            }
            TempData["LoginError"] = "Wrong username or password.";
            return RedirectToAction("Index");
        }

        [Route ("Result")]
        [HttpGet]
        public IActionResult Result () {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId == null)
            {
                return RedirectToAction("Index");
            }
            return View ();
        }

        [Route ("Logout")]
        [HttpGet]
        public IActionResult LogOut () {
            HttpContext.Session.Remove("UserId");
            return RedirectToAction("Index");
        }
    }
}