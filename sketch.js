
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball;
var launcher;
var rack1,rack2;

function preload(){
	backgroundImage = loadImage("jungleBackground.jpg")
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(width/2,550,width,30);

	ball = new Ball(width/6,320);

	rack1 = new Racks(width/1.3,350);
	rack2 = new Racks(width/2,420);

	launcher = new Launcher(ball.body,{x:width/5, y:320});
	
    box1 = new Box(width/2,height/1.6);
    box2 = new Box(width/2-38,height/1.6);
    box3 = new Box(width/2-100,height/1.6);
    box4 = new Box(width/2+38,height/1.6);
    box5 = new Box(width/2+100,height/1.6);
    box6 = new Box(width/2-25,height/1.9);
    box7 = new Box(width/2-75,height/1.9);
    box8 = new Box(width/2+25,height/1.9);
    box9 = new Box(width/2+75,height/1.9);
    box10 = new Box(width/2,height/2.3);
    box11 = new Box(width/2-38,height/2.3);
    box12 = new Box(width/2+38,height/2.3);
    box13 = new Box(width/2-25,height/3);
    box14 = new Box(width/2+25,height/3);
    box15 = new Box(width/2,height/4);
    box16 = new Box(width/1.3,height/1.8);
    box17 = new Box(width/1.3-39,height/1.8);
    box18 = new Box(width/1.3+38,height/1.8);
    box19 = new Box(width/1.3-100,height/1.8);
    box20 = new Box(width/1.3+100,height/1.8);
    box21 = new Box(width/1.3+25,height/1.8-38);
    box22 = new Box(width/1.3-25,height/1.8-38);
    box23 = new Box(width/1.3+75,height/1.8-38);
    box24 = new Box(width/1.3-75,height/1.8-38);
    box25 = new Box(width/1.3,height/1.8-76);
    box26 = new Box(width/1.3+25,height/1.8-76);
    box27 = new Box(width/1.3-25,height/1.8-76);
    box28 = new Box(width/1.3-25,height/1.8-130);
    box29 = new Box(width/1.3+25,height/1.8-130);
    box30 = new Box(width/1.3,height/1.8-170);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  Engine.update(engine);

  ball.display();
  
  launcher.display();

  rack1.display();
  rack2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  drawSprites();
 
}

function mouseDragged(){
    Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(ball.body);
    }
}