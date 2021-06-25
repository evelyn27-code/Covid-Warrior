var PLAY = 1;
var END = 0;
var START = 2;
var RESTART = 3;
var VACCINE = 4;
var DELIVER = 5;
var END2 = 6;
var gameState = START;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var sanitizerGroup, sanitizerImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var houseGroup, house1, house2, house3, house4, house5, house6,house7,house8,house8,house9;

var score=0;
var sanitizer=0;
var vaccineNo = 0;
var life = 0;
var houses = 0;

var gameOver, restart;

var bg;
var canvas, backgroundImage;

var form, player, game;

var ground,invisibleGround;

var boy,boyImage,boy1;
var girl,girlImage,girl1;

var bg1,bg2;
var girl_running;
var boy_running;

var vaccination,vaccinationImage;
var hospital,hospitalImage;

var done,doneImage;
var InvisibleWall;

var mission_successful,mission_successful;
var mission_failedImage,mission_successfulImage;

var backgroundd;
var write,writeImage;



function preload(){
  trex_running =   loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  doneImage = loadImage("done.png");
  
  cloudImage = loadImage("masks.png");
  sanitizerImage = loadImage("sanitizer3.jpg");
  vaccinationImage = loadImage("vaccinatiobn.jpg");
  hospitalImage = loadImage("hospital.jpg");

  writeImage = loadImage("white back.jpg");

  roadImage = loadImage("road.jpg");

  obstacle1 = loadImage("corona 1.jpg");
  obstacle1.scale = 0.01;

  obstacle2 = loadImage("corona 2.jpg");
  obstacle2.scale = 0.01;

  obstacle3 = loadImage("corona 3.jpg");
  obstacle3.scale = 0.01;

  obstacle4 = loadImage("corona 4.jpg");
  obstacle4.scale = 0.01;
  
  obstacle5 = loadImage("corona 5.jpg");
  obstacle5.scale = 0.01;

   
  house1 = loadImage("House1.jpg");
  house1.scale = 0.01;

  house2 = loadImage("House2.jpg");
  house2.scale = 0.01;

  house3 = loadImage("House3.jpg");
  house3.scale = 0.01;

  house4 = loadImage("House4.jpg");
  house4.scale = 0.01;
  
  house5 = loadImage("House5.jpg");
  house5.scale = 0.01;

  house6 = loadImage("House6.jpg");
  house6.scale = 0.01;

  house7 = loadImage("House7.jpg");
  house7.scale = 0.01;
  
  house8 = loadImage("House8.jpg");
  house8.scale = 0.01;

  house9 = loadImage("House9.jpg");
  house9.scale = 0.01;

 // obstacle6 = loadImage("corona 6.jpg");
  bg = loadImage("cityRoad.jpg");
  bg2 = loadImage("sky1.jpg");

  mission_successful = loadImage("mission succesful2.jpg");
  mission_failed = loadImage("missionfailed.jpg");
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");

  boyImage = loadImage("yellow boy.jpg");
  girlImage = loadImage("girl.jpg");
 // bg1 = loadImage("city.jpg");
 // bg2 = loadImage("cityRoad.jpg");
  
  girl_running = loadAnimation("girl1.jpg","girl2.jpg","girl3.jpg","girl4.jpg","girl5.jpg","girl6.jpg","girl7.jpg","girl8.jpg");
  boy_running = loadAnimation("boy1.jpg","boy2.jpg","boy3.jpg","boy4.jpg","boy5.jpg","boy6.jpg","boy7.jpg","boy8.jpg")
  girl_collided = loadImage("girl1.jpg")
  boy_collided = loadImage("boy1.jpg")
}

