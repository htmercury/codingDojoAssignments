using Microsoft.EntityFrameworkCore;

namespace BankAccounts.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<TransactionModel> Transctions { get; set;}
    }
}