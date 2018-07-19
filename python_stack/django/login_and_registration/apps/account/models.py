from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def validation(self, postData):
        data = postData['email']
        query = self.filter(email=data)
        errors = {}
        if len(postData['first_name']) < 1:
            errors['first_name'] = "First name cannot be empty!"
        elif len(postData['first_name']) < 2:
            errors['first_name'] = "First name can be no fewer than 2 characters!"
        elif not postData['first_name'].isalpha():
            errors['last_name'] = "First name can only include characters!"
        if len(postData['last_name']) < 1:
            errors['last_name'] = "Last name cannot be empty!"
        elif len(postData['last_name']) < 2:
            errors['last_name'] = "Last name can be no fewer than 2 characters!"
        elif not postData['last_name'].isalpha():
            errors['last_name'] = "Last name can only include characters!"
        if len(postData['email']) < 1:
            errors['email'] = "Email cannot be empty!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid Email Address!"
        elif len(query) != 0:
            errors['email'] = "Email is already used!"
        if len(postData['password']) < 8:
            errors['password'] = "Password must be more than 8 characters!"
        elif postData['password'] != postData['confirm_password']:
            errors['password'] = "Passwords do not match!"
        return errors

class User(models.Model):
    email = models.CharField(max_length=255)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    password = models.CharField(max_length=512)
    objects = UserManager()
