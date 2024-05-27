class Title extends Phaser.Scene {
    constructor(){
        super("Title");
    }
    create(){
        this.add.text(130, 350, 'GloobGlobs adventures',{ 
            fontFamily: 'Times, serif',
            fontSize: 42,
            color: "#F00000"
        });
        this.add.text(330, 650, 'arrow keys to move, r to restart',{ 
            fontFamily: 'Times, serif',
            fontSize: 42,
            color: "#F00000"
        });
        this.add.text(630, 350, 'click to continue',{ 
            fontFamily: 'Times, serif',
            fontSize: 42,
            color: "#F00000"
        });
    }
    update(){
        let pointer = this.input.activePointer;
        if (pointer.isDown){
            this.scene.start("platformerScene");
        }
    }
}