// dragdrop.js
const dragArea = document.getElementById('drag-area');
const fileInput = document.getElementById('file-input');
const predictBtn = document.getElementById('predict-btn');
const output = document.getElementById('output');
let uploadedFile = null;

dragArea.addEventListener('click', () => fileInput.click());

dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragArea.classList.add('hover');
});

dragArea.addEventListener('dragleave', () => dragArea.classList.remove('hover'));

dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dragArea.classList.remove('hover');
    // Get the dropped file
    if (e.dataTransfer.files.length > 0) {
        uploadedFile = e.dataTransfer.files[0];
        enablePredictButton();
    }
});

fileInput.addEventListener('change', () => {
    uploadedFile = fileInput.files[0];
    enablePredictButton();
});

predictBtn.addEventListener('click', () => {
    if (!uploadedFile) return;
    const formData = new FormData();
    formData.append('file', uploadedFile);

    fetch('/predict', {  // Change here to /predict
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            output.textContent = `Error: ${data.error}`;
        } else {
            output.textContent = `Prediction: ${data.prediction}`;
        }
        output.classList.add('show');
    })
    .catch(err => {
        console.error('Error:', err);
        output.textContent = 'An error occurred.';
        output.classList.add('show');
    });
});

function enablePredictButton() {
    if (uploadedFile) {
        predictBtn.disabled = false;
        predictBtn.style.backgroundColor = "#007bff";
    }
}
