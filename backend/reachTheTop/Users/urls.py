from django.urls import path
from Users.views import index, LogoutView, RegisterUser, RetrieveUser

urlpatterns = [
    path('api/users/v1/index/', index),
    path('logout/', LogoutView.as_view(), name ='logout'),
    path('users/', RegisterUser.as_view(), name='register_user'),
    path('users/<int:user_id>/', RetrieveUser.as_view(), name='user_profile_data'),
]

