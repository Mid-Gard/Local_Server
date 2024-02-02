import requests
import json
import random
import time

# url = 'http://192.168.1.110:8000/livestock/livestock_get/'
url = 'https://0812-14-139-113-18.ngrok-free.app/livestock/livestock_get/'
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
            'x': random.uniform(20, 40),
            'y': random.uniform(30, 70),
            'z': random.uniform(30, 70),
            'lat': random.uniform(30, 70),
            'long': random.uniform(30, 70),
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