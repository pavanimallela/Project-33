const Engine = Matter.Engine,
World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var count = 0;

var gameState = "play";

var particle;

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  particle = new Particle(mouseX,10,10,10);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 

function draw() {
  background(0);
  textSize(20);
  text("500",25,550);
  text("500",100,550);
  text("500",185,550);
  text("500",260,550);
  text("100",335,550);
  text("100",420,550);
  text("100",495,550);
  text("200",580,550);
  text("200",665,550);
  text("200",750,550);

  Engine.update(engine);

  textSize(20);
  noStroke();
  text("Score : "+score,20,30);
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();

    // particle.display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
    /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
  
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }

         else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
     }
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }


   /*if (turn>=5)
   {
       gameState = "end";
   }*/

   //console.log("hey"+gameState);

   

   stroke(255,255,0);
   strokeWeight(4);
   line(0,450,800,450);
   
   
}

function mousePressed(){
  if (gameState!=="end"){

     count++;

     //console.log(turn);
     particle= new Particle(mouseX,10,10,10);
     
     
    }
}
