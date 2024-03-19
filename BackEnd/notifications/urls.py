from django.urls import path
from . import views

urlpatterns = [
    path('notifications/',views.notifications),
    path('notification_get/',views.notification_get),
    path('notification_post/', views.notification_post)
]