// Set constraints for the video stream
var constraints = { video: { facingMode: {exact:'environment'} }, audio: false };

var config = {
    apiKey: "AIzaSyBSOUBCNLrJULyPy9e-TQsOw0XkfxSfWAA",
    authDomain: "polar-storm-240813.firebaseapp.com",
    databaseURL: "https://polar-storm-240813.firebaseio.com",
    storageBucket: "polar-storm-240813.appspot.com",
    messagingSenderId: "572073336908",
};
firebase.initializeApp(config);

var db = firebase.database().ref('cam/text');

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
    cameraText = document.querySelector("#camera--text")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    cameraText.innerHTML="Uploading File"
    setTimeout(donothing,1000);
};

function donothing(){
    console.log("Hey")
    db.on('value', function(snapshot) {
        console.log(snapshot.val());
        cameraText.innerHTML=snapshot.val()
    });
    
}
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);
