from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class WeatherData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    Pressure = models.FloatField()
    LightLevel = models.FloatField()
    SoilMoisture = models.FloatField()
    SoilTemp = models.FloatField()
    WindSpeed = models.FloatField()
    WindDirection = models.CharField(max_length=5)  # Assuming a short representation like N, S, E, W, NE, NW, etc.
    RainGuage = models.FloatField()
    Altitude = models.FloatField()


    # # Add a custom manager for the livestock_data_db
    # objects = LivestockDataManager()

    # class Meta:
    #     # You can still use the 'using' attribute in Meta, but it works in a different way
    #     # This will be used when running queries for this model
    #     db_table = 'livestock_api_livestockdata'



    def __str__(self):
        return f'{self.timestamp} - {self.data}'
