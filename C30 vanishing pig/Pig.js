class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255; //fully visible
  }

  display(){
    //speed of the pig
    console.log(this.body.speed);
 //Keep a threshold value - 3
//speed> 3 - vanish the pig

if(this.body.speed < 3){
  //overriding the display function
  super.display();
}
else{
  //removing the body from the world
  World.remove(world, this.body);
  push();
    //Replace removed pig's position with it's image & also apply transparency
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x, this.body.position.y,50, 50)
pop();
}
  }
};

//colors - 256 shades varying from 0-255 RGB