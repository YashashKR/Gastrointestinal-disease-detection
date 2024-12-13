# Gastrointestinal Disease Detection

This project leverages a ResNet-18 model to detect gastrointestinal diseases from images. The model is deployed using a Flask web application that allows users to upload images and receive predictions.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Dataset](#dataset)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Model Training](#model-training)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

This project is a deep learning-based system for detecting gastrointestinal diseases. Users can upload images of gastrointestinal endoscopy, and the model predicts the class of the disease based on the trained ResNet-18 model.

---

## Technologies Used

- **Python**
- **Flask** (for the web application)
- **PyTorch** (for the deep learning model)
- **Torchvision** (for pre-trained models and transformations)
- **HTML/CSS/JavaScript** (for the frontend UI)

---

## Dataset

The model was trained on the **Kvasir dataset**, which contains labeled images of various gastrointestinal diseases. The dataset includes classes such as:

1. **Class 1**: Esophagitis
2. **Class 2**: Polyps
3. **Class 3**: Ulcerative Colitis
4. **Class 4**: Normal Z-line
5. **Class 5**: Erythematous
6. **Class 6**: Barrett's
7. **Class 7**: Dyed Lifted Polyps
8. **Class 8**: Dyed Resection Margins

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/gastro-disease-detection.git
   cd gastro-disease-detection
   ```

2. **Create a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Download the trained model** and place it in the project folder (ensure the path matches `app.py`).

---

## Usage

1. **Run the Flask app**:
   ```bash
   python app.py
   ```

2. **Open the app** in your browser:
   ```
   http://127.0.0.1:5000
   ```

3. **Upload an image** using drag-and-drop or file selection.

4. **View the prediction** result displayed on the page.

---

## File Structure

```
project-folder/
│
├── app.py
├── resnet18_kvasir.pth       # Trained model
├── requirements.txt
├── uploads/                  # Temporary uploaded images
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── dragdrop.js
└── README.md
```

---

## Model Training

The model used is a **ResNet-18** fine-tuned for 8 classes. To retrain the model:

1. **Install PyTorch** and relevant libraries.
2. **Use the Kvasir dataset** and split into train/test sets.
3. **Train the model** 

4. **Save the model**:
   ```python
   torch.save(model.state_dict(), "resnet18_kvasir.pth")
   ```

---

## Deployment

To deploy the project:

1. **Set up Flask** on a server.
2. **Ensure the model file** is uploaded with your project.
3. **Run the Flask app** by app.py

---

## Screenshots

### Home Page
![Screenshot 2024-12-14 004241](https://github.com/user-attachments/assets/a524c7ec-7da3-4084-8cbc-8f5082153cf8)


---

## Future Improvements

- Add more disease classes for better accuracy.
- Improve the frontend UI.
- Deploy using Docker for containerization.
- Integrate more robust error handling.

---

