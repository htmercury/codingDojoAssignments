using System.ComponentModel.DataAnnotations;

namespace TheDojoLeague.Models
{
    public class NinjaModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Level { get; set; }
        public string Description { get; set; }
        [Required]
        public int Dojo_id { get; set; }
        public DojoModel Dojo { get; set; }
    }
}