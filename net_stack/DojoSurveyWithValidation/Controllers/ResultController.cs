using DojoSurvey.Models;
using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
    public class ResultController : Controller
    {
        [HttpPost]
        [Route("result")]
        public IActionResult Result(User survey)
        {           
            if (ModelState.IsValid)
            {
                return View(survey);
            }
            else
            {
                return View("Index");
            }
        }
    }
}