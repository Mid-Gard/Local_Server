from django.urls import path
from . import views

urlpatterns = [
    path('weather_view/',views.weather_view),
    path('weather_get/',views.weather_get),
    path('test_post/', views.test_post)
]