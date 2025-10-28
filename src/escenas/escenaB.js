export class EscenaB extends Phaser.Scene {
    constructor() {
        super('animacion');
    }
    preload() {
        this.load.atlas('pajaro', './assets/pajarito.png', './assets/pajarito.json');
    }
    create() {
        console.log('cargamos animacion');
        this.pajaro = this.add.sprite(155, 100, 'pajaro');
        var frameNames = this.textures.get('pajaro').getFrameNames();
        console.log(frameNames);

        this.anims.create({
        key: 'ave',
        frames: [
            { key: 'pajaro',frame:'ave (1).png' },
            { key: 'pajaro',frame: 'ave (2).png'},
             { key: 'pajaro',frame:'ave (3).png' },
            { key: 'pajaro',frame: 'ave (4).png'},
             { key: 'pajaro',frame:'ave (5).png' },
            { key: 'pajaro',frame: 'ave (6).png'},
             { key: 'pajaro',frame: 'ave (7).png'},
            { key: 'pajaro',frame: 'ave (8).png'},

        ],
        frameRate: 14,
        repeat: -1
    });
    this.pajaro.play('ave');

    }
    update() {

    }
}