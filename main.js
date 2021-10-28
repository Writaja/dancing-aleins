function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
     classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2NkRJk3WI/model.json",modleReady);

}
function modleReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        random_no_r=Math.floor(Math.random()*255)+1;
        random_no_b=Math.floor(Math.random()*255)+1;
        random_no_g=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("resuld_conficence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
document.getElementById("result_conficence").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
img1=document.getElementById("aliene1");
img2=document.getElementById("aliene2");
img3=document.getElementById("aliene3");
img4=document.getElementById("aliene4");
if(results[0].label=="Claping"){
    img1.src="aliens-01.gif";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
}
else if(results[0].label=="Bell"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";

}
else if(results[0].label=="Snap"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif";
    img4.src="aliens-04.png";
}
else{
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.gif";
}

    }
}
