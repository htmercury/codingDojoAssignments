using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RandomPasscode.Models;

namespace RandomPasscode.Controllers {
    public class HomeController : Controller {
        [HttpGet]
        [Route("")]

        public IActionResult Index () {
            int? Visits = HttpContext.Session.GetInt32 ("Visits");
            if (Visits is null) {
                Visits = 1;
                HttpContext.Session.SetInt32 ("Visits", (int) Visits);
            } else {
                Visits += 1;
                HttpContext.Session.SetInt32 ("Visits", (int) Visits);
            }

            ViewBag.Visits = Visits;
            ViewBag.Code = RandomString(16);
            return View ();
        }

        [HttpGet("passcode")]
        public object[] GetPassCode()
        {
            int? Visits = HttpContext.Session.GetInt32 ("Visits");
            Visits += 1;
            HttpContext.Session.SetInt32 ("Visits", (int) Visits);
            return new object[] {RandomString(16), Visits};
        }


        public string RandomString (int length) {
            Random random = new Random ();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string (Enumerable.Repeat (chars, length)
                .Select (s => s[random.Next (s.Length)]).ToArray ());
        }

    }
}