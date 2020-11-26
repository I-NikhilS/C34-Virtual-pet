//Create variables here
var dog, happyDog, database, foodS, foodStock, score;
function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale=.2;
  database=firebase.database();
  foodStock=database.ref('food');
  score=0;
}


function draw() {  
  background(46,139,87);
   drawSprites();
  if(keyWentDown(UP_ARROW)){
    dog.addImage(dogImg1)


  }
  
  //add styles here
  fill("red");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed the Dog Milk",100,100)
  text("score:"+score,400,450);
 
}
function readStock(data){
  foodS=data.val();
  database.ref('/').update({
    food:x
  })
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}