var n1,n2,n3,n4,n5,n6,n7,n8;


function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre
n1=createSprite(45,200,30,150);
n1.shapeColor="blue";
n2=createSprite(115,170,30,90);
n2.shapeColor="blue";
n3=createSprite(80,140,70,30);
n3.shapeColor="blue";
n4=createSprite(80,200,70,30);
n4.shapeColor="blue";
n1=createSprite(200,200,30,150);
n1.shapeColor="blue";
n2=createSprite(270,200,30,150);
n2.shapeColor="blue";
n3=createSprite(250,140,70,30);
n3.shapeColor="blue";
n4=createSprite(250,200,70,30);
n4.shapeColor="blue";
n3=createSprite(370,140,70,30);
n3.shapeColor="blue";
n1=createSprite(370,200,30,150);
n1.shapeColor="blue";
n5=createSprite(470,200,30,150);
n5.shapeColor="blue";
n6=createSprite(540,200,30,150);
n6.shapeColor="blue";
n7=createSprite(500,260,70,30);
n7.shapeColor="blue";
n8=createSprite(500,140,70,30);
n8.shapeColor="blue";
}


function draw() {
  background("black");

  drawSprites();
  
}