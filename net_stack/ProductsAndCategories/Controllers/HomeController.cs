using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers
{
    public class HomeController : Controller
    {
        private ModelContext _context;
        public HomeController(ModelContext context)
        {
            _context = context;
        }

        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            ViewBag.Products = _context.Products;
            ViewBag.categories = _context.Categories;
            return View();
        }

        [Route("products/new")]
        [HttpGet]
        public IActionResult NewProduct()
        {
            return View();
        }

        [Route("products/new")]
        [HttpPost]
        public IActionResult CreateProduct(ProductModel submission)
        {
            if (ModelState.IsValid)
            {
                submission.CreatedAt = DateTime.Now;
                submission.UpdatedAt = DateTime.Now;
                _context.Add(submission);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("NewProduct");
            }
        }

        [Route("products/{id}")]
        [HttpGet]
        public IActionResult GetProduct(int id)
        {
            ViewBag.Product = _context.Products
                .Where(p => p.ProductId == id)
                .Include(p => p.Categories)
                .ToList().FirstOrDefault();
            ViewBag.Options = _context.Categories
                .Include(c => c.Products)
                .ToList()
                .Where(c => c.Products.Where(p => p.ProductId == id).FirstOrDefault() == null);
            ViewBag.Id = id;
            return View();
        }

        [Route("products/{id}/relate")]
        [HttpPost]
        public IActionResult AddCategory(int id, string categoryId)
        {
            ProductModel product = _context.Products.Where(p => p.ProductId == id).FirstOrDefault();
            CategoryModel category = _context.Categories.Where(c => c.CategoryId == Int32.Parse(categoryId)).FirstOrDefault();
            CategoriesProductsModel submission = new CategoriesProductsModel();
            submission.CategoryId = Int32.Parse(categoryId);
            submission.ProductId = id;
            System.Console.WriteLine($"id: {id}");
            System.Console.WriteLine($"categoryId: {categoryId}");
            _context.Add(submission);
            _context.SaveChanges();
            return RedirectToAction("GetProduct", new {id = id});
        }

        [Route("categories/new")]
        [HttpGet]
        public IActionResult NewCategory()
        {
            return View();
        }

        [Route("categories/new")]
        [HttpPost]
        public IActionResult CreateCategory(CategoryModel submission)
        {
            if (ModelState.IsValid)
            {
                submission.CreatedAt = DateTime.Now;
                submission.UpdatedAt = DateTime.Now;
                _context.Add(submission);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("NewCategory");
            }
        }

        [Route("categories/{id}")]
        [HttpGet]
        public IActionResult GetCategory(int id)
        {
            ViewBag.Category = _context.Categories
                .Where(c => c.CategoryId == id)
                .Include(c => c.Products)
                .ToList().FirstOrDefault();
            ViewBag.Options = _context.Products
                .Include(p => p.Categories)
                .ToList()
                .Where(p => p.Categories.Where(c => c.CategoryId == id).FirstOrDefault() == null);
            ViewBag.Id = id;
            return View();
        }        

        [Route("categories/{id}/relate")]
        [HttpPost]
        public IActionResult AddProduct(int id, int productId)
        {
            CategoriesProductsModel submission = new CategoriesProductsModel();
            submission.CategoryId = id;
            submission.ProductId = productId;
            _context.Add(submission);
            _context.SaveChanges();
            return RedirectToAction("GetCategory", new {id = id});
        }
    }
}
