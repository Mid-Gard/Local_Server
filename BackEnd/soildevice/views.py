from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import SoilDeviceData
from django.core import serializers
from django.http import JsonResponse
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import SoilDeviceData
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import SoilDeviceData
import json

@csrf_exempt
def data_post(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            if 'soildevice' in data:
                soil_data = data.get('soildevice')
                print(soil_data)
                temperature = soil_data.get('Temperature')
                humidity = soil_data.get('Humidity')
                soil_moisture = soil_data.get('SoilMoisture')
                motor_id = soil_data.get('MotorID')
                motor_status = soil_data.get('MotorStatus')

                # soil_device_data = SoilDeviceData.objects.create(
                #     Temperature=temperature,
                #     Humidity=humidity,
                #     SoilMoisture=soil_moisture,
                #     MotorID=motor_id,
                #     MotorStatus=motor_status
                # )

                return JsonResponse({'success': True})
            else:
                return JsonResponse({'error': 'Invalid data format'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)





def data_get(request):
    if request.method == 'GET':
        # Get the latest SoilDeviceData object from the database
        latest_data = SoilDeviceData.objects.latest('timestamp')

        # Serialize the data
        data_json = serializers.serialize('json', [latest_data])

        # Return the serialized data as JSON response
        return JsonResponse(data_json, safe=False)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'})
