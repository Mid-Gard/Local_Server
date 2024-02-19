from django.views.decorators.csrf import csrf_protect 
from django.http import HttpResponse, JsonResponse
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
            
            # Check if 'livestock_data' exists in the received data
            if 'livestock_data' in received_data:
                livestock_data = received_data['livestock_data']
                
                # Assuming that latitude and longitude are provided in the request
                LivestockData.objects.create(
                    timestamp=int(time.time()),
                    x=livestock_data['x'],
                    y=livestock_data['y'],
                    z=livestock_data['z'],
                    lat=livestock_data.get('lat', 0),  # Use get() to handle missing keys
                    long=livestock_data.get('long', 0)
                )
                return JsonResponse({'status': 'Data received successfully'})
            else:
                return JsonResponse({'error': 'No livestock_data found in the request'})
            
        except Exception as e:
            return JsonResponse({'error': str(e)})
    else:
        return JsonResponse({'error': 'Invalid request method'})



# @csrf_exempt
# def liveStock_get(request):
#     if request.method == 'POST':
#         try:
#             received_data = json.loads(request.body)
#             print("\nReceived data:", received_data)
            
#             # To Send only one set of data
#             if 'livestock_data' in received_data:
#                 livestock_data = json.loads(received_data['livestock_data'])
#                 LivestockData.objects.create(
#                     timestamp=int(time.time()),
#                     x=livestock_data['x'],
#                     y=livestock_data['y'],
#                     z=livestock_data['z'],
#                     lat=livestock_data['lat'],
#                     long=livestock_data['long']
#                 )
#                 return JsonResponse({'status': 'Data received successfully'})
#             else:
#                 return JsonResponse({'error': 'No data found in the request'})
            
#             # # To Send 10 sets of data at once                
#             # if 'livestock_data' in received_data:
#             #     livestock_data_list = received_data['livestock_data']
                
#             #     # Iterate over each data pattern in the list
#             #     for livestock_data in livestock_data_list:
#             #         # Save the data to the database
#             #         LivestockData.objects.create(
#             #             timestamp=int(time.time()),
#             #             x=livestock_data['x'],
#             #             y=livestock_data['y'],
#             #             z=livestock_data['z'],
#             #             lat=livestock_data['lat'],
#             #             long=livestock_data['long']
#             #         )
                
#             #     return JsonResponse({'status': 'Data received successfully'})
#             # else:
#             #     return JsonResponse({'error': 'No data found in the request'})
#         except Exception as e:
#             return JsonResponse({'error': str(e)})
#     else:
#         return JsonResponse({'error': 'Invalid request method'})
    

@csrf_exempt
def liveStock_view(request):
    try:
        # Retrieve the latest data from the database
        latest_data = LivestockData.objects.latest('timestamp')
        
        # Create a dictionary with the latest data
        livestock_data = {
            'timestamp': latest_data.timestamp,
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

#---------------------------------------------simulation of api--------------------------------------
# global flags for generating dummy coordinates
coordinates = [(15.422150, 73.980159), (15.422426, 73.980437), (15.422421, 73.980902),
               (15.422135, 73.981456), (15.421474,
                                        73.981658), (15.421093, 73.981746),
               (15.420736, 73.982128), (15.420329,
                                        73.982651), (15.419963, 73.983093),
               (15.419638, 73.983493), (15.419314,
                                        73.983908), (15.418834, 73.984404),
               (15.418394, 73.984649), (15.417888,
                                        73.984925), (15.417256, 73.985324),
               (15.416627, 73.985713), (15.416124,
                                        73.986225), (15.415614, 73.986710),
               (15.415003, 73.987173), (15.414231,
                                        73.987775), (15.413747, 73.988233),
               (15.412976, 73.988708), (15.412377,
                                        73.989152), (15.411892, 73.989623),
               (15.411187, 73.990346), (15.410493,
                                        73.991151), (15.410566, 73.991000),
               (15.409335, 73.992113), (15.408499,
                                        73.992798), (15.408247, 73.993479),
               (15.408049, 73.994310), (15.408469,
                                        73.995139), (15.408303, 73.995845),
               (15.407900, 73.996186), (15.407402,
                                        73.996563), (15.406862, 73.996872),
               (15.406571, 73.996970)]

# putting all cordinates in api format
locations = []
for i in range(1, 5):
    temp = []
    for tup in coordinates:
        dict_item = {'id': i, 'lat': tup[0], 'lng': tup[1], 'bearing': 0}
        temp.append(dict_item)
    # print(temp)
    locations.append(temp)

#flags for iterating in the lists 
indices = [0, 6, 8, 15]
flags = [1, -1, 1, -1]



#returns 4 coordinates
def bus_location_dummy(request):
    global indices, flags
    for i in range(4):
        if (indices[i] > 35) and (flags[i] == 1):
            flags[i] = -1
        elif (indices[i] < 0) and (flags[i] == -1):
            flags[i] = 1
        indices[i] += flags[i]

    locations_dummy = [locations[0][indices[0]], locations[1]
                       [indices[1]], locations[2][indices[2]], locations[3][indices[3]]]

    locations_dummy = [locations[0][indices[0]], locations[1]
                       [indices[1]], locations[2][indices[2]], locations[3][indices[3]]]
    
    return HttpResponse(json.dumps(locations_dummy), content_type="application/json")
