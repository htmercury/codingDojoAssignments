using Microsoft.EntityFrameworkCore;

namespace LoginAndRegistration.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
    }
}