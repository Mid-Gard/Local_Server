from django.urls import path
from . import views

urlpatterns = [
    path('livestock_view/',views.liveStock_view),
    path('livestock_get/',views.liveStock_get),
]
