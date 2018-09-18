using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class UserWeddingModel
    {
        [Key]
        public int UserWeddingId { get; set; }

        public int UserId { get; set; }
        public UserModel User { get; set; }

        public int WeddingId { get; set; }
        public WeddingModel Wedding { get; set; }
    }
}