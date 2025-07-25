from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", 'username', 'password']
        extra_kwargs = {"password": {"write_only": True}} # Only Settable, Not Gettable

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
    
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        mode = Note
        field = ["id", "title", "content", "created_at","author"]
        extra_kwargs = {"author":{"read_only": True}}