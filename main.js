import TitleScreen from './scenes/TitleScreen.js'

var gameWidth = 64;
var gameHeight = 64;

var config = {
    type: Phaser.AUTO,
    parent: 'game_window',
    pixelArt: true,
    antialias: false,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      width: gameWidth,
      height: gameHeight,
      min: {
        width: 64,
        height: 64,
      },
      max: {
        width: 448,
        height: 448
      }
    },
    scene:
      [TitleScreen],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    }
  };

  var game = new Phaser.Game(config);