function setup() {
  createCanvas(400, 400);
}

function draw() {
  //bg
  background(238, 238, 238);
  //text size
  textSize(30);
  
  //bottom rectangle
  fill("blue");
  rect(0,200, 600, 200);
  text("Welcome to Activites For Us", 10, 30);
  
  textSize(70);
  //pufferfish
  text("🐡", 10, 200);
  //fish
  text("🐠", 150, 200);
  //whale
  text("🐋", 300, 200);
  
  //pointer
  textSize(30);
  text("👆", mouseX, mouseY);
  
  
}
