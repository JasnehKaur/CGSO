var car, car2, car3, car4;
var wall, wall2, wall3, wall4, wall5, wall6, wall7;
var speed, wheight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(1450, 50, 30, 30);
  car2 = createSprite(1450, 150, 30, 30);
  car3 = createSprite(1450, 250, 30, 30);
  car4 = createSprite(1450, 350, 30, 30);

  wall = createSprite(1500, 50, 30, 70);
  wall2 = createSprite(1500, 150, 30, 70);
  wall3 = createSprite(1500, 250, 30, 70);
  wall4 = createSprite(1500, 350, 30, 70);
  wall5 = createSprite(800, 100, 1600, 10);
  wall6 = createSprite(800, 200, 1600, 10);
  wall7 = createSprite(800, 300, 1600, 10);
  wall8 = createSprite(0, 200, 10, 400);
  wall9 = createSprite(1600, 200, 10, 400);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0);  
   
  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;

  wall.shapeColor = "blue";
  wall2.shapeColor = "blue";
  wall3.shapeColor = "blue";
  wall4.shapeColor = "blue";
  wall5.shapeColor = "white";
  wall6.shapeColor = "white";
  wall7.shapeColor = "white";
  wall8.shapeColor = 'white';
  wall9.shapeColor = "white";

  car.bounceOff(wall8);
  car2.bounceOff(wall8);
  car3.bounceOff(wall8);
  car4.bounceOff(wall8);
  car.bounceOff(wall9);
  car2.bounceOff(wall9);
  car3.bounceOff(wall9);
  car4.bounceOff(wall9);

  if(wall.x-car.x < (car.width + wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5 * weight * speed* speed/22500;
     if(deformation > 180){
        car.shapeColor = color(255,0,0);
     }
     if(deformation < 180 && deformation > 100){
       car.shapeColor = color(230,230,0);
     }
     if(deformation < 100){
       car.shapeColor = color(0,255,0);
     }
  }

  if(wall.x-car2.x < (car2.width + wall.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation > 180){
       car2.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car2.shapeColor = color(0,255,0);
    }
 }

 if(wall.x-car3.x < (car3.width + wall.width)/2){
  car3.velocityX = 0;
  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation > 180){
     car3.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100){
    car3.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
    car3.shapeColor = color(0,255,0);
  }
}

if(wall.x-car4.x < (car4.width + wall.width)/2){
  car4.velocityX = 0;
  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation > 180){
     car4.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100){
    car4.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
    car4.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}