import requests
import json
import random
import time

url = 'http://192.168.0.186:8000/livestock/livestock_get/'
# url = 'https://9tl3q1pq-8000.inc1.devtunnels.ms/livestock/livestock_get/'
# url = 'https://ca5c-14-139-113-18.ngrok-free.app/livestock/livestock_get/'
# url = ' https://2e05-14-139-113-18.ngrok-free.app/test_post/'
# url = 'http://14.139.113.18:8000/livestock/test_post/'

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

i =0
# List to store data patterns
data_patterns = []

while True:
    i = 11
    while i>0:
        data = {
            'livestock_data': json.dumps({
                'x': random.uniform(20, 40),
                'y': random.uniform(30, 70),
                'z': random.uniform(30, 70),
                'lat': random.uniform(30, 70),
                'long': random.uniform(30, 70),
            })
        }
        # Append the data pattern to the list
        data_patterns.append(data)
        i=i-1
    # data = i

    # Include the CSRF token in the headers of the POST request
    # headers = {'X-CSRFToken': csrf_token}
    print(data_patterns)
    # response = requests.post(url, data=data)
    payload = json.dumps(data_patterns)
    print(payload)
    response = requests.request("POST", url, data=payload,  headers=headersList)
    print(response)
    # print(response.text)

    time.sleep(5)  # Send data every 5 seconds