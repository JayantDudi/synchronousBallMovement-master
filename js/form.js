class Form {
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h2");
    }
    display(){
        var title = createElement("h2");
        title.html("Car Turbo");
        title.position(displayWidth/2,30);
        this.input.position(displayWidth/2,displayHeight/2-30);
        this.button.position(displayWidth/2,displayHeight/2);
        this.button.mousePressed(
           ()=>{
                
                this.input.hide();
                this.button.hide();
                player.name=this.input.value();
                playerCount+=1;
                player.index=playerCount;
                player.update();
                player.updateCount(playerCount);
                this.greeting.html(" Hello " + player.name);
                this.greeting.position(displayWidth/2,displayHeight/3);
            }
        )
        
        
    }

    hideDetails(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}