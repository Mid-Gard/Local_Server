from django.shortcuts import render

from django.views.decorators.csrf import csrf_protect 
from django.http import JsonResponse
from .models import WeatherData
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import random

@csrf_protect 
def weather_api(request):
    if request.method == 'POST':
        data = request.POST.get('livestock_data')
        WeatherData.objects.create(data=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = WeatherData.objects.values()  # Convert QuerySet to a list of dictionaries
        return JsonResponse(list(data), safe=False)


# Global variable to store received data
stored_data = None

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import WeatherData

@csrf_exempt
def weather_get(request):
    if request.method == 'POST':
        received_data = json.loads(request.body.decode('utf-8'))
        weather_data = received_data.get('weather_data', {})
        print("\nReceived data:", received_data)

        # Save the data to the database
        WeatherData.objects.create(
            temperature=weather_data.get('temperature', None),
            humidity=weather_data.get('humidity', None),
            pressure=weather_data.get('pressure', None),
            wind_speed=weather_data.get('wind_speed', None),
            wind_direction=weather_data.get('wind_direction', None),
            rain_gauge=weather_data.get('rain_gauge', None),
            running_time=weather_data.get('runningTime', None),
            mag_x=weather_data.get('mag_x', None),
            mag_y=weather_data.get('mag_y', None),
            mag_z=weather_data.get('mag_z', None),
            mag_strength=weather_data.get('mag_strength', None),
            acc_x=weather_data.get('acc_x', None),
            acc_y=weather_data.get('acc_y', None),
            acc_z=weather_data.get('acc_z', None),
            acc_strength=weather_data.get('acc_strength', None)
        )

        return JsonResponse({'status': 'Data received successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})



from django.http import JsonResponse
from .models import WeatherData

@csrf_exempt
def get_rainfall(request):
    # Enable the below code for Testing :
    
    dummy_rainfall = [{'RainGuage': random.uniform(30, 40)} for _ in range(10)]
    # Return the dummy rainfall data as JSON response
    return JsonResponse(dummy_rainfall, safe=False)
    
    # ENABLE the below code for database : 
    
    # # Query the latest 10 rainfall values from the database
    # latest_rainfall = WeatherData.objects.order_by('-id')[:10].values('RainGuage')
    # # Convert QuerySet to a list of dictionaries
    # rainfall_list = list(latest_rainfall)
    # # Return the JSON response
    # return JsonResponse(rainfall_list, safe=False)

@csrf_exempt
def get_windspeed(request):
    # Query the latest 10 wind speed values from the database
    latest_windspeed = WeatherData.objects.order_by('-id')[:10].values('WindSpeed')
    # Convert QuerySet to a list of dictionaries
    windspeed_list = list(latest_windspeed)
    # Return the JSON response
    return JsonResponse(windspeed_list, safe=False)


@csrf_exempt
def weather_view(request):
    global stored_data
    # stored_data = {
    #     "temperature": 36.277134529488265,
    #     "humidity": 50.862129842405324,
    #     "activity": "walking"
    # }

    # Check if data has been received before
    if stored_data:
        # Return the stored data as a JSON response
        return JsonResponse({'livestock_data': stored_data})
    else:
        return JsonResponse({'error': 'No data available'})

import random
import time

@csrf_exempt
def notification(request):
    notifications = [
        "Cow 113 went offline at location: Map",
        "Two People detected on Camera 3",
        "A wild animal detected on Camera 7"
    ]
    
    if request.method == 'GET':
        # Return a random notification
        notification = random.choice(notifications)
        return JsonResponse({'notification': notification})
    
    return JsonResponse({'error': 'Invalid request method'})

# # Schedule to send notifications every 5 minutes
# while True:
#     notification_time = 5 * 60  # 5 minutes in seconds
#     time.sleep(notification_time)
#     # Call the notification function to send a notification
#     notification(None)


@csrf_exempt
def test_post(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        print(" \n")
        print("Received data:", received_data)
        print("\n")

        return JsonResponse({'status': 'Data received successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})






'''
Note: If your LivestockData model has fields that are not serializable to JSON, you may need to convert them to a serializable format in the values() method. For example, if you have a DateTimeField, you might want to convert it to a string:

python
Copy code
data = LivestockData.objects.values()
data_serializable = [{'timestamp': str(entry['timestamp']), 'data': entry['data']} for entry in data]
return JsonResponse(data_serializable, safe=False)
Adjust the conversion according to your model's fields.
'''

