
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);

	paper = new Paper();

	trash1 = new Trash(200, 200, 1, 100);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(255);

	ground.display();
	paper.display();
	trash1.display();
	drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:650, y:-900});
	}
};
