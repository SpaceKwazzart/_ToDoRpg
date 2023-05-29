from django.urls import path
from ToDo.views import index

urlpatterns = [
    path('api/todo/v1/index/', index),
]