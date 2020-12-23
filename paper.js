class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 1,
            friction: 0,
        }
        this.body = Bodies.circle(100,660,35,options);
        this.r = 40;
        this.image = loadImage("a.png");
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(RADIUS);
            image(this.image,0,0,this.r,this.r);
            pop();
        }

}