function setup() {
      createCanvas(displayWidth, displayHeight);
      
      trex = createSprite(185,543,20,50);
    
      trex.addAnimation("running", girl_running);
      trex.addAnimation("collided", girl_collided);
      trex.scale = 0.4;
      
      ground = createSprite(0,738,3000,200);
      ground.x = ground.width/2 ;
     // ground.shapeColor = "rgb(48,52,55)";
     ground.addImage(roadImage);
     ground.scale = 4.9;
    
      //girl = createSprite(50,300,20,50);
     // girl.addAnimation("collided", girl_collided);
    //  girl.scale = 0.2;

    //  boy = createSprite(150,300,20,50);
    //  boy.addAnimation("collided", boy_collided);
    //  boy.scale = 0.2;
    // ground.velocityX = -(6 + 3*score/100);


    // ground.velocityX = -2;
      gameOver = createSprite(camera.position.x-10,200);
      gameOver.addImage(gameOverImg);
      
      restart = createSprite(camera.position.x-10,340);
      restart.addImage(restartImg);

      //backgroundd = createSprite(camera.position.x+500,330);
     // backgroundd.addImage(bg);
  //   / backgroundd.scale = 3.86;
    //  backgroundd.depth = trex.depth-1

    

      InvisibleWall =createSprite(camera.position.x-500,340,10,500);
      
      

    // vaccination = createSprite(camera.position.x-10,340);
    // vaccination.addImage(restartImg);

      hospital = createSprite(10000,240,10,30);
      hospital.addImage(hospitalImage);
      hospital.scale = 1.7;
      
      gameOver.scale = 1;
      restart.scale = 1;

      gameOver.visible = false;
      restart.visible = false;
      
      invisibleGround = createSprite(200,635,400,10);
      invisibleGround.visible = false;
      
      cloudsGroup = new Group();
     // sanitizerGroup = new Group();
      vaccinationGroup = new Group();
      obstaclesGroup = new Group();
      houseGroup = new Group();
      
      score = 0;
      //sanitizer= 0;
      vaccineNo = 0;
      life = 0;
      houses = 0;
  

  
}

