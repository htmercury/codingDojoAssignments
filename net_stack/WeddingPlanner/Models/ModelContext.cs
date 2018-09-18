using Microsoft.EntityFrameworkCore;

namespace WeddingPlanner.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }

        public DbSet<WeddingModel> Weddings { get; set; }

        public DbSet<UserWeddingModel> UserWeddings { get; set; }
    }
}