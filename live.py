from random import randint
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)

@app.route('/sensor_data')
def sensor_data():
    fake_data_a = randint(0, 10)
    fake_data_b = randint(0, 10)
    return jsonify(sensor_a = fake_data_a, sensor_b = fake_data_b)

@app.route("/")
def display():
   return render_template('index.html') 
