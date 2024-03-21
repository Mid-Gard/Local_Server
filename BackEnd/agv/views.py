from django.views.decorators.csrf import csrf_protect 
from django.http import JsonResponse
from .models import agvRoverData
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import time
import os

@csrf_protect 
def agv(request):
    if request.method == 'POST':
        data = request.POST.get('livestock_data')
        agvRoverData.objects.create(data=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = agvRoverData.objects.values()  # Convert QuerySet to a list of dictionaries
        return JsonResponse(list(data), safe=False)


@csrf_exempt
def data_post(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        print(received_data)
        movement_data = json.loads(received_data['Movement_data'])  # Corrected key name
        print(" \n")
        print("Movement data: ", movement_data)
        print("\n")

        try:
            # Create a new instance of agvRoverData and save it to the database
            agv_rover_data = agvRoverData.objects.create(
                lat=movement_data.get('latitude'),
                lon=movement_data.get('longitude'),
                pitch=movement_data.get('pitch_degrees'),
                roll=movement_data.get('roll_degrees'),
                yaw=movement_data.get('yaw_degrees')
            )
            agv_rover_data.save()
            return JsonResponse({'status': 'Data received and saved successfully'})
        except KeyError as e:
            return JsonResponse({'error': f'Key error: {e}'}, status=400)
        except Exception as e:
            return JsonResponse({'error': f'Failed to save data: {str(e)}'}, status=500)



@csrf_exempt
def battery_post(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        print(" \n")
        print("Received data: ", received_data)
        print("\n")

        return JsonResponse({'status': 'Data received successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})

# Global variable to store received data
global received_data
received_data = None

@csrf_exempt
def loc_post(request):
    if request.method == 'POST':
        try:
            received_data = json.loads(request.body)
            # print("\nReceived data:", received_data)
            # agvloc_data = received_data['agvlocdata']
            # print(agvloc_data)
            # Print keys of received_data for debugging
            # print("Keys:", received_data.keys())
            
            # Check if the 'agvlocdata' key exists in the received data
            if 'agvlocdata' in received_data:
                agvloc_data = received_data['agvlocdata']
                # print(agvloc_data)
                print(agvloc_data['lat'])
                # Save the data to the database
                agvRoverData.objects.create(
                    Timestamp=int(time.time()),
                    lat=agvloc_data['lat'],
                    long=agvloc_data['lon']  # Corrected key for longitude
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
        # print(request.body)
        try:
            # Check if the request has file data
            if 'frame' in request.FILES:
                # Get the uploaded file
                frame = request.FILES['frame']
                # Define the directory to save the frames
                save_dir = 'frames'
                # Create the directory if it doesn't exist
                os.makedirs(save_dir, exist_ok=True)
                # Save the received frame
                with open(os.path.join(save_dir, frame.name), 'wb') as f:
                    for chunk in frame.chunks():
                        f.write(chunk)
                print("Frame saved successfully:", frame.name)
                return JsonResponse({'message': 'Frame received and saved successfully'})
            else:
                return JsonResponse({'error': 'No frame data received'})
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

