// Import stylesheets
import './style.css';
import {Snake} from './snake.js';
import {generateFood} from './food.js';
// Write Javascript code!
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const canvasHeight = 200;
const canvasWidth = 200;

const snake = new Snake(canvasWidth , canvasHeight);
let food = generateFood(canvasWidth, canvasHeight, snake);

document.addEventListener('keydown', (event) => {
  console.log(event.keyCode);
  if(event.keyCode == 37){
    //left
    snake.dx = -1;
    snake.dy = 0;
  } else if(event.keyCode == 38){
    //up
    snake.dy = -1;
    snake.dx = 0;
  } else if(event.keyCode == 39){
    //right  
    snake.dx = 1; 
    snake.dy = 0; 
  }  else if(event.keyCode == 40){
    //down    
    snake.dy = 1;
    snake.dx = 0;
  }
})

function update(){
  snake.update(canvas);
}

function show(){
  canvas.clearRect(0,0,canvasWidth,canvasHeight)
  canvas.fillStyle='red';
  canvas.fillRect(food.x,food.y,snake.width,snake.height); 
  snake.show(canvas);
}
setInterval(()=>{
  update();
  show();
},1000);