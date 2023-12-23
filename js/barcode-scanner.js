// Define the function to initialize the camera and start scanning
async function initializeCamera() {
  const video = document.createElement('video');
  video.id = 'videoElement';
  const cameraFeedContainer = document.getElementById('cameraFeedContainer');
  cameraFeedContainer.appendChild(video);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    video.srcObject = stream;
    video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    video.play();
    requestAnimationFrame(scanBarcode);
  } catch (err) {
    console.error(err);
  }
}

// Define the function to process the scanned barcode
function processBarcode(barcode) {
  console.log('Barcode content:', barcode);
  displayBarcodeContent(barcode);
}

// Define the function to display the barcode content
function displayBarcodeContent(content) {
  const barcodeContent = document.getElementById('barcodeContent');
  barcodeContent.textContent = content;
  barcodeContent.classList.remove('hidden');
}

// Define the function to scan the barcode using the camera feed
function scanBarcode() {
  const video = document.getElementById('videoElement');
  const canvasElement = document.createElement('canvas');
  const canvas = canvasElement.getContext('2d');
  canvasElement.width = video.videoWidth;
  canvasElement.height = video.videoHeight;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  // Use a barcode scanning library like 'jsQR' to scan the barcode from the canvas
  // Note: jsQR is not included in this code snippet, you need to include it in your project
  const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
  const code = jsQR(imageData.data, imageData.width, imageData.height, {
    inversionAttempts: "dontInvert",
  });

  if (code) {
    processBarcode(code.data);
  } else {
    requestAnimationFrame(scanBarcode); // Keep trying to scan the barcode
  }
}

// Add event listener to the button to start scanning
document.getElementById('startScanningButton').addEventListener('click', () => {
  initializeCamera();
});