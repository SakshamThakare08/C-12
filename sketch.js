var path,pathImage
var runner,runnerImage
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,10,50)
  path.addImage(pathImage)
  path.velocityY = 4

runner = createSprite(200,200,10,10)
runner.addAnimation("running",runnerImage)
runner.scale=0.10
}

function draw() {
  background(0);

if(path.y > 400){
  path.y = height/2
}
runner.x=World.mouseX
 
 
 
  drawSprites()

}
