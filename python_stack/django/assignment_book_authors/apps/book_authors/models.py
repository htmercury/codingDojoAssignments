from django.db import models

# Create your models here.

class Book(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(max_length=1000, default='')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, default='')
    email = models.CharField(max_length=255, default='')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    books = models.ManyToManyField(Book, related_name="authors")
    notes = models.TextField(default='')