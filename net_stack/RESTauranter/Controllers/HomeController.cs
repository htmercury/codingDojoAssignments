using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RESTauranter.Models;

namespace RESTauranter.Controllers
{
    public class HomeController : Controller
    {
        private RESTauranterContext _context;
        public HomeController(RESTauranterContext context)
        {
            _context = context;
        }

        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [Route("")]
        [HttpPost]
        public IActionResult Submit(ReviewModel submission)
        {
            if (ModelState.IsValid)
            {
                _context.Add(submission);
                _context.SaveChanges();
                return RedirectToAction("Result");
            }
            else
            {
                return View("Index");
            }
        }

        [Route("reviews")]
        [HttpGet]
        public IActionResult Result()
        {
            ViewBag.Reviews = _context.Reviews;
            return View();
        }

    }
}
