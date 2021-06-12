var movingRect, fixedRect;
function setup() {
  createCanvas(1000,700);
  //createSprite(400, 200, 50, 50);
  
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


 // fixedRect1 = createSprite(800, 400, 50, 80);
  //fixedRect1.shapeColor = "PURPLE";
  //fixedRect1.debug = true;
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  rectMode(LEFT); 
  drawSprites();
  console.log(" MOVING X :"+(movingRect.x ));
  console.log(" FIXED X :"+(fixedRect.x));
  stroke("blue");
  strokeWeight(4);
  line(fixedRect.x,fixedRect.y,movingRect.x,movingRect.y);
  console.log(" Difference Right X :"+(movingRect.x - fixedRect.x));
  console.log(" Difference Left X :"+(fixedRect.x - movingRect.x));
  console.log(" X1 Width :"+(fixedRect.width/2 + movingRect.width/2));
  console.log(" Difference Right Y :"+(movingRect.y - fixedRect.y));
  console.log(" Difference Left Y :"+(fixedRect.y - movingRect.y));
  console.log(" Y Height :"+(fixedRect.height/2 + movingRect.height/2));
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
  //fixedRect1.velocityY = +5;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 // bounceOff();
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

//isTouching(movingRect, fixedRect);
//isTouching(movingRect, fixedRect1);

/*
if(isTouching(movingRect, fixedRect1)) 
{
  movingRect .shapeColor = "red";
  fixedRect1 .shapeColor = "red";
  bounceOff(movingRect,fixedRect1);
}
else
{
  movingRect.shapeColor = "purple";
  fixedRect1.shapeColor = "purple";
}

if(isTouching(movingRect, fixedRect)) 
{
  
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  bounceOff(movingRect,fixedRect);
}
else
{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
movingRect.shapeColor = "yellow";
*/
fill("blue");
strokeWeight(1);
textSize(30);
text("X DISTANCE :"+movingRect.x+" - "+fixedRect.x+" = "+(movingRect.x - fixedRect.x), 100,100);
fill("purple");
text("WIDTH of MOVING RECTANGLE DIVIDED BY 2 : "+movingRect.width/2, 100,130);
text("WIDTH of FIXED RECTANGLE DIVIDED BY 2 : "+fixedRect.width/2, 100,160);
fill("blue");
//Y DISTANCE
/*
text("Y DISTANCE :"+movingRect.y+" - "+fixedRect.y+" = "+(movingRect.y - fixedRect.y), 100,300);
fill("purple");
text("HEIGHT of MOVING RECTANGLE DIVIDED BY 2 : "+movingRect.height/2, 100,330);
text("HEIGHT of FIXED RECTANGLE DIVIDED BY 2 : "+fixedRect.height/2, 100,360);
fill("LIGHTYELLOW");
strokeWeight(3);
*/
//text("X"+fixedRect.x, fixedRect.x,fixedRect.y);
//text("X"+movingRect.x, movingRect.x,movingRect.y);
//text("movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 : "+movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2, 100,390);
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}
function isTouching(moving, fixed) {
  if (moving.x - fixed .x < fixed .width/2 + moving .width/2
    && fixed.x - moving .x < fixed .width/2 + moving .width/2
    && moving .y - fixed .y < fixed .height/2 + moving .height/2
    && fixed .y - moving .y < fixed .height/2 + moving .height/2) {
  //moving .shapeColor = "red";
  //fixed .shapeColor = "red";
 // bounceOff();
 return true;
}
else {
  //moving .shapeColor = "green";
  //fixed .shapeColor = "green";
  return false;
}
}
