from django.urls import path
from ToDo.views import UserSkillListCreate, UserTodoListCreate, UserTodoRetrieveUpdateDestroy, UserSkillRetrieveUpdateDestroy

urlpatterns = [
    path('api/users/<int:user_id>/skills/', UserSkillListCreate.as_view(), name='user_skill_list'),
    path('api/users/<int:user_id>/todos/', UserTodoListCreate.as_view(), name='user_todo_list'),
    path('api/users/<int:user_id>/skills/<int:pk>', UserSkillRetrieveUpdateDestroy.as_view(), name='user_skill_destroy'),
    path('api/users/<int:user_id>/todos/<int:pk>', UserTodoRetrieveUpdateDestroy.as_view(), name='user_task_destroy'),
]