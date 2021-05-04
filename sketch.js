var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var log;
function preload()
{
 
}

function setup() {
  createCanvas(1370,2225);
  carGroup1 = new Group();
  logGroup1 = new Group();
  // creale Player
  Player =new Player(width/2,height-75);
  
  
  //Grass where player can rest
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)//adding road
    {
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300,)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor="green";
  }
 //To Create rows for car
 for (var i= 0; i < 40;i++){
   cars=new Car(2);
   carGroup1.add(cars.spt);
 }
 
 }

function draw() {
  background("skyblue");
  
 //mpve the screen to location of player.
 translate(0,-Player.spt.y+height-150);
  drawSprites();
}
function keyPressed(){
  if(keyCode == UP_ARROW){
    Player.move(0,-2)
  }else if(keyCode == DOWN_ARROW ){
    Player.move(0,2)
  }else if(keyCode == LEFT_ARROW ){
    Player.move(-2,0)
  }else if(keyCode == RIGHT_ARROW ){
    Player.move(2,0)
  }
  
}
