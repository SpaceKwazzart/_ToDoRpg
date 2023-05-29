from django.urls import path
from Users.views import index

urlpatterns = [
    path('api/users/v1/index/', index),
]