class Trash {
    constructor(x, y, width, height) {
        var options = {
           isStatic: true 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("trash.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("black");
        imageMode(CENTER);
        image(this.image, 520, 410, 150, 150);
        pop();
      }
};