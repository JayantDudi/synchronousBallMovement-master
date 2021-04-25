class Game {
    constructor() {
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data){
            gameState = data.val();
            
          });
        
    }
    updateState(state){
        database.ref("/").update({
            "gameState": state ,
        })
    }

    start(){
       if(gameState===0){
        player=new Player();
        player.getCount();
        form= new Form();
        form.display();
       }
            car1 = createSprite(300,200,100,100);
            car2 = createSprite(500,200,100,100);
            car3 = createSprite(700,200,100,100);
            car4 = createSprite(900,200,100,100);
            allcars=[car1,car2,car3,car4]

    }
    play(){
        form.hideDetails();
        textSize(30);
        text("Game Start",130,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            console.log(allPlayers);
            var displayPosition = 130;
            var x=0;
            var y ;
            var index = 0;
           
            for(var plr in allPlayers){
                x = x + 200 ; 
                y = 0 ;
                y = displayHeight-allPlayers[plr].distance;
                
                allcars[index].x = x;
                allcars[index].y = y;
                console.log(x,index);
                index = index + 1 ;
                
                if(index=== player.index ){
                   allcars[index-1].shapeColor="cyan";
                    camera.position.x=displayWidth/2;
                   // camera.position.y=allcars[index-1].y;

                } 
                if(plr=== "player" + player.index){
                    
                }
                textSize(18);
                text(allPlayers[plr].name+ ":"+allPlayers[plr].distance,120,displayPosition);
                displayPosition+=20;
            }
            

        }
        if(keyIsDown(UP_ARROW) && player.index!==null ){
            player.distance+=50;
            player.update();
        }
    }

}

