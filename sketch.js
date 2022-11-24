var inimigoImg, inimigo;
var inimigo1Img, inimigo1;
var playerImg, player;
var socoImg, soco;
var emeraldImg, emerald;
var vida = 10;
var gamestate = "PLAY";

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  inimigoImg= loadImage("sprites/inimigo.png");
  inimigo1Img= loadImage("sprites/inimigo1.png");
  playerImg= loadImage("sprites/player.png");
  socoImg= loadImage("sprites/soco.png");
  emeraldImg = loadImage("sprites/emerald.png")

  emerald = createSprite(600,535,10,10)
  emerald.addImage(emeraldImg)
  emerald.scale = 2

  inimigo = createSprite(200,535,10,10)
  inimigo.addImage(inimigoImg)

  player = createSprite(600,535,10,10)
  player.addImage(playerImg)

  chao = createSprite(width/2,height-10,width,10)
}

function draw() {
  background(220);
  drawSprites();

  player.collide(chao)

  textSize(24);
  fill("red");
  textFont("Impact");
  text("Vida = "+vida, 10, 25);

if (gamestate === "PLAY")
{
  inimigo.visible = true;
  player.visible = true;
  emerald.visible = true;

  if(vida == 0)
  {
    gamestate = "END";
  }

  if(keyDown("right"))
  {
    player.x = player.x + 5;
    
  }

  if(keyDown("left"))
  {
    player.x = player.x - 5;
    
  }

  if(keyDown("up"))
  {
    player.y = player.y - 12;
    
  }
  player.velocityY = player.velocityY + 0.8

 inimigo.velocityX = 2;

 if(inimigo.isTouching(player))
    {
      
      vida = vida -1;
    }

    

  }
  

  else if (gamestate === "END")
  {
    inimigo.visible =false;
    player.visible =false;
    emerald.visible =false;
  }

  if(mousePressedOver(restart)) {
    reset();
  }

  function reset()
  {
  

  }

  


}
