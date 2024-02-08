from django.db import models

# class LivestockDataManager(models.Manager):
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self._db = 'livestock_data_db'

class LivestockData(models.Model):
    timestamp = models.IntegerField()
    x = models.FloatField()
    y = models.FloatField()
    z = models.FloatField()
    lat = models.FloatField()
    long = models.FloatField()

    # # Add a custom manager for the livestock_data_db
    # objects = LivestockDataManager()

    # class Meta:
    #     # You can still use the 'using' attribute in Meta, but it works in a different way
    #     # This will be used when running queries for this model
    #     db_table = 'livestock_livestockdata'
