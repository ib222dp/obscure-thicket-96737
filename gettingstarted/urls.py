from django.conf.urls import url, include
##from django.urls import path
##from rest_framework import status, serializers, views
##from rest_framework.response import Response
from rest_framework.schemas import get_schema_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
import hello.views
from hello.views import Message

urlpatterns = [
        url(r'^$', hello.views.index, name='index'),
        url(r'^login', hello.views.index, name='index'),
        url(r'^api/$', get_schema_view()),
        url(r'^api/auth/', include('rest_framework.urls', namespace='rest_framework')),
        url(r'^api/auth/token/obtain/$', TokenObtainPairView.as_view()),
        url(r'^api/auth/token/refresh/$', TokenRefreshView.as_view()),
        url(r'^api/message/post/$', Message.as_view()),
        url(r'^api/message/get/(?P<pk>\d+)/$', Message.as_view())
]
