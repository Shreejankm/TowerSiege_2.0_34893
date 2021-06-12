class Ball {
    constructor(x,y){ 
        var prop = {  
            isStatic:false,
            restitution:0.8,
            friction:60.5,
            density:1.2
        }             
        this.body = Bodies.circle(x,y,20,prop);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("ball.png");
                      
        World.add(world,this.body);
    }                 
    display(){           
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
                      
    }                 
}                    
                     