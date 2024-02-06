import serial
import random
import requests
import json
import time

# serial_port = '/dev/cu.usbserial-0012'
serial_port = '/dev/ttyUSB0'
baud_rate = 9600                           
ser = serial.Serial(serial_port, baud_rate, timeout=1)
url = 'https://ca5c-14-139-113-18.ngrok-free.app/livestock/livestock_get/'

headersList = {
    "Content-Type": "application/json"
}

try:
    while True:
        serial_data = ser.readline().decode('utf-8').strip()
        print(serial_data)
        x, y, z = map(float, serial_data.split())
        data = {
            'livestock_data': json.dumps({
                'x': x,
                'y': y,
                'z': z,
                'lat': random.uniform(30, 70),
                'long': random.uniform(30, 70),
            })
        }
        print(data)
        payload = json.dumps(data)
        response = requests.post(url, data=payload, headers=headersList)
        # print(response.text)

except KeyboardInterrupt:
    # Close the serial port when Ctrl+C is pressed
    ser.close()
    print("Recording stopped. Serial port closed.")
