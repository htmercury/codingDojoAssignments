using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using LoginAndRegistration.ViewModels;

namespace LoginAndRegistration.Models
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }
        
        [NotMapped]
        public string ConfirmPassword { get; set; }
    }
}