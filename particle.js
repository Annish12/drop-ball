class Particle extends BaseClass(){
    constructor(x,y,radius){
      super(x,y,radius);
        this.color = shapeColor("green");
    }

    display(){
      super.display();
      this.body = Bodies.circle(x,y.this.radius,options);
      this.color = color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body); 
      
      for(var l = 0; l< particles.length; l++){
        particles[l].display();
      }

  
      
    }
}