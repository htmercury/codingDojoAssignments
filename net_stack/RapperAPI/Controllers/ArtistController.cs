using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace RapperAPI.Controllers {

    
    public class ArtistController : Controller {

        private List<Artist> allArtists;

        public ArtistController() {
            allArtists = JsonToFile<Artist>.ReadJson();
        }

        //This method is shown to the user navigating to the default API domain name
        //It just display some basic information on how this API functions
        [Route("")]
        [HttpGet]
        public string Index() {
            //String describing the API functionality
            string instructions = "Welcome to the Music API~~\n========================\n";
            instructions += "    Use the route /artists/ to get artist info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *RealName/{string}\n";
            instructions += "       *Hometown/{string}\n";
            instructions += "       *GroupId/{int}\n\n";
            instructions += "    Use the route /groups/ to get group info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *GroupId/{int}\n";
            instructions += "       *ListArtists=?(true/false)\n";
            return instructions;
        }

        [Route("artists")]
        public List<string> Artists()
        {
            IEnumerable<string> filter = allArtists.Select(artist => artist.ArtistName);
            return filter.ToList();
        }

        [Route("artists/Name/{name}")]
        [HttpGet]
        public List<string> Name(string name)
        {
            IEnumerable<string> filter = allArtists.Where(artist => artist.ArtistName.ToLower().Contains(name.ToLower())).Select(artist => artist.ArtistName);
            return filter.ToList();   
        }

        [Route("artists/RealName/{name}")]
        [HttpGet]
        public List<string> RealName(string name)
        {
            IEnumerable<string> filter = allArtists.Where(artist => artist.RealName.ToLower().Contains(name.ToLower())).Select(artist => artist.RealName);
            return filter.ToList();
        }

        [Route("artists/HomeTown/{town}")]
        [HttpGet]
        public List<string> Town(string name)
        {
            IEnumerable<string> filter = allArtists.Where(artist => artist.Hometown.ToLower().Contains(name.ToLower())).Select(artist => artist.ArtistName);
            return filter.ToList();
        }

        [Route("artists/GroupId/{id}")]
        [HttpGet]
        public List<string> GroupId(int id)
        {
            IEnumerable<string> filter = allArtists.Where(artist => artist.GroupId == id).Select(artist => artist.ArtistName);
            return filter.ToList();
        }
    }
}