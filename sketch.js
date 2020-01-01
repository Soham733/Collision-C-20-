var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 80, 50);
  movingrect=createSprite(600,200,50,80)
fixedrect.shapeColor="blue";
movingrect.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2 +fixedrect.width/2
    && fixedrect.x-movingrect.x< movingrect.width/2 +fixedrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="grey";
    movingrect.shapeColor="grey";
  }
  else{
    fixedrect.shapeColor="blue";
movingrect.shapeColor="blue";
  }
}