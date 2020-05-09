// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const snake = new Snake();



function Snake(){
  this.x = 0;
  this.y = 0;
  this.dx = 1;
  this.dy = 0;
  this.width = 10;
  this.height = 10;
}

setInterval(()=>{
canvas.fillStyle='white';
canvas.fillRect(this.x,this.y,this.width,this.height);
})

function update(){
  
}