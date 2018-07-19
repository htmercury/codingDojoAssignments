from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def validation(self, postData):
        data = postData['email']
        query = User.objects.filter(email=data)
        errors = {}
        if len(postData['first_name']) < 1:
            errors['first_name'] = "First name cannot be empty!"
        elif not postData['first_name'].isalpha():
            errors['last_name'] = "First name can only include characters!"
        if len(postData['last_name']) < 1:
            errors['last_name'] = "Last name cannot be empty!"
        elif not postData['last_name'].isalpha():
            errors['last_name'] = "Last name can only include characters!"
        if len(postData['email']) < 1:
            errors['email'] = "Email cannot be empty!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid Email Address!"
        elif len(query) != 0:
            errors['email'] = "Email is already used!"
        return errors
    def update_validation(self, postData):
        data = postData['email']
        query = User.objects.filter(email=data)
        errors = {}
        if len(postData['first_name']) < 1:
            errors['first_name'] = "First name cannot be empty!"
        elif not postData['first_name'].isalpha():
            errors['last_name'] = "First name can only include characters!"
        if len(postData['last_name']) < 1:
            errors['last_name'] = "Last name cannot be empty!"
        elif not postData['last_name'].isalpha():
            errors['last_name'] = "Last name can only include characters!"
        if len(postData['email']) < 1:
            errors['email'] = "Email cannot be empty!"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid Email Address!"
        elif len(query) != 0 and query[0].id != int(postData['id']):
            errors['email'] = "Email is already used!"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()