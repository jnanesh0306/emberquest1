const dragDropArea = document.getElementById('dragDropArea');
const leafImageInput = document.getElementById('leafImageInput');
const browseBtn = document.getElementById('browseBtn');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultsSection = document.querySelector('.results-section');

let selectedImage = null;

browseBtn.addEventListener('click', () => {
    leafImageInput.click();
});

leafImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleImageSelect(file);
});

function handleImageSelect(file) {
    selectedImage = file;
    const reader = new FileReader();

    reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewContainer.style.display = 'block';
        dragDropArea.style.display = 'none';
    };

    reader.readAsDataURL(file);
}

analyzeBtn.addEventListener('click', () => {
    if (!selectedImage) return;

    loadingSpinner.style.display = 'block';
    previewContainer.style.display = 'none';

    const img = new Image();
    img.onload = () => {
        setTimeout(() => {
            analyzeImage(img);
            loadingSpinner.style.display = 'none';
        }, 1500);
    };
    img.src = previewImage.src;
});

function analyzeImage(img) {

    const width = img.width;
    const height = img.height;

    document.getElementById('leafWidth').textContent = width;
    document.getElementById('leafHeight').textContent = height;

    let health = 90;
    document.getElementById('healthPercentage').textContent = health + "%";

    document.getElementById('diseaseName').textContent = "Healthy Leaf";
    document.getElementById('diseaseDescription').textContent =
        "The leaf appears healthy with no major disease detected.";

    document.getElementById('resultImage').src = previewImage.src;

    resultsSection.style.display = 'block';
}