using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheDojoLeague.Factories;
using TheDojoLeague.Models;

namespace TheDojoLeague.Controllers
{
    public class HomeController : Controller
    {
        private readonly DojoFactory dojoFactory;
        private readonly NinjaFactory ninjaFactory;
        public HomeController()
        {
            dojoFactory = new DojoFactory();
            ninjaFactory = new NinjaFactory();
            dojoFactory.FindRogue();
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("Ninjas")]
        public IActionResult Ninjas()
        {
            ViewBag.Dojos = dojoFactory.FindAll();
            ViewBag.Ninjas = ninjaFactory.NinjasWithDojos();
            return View();
        }
        [HttpPost]
        [Route("Ninjas")]
        public IActionResult CreateNinja(NinjaModel submission)
        {
            if (ModelState.IsValid)
            {
                ninjaFactory.Add(submission);
                return RedirectToAction("Ninjas");
            }
            else
            {
                return View("Ninjas");
            }
        }

        [HttpGet]
        [Route("Ninja/{id}")]
        public IActionResult Ninja(int id)
        {
            ViewBag.Ninja = ninjaFactory.FindByID(id);
            ViewBag.Dojo = dojoFactory.FindByID(ViewBag.Ninja.Dojo_id);
            return View();
        }
        

        [HttpGet]
        [Route("Dojos")]
        public IActionResult Dojos()
        {
            ViewBag.Dojos = dojoFactory.FindAll();
            return View();
        }
        [HttpPost]
        [Route("Dojos")]
        public IActionResult CreateDojo(DojoModel submission)
        {
            if (ModelState.IsValid)
            {
                dojoFactory.Add(submission);
                return RedirectToAction("Dojos");
            }
            else {
                return View("Dojos");
            }
        }

        [HttpGet]
        [Route("Dojo/{id}")]
        public IActionResult Dojo(int id)
        {
            ViewBag.Dojo = dojoFactory.FindByID(id);
            ViewBag.Rogue = dojoFactory.FindRogue();
            ViewBag.Id = id;
            return View();
        }

        [HttpGet]
        [Route("Dojo/{dojo_id}/Banish/{ninja_id}")]
        public IActionResult Banish(int dojo_id, int ninja_id)
        {
            ninjaFactory.BanishByID(ninja_id);
            return RedirectToAction("Dojo", new {id = dojo_id});
        }

        [HttpGet]
        [Route("Dojo/{dojo_id}/Recruit/{ninja_id}")]
        public IActionResult Recruit(int dojo_id, int ninja_id)
        {
            ninjaFactory.RecruitByID(ninja_id, dojo_id);
            return RedirectToAction("Dojo", new {id = dojo_id});
        }

    }
}
