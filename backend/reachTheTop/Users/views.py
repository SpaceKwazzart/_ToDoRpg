from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import Profile
from .serializers import ProfileSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.generics import RetrieveAPIView

# Create your views here.
def index(request):
    return HttpResponse('I am connected!')

class RetrieveUser(RetrieveAPIView):
     serializer_class = ProfileSerializer
     permission_classes = [IsAuthenticated]
     lookup_field = 'user_id'
     queryset = Profile.objects

class RegisterUser(APIView):
     
     def post(self, request):
          print(request.data)
          try:
               username = request.data["username"]
               email = request.data["email"]
               password = request.data["password"]
               user = User.objects.create_user(username=username, email=email, password=password)
               
               profile_data = {"user": user.id}
               profile_serializer = ProfileSerializer(data=profile_data)
               if profile_serializer.is_valid():
                    profile_serializer.save()
               else:
                    user.delete()
                    return Response(data=profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)     
               return Response(status=status.HTTP_201_CREATED)
          except:
               return Response(status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    
     permission_classes = (IsAuthenticated,)
     
     def post(self, request):
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception:
               return Response(status=status.HTTP_400_BAD_REQUEST)