class Paper {
    constructor(){
        var options = {
            restitution: 0.3,
            friction: 2,
            density: 1.2,
            isStatic: false,
        }
        this.body = Bodies.rectangle(85, 60, 100, 160, options);
        this.x = 85;
        this.y = 60;
        this.image = loadImage("paper.png");
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 70, 70);
        pop();
    }
};