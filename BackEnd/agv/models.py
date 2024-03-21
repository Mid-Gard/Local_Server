from django.db import models

# Create your models here.
class agvRoverData(models.Model):
    Timestamp = models.DateTimeField()
    lat = models.FloatField()
    lon = models.FloatField()
    pitch = models.FloatField()
    roll = models.FloatField()
    yaw = models.FloatField()