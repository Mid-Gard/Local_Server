# Generated by Django 4.2.7 on 2024-03-18 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_alter_notificationdata_timestamp'),
    ]

    operations = [
        migrations.AddField(
            model_name='notificationdata',
            name='Device',
            field=models.CharField(default='NuN', max_length=10),
            preserve_default=False,
        ),
    ]