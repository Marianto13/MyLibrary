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