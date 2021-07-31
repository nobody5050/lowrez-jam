class TitleScreen extends Phaser.Scene{
  constructor(config){
    super({key: 'TitleScreen'})
  }
  preload(){
    this.load.image('title', 'assets/title.png');
  }
  create(){
    this.add.image(0, 0, 'title').setOrigin(0);
  }
  update(){
  //empty
  }
}

export default TitleScreen