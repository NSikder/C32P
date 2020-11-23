class Box {
  constructor(x, y, width, height) {
    var options = {
        'setStatic':false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("wood1.png");
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    if (this.body.speed < 3){
      push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility -= 5;
      tint(255,this.Visibility);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  }
  score(){
    if (this.Visibility<0 && this.Visibility >= -105){
      score++;
      print("score + 1")
    } 
  }
};
