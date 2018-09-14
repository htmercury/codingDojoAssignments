using Microsoft.AspNetCore.Mvc;
namespace RazorFun.Controllers {
    public class IndexController : Controller {
        [HttpGet]
        [Route ("")]

        public IActionResult Index () {
            return View ();
        }
    }
}