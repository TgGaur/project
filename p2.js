Webcam.set({
    height:250,
    with:250,
    image_format: 'png',
    png_quality:90
});
Webcam.attach(document.getElementById("live"));

function take_snapshot() {
    document.getElementById("live").style.visibility = "hidden";
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("re1").style.visibility = "hidden";
    document.getElementById("dd1").style.visibility = "hidden";
    document.getElementById("dd1").style.width = "0px";
    document.getElementById("dd1").style.height = "0px";
    document.getElementById("dd2").style.visibility = "visible";
    document.getElementById("dd2").style.height = "650px";
    document.getElementById("body1").style.zoom = "85%";

    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML = "<img src = "+data_uri+">"
        }
    )
}

classifier = ml5.imageClassifier("",modelLoaded);