using System;
using System.ComponentModel.DataAnnotations;

namespace BankAccounts.Models
{
    public class TransactionModel
    {
        [Key]
        public int TransactionId { get; set; }

        public float Amount { get; set; }

        public DateTime Date { get; set; }

        public int UserId { get; set; }

        public UserModel User { get; set; }

        public TransactionModel()
        {
            Date = DateTime.Now;
        }
    }
}