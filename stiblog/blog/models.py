
from django.db import models

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=180)
    created = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=300)
    article = models.TextField(blank=True)
    
    def __str__(self):
        return self.title