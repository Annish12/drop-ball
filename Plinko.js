class Plinko extends BaseClass {
    constructor(x,y,radius){
      super(x,y,radius);
    }
  
    display() {
    super.display();

    for(var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,75));
    }

    for(var j = 15; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,175));
    }

    for(var j = 90; j <=width+10; j=j+50){
      plinkos.push(new Plinko(j,275));
    }

    for(var j = 15; j <=width/10; j=j+50){
      plinkos.push(new Plinko(j,375));
    }
      
      
    }
  }
  