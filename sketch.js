const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9
plinko10,plinko11;
var particle1, particle2, particle3,particle4,particle5,particle6;
var division1,division2,division3,division4,dicidion5;
var gameState = "on play";
var divisionHeight=300;
var groundObject;


//cerate Arrays
var particles=[];
var plinkos=[];
var division=[];

function setup(){
    var canvas = createCanvas(800,480);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(10,380,10,200);

    plinko1 = new Plinko(20, 200,10);
    plinko2 = new Plinko(30, 200,10);
    plinko3 = new Plinko(40, 200,10);
    plinko4 = new Plinko(50, 200,10);
    plinko5 = new Plinko(60, 200,10);
    plinko6 = new Plinko(70, 200,10);
    plinko7 = new plinko(80, 200,10);
    plinko8 = new plinko(90, 200,10);
    plinko9 = new plinko(100, 200,10);
    plinko10 = new plinko(110, 200,10);
    plinko11 = new plinko(120, 200,10);

    particle1 = new Particle(200,200,10);
    particle2 = new Particle(200,200,10);
    particle3 = new Particle(200,200,10);
    particle4 = new Particle(200,200,10);
    particle5 = new Particle(200,200,10);
    particle6 = new Particle(200,200,10);

    division1 = new Division(150,370,10,100);
    division2 = new Division(160,370,10,100);
    division3 = new Division(170,370,10,100);
    division4 = new Division(180,370,10,100);
    division5 = new Division(190,370,10,100);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
     
    groundObject.display();   

    for(k = 0; k <= width; k = k+80){
      division.push(newDivision(k, height = divisionHeight/2,k, divisionHeight));
  }
}
function mouseDragged(){
    if(gameState !== "launch"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launch";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}