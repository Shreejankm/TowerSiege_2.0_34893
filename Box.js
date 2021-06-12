class Box {
    constructor(x,y){ 
        var prop = {  
            isStatic:false,
            friction:3,
            restitution:0.8,
            density:0.2
        }             
        this.body = Bodies.rectangle(x,y,50,50,prop);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("wood.png");
                      
        World.add(world,this.body);
    }                 
    display(){     
        push();
        console.log(this.body.spped);

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
                      
    }                 
}       