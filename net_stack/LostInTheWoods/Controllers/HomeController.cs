using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LostInTheWoods.Models;
using LostInTheWoods.Factory;

namespace LostInTheWoods.Controllers
{
    public class HomeController : Controller
    {
        private readonly TrailFactory trailFactory;
        public HomeController()
        {
            trailFactory = new TrailFactory();
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.Trails = trailFactory.FindAll();
            System.Console.WriteLine(ViewBag.Trails);
            return View();
        }

        [HttpGet]
        [Route("NewTrail")]
        public IActionResult NewTrail()
        {
            return View();
        }

        [HttpPost]
        [Route("NewTrail")]
        public IActionResult Create(TrailModel submission)
        {
            if (ModelState.IsValid) {
                trailFactory.Add(submission);
                return RedirectToAction("Index");
            } else {
                return View("NewTrail");
            }
        }

        [HttpGet]
        [Route("trails/{id}")]
        public IActionResult Trail(int id)
        {
            ViewBag.Trail = trailFactory.FindByID(id);
            return View();
        }

    }
}
