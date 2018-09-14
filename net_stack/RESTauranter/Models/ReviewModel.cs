using System;
using System.ComponentModel.DataAnnotations;

namespace RESTauranter.Models {
    //Src: https://stackoverflow.com/questions/46184818/dataanotation-to-validate-a-model-how-do-i-validate-it-so-that-the-date-is-not
    public class DateLessThanOrEqualToToday : ValidationAttribute {
        public override string FormatErrorMessage (string name) {
            return "Date value should not be a future date";
        }

        protected override ValidationResult IsValid (object objValue,
            ValidationContext validationContext) {
            var dateValue = objValue as DateTime? ?? new DateTime ();

            //alter this as needed. I am doing the date comparison if the value is not null

            if (dateValue.Date > DateTime.Now.Date) {
                return new ValidationResult (FormatErrorMessage (validationContext.DisplayName));
            }
            return ValidationResult.Success;
        }
    }
    public class ReviewModel {
        [Key]
        public int Id { get; set; }
        [Required]
        [MinLength (2)]
        public string ReviewerName { get; set; }

        [Required]
        public string RestaurantName { get; set; }

        [Required]
        [MinLength (10)]
        public string Review { get; set; }

        [Required]
        [DateLessThanOrEqualToToday]
        public DateTime Date { get; set; }

        [Required]
        public int Stars { get; set; }
    }
}