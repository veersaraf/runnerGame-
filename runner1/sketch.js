var runner, noMaskPpl, ground, groundToJumpOver, virus, chance, upperGround, frameArrNoMask, frameArrRandNoMask, personSneeze;
var frameArrSneezePerson, frameArrRandSneezePerson, sneeze;
var noMaskGrp, sneezeGrp;
var gameState = "play";

frameArrNoMask = [30, 100, 170, 458];
frameArrSneezePerson = [75, 352, 213];
// f = [ 2 3 4 5 6 7 8 9 10 11 ]n 2 touched


function preload()
{
}

function setup()
{
    createCanvas(800, 600);

    ground = createSprite(400, 590, 1600, 20);

    runner = createSprite(100, 500, 50, 50);
    
    ground.velocityX = -2;

    sneezeGrp = new Group();
    noMaskGrp = new Group();
}

function draw()
{
    background(0);
    if(gameState==="play"){
   if(noMaskGrp.isTouching(runner))
    {
        gameState = "lose";
        console.log("it touched");
    } 
    if(sneezeGrp.isTouching(runner) && keyWentUp("Q"))
    {
        gameState = "lose";
        console.log("sneeze");
    } 
    if(keyDown("Q") && sneezeGrp.isTouching(runner))
    {
        for(var i =0; i<10; i++)
        {
            console.log("save");
        }
    }

    frameArrRandNoMask = Math.round(random(0, 3));
    frameArrRandSneezePerson = Math.round(0, 2);

    runner.collide(ground);

    runner.velocityY += 3;


    if(keyDown("F") && runner.y >= 550)
    {
        runner.velocityY = -40;
    }
    if(keyDown("space") && runner.y >= 550)
    {
        runner.velocityY = -30;
    }
   
    if(ground.x<0)
    {
      ground.x = ground.width/2;
    }    
    createNoMaskPpl();
    createUpperGroud();
    createPersonSneeze();
    drawSprites();
}

}

function createNoMaskPpl ()
{
  
    if(frameCount%frameArrNoMask[frameArrRandNoMask]===0)
    {
    noMaskPpl= createSprite(800, 560, 25, 25);
    noMaskPpl.collide(ground);
    noMaskPpl.velocityX = -4;
    noMaskGrp.add(noMaskPpl);
    noMaskPpl.debug = true;


    }

}

function createUpperGroud()
{
    if(frameCount%200===0)
    {
        upperGround = createSprite(800, 360, 300, 20);
        upperGround.velocityX = -3;
    }
}

function createPersonSneeze ()
{
  
    if(frameCount%frameArrSneezePerson[frameArrRandSneezePerson]===0)
    {
        personSneeze = createSprite(800, 560, 25, 25);
        personSneeze.collide(ground);
        personSneeze.velocityX = -4;
        personSneeze.shapeColor = "red";
        sneeze = createSprite(personSneeze.x, personSneeze.y, 10, 10);
        sneeze.velocityX = -6;
        sneezeGrp.add(sneeze);

    }

}