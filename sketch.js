
//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);
  //we are creating our engine from matter.js engine
  engine = Engine.create();
  //whenever we create our engine a world gets created we added that engine's world to a variable world

  world = engine.world;
  //options contains physics properties
  //and it follows json rule
  // restitution: is bounciness
  //frictionair: weight
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   //isStatic makes an object static so it won't move
   var ground_options ={
     isStatic: true
   };
  
  
// we are creating our body(object) from Matter.js Bodies giving it shape as rectangle
//and providing it parameters like x,y,width,height,options
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  //we are adding our world's body i.e ground to Matter.js World
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  
// this makes body forcibly to centre.
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  //it keeps updating and has physics property
  Engine.update(engine);
  
  
  fill("pink")
  //displaying the body.
  ellipse(ball.position.x,ball.position.y,20);
  fill("green")
 rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

