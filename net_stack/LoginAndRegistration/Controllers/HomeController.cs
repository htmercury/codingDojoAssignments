﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using LoginAndRegistration.Models;
using LoginAndRegistration.ViewModels;
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
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Result");
            }
            ViewBag.Gate = "<a class='text-white' href='SignIn'>Sign in</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/'>Home</a></li>";
            return View ();
        }

        [Route ("Register")]
        [HttpPost]
        public IActionResult Register (AuthViewModel Auth) {
            System.Console.WriteLine(Auth.RegForm);
            UserModel submission = new UserModel () {
                FirstName = Auth.RegForm.FirstName,
                LastName = Auth.RegForm.LastName,
                Email = Auth.RegForm.Email,
                Password = Auth.RegForm.Password,
                ConfirmPassword = Auth.RegForm.ConfirmPassword
            };
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
                    string field = key.Substring(8);
                    System.Console.WriteLine(field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine(error);
                    TempData[field] = error;
                }
                if (Query != null && TempData["Email"] == null) {
                    TempData["Email"] = "Email is not unique.";
                }
                return RedirectToAction ("Index");
            }
        }

        [Route ("Login")]
        [HttpPost]
        public IActionResult Login (AuthViewModel Auth) {
            string email = Auth.LogForm.Email;
            string password = Auth.LogForm.Password;
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Result");
            }
            string check = email == null ? null : email.ToLower ();
            UserModel Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            if (Query != null && password != null) {
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

        [Route ("Result")]
        [HttpGet]
        public IActionResult Result () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            ViewBag.Gate = "<a class='text-white' href='/Logout'>Log off</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/Dashboard'>Dashboard</a></li><li class='nav-item active'><a class='nav-link' href='/Users/Edit'>Profile</a></li>";
            return View ();
        }

        [Route ("Logout")]
        [HttpGet]
        public IActionResult LogOut () {
            HttpContext.Session.Remove ("UserId");
            return RedirectToAction ("Index");
        }
    }
}