    using Microsoft.AspNetCore.Mvc;
    namespace PortfolioI.Controllers //be sure to use your own project's namespace!
    {
        public class IndexController : Controller //remember inheritance??
        {
            //for each route this controller is to handle:
            [HttpGet] //type of request
            [Route ("")] //associated route string (exclude the leading /)
            public IActionResult Index () {
                return View();
            }
        }
    }