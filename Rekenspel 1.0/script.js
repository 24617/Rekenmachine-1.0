const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const telling = document.getElementById("telling");
const txt = document.getElementById("txt");

let mySum;
let goedFout;
var c = 0;
var d = 0;
let som_array = ["+", "*", "-",];
let sound = new Audio();


function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  var e = som_array[Math.floor(Math.random() * som_array.length)];
  mySum = a + " " + e + " " + b  ;
  goedFout = "goed:  " + c + "   fout:  " + d;
  myAssignment.innerHTML = mySum;
  telling.innerHTML = goedFout;
  myAnswer.focus();
}

function keyPressed(evt) {
  if (evt.keyCode == 13) {
    if (eval(mySum) == myAnswer.value) {
      feedback.src = "img/goed.png";
      sound.src = "img/goodjob.mp3";
      c = c + 1;
      sound.play();

    } else {
      feedback.src = "img/fout.png";
      sound.src = "img/wrong.mp3";
      d = d + 1;
      sound.play();

    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting() {
  feedback.src = "img/feedback.png";
  myAnswer.value = "";
  makeSum();
}


makeSum();
myAnswer.addEventListener("keydown", keyPressed, false)
