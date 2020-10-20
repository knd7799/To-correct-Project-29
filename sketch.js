const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1;
var slingshot;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground (200,300,40,50);
    box1 = new Box (100,50,20,20);
  //slingshot = new slingShot(bird.body,{x:200,y:200});
}


    


function draw(){
    background("brown");
    Engine.update(engine);
    //strokeWeight(4);
    
    ground1.display();
    box1.display();
 
}

/*function mouseDragged (){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}*/
