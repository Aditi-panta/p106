function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zn3frTKH2/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
   if (error){
       console.log(error);
   }
   else{
       console.log(results);
       random_r=Math.floor(Math.random()*255)+1;
       random_g=Math.floor(Math.random()*255)+1;
       random_b=Math.floor(Math.random()*255)+1;

       document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
       document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

       img1=document.getElementById("alien1");
       
       if(results[0].label=="Bark"){
           img1.src="dog.webp";
       }
       else if(results[0].label=="Meow"){
        img1.src="cat.jpeg";
    }
    else if(results[0].label=="Moo"){
        img1.src="cow.webp";
    }
    else if(results[0].label=="Roar"){
        img1.src="lion.jpeg";
    }
    else{
        img1.src="ear.jpeg";
    }
   }
}