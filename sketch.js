
var ship, shipImage;
var ocean, oceanImage;

function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
oceanImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  ocean = createSprite(50,50);
  ocean.addAnimation("ocean", oceanImage);
  ocean.scale = 1;

  ship = createSprite(200,250);
  ship.addAnimation("ship",shipImage);
  ship.scale = 0.08;
 
}

function draw() {
  background("blue");
 
  drawSprites();
}