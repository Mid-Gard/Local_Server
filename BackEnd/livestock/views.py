from django.views.decorators.csrf import csrf_protect 
from django.http import JsonResponse
from .models import LivestockData
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import time

@csrf_protect 
def livestock(request):
    if request.method == 'POST':
        data = request.POST.get('livestock_data')
        LivestockData.objects.create(data=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = LivestockData.objects.values()  # Convert QuerySet to a list of dictionaries
        return JsonResponse(list(data), safe=False)


# Global variable to store received data
global received_data
received_data = None

@csrf_exempt
def liveStock_get(request):
    if request.method == 'POST':
        try:
            received_data = json.loads(request.body)
            print("\nReceived data:", received_data)
            
            # Check if the 'livestock_data' key exists in the received data
            if 'livestock_data' in received_data:
                livestock_data_list = received_data['livestock_data']
                
                # Iterate over each data pattern in the list
                for livestock_data in livestock_data_list:
                    # Save the data to the database
                    LivestockData.objects.create(
                        Timestamp=int(time.time()),
                        x=livestock_data['x'],
                        y=livestock_data['y'],
                        z=livestock_data['z'],
                        lat=livestock_data['lat'],
                        long=livestock_data['long']
                    )
                
                return JsonResponse({'status': 'Data received successfully'})
            else:
                return JsonResponse({'error': 'No data found in the request'})
        except Exception as e:
            return JsonResponse({'error': str(e)})
    else:
        return JsonResponse({'error': 'Invalid request method'})
    

@csrf_exempt
def liveStock_view(request):
    try:
        # Retrieve the latest data from the database
        latest_data = LivestockData.objects.latest('Timestamp')
        
        # Create a dictionary with the latest data
        livestock_data = {
            'x': latest_data.x,
            'y': latest_data.y,
            'z': latest_data.z,
            'lat': latest_data.lat,
            'long': latest_data.long
        }

        # Return the latest data as a JSON response
        return JsonResponse({'livestock_data': livestock_data})
    except LivestockData.DoesNotExist:
        return JsonResponse({'error': 'No data available'})


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

