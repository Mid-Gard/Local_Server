from django.db import models

# Create your models here.
class SoilDeviceData(models.Model):
    timestamp = models.DateTimeField()  # Change to DateTimeField
    Temperature = models.FloatField()
    Humidity = models.FloatField()
    SoilMoisture = models.FloatField()
    MotorID = models.FloatField()
    MotorStatus = models.FloatField()