from unittest.util import _MAX_LENGTH
from django.db import models

class WeatherData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    pressure = models.FloatField()
    wind_speed = models.FloatField()
    wind_direction = models.CharField(max_length=5)
    rain_gauge = models.FloatField()
    running_time = models.FloatField()
    mag_x = models.FloatField()
    mag_y = models.FloatField()
    mag_z = models.FloatField()
    mag_strength = models.FloatField()
    acc_x = models.IntegerField()
    acc_y = models.IntegerField()
    acc_z = models.IntegerField()
    acc_strength = models.IntegerField()

    def __str__(self):
        return f'{self.timestamp} - {self.data}'
