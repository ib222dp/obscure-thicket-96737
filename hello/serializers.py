from rest_framework import serializers
from .models import Message
from .models import Thread
from django.contrib.auth.models import User

class ThreadSerializer(serializers.ModelSerializer):
    recipientId = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    creatorId = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    subject = serializers.CharField(max_length=100)
    archived = serializers.BooleanField()

    class Meta:
        model = Thread
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    
    creatorId = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    recipientId = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    messageText = serializers.CharField(max_length=500)
    thread = serializers.PrimaryKeyRelatedField(queryset=Thread.objects.all())
    
    class Meta:
        model = Message
        fields = ('creatorId', 'recipientId', 'messageText', 'thread')
