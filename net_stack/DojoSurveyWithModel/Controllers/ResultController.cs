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
            return View(survey);
        }
    }
}