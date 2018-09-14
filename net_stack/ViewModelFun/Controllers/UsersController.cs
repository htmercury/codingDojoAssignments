using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers {
    public class UsersController : Controller {
        [HttpGet]
        [Route ("users")]
        public IActionResult Users () {
            Users people = new Users () {
                names = new List<User> { new User ("Moose", "Phillips"), new User ("Sarah"), new User ("Jerry"), new User ("Rene", "Ricky"), new User ("Barbarah") }
            };

            return View (people);
        }
    }
}