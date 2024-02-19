from django.urls import path
from . import views

urlpatterns = [
    path('livestock_view/',views.liveStock_view),
    path('livestock_get/',views.liveStock_get),
    path('test_post/', views.test_post),
    path('location_dummy', views.bus_location_dummy)
]
