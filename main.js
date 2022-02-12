function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/94XqLdWvh/model.json", modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
    console.log(gotResuts);
}
