using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }

        [Required(ErrorMessage = "First name is required.")]
        [MinLength(2, ErrorMessage = "First name must be at least 2 characters.")]
        [RegularExpression("^[A-Za-z' ']+$", ErrorMessage = "First name can only contain characters.")]
        public string FirstName { get; set; }
        
        [Required(ErrorMessage = "Last name is required.")]
        [MinLength(2, ErrorMessage = "Last name must be at least 2 characters.")]
        [RegularExpression("^[A-Za-z' ']+$", ErrorMessage = "Last name can only contain characters.")]
        public string LastName { get; set; }
        
        [Required(ErrorMessage = "Email address is required.")]
        [EmailAddress(ErrorMessage = "Email address is not valid.")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Password is required.")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters.")]
        [Compare("ConfirmPassword", ErrorMessage = "Passwords must match.")]
        public string Password { get; set; }

        [NotMapped]
        public string ConfirmPassword { get; set; }

        public List<WeddingModel> OwnedWeddings { get; set; }

        public List<UserWeddingModel> Weddings { get; set; }

        public UserModel()
        {
            OwnedWeddings = new List<WeddingModel>();
        }
    }
}