using Microsoft.EntityFrameworkCore;

namespace UserDashboard.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<MessageModel> Messages { get; set; }
        public DbSet<CommentModel> Comments { get; set; }
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>()
                .HasMany(u => u.Messages)
                .WithOne(m => m.User);
            modelBuilder.Entity<UserModel>()
                .HasMany(u => u.ProfileMessages)
                .WithOne(m => m.Profile);

            base.OnModelCreating(modelBuilder);
        }
    }
}