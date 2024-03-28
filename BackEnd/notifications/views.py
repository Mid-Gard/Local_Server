from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import notificationData
from django.http import JsonResponse

# Create your views here.
@csrf_protect 
def notifications(request):
    if request.method == 'POST':
        data = request.POST.get('notifications')
        notificationData.objects.create(Notification=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = notificationData.objects.values()  # Convert QuerySet to a list of dictionaries
        return JsonResponse(list(data), safe=False)


from django.utils import timezone

from django.db.utils import IntegrityError

import json

@csrf_exempt
def notification_post(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        notification = data.get('notification')
        priority = data.get('priority')
        device = data.get('device')
        if notification is None:
            return JsonResponse({'error': 'Notification value is missing'}, status=400)
        try:
            timestamp = timezone.now()  # Get current datetime
            notificationData.objects.create(Notification=notification, Priority=priority, timestamp=timestamp, Device=device)
            return JsonResponse({'status': 'Data received successfully'})
        except IntegrityError as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)




from django.core import serializers

@csrf_exempt
def notification_get(request):
    if request.method == 'GET':
        latest_notifications = notificationData.objects.order_by('-timestamp')[:5]  # Get the latest 5 rows
        if latest_notifications:
            # Extract timestamp and notification fields from each notification
            notification_data = [
                {"timestamp": notification.timestamp, "Notification": notification.Notification}
                for notification in latest_notifications
            ]
            return JsonResponse(notification_data, safe=False)
        else:
            return JsonResponse({'error': 'No notification available'})
    else:
        return JsonResponse({'error': 'Invalid request method'})
