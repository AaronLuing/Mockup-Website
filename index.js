const tada = new Audio('sounds/tada.wav')
const woohoo = new Audio('sounds/woohoo.mp3')

function Greeting(){
  tada.volume=0.1;
  tada.play();
  alert("You made it!");
}