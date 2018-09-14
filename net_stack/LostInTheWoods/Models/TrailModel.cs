using System.ComponentModel.DataAnnotations;

namespace LostInTheWoods.Models
{
    public class TrailModel
    {
        public int id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [MinLength(10)]
        public string Description { get; set; }
        [Required]
        [Range(0, float.MaxValue)]
        public string Length { get; set; }
        [Required]
        [Range(0, float.MaxValue)]
        public string ElevationChange { get; set; }
        [Required]
        [Range(-180, 180)]
        public float Longitude { get; set; }
        [Required]
        [Range(-90, 90)]
        public float Latitude { get; set; }
    }
}