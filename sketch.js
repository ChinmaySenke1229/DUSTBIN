
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var dustbinObj1,dustbinObj2,dustbinObj3;
var paperobj;
var world;



function setup() {
	createCanvas(800, 550);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	paperobj=new Paper(50,500);
	groundObject=new ground(width/2,530,width,20);
	dustbinObj1=new Dustbin(650,500,110,20);
	dustbinObj2=new Dustbin(695,450,20,120);
	dustbinObj3=new Dustbin(600,450,20,120);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj1.display();
  dustbinObj2.display();
  dustbinObj3.display();
  paperobj.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:145})
	}
}

