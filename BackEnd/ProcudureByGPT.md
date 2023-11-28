Sure, let's go through the step-by-step process to set up a Django server on an Ubuntu system, create an API endpoint for livestock data, and display the data on a webpage with continuous updates and auto-scroll.

### Step 1: Install Django
First, make sure you have Python and pip installed. Then, install Django:

```bash
sudo apt update
sudo apt install python3 python3-pip
pip3 install Django
```

### Step 2: Create a Django Project
Create a new Django project:

```bash
django-admin startproject livestock_monitoring
cd livestock_monitoring
```

### Step 3: Create a Django App
Create a Django app within the project:

```bash
python3 manage.py startapp livestock_api
```

### Step 4: Configure Django Settings
In `livestock_monitoring/settings.py`, add your app to the `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ...
    'livestock_api',
]
```

### Step 5: Define Models
In `livestock_api/models.py`, define your data models (e.g., LivestockData):

```python
from django.db import models

class LivestockData(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    data = models.TextField()

    def __str__(self):
        return f'{self.timestamp} - {self.data}'
```

### Step 6: Create Database Tables
Run migrations to create the database tables:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Step 7: Create API Views
In `livestock_api/views.py`, create views to handle incoming data and display it:

```python
from django.http import JsonResponse
from django.shortcuts import render
from .models import LivestockData

def livestock_api(request):
    if request.method == 'POST':
        data = request.POST.get('livestock_data')
        LivestockData.objects.create(data=data)
        return JsonResponse({'status': 'Data received successfully'})
    elif request.method == 'GET':
        data = LivestockData.objects.all()
        return render(request, 'livestock_api/livestock_api.html', {'data': data})
```

### Step 8: Create API URLs
In `livestock_api/urls.py`, define your API URLs:

```python
from django.urls import path
from .views import livestock_api

urlpatterns = [
    path('livestock/', livestock_api, name='livestock_api'),
]
```

### Step 9: Include API URLs in Project URLs
In `livestock_monitoring/urls.py`, include your app's URLs:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('livestock/', include('livestock_api.urls')),
]
```

### Step 10: Create a Django Template
Create a template file `livestock_api/livestock_api.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="5">
    <title>Livestock Monitoring</title>
</head>
<body>
    <h1>Livestock Monitoring</h1>
    <div style="height: 300px; overflow-y: scroll;">
        {% for entry in data %}
            <p>{{ entry.timestamp }} - {{ entry.data }}</p>
        {% endfor %}
    </div>
</body>
</html>
```

### Step 11: Run Django Development Server
Run the Django development server:

```bash
python3 manage.py runserver
```

Visit `http://localhost:8000/livestock/` in your browser to see the data displayed with auto-scroll.

### Step 12: Integrate Livestock Devices
Livestock monitoring devices can send POST requests to `http://yourserver/livestock/` with the data in the request body. Handle this data in the `livestock_api` view to save it in the database.

This is a basic setup, and you may need to adjust it based on your specific requirements. Ensure that your server is properly secured, especially when handling data from external devices.




# For integratiing Database

The database was not starting, so i had to add the table myself with all the individual columns. then only the error got solved and the data started adding.
Otherwise it was showing error that the column not found