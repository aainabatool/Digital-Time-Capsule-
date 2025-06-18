from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import NoteSerializer
from .models import Note

# allow user to get list of their own notes
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer # convert python to json
    permission_classes = [IsAuthenticated] # only valid user can get this

    def get_queryset(self): # used to get all users
        user = self.request.user
        return Note.objects.filetr(author = user) # only login in user notes are 
    
    def perform_create(self, serializer): 
        if(serializer.is_valid()):
            serializer.save(author=self.request.user)
        else:
            print(serializer.erros)

class CreateUserView(generics.CreateAPIView):
    queryset =  User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]