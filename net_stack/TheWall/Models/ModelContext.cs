using Microsoft.EntityFrameworkCore;

namespace TheWall.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<MessageModel> Messages { get; set; }
        public DbSet<CommentModel> Comments { get; set; }
    }
}