var bg,bg2,form,system,code,security;
var score=0;
var tada;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  tada = loadSound("tada.mp3");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    tada.play();
    background(bg2)
    fill("lightgrey")
    textSize(40);
    text("TREASURE UNLOCKED",220, 100);
  }

  drawSprites()
}