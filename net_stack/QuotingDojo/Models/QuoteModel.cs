using System.ComponentModel.DataAnnotations;

namespace QuotingDojo.Models
{
    public class QuoteModel
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
        public string Name { get; set; }

        [Required]
        public string Quote { get; set; }
    }
}