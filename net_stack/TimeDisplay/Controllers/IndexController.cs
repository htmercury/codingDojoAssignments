using Microsoft.AspNetCore.Mvc;

namespace TimeDisplay.Controllers
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