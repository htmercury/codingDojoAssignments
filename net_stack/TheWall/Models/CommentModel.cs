using System;
using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
    public class CommentModel
    {   
        [Key]
        public int CommentId { get; set; }

        public int MessageId { get; set; }
        public MessageModel Message { get; set; }

        public int UserId { get; set; }
        public UserModel User { get; set; }

        public string Comment { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}