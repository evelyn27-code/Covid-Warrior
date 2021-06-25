class Form {

  constructor() {
   // bg2 = loadImage("cityRoad.jpg")
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
    this.title1 = createElement('h4');
    this.button1 = createButton('Play Game');
    this.button2 = createButton('Quiz');
    this.button3 = createButton('Fun Facts Of COVID-19 & Precautions');
    this.title5 = createElement('h3');
    this.button5 = createButton('fever');
    this.button6 = createButton('loss of taste or smell');
    this.button7 = createButton('sore throat');
    this.button8 = createButton('cold');
    
    //this.character = createButton("Boy/Girl");
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title1.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
   
  }
  
  display(){
    this.title.html("COVID WARRIOR");
    this.title.position(displayWidth/2 - 120, 0);
    this.title1.html("SELECT YOUR CHARACTER");
    this.title1.position(displayWidth/2 - 90, displayHeight/2-170);
   // this.character.position(displayWidth/2-40,displayHeight/2-120);
  
    this.input.position(displayWidth/2 - 60 , displayHeight/2 - 230);
    this.button.position(displayWidth/2 +  540, displayHeight/2+180);
    
  

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title1.hide();
      this.greeting.html("Hello " + this.input.value())
      this.greeting.position(displayWidth/2 - 70, displayHeight/4-90);
      this.button1.position(displayWidth/2-30 , displayHeight/2-110);
      this.button2.position(displayWidth/2-15, displayHeight/2-40);
      this.button3.position(displayWidth/2-105 , displayHeight/2+30);
    });

    if(gameState === "B"){
    this.button1.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title1.hide();
      this.greeting.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
     
   
      ground.visible = true;
      boy1 = createSprite(displayWidth/4-80,displayHeight/2+150,100,100)
      boy1.addAnimation("running",boy_running)
      boy1.scale = 0.4;
      boy.destroy()
      console.log(gameState);
     
   

    });
  }

  if(gameState === "G"){
    this.button1.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title1.hide();
      this.greeting.hide();
      this.button1.hide();    
      this.button2.hide();
      this.button3.hide();
     ground.visible = true;
      girl1 = createSprite(displayWidth/4-80,displayHeight/2+130,100,100)
      girl1.addAnimation("running",girl_running)
      girl1.scale = 0.4;
      //girl1.collide(invisibleGround);
      girl.destroy()
      console.log(gameState);
     
      if(keyDown("space")) {
        girl1.velocityY = -5;
        girl1.velocityX = 0;
        

      }
     // girl1.velocityY = girl1.velocityY+0.5;

    });
  }


  if(gameState === "G"){
  this.button2.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    this.title1.hide();
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
   
 
   
   this.title5.html("1. Which of these is not a common symptom of COVID-19?");
   this.title5.position(displayWidth/2-500, displayHeight/2-250);

   this.button5.position(displayWidth/2-430 , displayHeight/2-160);
   this.button8.position(displayWidth/2-265, displayHeight/2-160);
   this.button7.position(displayWidth/2-450 , displayHeight/2-100);
   this.button6.position(displayWidth/2-305 , displayHeight/2-100);
   
   this.button5.mousePressed(()=>{
     //text("Oops got it wrong. The correct answer is Cold.", 500,500)
    // text("Most common symptoms are  fever,dry cough, tiredness",100,600)
     
    
    /*
     Less common symptoms:
     aches and pains
     sore throat
     diarrhoea
     conjunctivitis
     headache
     loss of taste or smell
     a rash on skin, or discolouration of fingers or toes
     Serious symptoms:
     difficulty breathing or shortness of breath
     chest pain or pressure
     loss of speech or movement
     Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.
     People with mild symptoms who are otherwise healthy should manage their symptoms at home.
*/
 
  });

  });
  }
  }
}
