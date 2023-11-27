# FaceFlow-Attendance



Welcome to FaceAttendance – a facial recognition-based attendance system that automates the attendance tracking process and generates an Excel sheet for your convenience.

## Table of Contents
- [Introduction](#introduction)
- [Navigation](#navigate-through-website)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

FaceAttendance is designed to simplify attendance tracking by using facial recognition technology. Students simply show their faces to the camera, and the system takes care of the rest. The attendance data is automatically stored and exported to an Excel sheet for further analysis.

## Navigate through Website

### 1. Get Started

![image](https://github.com/CharchaGalav/FaceFlow-Attendance/assets/89523701/3fcd2862-c776-4052-8d9d-e3ceb297cdb6)

### 2. Login

![image](https://github.com/CharchaGalav/FaceFlow-Attendance/assets/89523701/69619499-1bdd-4841-bf55-9b614bd30ff3)

### 3. Admin's Dashboard

![image](https://github.com/CharchaGalav/FaceFlow-Attendance/assets/89523701/711790a4-a9b1-48dd-9d3e-181c6a5d3a62)

This is the admin's dashboard where you can perform various tasks:

### a. Add People

![image](https://github.com/CharchaGalav/FaceFlow-Attendance/assets/89523701/bdc47d98-f447-4b00-bb60-19653b82314c)

### b. Gallery 

![image](https://github.com/CharchaGalav/FaceFlow-Attendance/assets/89523701/72ee7978-d5f8-4a2c-952f-37dc0e00cec6)

### c. Take Attendance

![image](https://github.com/CharchaGalav/FaceFlow-Attendance/assets/89523701/2a20fe95-f1c2-4951-a6ab-cb4ff79fb782)

## 4. Done with Attendance

After taking attendance, click on the "Done with Attendance" button.

## Features

- Facial recognition-based attendance tracking.
- Automatic creation of Excel sheets for attendance records.
- User-friendly interface.
- Real-time attendance monitoring.

## Requirements

To use FaceAttendance, ensure you have the following installed:

- Python 3.9
- MongoDB
- Required Python libraries (specified in requirements.txt)
- Webcam or camera for facial recognition

## Installation

1. **Install MongoDB:**

   Follow the official [MongoDB installation guide](https://docs.mongodb.com/manual/installation/) to install MongoDB on your system.
   
2. Clone the repository:

    ```bash
    git clone https://github.com/CharchaGalav/FaceFlow-Attendance.git
    ```

3. Navigate to the project directory:

    ```bash
    cd FaceAttendance
    ```


## Usage

1. Activate the virtual environment:

    ```bash
    source venv/bin/activate  # On Linux/Mac
    .\venv\Scripts\activate   # On Windows
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```
    
3. Run the application:

    ```bash
    python app.py
    ```
4. Run MongoDB server

3. Open a web browser and go to [http://localhost:5000](http://localhost:5000) to access the application.

4. Follow on-screen instructions to take attendance using facial recognition.


