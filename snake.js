export function Snake( canvasWidth , canvasHeight ){
  this.x = 0;
  this.y = 0;
  this.dx = 1;
  this.dy = 0;
  this.width = 10;
  this.height = 10;

  this.update = function (){
    let.x = this.x + (this.width * this.dx);
    let.y = this.y + (this.height * this.dy);
    if(x < 0){
      x=0;
    } else if (x > canvasWidth){
      x = canvasWidth;
    }
    if(y < 0){
      y=0;
    } else if (y > canvasHeight){
      y = canvasHeight;
    }    
  }
  this.x = x;
  this.y = y;
  
  this.show = function (canvas){
    canvas.fillStyle='white';
    canvas.fillRect(this.x,this.y,this.width,this.height);
  }
}