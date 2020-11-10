
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
var survivalTime=0;
monkey= createSprite (80,315,20,20);
  monkey.addAnimation ("moving", monkey_running);
  monkey.scale= 0.1;
  ground= createSprite (400,350,900,10);
  ground.velocityX=-4
  ground.x= ground.width/2;
  foodGroup= new Group();
 obstaclesGroup= new Group();
  score=0;
  
  
}


function draw() {
  
  background ("white");
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space")){
    monkey.velocityY=-10
    
    
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnBanana ();
  spawnObstacles ();
  
  
  drawSprites ();
  
  textSize (20);
  text ("score"+ score,500,50);
   if (obstaclesGroup.isTouching(monkey)){
     ground.velocityX= 0;
     monkey.velocityY=0;
     obstaclesGroup.setVelocityXEach (0);
     foodGroup.setVelocityXEach (0);
     
     
   }
  
  survivalTime= Math.ceil (frameCount/frameRate()) ;
  text ("survival time"+survivalTime,100,50);
  
  
  
}




function spawnBanana (){
  
  
  if (frameCount%80===0){
    banana=createSprite (600,250,40,10);
    banana.y= random(120,300);
    banana.velocityX= -6;
   banana.addImage (bananaImage);
    banana.scale= 0.05
    foodGroup.add (banana);
  }
}

function spawnObstacles (){
  
  if (frameCount%200===0){
    
    obstacle=createSprite (400,320,10,40);
    obstacle.velocityX= -6;
   obstacle.addImage (obstacleImage);
    obstacle.scale= 0.15
    obstaclesGroup.add (obstacle);
    
  }
}






















