using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class UserController : Controller
    {
        [HttpGet]
        [Route("user")]
        public IActionResult User()
        {
            User moose = new User("Moose", "Phillips");
            return View(moose);
        }
    }
}