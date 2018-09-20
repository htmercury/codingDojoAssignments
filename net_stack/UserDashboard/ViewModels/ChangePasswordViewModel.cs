using System.ComponentModel.DataAnnotations;

namespace UserDashboard.ViewModels
{
    public class ChangePasswordViewModel
    {
        [Required(ErrorMessage = "Password is required.")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters.")]
        [Compare("ConfirmPassword", ErrorMessage = "Passwords must match.")]
        public string Password { get; set; }
        
        public string ConfirmPassword { get; set; }
    }
}