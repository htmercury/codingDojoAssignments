    using Microsoft.AspNetCore.Mvc;
    namespace PortfolioI.Controllers //be sure to use your own project's namespace!
    {
        public class ProjectController : Controller //remember inheritance??
        {
            //for each route this controller is to handle:
            [HttpGet] //type of request
            [Route ("projects")] //associated route string (exclude the leading /)
            public string Project () {
                return "These are my projects!";
            }
        }
    }