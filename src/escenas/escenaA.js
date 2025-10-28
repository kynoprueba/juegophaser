

export class EscenaA extends Phaser.Scene{
    constructor(){
        super({key:'primerEscena'});

    }

    preload(){
         this.load.image('animal', './assets/zorro.png');
         this.load.spritesheet('b_interactivo', './assets/boton2.png', {
    frameWidth: 60,  // Width of each frame
    frameHeight: 20   // Height of each frame
});

    }

    create(){
       console.log('escena uno');
        this.add.image(500, 300, 'animal');

        // Add the sprite
let button = this.add.sprite(400, 300, 'b_interactivo', 0);  // Start with frame 0
button.setInteractive();  // Enable input

// Add click event
button.on('pointerdown', () => {
    console.log('Sprite button clicked!');
     this.scene.start('game');
});

button.on('pointerover', () => {
    button.setFrame(1);  // Change to frame 1 on hover
});

button.on('pointerout', () => {
    button.setFrame(0);  // Reset to frame 0
});



    }

}