// Import stylesheets
import './style.css';
import {Snake} from'./snake.js';
// Write Javascript code!
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const snake = new Snake();
const canvasHeight = 200;
const canvasWidth = 200;
const food;

function generateFood(){
  food = {x: 50,y: 50};
}


function update(){
  snake.update();
  generateFood();
}

function show(){
  canvas.clearRect(0,0,canvasWidth,canvasHeight)
  snake.show();
  canvas.fillStyle='red';
  canvas.fillRect(food.x,food.y,snake.width,snake.height); 
}
setInterval(()=>{
  update();
  show();
},500);