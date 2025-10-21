export class Puntuacion{
    constructor(scene){
        this.relatedScene=scene;
        this.score=0;
    }

    createTexto(){
    this.scoreText = this.relatedScene.add.text(16, 16, 'PUNTOS: 0', { 
  fontSize: '20px', 
  fill: '#fff', 
  fontFamily: 'verdana, arial, sans-serif' 
});

    }

    incrementPuntos(points){
        this.score=points;
         this.scoreText.setText('PUNTOS:' + this.score);
}
    }
