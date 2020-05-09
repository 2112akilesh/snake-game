// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const snake = new Snake();
const canvasHeight = 200;
const canvasWidth = 200;
const food;

function generateFood(){
  food = (x: 50,y: 50);
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.dx = 1;
  this.dy = 0;
  this.width = 20;
  this.height = 20;

  this.update = function (){
    this.x = this.x + (this.width * this.dx);
    this.y = this.y + (this.height * this.dy);
  }
  
  this.show = function (){
    canvas.clearRect(0,0,canvasHeight,canvasHeight);
    canvas.fillStyle='white';
    canvas.fillRect(this.x,this.y,this.width,this.height);
  }
}

function update(){
  snake.update();
  generateFood
}

function show(){
  snake.show();
}
setInterval(()=>{
  update();
  show();
  generateFood();
},1000);