using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TheDojoLeague.Models
{
    public class DojoModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }
        public string Description { get; set; }
        public IEnumerable<NinjaModel> Ninjas { get; set; }

        public DojoModel()
        {
            Ninjas = new List<NinjaModel>();
        }
    }
}