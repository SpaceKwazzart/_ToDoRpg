from Users.models import Profile
from django.db import models


class Todo(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    title = models.TextField(max_length=150)
    comment = models.TextField(max_length=400, null=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.user} - {self.title}"
    
class Skill(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    title = models.TextField(max_length=150)
    level = models.IntegerField(default=1)
    current_exp = models.FloatField(default=0)
    current_max = models.FloatField(default=1)
    created_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return f"{self.user} - {self.title}"