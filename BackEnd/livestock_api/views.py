from django.views.decorators.csrf import csrf_protect 
from django.http import JsonResponse
from .models import LivestockData
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_protect 
def livestock_api(request):
    if request.method == 'POST':
        data = request.POST.get('livestock_data')
        LivestockData.objects.create(data=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = LivestockData.objects.values()  # Convert QuerySet to a list of dictionaries
        return JsonResponse(list(data), safe=False)


# Global variable to store received data
stored_data = None

@csrf_exempt
def liveStock_get(request):
    global stored_data
    if request.method == 'POST':
        received_data = json.loads(request.body)
        print("Received data:", received_data)

        # Store the received data in the global variable
        stored_data = received_data
        
        livestock_data = json.loads(received_data['livestock_data'])
        
        print(livestock_data['temperature'])
        
        # Save the data to the database
        LivestockData.objects.create(
            temperature=livestock_data['temperature'],
            humidity=livestock_data['humidity'],
            activity=livestock_data['activity']
        )

        return JsonResponse({'status': 'Data received successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})
    

@csrf_exempt
def liveStock_view(request):
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



'''
Note: If your LivestockData model has fields that are not serializable to JSON, you may need to convert them to a serializable format in the values() method. For example, if you have a DateTimeField, you might want to convert it to a string:

python
Copy code
data = LivestockData.objects.values()
data_serializable = [{'timestamp': str(entry['timestamp']), 'data': entry['data']} for entry in data]
return JsonResponse(data_serializable, safe=False)
Adjust the conversion according to your model's fields.
'''

