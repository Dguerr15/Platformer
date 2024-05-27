class GameOver extends Phaser.Scene {
    constructor(){
        super("GameOver");
    }
    create(){
        this.add.text(130, 350, 'GameOver',{ 
            fontFamily: 'Times, serif',
            fontSize: 42,
            color: "#F00000"
        });
        this.rKey = this.input.keyboard.addKey('R');
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(this.rKey)) {
            this.scene.start("platformerScene")
        }
    }
}