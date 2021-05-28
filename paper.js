class Paper {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y, 25, options);
      this.image=loadImage("paper.png");
      this.r=50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
        
      pop();
    };
  };
  