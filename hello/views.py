from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Greeting
from .models import Message as MessageModel
from django.contrib.auth.models import User
from .serializers import MessageSerializer
from .serializers import ThreadSerializer


def index(request):
    return render(request, 'index.html')

class Message(APIView):
    def get(self, request, pk):
        u = User.objects.get(pk=pk)
        createdThreads = u.threadcreator_user_set.values('id', 'creatorId', 'recipientId', 'subject', 'archived')
        receivedThreads = u.threadrecipient_user_set.values('id', 'creatorId', 'recipientId', 'subject', 'archived')

        for ct in createdThreads:
            createdMessages = []
            ct['messages'] = createdMessages
            createdMessages.extend(MessageModel.objects.filter(thread=ct['id']).values('id', 'thread', 'creatorId', 'recipientId','creationDate', 'messageText'))

        for rt in receivedThreads:
            receivedMessages = []
            rt['messages'] = receivedMessages
            receivedMessages.extend(MessageModel.objects.filter(thread=rt['id']).values('id', 'thread', 'creatorId', 'recipientId','creationDate', 'messageText'))
            
        return JsonResponse({'createdThreads': list(createdThreads), 'receivedThreads': list(receivedThreads)}, content_type='application/json')

        
    def post(self, request, *args, **kwargs):

        threadSerializer = ThreadSerializer(data=request.data)

        if threadSerializer.is_valid():
            threadSerializer.save()
            results = {'id': threadSerializer.data['id']}

            request.data['thread'] = results['id']

            messageSerializer = MessageSerializer(data=request.data)
            
            if messageSerializer.is_valid(raise_exception=True):
                messageSerializer.save()
                return Response(status=status.HTTP_201_CREATED)
            return Response(messageSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(threadSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def db(request):

        greeting = Greeting()
        greeting.save()

        greetings = Greeting.objects.all()

        return render(request, 'db.html', {'greetings': greetings})
