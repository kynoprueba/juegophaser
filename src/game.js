
import { Puntuacion } from "./Puntuacion.js";

export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.Puntuacion = new Puntuacion(this);
  }

  preload() {
    this.load.image('background', './assets/fondo.png');
    this.load.image('animal', './assets/zorro.png');
    this.load.image('credito', './assets/final.png');
    this.load.image('nivel', './assets/piso.png');
    this.load.image('pelota', './assets/bola.png');
    //carga sprite
    this.load.spritesheet('diamanteAzul', './assets/diamante.png',
      { frameWidth: 48, frameHeight: 48 }
    );

    // boton funcionando
    this.load.image('boton1', './assets/boton.png');
    //



  }


  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.add.image(500, 300, 'background');
    this.animalZorro = this.physics.add.image(400, 90, 'animal');
    this.nivelNegro = this.physics.add.image(400, 510, 'nivel').setImmovable();
    this.pelotaRebote = this.physics.add.image(400, 10, 'pelota');
    this.pelotaRebote.setCollideWorldBounds(true);




    this.Puntuacion.createTexto();


    this.animalZorro.body.allowGravity = false;
    this.nivelNegro.body.allowGravity = false;

    this.imagenFinal = this.add.image(400, 180, 'credito');
    this.imagenFinal.visible = false;




    //cambiar el rumbo de la pelota 
    let velocity = 100 * Phaser.Math.Between(1.3, 2);
    if (Phaser.Math.Between(0, 10) > 5) {
      velocity = 0 - velocity;
    }
    this.pelotaRebote.setVelocity(velocity, 10);


    this.physics.add.collider(this.pelotaRebote, this.nivelNegro, this.impactoPlataform, null, this);
    this.pelotaRebote.setBounce(1);

    this.cursors = this.input.keyboard.createCursorKeys();


    //animacion

    this.add.sprite(40, 40, 'diamanteAzul');
    this.anims.create({
      key: 'bluediamondanimation',
      frames: this.anims.generateFrameNumbers('diamanteAzul', { start: 0, end: 7 }),
      frameRate: 20,
      repeat: -1,
      yoyo: true,
    });

    this.miSprite = this.add.sprite(400, 200, 'diamanteAzul');
    this.miSprite.anims.play('bluediamondanimation');

    //agregar boton
    let button = this.add.image(400, 300, 'boton1');
    button.setInteractive();
    button.on('pointerdown', () => {
      console.log('pulsado');
    });


    // Create the text button
    // boton nuevo
    let button2 = this.add.text(400, 300, 'Click Me', {
      fontSize: '32px',
      fill: '#fff',
      backgroundColor: '#000',
      padding: { x: 10, y: 5 }
    });

    // Make it interactive
    button2.setInteractive();

    // Add click event
    button2.on('pointerdown', () => {
      console.log('Button clicked!');
       this.scene.start('animacion');
    });

    button2.on('pointerover', () => {
      button2.setStyle({ fill: '#ff0' }); // Change color on hover
    });

    button2.on('pointerout', () => {
      button2.setStyle({ fill: '#fff' }); // Reset color
    });


  }

  impactoPlataform() {
    this.Puntuacion.incrementPuntos(1);

  }

  update() {
    if (this.cursors.left.isDown) {
      this.nivelNegro.setVelocityX(-300);
    }
    else if (this.cursors.right.isDown) {
      this.nivelNegro.setVelocityX(300);
    }
    else {
      this.nivelNegro.setVelocity(0);
    }

    if (this.pelotaRebote.y > 600) {
      console.log('fin');
      this.imagenFinal.visible = true;
      this.scene.pause();
    }





  }
}