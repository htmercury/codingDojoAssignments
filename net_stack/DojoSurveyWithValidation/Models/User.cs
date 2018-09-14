using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models
{
    public class User
    {
        [Required]
        [MinLength(2)]
        [MaxLength(15)]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        [MinLength(2)]
        [MaxLength(15)]
        public string Language { get; set; }
        [MinLength(8)]
        [MaxLength(30)]
        public string Comment { get; set; }
    }
}