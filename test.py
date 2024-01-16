import requests
import json
import random
import time


url = 'http://192.168.0.160:8000/livestock/livestock_get/'
# url = 'http://192.168.0.160:8000/livestock/test_post/'
# url = 'http://14.139.113.18:8000/livestock/test_post/'

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

i =0

while True:
 
    data = {
        'livestock_data': json.dumps({
            'id': i,
            'temperature': random.uniform(20, 40),
            'humidity': random.uniform(30, 70),
            'activity': random.choice(['sitting', 'standing', 'walking', 'grazing']),
        })
    }
    
    # data = i

    # Include the CSRF token in the headers of the POST request
    # headers = {'X-CSRFToken': csrf_token}
    print(data)
    # response = requests.post(url, data=data)
    payload = json.dumps(data)
    print(payload)
    response = requests.request("POST", url, data=payload,  headers=headersList)
    print(response)
    # print(response.text)

    time.sleep(5)  # Send data every 5 seconds