class Ground {
    constructor(x,y,width,height){ 
        var prop = {  
            isStatic:true,
            density:1.2
        }             
        this.body = Bodies.rectangle(x,y,width,height,prop);
        this.width = width;
        this.height = height;
        this.image = loadImage("wood.png");
                      
        World.add(world,this.body);
    }                 
    display(){           
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
                      
    }                 
}         