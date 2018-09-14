using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
    public class ResultController : Controller
    {
        [HttpGet]
        [Route("result")]
        public IActionResult Result(string Name, string Location, string Language, string Comment)
        {
            ViewBag.Name = Name;
            ViewBag.Location = Location;
            ViewBag.Language = Language;
            ViewBag.Comment = Comment;
            
            return View();
        }
    }
}