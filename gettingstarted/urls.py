from django.conf.urls import url, include
from django.views import generic
from rest_framework.schemas import get_schema_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework import views, serializers, status
from rest_framework.response import Response

class MessageSerializer(serializers.Serializer):
    message = serializers.CharField()

class EchoView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED)

urlpatterns = [
    url(r'^$', generic.RedirectView.as_view(
         url='/api/', permanent=False)),
    url(r'^api/$', get_schema_view()),
    url(r'^api/auth/', include(
        'rest_framework.urls', namespace='rest_framework')),
    url(r'^api/auth/token/obtain/$', TokenObtainPairView.as_view()),
    url(r'^api/auth/token/refresh/$', TokenRefreshView.as_view()),
	url(r'^api/echo/$', EchoView.as_view())
]



# from django.conf.urls import include, url
# from django.urls import path

# from django.contrib import admin
# admin.autodiscover()

# import hello.views

# # Examples:
# # url(r'^$', 'gettingstarted.views.home', name='home'),
# # url(r'^blog/', include('blog.urls')),

# urlpatterns = [
    # url(r'^$', hello.views.index, name='index'),
    # url(r'^db', hello.views.db, name='db'),
    # path('admin/', admin.site.urls),
# ]
