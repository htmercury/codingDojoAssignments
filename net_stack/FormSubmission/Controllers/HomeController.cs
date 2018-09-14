using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;

namespace FormSubmission.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [Route("")]
        [HttpPost]
        public IActionResult Submit(User submission)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Success");
            }
            else
            {
                return View("Index");
            }
        }

        [Route("success")]
        [HttpGet]
        public IActionResult Success()
        {
            return View();
        }
    }
}
