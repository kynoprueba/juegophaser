export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', './assets/fondo.png');
    this.load.image('animal', './assets/zorro.png');
    this.load.image('credito', './assets/final.png');
    this.load.image('nivel', './assets/piso.png');

  }

  create() {
    this.add.image(500, 300, 'background');
    this.animalZorro = this.physics.add.image(400, 90, 'animal');
     this.nivelNegro = this.physics.add.image(400, 90, 'nivel');

    this.animalZorro.body.allowGravity=false;
     this.imagenFinal=this.add.image(400,180,'credito');
     this.imagenFinal.visible=false;



     this.cursors=this.input.keyboard.createCursorKeys();

  }
update(){
  if (this.cursors.left.isDown){
    this.animalZorro.setVelocityX(-200);
  }
  else if(this.cursors.right.isDown){
     this.animalZorro.setVelocityX(200);
  }
  else {
    this.animalZorro.setVelocity(0);
  }
}
}