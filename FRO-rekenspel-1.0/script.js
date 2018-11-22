const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

function makeSum(){
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    mySum = a * b;
    myAssignment.innerHTML = a + " x " + b;
    myAnswer.focus();
}


function keyPressed(evt){
    if(evt.keyCode == 13){
        if(eval(mySum) == myAnswer.value){
            feedback.src = "goed.png";
            sound.src = "Yaaay.mp3";
            sound.play();
        } else{
            feedback.src = "fout.png";
            sound.src = "fout.mp3";
            sound.play();
        }
        window.setTimeout(waiting, 2000);
    }
    
}


function waiting(){
    feedback.src = "leeg.png";
    myAnswer.value = "";
    makeSum();
}
    makeSum();
    myAnswer.addEventListener("keyup", keyPressed, false);


