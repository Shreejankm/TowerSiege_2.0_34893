class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 30
        }
        this.pointB = pointB
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }

    attach(body){
      this.Launcher.bodyA = body;
    }

       fly(){
           this.Launcher.bodyA = null;
       }

      display(){
        //   fill("black")
        //   text(mouseX+","+mouseY,width/2,height/2);
          if(this.Launcher.bodyA){

            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
          }
        
    }
    
}