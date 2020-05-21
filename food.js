export function generateFood(food, canvasWidth, canvasHeight, snake){
  const x = Math.floor(Math.random() * (canvasWidth/snake.width)* snake.width);
  const y = Math.floor(Math.random() * (canvasHeight/snake.height)* snake.height);  
  food = {x , y};
}