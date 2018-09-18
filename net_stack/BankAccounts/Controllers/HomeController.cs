using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using BankAccounts.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace BankAccounts.Controllers {
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
        [HttpGet]
        public IActionResult Login () {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId != null)
            {
                return RedirectToAction("Result");
            }
            ViewBag.LoginError = TempData["LoginError"];
            return View();
        }

        [Route ("Process")]
        [HttpPost]
        public IActionResult Process (string email, string password) {
            System.Console.WriteLine(email);
            System.Console.WriteLine(password);
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
            return RedirectToAction("Login");
        }

        [Route ("Account")]
        [HttpGet]
        public IActionResult Result () {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.User = _context.Users.Where(u => u.UserId == UserId)
                .Include(u => u.Transactions).FirstOrDefault();
            return View ("Account");
        }

        [Route("Transact")]
        [HttpPost]
        public IActionResult Transact(string amount) {
            float Amount = float.Parse(amount);
            int? UserId = HttpContext.Session.GetInt32("UserId");
            TransactionModel submission = new TransactionModel();
            submission.Amount = Amount;
            if (UserId != null)
            {
                UserModel User = _context.Users.Where(u => u.UserId == UserId).FirstOrDefault();
                User.Transactions.Add(submission);
                User.Balance += Amount;
                if (User.Balance >= 0)
                {
                    _context.SaveChanges();
                }
            }
            return RedirectToAction("Result");
        }

        [Route ("Logout")]
        [HttpGet]
        public IActionResult LogOut () {
            HttpContext.Session.Remove("UserId");
            return RedirectToAction("Index");
        }
    }
}