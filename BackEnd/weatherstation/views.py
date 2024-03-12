from django.shortcuts import render

from django.views.decorators.csrf import csrf_protect 
from django.http import JsonResponse
from .models import WeatherData
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

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

@csrf_exempt
def weather_get(request):
    global stored_data
    if request.method == 'POST':
        received_data = json.loads(request.body.decode('utf-8'))
        weather_data = received_data.get('weather_data', {})
        # received_data = json.loads(request.body)
        print(" \n")
        print("Received data:", received_data)
        print("\n")

        # Store the received data in the global variable
        stored_data = received_data
        
        # weather_data = json.loads(received_data['weather_data'])
        
        print(weather_data['temperature'])
        
        # Save the data to the database
        WeatherData.objects.create(
            id=weather_data['id'],
            temperature = weather_data['temperature'],
            humidity = weather_data['humidity'],
            Pressure = weather_data['Pressure'],
            LightLevel = weather_data['LightLevel'],
            SoilMoisture = weather_data['SoilMoisture'],
            SoilTemp = weather_data['SoilTemp'],
            WindSpeed = weather_data['WindSpeed'],
            WindDirection = weather_data['WindDirection'],
            RainGuage = weather_data['RainGuage'],
            Altitude = weather_data['Altitude']
        )

        return JsonResponse({'status': 'Data received successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})


from django.http import JsonResponse
from .models import WeatherData

@csrf_exempt
def get_rainfall(request):
    # Enable the below code for Testing :
    
    dummy_rainfall = [{'RainGuage': random.uniform(0, 50)} for _ in range(10)]
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

