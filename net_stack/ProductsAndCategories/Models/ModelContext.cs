using Microsoft.EntityFrameworkCore;

namespace ProductsAndCategories.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) { }

        public DbSet<CategoryModel> Categories { get; set; }
        public DbSet<ProductModel> Products { get; set; }
        public DbSet<CategoriesProductsModel> CategoriesProducts { get; set; }
    }
}