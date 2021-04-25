var hypnoticBall, database;
var position;
var gameState,playerCount;
var game,form,player;
var allPlayers;
var car1,car2,car3,car4;
var allcars;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  gameState=0;
  playerCount=0;
  game = new Game();
  game.getState();
  game.start();



  

 
}

function draw(){
  background("white");

  drawSprites();
  
  if(playerCount===4){
    game.updateState(1);

  } 
 if (gameState===1){
   clear();
   game.play();
 }
   
}


