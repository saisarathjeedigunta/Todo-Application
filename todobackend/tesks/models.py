from django.db import models

# Create your models here.
class Task(models.Model):
    work = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return self.work