class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 1,
            friction: 0,
        }
        this.body = Bodies.circle(100,660,70,options);
    
        this.image = loadImage("a.png");
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();
        }

}