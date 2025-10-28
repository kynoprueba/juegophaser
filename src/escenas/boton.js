// En un archivo separado, ej: src/Boton.js
export class Boton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, callback) {
        super(scene, x, y, texture);
        this.setInteractive();
        
        this.on('pointerdown', callback);
        this.on('pointerover', () => this.setFrame(1));
        this.on('pointerout', () => this.setFrame(0));
        
        scene.add.existing(this);
    }
}

