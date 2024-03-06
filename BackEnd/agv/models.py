from django.db import models

# Create your models here.
class agvRoverData(models.Model):
    Timestamp = models.IntegerField()
    lat = models.FloatField()
    lon = models.FloatField()