from django.urls import path
from . import views

urlpatterns = [
    path('agv_location/',views.liveStock_view),
    path('livestock_get/',views.liveStock_get),
    path('test_post/', views.test_post)
]
