Status = " ";
object = []

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById('Status').innerHTML = "Status : Identifiying person";
}

function modelLoaded(){
    console.log("Model is loaded!!");
    Status=true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}


function draw(){
    image(video, 0, 0, 380, 380);
    
    if (Status != " "){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video , gotResult);

        
        for(i=0; i<object.length; i++){
            fill("#FF0000");
            document.getElementById("Status").innerHTML = "Status : Person Detected";
            fill(r,g,b);
            text(object[i].label + " " + percent + "%",object[i].x+15, object[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x , object[i].y, object[i].width, object[i].height);
        }
    }

    elseif(Status = " ");{
        play.song("alarm_clock_5.mp3");
    }
}

