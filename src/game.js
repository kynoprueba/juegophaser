import { Puntuacion } from "./Puntuacion.js";
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
  this.Puntuacion=new Puntuacion(this);
}

  preload() {
    this.load.image('background', './assets/fondo.png');
    this.load.image('animal', './assets/zorro.png');
    this.load.image('credito', './assets/final.png');
    this.load.image('nivel', './assets/piso.png');
    this.load.image('pelota', './assets/bola.png');
    //carga sprite
    this.load.spritesheet('diamanteAzul','./assets/diamante.png',
      { frameWidth: 48, frameHeight: 48 }
);

  }

  create() {
      this.physics.world.setBoundsCollision(true, true, true, false);

    this.add.image(500, 300, 'background');
    this.animalZorro = this.physics.add.image(400, 90, 'animal');
    this.nivelNegro = this.physics.add.image(400, 510, 'nivel').setImmovable();
    this.pelotaRebote = this.physics.add.image(400, 475, 'pelota');
    this.pelotaRebote.setCollideWorldBounds(true);

    this.add.sprite(40,40,'diamanteAzul');

 this.Puntuacion.createTexto();


    this.animalZorro.body.allowGravity=false;
    this.nivelNegro.body.allowGravity=false;

     this.imagenFinal=this.add.image(400,180,'credito');
     this.imagenFinal.visible=false;


    
    
 //cambiar el rumbo de la pelota 
 //let velocity = 100 * Phaser.Math.Between(1.3, 2);
//if (Phaser.Math.Between(0, 10) > 5) {
  //velocity = 0 - velocity;
//}
//this.pelotaRebote.setVelocity(velocity, 10);


this.physics.add.collider(this.pelotaRebote, this.nivelNegro ,this.impactoPlataform,null,this);
this.pelotaRebote.setBounce(1);

     this.cursors=this.input.keyboard.createCursorKeys();

//animacion

  }

impactoPlataform(pelotaRebote,nivelNegro) {
 this.Puntuacion.incrementPuntos(1);
 let impactoRelativo=pelotaRebote.x-nivelNegro.x;
 console.log(impactoRelativo);
if(impactoRelativo<0.1 && impactoRelativo>-0.1){
  pelotaRebote.setVelocityX(Phaser.Math.Between(-10,10))
 } else{
    pelotaRebote.setVelocityX(10*impactoRelativo);
  }
}
 
  


update(){
  if (this.cursors.left.isDown){
    this.nivelNegro.setVelocityX(-300);
    this.pelotaRebote.setVelocityX(-300);
  }
  else if(this.cursors.right.isDown){
     this.nivelNegro.setVelocityX(300);
     this.pelotaRebote.setVelocityX(300);
  }
  else {
    this.nivelNegro.setVelocity(0);
    this.pelotaRebote.setVelocityX(0);
  }

if (this.pelotaRebote.y > 600) {
      console.log('fin');
      this.imagenFinal.visible = true;
      this.scene.pause();
    }



    

}
}