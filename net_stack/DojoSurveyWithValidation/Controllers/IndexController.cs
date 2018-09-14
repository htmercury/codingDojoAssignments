using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}