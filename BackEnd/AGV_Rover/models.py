from django.db import models

# Create your models here.
class agvRoverData(models.Model):
    Timestamp = models.DateTimeField(auto_now_add=True)
    lat = models.FloatField()
    lon = models.FloatField()

    def __str__(self):
        return f'{self.timestamp} - {self.data}'