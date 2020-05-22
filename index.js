// Import stylesheets
import './style.css';
import {Snake} from './snake.js';
import {generateFood} from './food.js';
// Write Javascript code!
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const snake = new Snake();
const canvasHeight = 200;
const canvasWidth = 200;
let food;

document.addEventListener('keydown', (event) => {
  if(event.keycode == 37){
    //left
    snake.dx = -1;
    snake.dy = 0;
  } else if(event.keycode == 38){
    //up
    snake.dy = -1;
    snake.dx = 0;
  } else if(event.keycode == 39){
    //right  
    snake.dx = 1; 
    snake.dy = 0; 
  }  else if(event.keycode == 40){
    //down    
    snake.dy = 1;
    snake.dx = 0;
  }
})

function update(){
  snake.update(canvas);
  food = generateFood(canvasWidth, canvasHeight, snake);
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