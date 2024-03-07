from django.contrib import admin
from django.urls import path, include
from .views import Dashboard
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',Dashboard.as_view(template_name = 'index.html'),name='land'),
    path('tes/', include('about.urls', namespace='about')),
]

