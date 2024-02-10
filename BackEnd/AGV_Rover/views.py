from django.views.decorators.csrf import csrf_protect 
from django.http import JsonResponse
from .models import agvRoverData
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import time

@csrf_protect 
def agv(request):
    if request.method == 'POST':
        data = request.POST.get('livestock_data')
        agvRoverData.objects.create(data=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = agvRoverData.objects.values()  # Convert QuerySet to a list of dictionaries
        return JsonResponse(list(data), safe=False)


# Global variable to store received data
global received_data
received_data = None

@csrf_exempt
def loc_post(request):
    if request.method == 'POST':
        try:
            received_data = json.loads(request.body)
            print("\nReceived data:", received_data)
            
            # Check if the 'agvloc_data' key exists in the received data
            if 'agvloc_data' in received_data:
                agvloc_data = received_data['agvloc_data']
                print(agvloc_data)
                # Save the data to the database
                agvRoverData.objects.create(
                    lat=agvloc_data['lat'],
                    long=agvloc_data['long']
                )
                
                return JsonResponse({'status': 'Data received successfully'})
            else:
                return JsonResponse({'error': 'No data found in the request'})
        except Exception as e:
            return JsonResponse({'error': str(e)})
    else:
        return JsonResponse({'error': 'Invalid request method'})
    

@csrf_exempt
def loc_go(request):
    try:
        # Retrieve the latest data from the database
        latest_data = agvRoverData.objects.latest('Timestamp')
        
        # Create a dictionary with the latest data
        agvloc_data = {
            'lat': latest_data.lat,
            'long': latest_data.long
        }

        # Return the latest data as a JSON response
        return JsonResponse({'agvloc_data': agvloc_data})
    except agvRoverData.DoesNotExist:
        return JsonResponse({'error': 'No data available'})


@csrf_exempt
def ir_post(request):
    if request.method == 'POST':
        try:
            received_data = json.loads(request.body)
            print("\nReceived data:", received_data)

        except Exception as e:
            return JsonResponse({'error': str(e)})
    else:
        return JsonResponse({'error': 'Invalid request method'})
        

@csrf_exempt
def ir_get(request):
    if request.method == 'POST':
        try:
            received_data = json.loads(request.body)
            print("\nReceived data:", received_data)

        except Exception as e:
            return JsonResponse({'error': str(e)})
    else:
        return JsonResponse({'error': 'Invalid request method'})


@csrf_exempt
def test_post(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        print(" \n")
        print("Received data: ", received_data)
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