function draw() {
  background(255);
     // trex.debug = true;
     // background(bg);
      textSize(20);
      fill("black")
      text("INSTRUCTIONS- ",50,50 );
      text("TO HELP THE GIRL GET VACCINATION MAKE HER WEAR 2 MASKS FOR PROTECTION AND SANITIZE HER HANDS. ",50,100);
      text("PRESS'SPACE TO JUMP' ",50,150);
      text("IF YOU HAVE 2 MASKS AND SANITIZE 1 TIME THEN YOU HAVE 1 LIFE. ",50,200);
      text("PRESS ON THE PLAYER TO GET STARTED. ",50,300);

      InvisibleWall.visible = "true";
      InvisibleWall.x =  camera.position.x-690;
      
      InvisibleWall.depth = ground.depth+1;
      trex.depth = ground.depth+1;

      if(gameState === START){
         trex.changeAnimation("collided", girl_collided);

      }
  
      invisibleGround.x = camera.position.x-500;

      if(mousePressedOver(trex)){
         gameState = PLAY;
      }

      if(mousePressedOver(trex) && hospital.isTouching(trex)){
          gameState = VACCINE;
          hospital.destroy();
          done.destroy();
      }


      //if (backgroundd.x <camera.position.x-500){
     //   backgroundd.x = camera.position.x;         
    //  }   

      if (gameState===PLAY){
        background(bg);
            textSize(25);
            fill("black")
            text("MASKS: "+ score, camera.position.x+500,200);
           // text("SANITIZER: "+ sanitizer, camera.position.x+240,200);

          trex.changeAnimation("running", girl_running);

            if(trex.isTouching(cloudsGroup)){        
                  cloudsGroup.destroyEach()
                  score = score+1;             
            }

          

           // if(trex.isTouching(sanitizerGroup)){         
            //    sanitizerGroup.destroyEach()
              //  sanitizer = sanitizer+1;          
          //  }

            trex.x = camera.position.x-500;
            camera.position.x = camera.position.x+13
            invisibleGround.x = camera.position.x-500;

            if(keyDown("space") && trex.y >= 525) {
              trex.velocityY = -15;
            }
          
            trex.velocityY = trex.velocityY + 0.8
          
            if (ground.x <camera.position.x-500){
              ground.x = camera.position.x;         
            }

            trex.collide(invisibleGround);

            spawnClouds();
            spawnObstacles();
            //spawnSanitizer();
            

            if(obstaclesGroup.isTouching(trex) && score<2){
                gameState = END;
            }

              if(hospital.isTouching(trex) ){
                    gameState = RESTART;
                    //sanitizerGroup.destroyEach()
                    obstaclesGroup.destroyEach();
                    cloudsGroup.destroyEach()
                    trex.x = camera.position.x+600
                    done = createSprite(camera.position.x+543,480);
                    done.addImage(doneImage);
                    done.scale = 0.1   
                    write = createSprite(camera.position.x+100,180);
                    write.addImage(writeImage); 
              }

            if(obstaclesGroup.isTouching(trex) && score >= 2 ){
                obstaclesGroup.destroyEach();
                score = score-2;
               // sanitizer = sanitizer-1;
          }

          }

  else if (gameState === END) {
    background(bg);
      gameOver.visible = true;
      restart.visible = true;
      gameOver.x = camera.position.x-10;
      restart.x =  camera.position.x-10;
      
      console.log(gameState);
      trex.velocityY = 0;
    
      
      //change the trex animation
      trex.changeAnimation("collided",girl_collided);
      
      //set lifetime of the game objects so that they are never destroyed
      obstaclesGroup.setLifetimeEach(-1);
      cloudsGroup.setLifetimeEach(-1);
     // sanitizerGroup.setLifetimeEach(-1);
      
      
      

      if(mousePressedOver(restart)) {
        reset();
        hospital.x = hospital.x+5000;
      }
  }

  else if (gameState === RESTART) {
    background(bg2);
   
      
    gameOver.visible = true;
      restart.visible = true;
      gameOver.x = camera.position.x-10;
      restart.x =  camera.position.x-10;
      
      console.log(gameState);
      trex.velocityY = 0;
    // obstaclesGroup.setVelocityXEach(0);
      //cloudsGroup.setVelocityXEach(0);
      
      //change the trex animation
      trex.changeAnimation("collided",girl_collided);
      
      //set lifetime of the game objects so that they are never destroyed
      obstaclesGroup.setLifetimeEach(-1);
      cloudsGroup.setLifetimeEach(-1);
      //sanitizerGroup.setLifetimeEach(-1);
      vaccinationGroup.setLifetimeEach(-1);
      houseGroup.setLifetimeEach(-1);
    
      if(mousePressedOver(restart)) {
        reset2();
        hospital.x = hospital.x+5000;
     }
  }
  /*
   if (gameState === RESTART) {
    gameOver.visible = true;
      restart.visible = true;
      gameOver.x = camera.position.x-10;
      restart.x =  camera.position.x-10;
      
      console.log(gameState);
      trex.velocityY = 0;
    // obstaclesGroup.setVelocityXEach(0);
      //cloudsGroup.setVelocityXEach(0);
      
      //change the trex animation
      trex.changeAnimation("collided",girl_collided);
      
      //set lifetime of the game objects so that they are never destroyed
      obstaclesGroup.setLifetimeEach(-1);
      cloudsGroup.setLifetimeEach(-1);
      //sanitizerGroup.setLifetimeEach(-1);
      vaccinationGroup.setLifetimeEach(-1);
      houseGroup.setLifetimeEach(-1);
    
      if(mousePressedOver(restart)) {
        reset2();
        hospital.x = hospital.x+5000;
     }
     */
    //}


    if (gameState === END2) {
      background(bg2);
      background(mission_successful);
      ground.visible = false;
      gameOver.visible = false;
      restart.visible = false;
      gameOver.x = camera.position.x-10;
      restart.x =  camera.position.x-10;
      
      console.log(gameState);
      trex.velocityY = 0;
    
      
      //change the trex animation
      trex.changeAnimation("collided",girl_collided);
      
      //set lifetime of the game objects so that they are never destroyed
      obstaclesGroup.setLifetimeEach(-1);
      cloudsGroup.setLifetimeEach(-1);
     // sanitizerGroup.setLifetimeEach(-1);
      
      
      

      if(mousePressedOver(restart)) {
        reset();
        hospital.x = hospital.x+5000;
      }
  }







  
  if (gameState===VACCINE){
    write.visible = false;
    background(bg2);
    gameOver.visible = false;
    restart.visible =false;
    textSize(25);
    fill("black")
    text("MASKS: "+ score, camera.position.x+300,200);
    //text("SANITIZER: "+ sanitizer, camera.position.x+270,200);
    text("VACCINES: "+ vaccineNo, camera.position.x+450,200);
   // text("LIFE: "+ life, camera.position.x,200);

  trex.changeAnimation("running", girl_running);

      if(trex.isTouching(cloudsGroup)){      
        cloudsGroup.destroyEach()
        score = score+1;      
      }



     // if(trex.isTouching(sanitizerGroup)){      
       // sanitizerGroup.destroyEach()
        //sanitizer = sanitizer+1;       
     // }

      if(trex.isTouching(vaccinationGroup)){       
        vaccinationGroup.destroyEach()
        vaccineNo =vaccineNo+1;     
      }


      trex.x = camera.position.x-500;
        camera.position.x = camera.position.x+13
      
        
        invisibleGround.x = camera.position.x-500;
        if(keyDown("space") && trex.y >= 525) {
          trex.velocityY = -15;
    }
      
      

      //if(keyDown("space")) {
      //     trex.velocityY = -15;
      //    }
        
        trex.velocityY = trex.velocityY + 0.8
      
        if (ground.x <camera.position.x-500){
          ground.x = camera.position.x;
          
        }

        trex.collide(invisibleGround);
        spawnClouds();
        spawnObstacles();
        //spawnSanitizer();
        spawnVaccination();

        if(obstaclesGroup.isTouching(trex) && score<2 ){
            gameState = RESTART;
        }

      
       if(houseGroup.isTouching(trex)){
         vaccineNo= vaccineNo-1;
         houseGroup.destroyEach();       }
         
        if(obstaclesGroup.isTouching(trex) && score>2 ){
          obstaclesGroup.destroyEach();
          score = score-2;
       }

      if(obstaclesGroup.isTouching(trex) && score===2 ){
        obstaclesGroup.destroyEach();
       score = score-2;
      sanitizer = sanitizer-1;
      life = life+1;
    }

    //if(vaccinationGroup.isTouching(InvisibleWall)){
    //  vaccineNo = vaccineNo+1;
    //  vaccinationGroup.destroyEach()
   // }


    if(vaccineNo >= 5){
     // spawnHouses()
     // vaccinationGroup.destroyEach();
      gameState = DELIVER;
    }




  }


  if (gameState===DELIVER){
    background(bg2);
    gameOver.visible = false;
    restart.visible =false;
    textSize(25);
    fill("black")
   // text("MASKS: "+ score, camera.position.x+300,200);
    //text("SANITIZER: "+ sanitizer, camera.position.x+270,200);
    text("VACCINES: "+ vaccineNo, camera.position.x+400,200);
   // text("LIFE: "+ life, camera.position.x,200);

  trex.changeAnimation("running", girl_running);

      trex.x = camera.position.x-500;
        camera.position.x = camera.position.x+13
      
        
        invisibleGround.x = camera.position.x-500;
        trex.velocityY = trex.velocityY + 0.8

      
        if (ground.x <camera.position.x-500){
          ground.x = camera.position.x;
          
        }

        trex.collide(invisibleGround);
      
       spawnHouses()

     

      
       if(houseGroup.isTouching(trex)){
         vaccineNo= vaccineNo-1;
         houseGroup.destroyEach();   
         houses = houses+1;
            }

         if(houses === 5 && vaccineNo >0){
           fill("black");
           textSize(40);
          text("MISSION FAILED",400,300);
          gameState = END2;
          background(mission_failed);
        
        }
        if(houses === 5 && vaccineNo ===0){
          fill("black");
          textSize(40);
          text("MISSION SUCCESSFUL",400,300);
          gameState = END2;
          
          
        }

  }

  


  
  
  drawSprites();
}












