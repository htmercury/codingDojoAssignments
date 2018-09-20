using System.ComponentModel.DataAnnotations;

namespace UserDashboard.ViewModels
{
    public class EditViewModel
    {
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

        public bool Admin { get; set; }
    }
}