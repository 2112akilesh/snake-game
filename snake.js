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
    canvas.fillStyle='white';
    canvas.fillRect(this.x,this.y,this.width,this.height);
  }
}