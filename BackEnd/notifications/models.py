from django.db import models

class notificationData(models.Model):
    timestamp = models.DateTimeField()  # Change to DateTimeField
    Notification = models.CharField(max_length=100)
    Priority = models.CharField(max_length=50)
    Device = models.CharField(max_length=10)