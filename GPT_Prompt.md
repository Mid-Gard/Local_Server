## For IoT bridge

I had the following code earlier : 

import httplib
import urllib
import time
import serial
import requests
import json
import random
import time

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)

Weather_url = 'http://192.168.0.160:8000/weatherstation/weather_get/'

Livestock_url = 'http://192.168.0.160:8000/livestock/livestock_get/'

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

def parse_weather_data(data_line):
    # Split the data_line into individual values
    values = data_line.split(',')
    
    # Assign values to parameters
    id = int(time.time())  # Current timestamp
    temperature = float(values[0])
    humidity = float(values[1])
    pressure = float(values[2])
    light_level = int(values[3])
    soil_moisture = int(values[4])
    soil_temp = float(values[5])
    wind_speed = float(values[6])
    wind_direction = values[7]
    rain_gauge = int(values[8])
    altitude = float(values[9])
    
    return {
        'id': id,
        'temperature': temperature,
        'humidity': humidity,
        'Pressure': pressure,
        'LightLevel': light_level,
        'SoilMoisture': soil_moisture,
        'SoilTemp': soil_temp,
        'WindSpeed': wind_speed,
        'WindDirection': wind_direction,
        'RainGuage': rain_gauge,
        'Altitude': altitude,
    }

def iot_main():
    while True:
        incoming = ser.readline().strip()
        data = incoming.decode()
        
        print(data)
        
        # Check if the line starts with a digit (to identify the third line)
        if data and data[0].isdigit():
            # Parse the weather data
            print("Weather Data Receieved : ", data)
            weather_data = parse_weather_data(data)
            
            # Create the payload
            Weather_payload = json.dumps({'weather_data': weather_data})
            print(Weather_payload)
            
            # Send the POST request
            response = requests.post(Weather_url, data=Weather_payload, headers=headersList)
            print(response)

if __name__ == "__main__":
    try:
        while True:
            iot_main()
    except KeyboardInterrupt:
        print("Press Ctrl-C to terminate while statement")
        pass

But now i am receiving the data in the below format :

W1=14409 27.3 47.4462890625 27.544609375 0 27.25 0 ??? 00
W2=-312 -80 -948 1001 48 67 -63.3 -10.65 21.9 67.822
L=-3.96 -10.20 -4.12

so the code should detect a line starting with W1 and store the 10 values of this line in the following variables : runningTime, temperature, humidity, pressure, soil_moisture, soil_temp, wind_speed, wind_direction, rain_gauge, altitude. The next line starting with W2 should store its 10 values in acc_x, acc_y, acc_z, acc_strength, LightLevel, soundLevel, mag_x, mag_y, mag_z, mag_strength.
Then all the lines starting with 'L', will have 3 values which are to be stored in x, y, z. All these values are to be stored in a separate variable livestock_data, similar to weather_data, you can create a separate function for this also like the one parse_weather_data.