from django.urls import path
from . import views

urlpatterns = [
    path('loc_post/',views.loc_post),
    path('loc_go/',views.loc_go),
    path('test_post/', views.test_post),
    path('ir_post/', views.ir_post),
    path('ir_get/', views.ir_get),
    path('data_post/', views.data_post),
    path('battery_post/', views.battery_post)
]
