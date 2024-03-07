from django.urls import path
from .views import Home
app_name = 'about'
urlpatterns = [
    path('', Home.as_view(), name='tes'),
    path('<str:input_string>/', Home.as_view(), name='Home'),
]