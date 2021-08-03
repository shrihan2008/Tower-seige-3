class Polygon
{
    constructor(radius,x,y){
        var options= {
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.2

        }
        this.body   = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x= x;
        this.y =y;
      this.image=loadImage("polygon.png")
          
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
      
        image(this.image,0,20,this.x,this.y);
        pop();
    }
}