var garden,rabbit;
var gardenImg,rabbitImg;
var appleGroup,leafGroup,orangeLeafGroup,redLeafGroup;
var appleImg,leafImg,orangeImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// background garden
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = createGroup();
leafGroup = createGroup();
orangeLeafGroup = createGroup();
redLeafGroup = createGroup();
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //rabbit follows the mouse
  rabbit.x = mouseX;

  //call the functions
  spawnApples();
  spawnLeaves();
  spawnOrange();
  spawnRed();

  

  drawSprites();
}

function spawnApples() {
  if(frameCount%80 == 0) {
    var apple = createSprite(200,30,50,50);
    apple.x = Math.round(random(10,390));
    apple.addImage("apple",appleImg);
    apple.scale = 0.05;
    apple.velocityY = 4;
    apple.lifetime = 80;
    
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+2;
    if(appleGroup.isTouching(rabbit)) {
      apple.destroy();
    }
    appleGroup.add(apple);
  }
}

function spawnLeaves() {
  if(frameCount%80 == 0) {
    var leaf = createSprite(200,30,50,50);
    leaf.x = Math.round(random(10,390));
    leaf.addImage("leaf",leafImg);
    leaf.scale = 0.05;
    leaf.velocityY = 4;
    leaf.lifetime = 80;
    
    leaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+2;
    if(leafGroup.isTouching(rabbit)) {
      leaf.destroy();
    }
    leafGroup.add(leaf);
  }
}

function spawnOrange() {
  if(frameCount%80 == 0) {
    var orangeLeaf = createSprite(200,30,50,50);
    orangeLeaf.x = Math.round(random(10,390));
    orangeLeaf.addImage("orangeLeaf",orangeImg);
    orangeLeaf.scale = 0.05;
    orangeLeaf.velocityY = 4;
    orangeLeaf.lifetime = 80;
    orangeLeaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+2;
    
    if(orangeLeafGroup.isTouching(rabbit)) {
      orangeLeaf.destroy();
    }
    orangeLeafGroup.add(orangeLeaf);
  }
}

function spawnRed() {
  if(frameCount%80 == 0) {
    var redLeaf = createSprite(200,30,50,50);
    redLeaf.x = Math.round(random(10,390));
    redLeaf.addImage("redLeaf",redImg);
    redLeaf.scale = 0.05;
    redLeaf.velocityY = 4;
    redLeaf.lifetime = 80;
    
    redLeaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+2;
    if(redLeafGroup.isTouching(rabbit)) {
      redLeaf.destroy();
    }
    redLeafGroup.add(redLeaf);
  }
}