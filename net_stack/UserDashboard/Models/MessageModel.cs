using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UserDashboard.Models {
    public class MessageModel {
        [Key]
        public int MessageId { get; set; }

        public int UserId { get; set; }
        public UserModel User { get; set; }

        [Required]
        public string Message { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public List<CommentModel> Comments { get; set; }

        public int ProfileId { get; set; }
        public UserModel Profile { get; set; }
    }
}