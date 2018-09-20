using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using UserDashboard.ViewModels;

namespace UserDashboard.Models
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }

        public bool Admin { get; set; }
        
        [NotMapped]
        public string ConfirmPassword { get; set; }

        public List<MessageModel> Messages { get; set; }

        public List<CommentModel> Comments { get; set; }

        public List<MessageModel> ProfileMessages { get; set; }

        public DateTime CreatedAt { get; set; }

        public string Description { get; set; }

        public UserModel()
        {
            Admin = false;
            Messages = new List<MessageModel>();
            Comments = new List<CommentModel>();
            Description = "";
        }
    }
}