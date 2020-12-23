class Ground {
    constructor(){
        var options = {
            isStatic:true                  
          }
          
          this.body = Bodies.rectangle(400,680,800,20,options)
          this.width = 800;
          this.height = 20;  
          World.add(world,this.body)       
    }    
    display(){
        rectMode(CENTER)
        fill("white")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}

