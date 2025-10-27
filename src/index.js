
import { Game } from './game.js';
import { EscenaA } from './escenas/escenaA.js';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  scene: [Game,EscenaA],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);