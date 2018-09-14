using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuotingDojo.Models;

namespace QuotingDojo.Controllers {
    public class HomeController : Controller {
        [HttpGet]
        [Route ("")]
        public IActionResult Index () {
            return View ();
        }

        [HttpPost]
        [Route ("")]
        public IActionResult Process (QuoteModel entry) {
            if (ModelState.IsValid) {
                string query = $"INSERT INTO quotes (name, quote, created_at, updated_at) VALUES ('{entry.Name}', '{entry.Quote}', NOW(), NOW())";
                System.Console.WriteLine (query);
                DbConnector.Query (query);
                return RedirectToAction ("Result");
            } else {
                return View ("Index");
            }
        }

        [HttpGet]
        [Route ("quotes")]
        public IActionResult Result () {
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query ("SELECT * FROM quotes");
            System.Console.WriteLine ("results");
            foreach (Dictionary<string, object> dict in AllQuotes) {
                foreach (var entry in dict) {
                    System.Console.WriteLine (entry.Value);
                }
            }
            ViewBag.Results = AllQuotes;
            return View ();
        }
    }
}