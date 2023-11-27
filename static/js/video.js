const video = document.getElementById("video");
const sendBtn = document.getElementById("sendData");

let attendanceObj = {};
const labels = [];

async function start() {
  await matching(); // Wait for labeled images to be loaded
  await recognizeFaces();
}

start();

async function matching() {
  let match = await fetch('/arrayOfFiles/');
  let data = await match.json();

  for (let index = 0; index < data.data.length; index++) {
    labels.push(data.data[index].name);
    attendanceObj[data.data[index].name] = true;
  }
}

async function recognizeFaces() {
  await Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('http://127.0.0.1:5000/static/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('http://127.0.0.1:5000/static/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('http://127.0.0.1:5000/static/models')
  ]);

  const labeledDescriptors = await loadLabeledImages();
  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);

  navigator.getUserMedia(
    { video: {} },
    (stream) => {
      video.srcObject = stream;
    },
    (err) => console.error(err)
  );

  video.addEventListener("play", async () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    canvas.classList.add("canvas");
    document.body.append(canvas);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

      const results = resizedDetections.map((d) => {
        return faceMatcher.findBestMatch(d.descriptor);
      });

      results.forEach((result, i) => {
        const box = resizedDetections[i].detection.box;
        const drawBox = new faceapi.draw.DrawBox(box, {
          label: result.toString(),
        });

        attendanceObj[result._label] = false;
        drawBox.draw(canvas);
      });
    }, 100);
  });
}

async function loadLabeledImages() {
  return Promise.all(
    labels.map(async (label) => {
      const descriptions = [];
      for (let i = 1; i < 2; i++) {
        const img = await faceapi.fetchImage(`http://127.0.0.1:5000/static/labeled_images/${label}/${i}.jpg`) ||
          await faceapi.fetchImage(`http://127.0.0.1:5000/static/labeled_images/${label}/${i}.jpeg`) ||
          await faceapi.fetchImage(`http://127.0.0.1:5000/static/labeled_images/${label}/${i}.png`);
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
        descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}

// Event listener for dark mode toggle
window.onload = function () {
  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
};

// Event listener for sending attendance data
sendBtn.addEventListener("click", () => {
  console.log(attendanceObj);
  document.getElementById("attendance").value = JSON.stringify(attendanceObj);
});
