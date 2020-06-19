const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var particles=[];
var plinko=[];
var division=[];
var divisionHeight=300;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,800,800,20);
    for (var i=0;i<=width;i=i+80){
         division.push(new Division(i,650,10,300));
    }
    for(var j = 75;j<=width;j=j+50){
        plinko.push(new Plinko(j,75));
    }
    for(var j = 50;j<=width;j=j+50){
        plinko.push(new Plinko(j,175));
    }
    for(var j = 75;j<=width;j=j+50){
        plinko.push(new Plinko(j,275));
    }
    for(var j = 50;j<=width;j=j+50){
        plinko.push(new Plinko(j,375));
    }
}
 
       

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   for(var i=0;i<plinko.length;i++){
       plinko[i].display();
   }
  
   if(frameCount%60==0){
       particles.push(new Particle(random(width/2-40,width/2+40),10,10,10));
   }
   for(var j = 0;j<particles.length;j++){
       particles[j].display();
   }
   fill("white");
   for (var k=0;k<division.length;k++){
    division[k].display();
    }
}