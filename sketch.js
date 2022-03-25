
var trex ,trex_running;
var ground_img;

function preload(){
  
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_img=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);
  
// create edges

 edges = createEdgeSprites();

  //create a trex sprite
  trex=createSprite(50,150,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  trex.x = 50;

  //create ground sprite
   ground=createSprite(200,170,400,20);
   ground.addImage("ground", ground_img);
   ground.velocityX =-4;

//create  invisible ground sprite
   invisible_ground=createSprite(200,190,400,20);
   invisible_ground.visible = false;
}

function draw(){
  background("white");
  console.count("Draw count is : ");
 

if (ground.x < 0){
  ground.x = ground.width/2;
}

  if(keyDown("space") && trex.y >= 100){
   
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY +0.5;
  trex.collide(invisible_ground);
 drawSprites();

}
