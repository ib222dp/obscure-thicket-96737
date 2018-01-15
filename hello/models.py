from django.db import models
from django.conf import settings

# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)

class Thread(models.Model):
    creatorId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='threadcreator_user_set')
    recipientId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='threadrecipient_user_set')
    subject = models.CharField(max_length=100)
    archived = models.BooleanField()

class Message(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE)
    creatorId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='messagecreator_user_set')
    recipientId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='messagerecipient_user_set')
    creationDate = models.DateTimeField(auto_now_add=True)
    messageText = models.CharField(max_length=500)