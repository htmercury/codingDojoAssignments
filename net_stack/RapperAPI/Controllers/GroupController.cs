using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace RapperAPI.Controllers {
    public class GroupController : Controller {
        List<Group> allGroups {get; set;}
        public GroupController() {
            allGroups = JsonToFile<Group>.ReadJson();
        }

        [Route("groups")]
        public List<string> Groups()
        {
            IEnumerable<string> filter = allGroups.Select(group => group.GroupName);
            return filter.ToList();
        }

        [Route("groups/Name/{name}")]
        [HttpGet]
        public List<string> Name(string name)
        {
            IEnumerable<string> filter = allGroups.Where(group => group.GroupName.ToLower().Contains(name.ToLower())).Select(group => group.GroupName);
            return filter.ToList();   
        }

        [Route("groups/GroupId/{id}")]
        [HttpGet]
        public string GroupId(int id)
        {
            return allGroups.Where(group => group.Id == id).FirstOrDefault().GroupName;
        }
    }
}