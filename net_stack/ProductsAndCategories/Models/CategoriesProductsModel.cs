using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class CategoriesProductsModel
    {
        [Key]
        public int CategoriesProductsId { get; set; }

        public int ProductId { get; set; }
        public ProductModel Product { get; set; }
        public int CategoryId { get; set; }
        public CategoryModel Category { get; set; }
    }
}