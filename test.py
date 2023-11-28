import requests
import json
import random
import time

url = 'http://127.0.0.1:8000/livestock/livestock_get/'

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

while True:
    data = {
        'livestock_data': json.dumps({
            'temperature': random.uniform(20, 40),
            'humidity': random.uniform(30, 70),
            'activity': random.choice(['sitting', 'standing', 'walking', 'grazing']),
        })
    }

    # Include the CSRF token in the headers of the POST request
    # headers = {'X-CSRFToken': csrf_token}
    print(data)
    # response = requests.post(url, data=data)
    payload = json.dumps(data)
    response = requests.request("POST", url, data=payload,  headers=headersList)
    print(response)
    # print(response.text)

    time.sleep(5)  # Send data every 5 seconds