from rest_framework import status
from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Users.models import Profile
from Users.serializers import ProfileSerializer
from Users.permissions import IsOwnerOrReadOnly
from .models import Todo, Skill
from .serializers import TodoSerializer, SkillSerializer
from .business_logic import update_level
import logging

class UserTodoListCreate(ListCreateAPIView):
    """
    View for reading user tasks and create new
    """
    serializer_class = TodoSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        profile_id = Profile.objects.get(user_id=user_id)
        return Todo.objects.filter(user_id=profile_id).order_by('-created_date')
    
    def create(self, request, *args, **kwargs):
        user_id = self.kwargs['user_id']
        profile_id = Profile.objects.get(user_id=user_id)
        request.data['user'] = profile_id.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    
class UserTodoRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    """
    View for deleting user tasks
    """
    serializer_class = TodoSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        profile_id = Profile.objects.get(user_id=user_id)
        return Todo.objects.filter(user_id=profile_id)



class UserSkillListCreate(ListCreateAPIView):
    """
    View for reading user skills and create new
    """
    serializer_class = SkillSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        profile_id = Profile.objects.get(user_id=user_id)
        return Skill.objects.filter(user_id=profile_id).order_by('-created_date')
    
    def create(self, request, *args, **kwargs):
        user_id = self.kwargs['user_id']
        profile_id = Profile.objects.get(user_id=user_id)
        request.data['user'] = profile_id.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    
class UserSkillRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    """
    View for deleting user skills
    """
    serializer_class = SkillSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        profile_id = Profile.objects.get(user_id=user_id)
        return Skill.objects.filter(user_id=profile_id)
    
    def update(self, request, *args, **kwargs):
        new_expirience = float(request.data.get('new_expirience', None))
        if new_expirience is None:
            return Response(data={"Answer": "new_expirience is None"}, status=status.HTTP_400_BAD_REQUEST)
        
        partial = kwargs.pop('partial', False)
        
        with transaction.atomic():
            
            try:
                skill = self.get_object()
                profile_id = kwargs["user_id"]
                user = Profile.objects.get(user_id=profile_id)
                
                new_user_data = update_level(new_expirience, user)
                new_skill_data = update_level(new_expirience, skill)
                
                user.total_todo += 1
                
                profile_serializer = ProfileSerializer(user, data=new_user_data, partial=partial)
                profile_serializer.is_valid(raise_exception=True)
                profile_serializer.save()
                
                skill_serializer = self.get_serializer(skill, data=new_skill_data, partial=partial)
                skill_serializer.is_valid(raise_exception=True)
                skill_serializer.save()
                
                return Response({
                'skill': skill_serializer.data,
                'user': profile_serializer.data,
                })
        
            except ObjectDoesNotExist:
                return Response(data={"Answer": "User or Skill not found"}, status=status.HTTP_404_NOT_FOUND)
            
            except Exception as e:
                return Response(data={"Answer": str(e)}, status=status.HTTP_400_BAD_REQUEST)
            
        return Response(status=status.HTTP_200_OK)