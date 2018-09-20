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
using UserDashboard.Models;
using UserDashboard.ViewModels;

namespace UserDashboard.Controllers {
    public class HomeController : Controller {
        private ModelContext _context;

        public HomeController (ModelContext context) {
            _context = context;
        }

        [Route ("")]
        [HttpGet]
        public IActionResult Home () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Dashboard");
            }
            ViewBag.Gate = "<a class='text-white' href='SignIn'>Sign in</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/'>Home</a></li>";
            return View();
        }

        [Route ("SignIn")]
        [HttpGet]
        public IActionResult Index () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Dashboard");
            }
            ViewBag.Gate = "<a class='text-white' href='SignIn'>Sign in</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/'>Home</a></li>";
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
        public IActionResult Register (AuthViewModel Auth) {
            System.Console.WriteLine (Auth.RegForm);
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
                submission.CreatedAt = DateTime.Now;
                _context.Add (submission);
                _context.SaveChanges ();
                HttpContext.Session.SetInt32 ("UserId", submission.UserId);
                return RedirectToAction ("Dashboard");
            } else {
                TempData["fname"] = submission.FirstName;
                TempData["lname"] = submission.LastName;
                TempData["emailAddress"] = submission.Email;
                foreach (string key in ModelState.Keys) {
                    string field = key.Substring (8);
                    System.Console.WriteLine (field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine (error);
                    TempData[field] = error;
                }
                if (Query != null && TempData["Email"] == null) {
                    TempData["Email"] = "Email is not unique.";
                }
                return RedirectToAction ("Index");
            }
        }

        [Route ("CreateUser")]
        [HttpPost]
        public IActionResult Create (AuthViewModel Auth) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Dashboard");
            }
            UserModel loggedIn = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (!loggedIn.Admin) {
                return RedirectToAction("Dashboard");
            }
            System.Console.WriteLine (Auth.RegForm);
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
                submission.CreatedAt = DateTime.Now;
                _context.Add (submission);
                _context.SaveChanges ();
                return RedirectToAction ("Dashboard");
            } else {
                TempData["fname"] = submission.FirstName;
                TempData["lname"] = submission.LastName;
                TempData["emailAddress"] = submission.Email;
                foreach (string key in ModelState.Keys) {
                    string field = key.Substring (8);
                    System.Console.WriteLine (field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine (error);
                    TempData[field] = error;
                }
                if (Query != null && TempData["Email"] == null) {
                    TempData["Email"] = "Email is not unique.";
                }
                return RedirectToAction ("NewUser");
            }
        }

        [Route ("Users/Update/{id}")]
        [HttpPost]
        public IActionResult Update (UpdateViewModel Update, int id) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Dashboard");
            }
            UserModel loggedIn = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (!loggedIn.Admin) {
                return RedirectToAction("Dashboard");
            }
            UserModel submission = _context.Users.Where(u => u.UserId == id).SingleOrDefault();
            UserModel Query;
            if (submission.Email.ToLower() == Update.EditForm.Email) {
                Query = null;
            }
            else {
                string check = submission.Email == null ? null : submission.Email.ToLower ();
                Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            }
            if (ModelState.IsValid && Query == null) {
                submission.FirstName = Update.EditForm.FirstName;
                submission.LastName = Update.EditForm.LastName;
                submission.Email = Update.EditForm.Email;
                submission.Admin = Update.EditForm.Admin;
                _context.SaveChanges ();
                return RedirectToAction ("Dashboard");
            } else {
                TempData["fname"] = Update.EditForm.FirstName;
                TempData["lname"] = Update.EditForm.LastName;
                TempData["emailAddress"] = Update.EditForm.Email;
                foreach (string key in ModelState.Keys) {
                    if (key == "id") {
                        continue;
                    }
                    string field = key.Substring(9);
                    System.Console.WriteLine (field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine (error);
                    TempData[field] = error;
                }
                if (Query != null && TempData["Email"] == null) {
                    TempData["Email"] = "Email is not unique.";
                }
                return RedirectToAction ("EditUser");
            }
        }

        [Route ("Users/ChangePass/{id}")]
        [HttpPost]
        public IActionResult ChangePass (UpdateViewModel Update, int id) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Dashboard");
            }
            UserModel loggedIn = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (!loggedIn.Admin) {
                return RedirectToAction("Dashboard");
            }
            UserModel submission = _context.Users.Where(u => u.UserId == id).SingleOrDefault();
            if (ModelState.IsValid) {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel> ();
                var result = Hasher.VerifyHashedPassword (submission, submission.Password, Update.ChangeForm.Password);
                if (result != 0) {
                    return RedirectToAction ("Dashboard");
                }
                else {
                    submission.Password = Update.ChangeForm.Password;
                    submission.Password = Hasher.HashPassword (submission, submission.Password);
                    _context.SaveChanges ();
                    return RedirectToAction ("Dashboard");
                }
            } else {
                foreach (string key in ModelState.Keys) {
                    if (key == "id") {
                        continue;
                    }
                    string field = key.Substring(11);
                    System.Console.WriteLine (field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine (error);
                    TempData[field] = error;
                }
                return RedirectToAction ("EditUser");
            }
        }

        [Route("Users/Edit/UpdateProfile")]
        [HttpPost]
        public IActionResult UpdateProfile (UpdateProfileViewModel Update) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Dashboard");
            }
            UserModel submission = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            UserModel Query;
            if (submission.Email.ToLower() == Update.EditForm.Email) {
                Query = null;
            }
            else {
                string check = submission.Email == null ? null : submission.Email.ToLower ();
                Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            }
            if (ModelState.IsValid && Query == null) {
                submission.FirstName = Update.EditForm.FirstName;
                submission.LastName = Update.EditForm.LastName;
                submission.Email = Update.EditForm.Email;
                _context.SaveChanges ();
                return RedirectToAction ("Dashboard");
            } else {
                TempData["fname"] = Update.EditForm.FirstName;
                TempData["lname"] = Update.EditForm.LastName;
                TempData["emailAddress"] = Update.EditForm.Email;
                foreach (string key in ModelState.Keys) {
                    if (key == "id") {
                        continue;
                    }
                    string field = key.Substring(9);
                    System.Console.WriteLine (field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine (error);
                    TempData[field] = error;
                }
                if (Query != null && TempData["Email"] == null) {
                    TempData["Email"] = "Email is not unique.";
                }
                return RedirectToAction ("Profile");
            }
        }

        [Route ("Users/Edit/ChangePass")]
        [HttpPost]
        public IActionResult ChangeProfilePass (UpdateProfileViewModel Update) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Dashboard");
            }
            UserModel submission = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (ModelState.IsValid) {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel> ();
                var result = Hasher.VerifyHashedPassword (submission, submission.Password, Update.ChangeForm.Password);
                if (result != 0) {
                    return RedirectToAction ("Dashboard");
                }
                else {
                    submission.Password = Update.ChangeForm.Password;
                    submission.Password = Hasher.HashPassword (submission, submission.Password);
                    _context.SaveChanges ();
                    return RedirectToAction ("Dashboard");
                }
            } else {
                foreach (string key in ModelState.Keys) {
                    if (key == "id") {
                        continue;
                    }
                    string field = key.Substring(11);
                    System.Console.WriteLine (field);
                    ModelStateEntry entry = ModelState[key];
                    string error = entry.Errors.Select (e => e.ErrorMessage).FirstOrDefault ();
                    System.Console.WriteLine (error);
                    TempData[field] = error;
                }
                return RedirectToAction ("Profile");
            }
        }

        [Route ("Users/Edit/ChangeDesc")]
        [HttpPost]
        public IActionResult ChangeDesc (UpdateProfileViewModel Update) {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Dashboard");
            }
            UserModel submission = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            submission.Description = Update.DescForm.Description;
            _context.SaveChanges();
            return RedirectToAction("Profile");
        }

        [Route ("Login")]
        [HttpPost]
        public IActionResult Login (AuthViewModel Auth) {
            string email = Auth.LogForm.Email;
            string password = Auth.LogForm.Password;
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId != null) {
                return RedirectToAction ("Dashboard");
            }
            string check = email == null ? null : email.ToLower ();
            UserModel Query = _context.Users.Where (user => user.Email.ToLower () == check).FirstOrDefault ();
            if (Query != null && password != null) {
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel> ();
                var result = Hasher.VerifyHashedPassword (Query, Query.Password, password);
                if (result != 0) {
                    HttpContext.Session.SetInt32 ("UserId", Query.UserId);
                    return RedirectToAction ("Dashboard");
                }
            }
            TempData["LoginError"] = "Wrong username or password.";
            return RedirectToAction ("Index");
        }

        [Route ("Dashboard")]
        [HttpGet]
        public IActionResult Dashboard () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            ViewBag.Gate = "<a class='text-white' href='/Logout'>Log off</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/Dashboard'>Dashboard</a></li><li class='nav-item active'><a class='nav-link' href='/Users/Edit'>Profile</a></li>";
            ViewBag.Admin = _context.Users.Where(u => u.UserId == UserId).Select(u => u.Admin).SingleOrDefault();
            ViewBag.Users = _context.Users;
            return View ();
        }

        [Route ("Users/New")]
        [HttpGet]
        public IActionResult NewUser()
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            UserModel loggedIn = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (!loggedIn.Admin) {
                return RedirectToAction("Dashboard");
            }
            ViewBag.FirstName = TempData["FirstName"];
            ViewBag.LastName = TempData["LastName"];
            ViewBag.Email = TempData["Email"];
            ViewBag.Password = TempData["Password"];
            ViewBag.fname = TempData["fname"];
            ViewBag.lname = TempData["lname"];
            ViewBag.emailAddress = TempData["emailAddress"];
            ViewBag.Gate = "<a class='text-white' href='/Logout'>Log off</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/Dashboard'>Dashboard</a></li><li class='nav-item active'><a class='nav-link' href='/Users/Edit'>Profile</a></li>";
            return View();
        }

        [Route ("Users/Edit")]
        [HttpGet]
        public IActionResult Profile () {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            ViewBag.User = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            ViewBag.FirstName = TempData["FirstName"];
            ViewBag.LastName = TempData["LastName"];
            ViewBag.Email = TempData["Email"];
            ViewBag.Password = TempData["Password"];
            ViewBag.fname = TempData["fname"] != null ? TempData["fname"] : ViewBag.User.FirstName;
            ViewBag.lname = TempData["lname"] != null ? TempData["lname"] : ViewBag.User.LastName;
            ViewBag.emailAddress = TempData["emailAddress"] != null ? TempData["emailAddress"] : ViewBag.User.Email;
            ViewBag.Gate = "<a class='text-white' href='/Logout'>Log off</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/Dashboard'>Dashboard</a></li><li class='nav-item active'><a class='nav-link' href='/Users/Edit'>Profile</a></li>";
            return View();
        }

        [Route("Users/Show/{id}")]
        [HttpGet]
        public IActionResult ShowUser(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            ViewBag.User = _context.Users.Where(u => u.UserId == id).SingleOrDefault();
            ViewBag.Gate = "<a class='text-white' href='/Logout'>Log off</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/Dashboard'>Dashboard</a></li><li class='nav-item active'><a class='nav-link' href='/Users/Edit'>Profile</a></li>";
            ViewBag.Messages = _context.Messages
                .Where(m => m.ProfileId == id)
                .Include(m => m.User)
                .Include(m => m.Comments)
                    .ThenInclude(c => c.User)
                .OrderByDescending(m =>m.CreatedAt);  
            ViewBag.OwnerId = UserId;
            return View();
        }

        [Route ("Users/Show/{profileId}/Message")]
        [HttpPost]
        public IActionResult PostMessage(MessageModel submission, int profileId) {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            submission.ProfileId = profileId;
            if (UserId == null)
            {
                return RedirectToAction("Index");
            }
            if (ModelState.IsValid) {
                submission.UserId = (int)UserId;
                submission.CreatedAt = DateTime.Now;
                submission.UpdatedAt = DateTime.Now;
                _context.Add(submission);
                _context.SaveChanges();
            }
            return RedirectToAction("ShowUser", new {id = profileId});
            
        }

        [Route ("Users/Show/Comment/{id}")]
        [HttpPost]
        public IActionResult PostComment(string Comment, int id) {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if (UserId == null)
            {
                return RedirectToAction("Index");
            }
            int profileId = _context.Messages.Where(m => m.MessageId == id).Select(m => m.ProfileId).SingleOrDefault();
            if (Comment != null) {
                CommentModel submission = new CommentModel();
                submission.Comment = Comment;
                submission.UserId = (int)UserId;
                submission.CreatedAt = DateTime.Now;
                submission.UpdatedAt = DateTime.Now;
                submission.MessageId = id;
                _context.Add(submission);
                _context.SaveChanges();
                return RedirectToAction("ShowUser", new {id = profileId});
            }
            else {
                return RedirectToAction("ShowUser", new {id = profileId});
            }
        }

        [Route ("Users/Edit/{id}")]
        [HttpGet]
        public IActionResult EditUser(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            UserModel loggedIn = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (!loggedIn.Admin) {
                return RedirectToAction("Dashboard");
            }
            ViewBag.User = _context.Users.Where(u => u.UserId == id).SingleOrDefault();
            ViewBag.FirstName = TempData["FirstName"];
            ViewBag.LastName = TempData["LastName"];
            ViewBag.Email = TempData["Email"];
            ViewBag.Password = TempData["Password"];
            ViewBag.fname = TempData["fname"] != null ? TempData["fname"] : ViewBag.User.FirstName;
            ViewBag.lname = TempData["lname"] != null ? TempData["lname"] : ViewBag.User.LastName;
            ViewBag.emailAddress = TempData["emailAddress"] != null ? TempData["emailAddress"] : ViewBag.User.Email;
            ViewBag.Gate = "<a class='text-white' href='/Logout'>Log off</a>";
            ViewBag.Nav = "<li class='nav-item active'><a class='nav-link' href='/Dashboard'>Dashboard</a></li><li class='nav-item active'><a class='nav-link' href='/Users/Edit'>Profile</a></li>";
            return View();
        }

        [Route ("Users/Delete/{id}")]
        [HttpGet]
        public IActionResult DeleteUser(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            UserModel loggedIn = _context.Users.Where(u => u.UserId == UserId).SingleOrDefault();
            if (loggedIn.Admin) {
                UserModel user = _context.Users.Where(u => u.UserId == id).SingleOrDefault();
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
            return RedirectToAction("Dashboard");
        }

        [Route ("Users/Message/Delete/{id}")]
        [HttpGet]
        public IActionResult DeleteMessage(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            MessageModel message = _context.Messages.Where(m => m.MessageId == id).SingleOrDefault();
            int profileId = message.ProfileId;
            if (message.UserId == UserId)
            {
                _context.Messages.Remove(message);
                _context.SaveChanges();
            }
            return RedirectToAction("ShowUser", new {id = profileId});
        }

        [Route ("Users/Comment/Delete/{id}")]
        [HttpGet]
        public IActionResult DeleteComment(int id)
        {
            int? UserId = HttpContext.Session.GetInt32 ("UserId");
            if (UserId == null) {
                return RedirectToAction ("Index");
            }
            CommentModel comment = _context.Comments.Where(m => m.CommentId == id).Include(m => m.Message).SingleOrDefault();
            int profileId = comment.Message.ProfileId;
            if (comment.UserId == UserId)
            {
                _context.Comments.Remove(comment);
                _context.SaveChanges();
            }
            return RedirectToAction("ShowUser", new {id = profileId});
        }


        [Route ("Logout")]
        [HttpGet]
        public IActionResult LogOut () {
            HttpContext.Session.Remove ("UserId");
            return RedirectToAction ("Index");
        }
    }
}