// Import stylesheets
import './style.css';
import {Snake} from './snake.js';
import {generateFood} from './food.js';
// Write Javascript code!
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const snake = new Snake();
const canvasHeight = 200;
const canvasWidth = 200;
const food;

function update(){
  snake.update(canvas);
  generateFood();
}

function show(){
  canvas.clearRect(0,0,canvasWidth,canvasHeight)
  snake.show(canvas);
  canvas.fillStyle='red';
  canvas.fillRect(food.x,food.y,snake.width,snake.height); 
}
setInterval(()=>{
  update();
  show();
},500);