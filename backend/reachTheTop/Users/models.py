from django.db import models
from django.contrib.auth.models import User

# lets us explicitly set upload path and filename
def upload_to(instance, filename):
    return f'images/{filename}'

class Profile(models.Model):
    """
    Model based on django User model for extending user data
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    level = models.IntegerField(default=1)
    current_exp = models.FloatField(default=0)
    current_max = models.FloatField(default=1)
    avatar = models.ImageField(upload_to=upload_to, null=True)
    total_todo = models.IntegerField(default=0)
    register_date = models.DateField(auto_now_add=True)
    
    def __str__(self) -> str:
        return f"{self.user}"
    