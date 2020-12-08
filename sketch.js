
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var Food

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
 createCanvas(500,500)
  
  FoodGroup= new Group()
  obstacleGroup= new Group();
  
  monkey=createSprite(30,460,10,10)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1

  ground=createSprite(10,495,500,10);
 score=0
  
}


function draw() {
  background("lightblue");
  console.log(getFrameRate())
ground.velocityX=2
 ground.x=width/2;
  
   if(keyDown("space")&& monkey.y>=450){
    monkey.velocityY=-23
   
  }
 
  monkey.velocityY= monkey.velocityY + 0.8
  
  food();
  obstacles();
  
   monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black")
   text("Totalplaytime= "+score,190,30)
  
  score= Math.round(frameCount/getFrameRate());
 
  drawSprites();
  
 
  
}

function food(){
  
  if(frameCount%80===0){
  var   Food = createSprite(490,200,10,10)
    Food.addImage(bananaImage);
    Food.scale=0.1
     Food.setLifetime=100;
     
 Food.y=Math.round(random(120,200)) 
  Food.velocityX=-2
  
  FoodGroup.add(Food)
  }
}

function obstacles(){
  if(frameCount%300===0){
    var obstacles= createSprite(480,475,10,10);
    obstacles.scale=0.1
    obstacles.addImage(obstaceImage)
    obstacles.velocityX=-3
    obstacleGroup.add(obstacles);
    
  }
  
}


