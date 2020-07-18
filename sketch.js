var player1,villain,edges;
var backgroundImg,captinamericaimg,thanosimg,lazerimg,looseimg,lazers;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
  backgroundImg=loadImage("background.jpg"); 
  captinamericaimg = loadImage("captin.png");
  thanosimg=loadImage("moving/Thanos.png");
  lazerimg=loadImage("otherimages/lazer.png")
looseimg=loadImage("otherimages/looses.png");
}
function setup(){
  //canvas is created
  canvas=createCanvas(1600,800)

  //player1 is created
  player1 = new player(200,590,200,200);
  //player1.addImage("img",captinamericaimg)
  //player1.scale=2;
  lazersgroup= new Group();
  
  //villain is created
  villain = new villains(1300,300,200,200);
  //villain.addImage(thanosimg);
  //villain.scale=0.5

  randomvelocity();


}
function draw(){
  background(backgroundImg);
  
  if(gameState===PLAY){
    player1.movement();
    spawnlazers();
  }
 else if(gameState===END){}
  if(lazersgroup.isTouching(player1)){
    player1.changeImage(looseimg);
  } 
 
  player1.display();
  villain.display();
  
  //lazer created every 60 frame count 
  
 
 
  //villain bounces off the edges
  
  //player bounces off the edges
 
  drawSprites();
}
function randomvelocity(){
  villain.velocityY=random(-5,5)
}
function spawnlazers(){
  if(frameCount % 40 === 0) {
    var lazers = createSprite(1060,200,10,10);
    lazersgroup.add(lazers);
    //lazers.visible=true;
    //lazers.x=villain.x;
    lazers.y=villain.y;
    lazers.addImage(lazerimg)
    lazers.velocityX = -6;
    

  }
}