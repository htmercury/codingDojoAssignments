from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6,decimal_places=2)

class Customer(models.Model):
    balance = models.DecimalField(max_digits=10,decimal_places=2)
    checkout = models.DecimalField(max_digits=10,decimal_places=2)
    total_ordered = models.IntegerField()
    purchases = models.ManyToManyField(Item, through='Transaction')

class Transaction(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    amount_purchased = models.IntegerField()