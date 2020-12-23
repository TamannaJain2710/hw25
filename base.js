class Base{
  constructor(x, y,width,height) {
    var options = {
      'density':1.5,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  };
  display(){
    

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    
    pop();
  };
}