from django.db import models

# Create your models here.
class CourseManager(models.Manager):
    def validation(self, postData):
        errors = {}
        if len(postData['name']) < 1:
            errors['name'] = "Course name cannot be empty!"
        return errors

class Course(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    objects = CourseManager()