using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    //Src: https://stackoverflow.com/questions/46184818/dataanotation-to-validate-a-model-how-do-i-validate-it-so-that-the-date-is-not
    public class IsInTheFuture : ValidationAttribute {
        public override string FormatErrorMessage (string name) {
            return "Date value should not be a past date";
        }

        protected override ValidationResult IsValid (object objValue,
            ValidationContext validationContext) {
            var dateValue = objValue as DateTime? ?? new DateTime ();

            //alter this as needed. I am doing the date comparison if the value is not null

            if (dateValue.Date < DateTime.Now.Date) {
                return new ValidationResult (FormatErrorMessage (validationContext.DisplayName));
            }
            return ValidationResult.Success;
        }
    }

    public class WeddingModel
    {
        [Key]
        public int WeddingId { get; set; }

        [Required]
        public string WedderOne { get; set; }

        [Required]
        public string WedderTwo { get; set; }

        [Required]
        [IsInTheFuture]
        public DateTime Date { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public int OwnerId { get; set; }

        public UserModel Owner { get; set; }

        public List<UserWeddingModel> Guests { get; set; }

    }
}