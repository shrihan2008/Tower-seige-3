class Tower
{
constructor(x,y,width,height){
   var options= {
  isStatic:false,    
  friction:0.5,
   density:1.2
  
    }
    this.trajectory =[];
   this.body = Bodies.rectangle(x, y, width, height, options);
 this.width = width;
   this.height = height;
    
    World.add(world, this.body);
    this.visiblity=255
}
display(){
        
  var pos =this.body.position;
  rectMode(CENTER);
  fill(random(150,5))
    rect(pos.x, pos.y, this.width, this.height);
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
}
}