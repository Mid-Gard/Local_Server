# Generated by Django 4.2.7 on 2024-01-16 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherstation', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weatherdata',
            name='WindDirection',
            field=models.FloatField(),
        ),
    ]
