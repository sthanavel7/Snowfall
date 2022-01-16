var snow
function preload(){
  bgimg = loadImage("snow3.jpg")
  snowimg = loadImage("snow4.webp")
  snow1img = loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgimg);  
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if (frameCount%60 === 0){
    snow = createSprite(20,0,20,20)
    snow.x = Math.round(random(50,750))
    var r= Math.round(random(1,2))
    if (r === 1){
      snow.addImage(snowimg)
    }
    else {
      snow.addImage(snow1img)
    }
  
    snow.scale=0.2
    snow.velocityY = 3
  }
}
