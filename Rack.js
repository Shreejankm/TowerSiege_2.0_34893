class Racks {
    constructor(x,y){ 
        var prop = {  
            isStatic:true,
            friction:50.5,
            restitution:0.8,
            density:1.2
        }             
        this.body = Bodies.rectangle(x,y,250,30,prop);
        this.width = 250;
        this.height = 30;
        this.image = loadImage("Rack.png");
                      
        World.add(world,this.body);
    }                 
    display(){           
        var pos = this.body.position;
        imageMode(CENTER);
        fill("red");
        image(this.image,pos.x,pos.y,this.width,this.height);
                      
    }                 
}                  