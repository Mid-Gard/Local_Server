from django.urls import path
from . import views

urlpatterns = [
    path('agv_location/',views.agv_location),
    path('agv_loc_go/',views.agv_loc_go),
    path('test_post/', views.test_post)
]
