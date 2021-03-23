var movingrect,fixedrect

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="orange";
  fixedrect = createSprite(600,200,100,50);
  fixedrect.shapeColor="orange";
}

function draw() {
  background("lightblue");  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+ fixedrect.width/2 &&
    fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2+ fixedrect.height/2 &&
    fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2){
      
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
  else{
    movingrect.shapeColor="orange";
    fixedrect.shapeColor="orange";
  }
  drawSprites();
}