using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
    public class ProcessController : Controller
    {
        [HttpPost]
        [Route("process")]
        public IActionResult Process(string name, string location, string language, string comment)
        {
            return RedirectToAction("Result", "Result", new { Name = name, Location = location, Language = language, Comment = comment });
        }
    }
}