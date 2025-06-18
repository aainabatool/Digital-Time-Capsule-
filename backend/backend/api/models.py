from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto__now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="Note")

    def __str__(self):
        return self.title