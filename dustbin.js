class Dustbin extends Base{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,               
          }
        
          super(x,y,width,height);   
          this.body = Bodies.rectangle(x,y,width,height,options)  
          this.image = loadImage("b.png");       
    }    
    display(){
        imageMode(CENTER)
    	image(this.image, this.body.position.x,this.body.position.y,this.width,this.height)
    }
}