function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var cloud = createSprite(camera.position.x+650,520,40,10);
    cloud.y = Math.round(random(300,500));
    cloud.addImage(cloudImage);
    cloud.scale = 0.2;
    
    
     //assign lifetime to the variable
    cloud.lifetime = 1500;
    
    //adjust the depth
    cloud.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

/*
function spawnSanitizer() {
  //write code here to spawn the clouds
  if (frameCount % 350 === 0) {
    var sanitizer = createSprite(camera.position.x+650,520,40,10);
    sanitizer.y = Math.round(random(300,500));
    sanitizer.addImage(sanitizerImage);
    sanitizer.scale = 0.1;
    
    
     //assign lifetime to the variable
     sanitizer.lifetime = 1500;
    
    //adjust the depth
    sanitizer.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    sanitizerGroup.add(sanitizer);
  }
  
}
*/


function spawnObstacles() {
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(camera.position.x+650,585,10,40);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1;
    obstacle.lifetime = 1500;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}



function spawnVaccination() {
  //write code here to spawn the clouds
  if (frameCount % 450 === 0) {
    var vaccination = createSprite(camera.position.x+650,520,40,10);
    vaccination.y = Math.round(random(300,500));
    vaccination.addImage(vaccinationImage);
    vaccination.scale = 0.1;
    
    
     //assign lifetime to the variable
     vaccination.lifetime = 1500;
    
    //adjust the depth
    vaccination.depth = trex.depth+1;
    //vaccinatione.depth = .depth+1;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    vaccinationGroup.add(vaccination);
  }
  
}






function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
 
  console.log(trex.x);
  
  score = 0;
  vaccineNo = 0;
  //sanitizer = 0;
  
}

function reset2(){
  gameState = VACCINE;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
 
  console.log(trex.x);
  
  score = 0;
  vaccineNo = 0;
 // sanitizer = 0;
  
}

function spawnHouses() {
  if(frameCount % 200 === 0) {
    var house = createSprite(camera.position.x+650,400,10,40);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: house.addImage(house1);
              break;
      case 2: house.addImage(house2);
              break;
      case 3: house.addImage(house3);
              break;
      case 4: house.addImage(house4);
              break;
      case 5: house.addImage(house5);
              break;
      case 5: house.addImage(house6);
              break;
      case 5: house.addImage(house7);
              break;
      case 5: house.addImage(house8);
             break;
     case 5: house.addImage(house9);
             break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    house.scale = 5;
    house.lifetime = 1500;
    //add each obstacle to the group
    houseGroup.add(house);
  }
}

