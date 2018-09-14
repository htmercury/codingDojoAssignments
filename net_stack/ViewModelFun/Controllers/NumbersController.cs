using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class NumbersController : Controller
    {
        [HttpGet]
        [Route("numbers")]
        
        public IActionResult Numbers()
        {
            Numbers nums = new Numbers()
            {
                arr = new int[] {1, 2, 10, 43, 5}
            };

            return View (nums);
        }
    }
}