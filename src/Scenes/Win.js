class Win extends Phaser.Scene {
    constructor(){
        super("Win");
    }
    create(){
        const coins = this.scene.settings.data.coins;
        this.add.text(130, 350, 'Win you got ' + coins + ' coins',{ 
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