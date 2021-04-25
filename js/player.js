class Player{
    constructor(){
        this.distance=0;
        this.name=null;
        this.index=0; 
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data){
            playerCount = data.val();
            
          });
          
    }
    updateCount(state){
        database.ref("/").update({
            "playerCount": state ,
        })
    }
    update(){
        var playerRef = "players/player"+this.index;
        database.ref(playerRef).set({
            "name":this.name,
            "distance":this.distance,
            
        })
    }
    static getPlayerInfo(){
        var playerInfoRef=database.ref("players");
        playerInfoRef.on("value" , function(data){
            allPlayers=data.val();
        });
    }
}