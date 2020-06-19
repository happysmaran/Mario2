var bgimg, marioimg, marioDeadimg, marioHeadImg, groundimg, bulletimg, cloudimg, coinimg, gameOverimg, pipesimg, restartimg, textimg, enem1img, enemy2img;
var mario, ground;

function preload(){
    marioimg=loadAnimation("mario1.png","mario2.png");
    marioDeadimg=loadImage("mario_dead.png");
    marioHeadimg=loadImage("mario-head.png");
    groundImg=loadImage("ground.png");
    bulletimg=loadImage("bullet.png");
    bgimg=loadImage("bg.png");
    pipesimg=loadImage("pipes.png");
    cloudimg=loadImage("cloud.png");

}
function setup(){
    createCanvas(2000,1000);
    mario=createSprite(100,100,40,40);
    mario.addAnimation("mario", marioimg);

    mario.scale=0.8;

    ground=createSprite(1100,965,2000,20);

    invi=createSprite(1000,950,2000,5);
    invi.visible=false;

    ground.addImage("gnd",groundImg);

    console.log(displayWidth);

}
function draw(){
    background(bgimg);

    if(keyDown(UP_ARROW)){
        mario.velocityY=mario.velocityY-6;

        
    }

    spawnCloud();
    spawnPipes();

    if(keyDown(RIGHT_ARROW)){
      ground.velocityX=-8;

      if(ground.x<700){
        ground.x=ground.width/2;
      }
    }else{
      ground.velocityX=0;
    }

    mario.velocityY=mario.velocityY+3;

    mario.collide(invi);

    drawSprites();
}

function spawnCloud(){
    
    if(frameCount%60===0){
        var cloud=createSprite(2500,random(700,0),200,200);
        cloud.addImage("c", cloudimg);

        cloud.scale=3;

        cloud.velocityX=-4;
    }
}

function spawnPipes(){
    
    if(frameCount%120===0){
        var pipe=createSprite(2500,900,200,200);
        pipe.addImage("p", pipesimg);

        pipe.velocityX=-8;
    }
}