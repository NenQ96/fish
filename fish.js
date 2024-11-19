//1st buttons
let smallerButtonX = 200;
let smallerButtonY = 200;
let smallerButtonRadius = 100; // Radius for the smaller button

let largerButtonX = 550;
let largerButtonY = 200;
let largerButtonRadius = 50; // Radius for the larger button

//2nd button -clicks on the smaller button (yellow)
let yellowButtonX = 550; // X position of the yellow button
let yellowButtonY = 200; // Y position of the yellow button
let yellowButtonRadius = 50; // Radius of the yellow button (half of the width/height)

//3rd button - clicks on the bleu button
let blueButtonX = 100; // X position of the blue button
let blueButtonY = 100; // Y position of the blue button
let blueButtonRadius = 15; // Radius of the blue button (half of the width/height)

function setup() {
  createCanvas(800, 600);
  textFont('Comic Sans MS');
  textSize(12);

  // Create input box and enter button for exercises but hide initially
  inputBox = createInput();
  inputBox.position(280, 400);
  inputBox.size(120);
  inputBox.attribute('placeholder', 'type here');
  inputBox.hide();

  enterButton = createButton('Enter');
  enterButton.position(410, 400);
  enterButton.mousePressed(checkAnswer);
  enterButton.hide();

  drawMainCanvas(); // Draw the main canvas initially
}

function draw() {
  // Only draw elements once per canvas; specific functions handle updates.
}

// Main Canvas Function
function drawMainCanvas() {
  currentCanvas = 'main';
  background(238, 238, 238);
  inputBox.hide();
  enterButton.hide();

  // Header
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Activities For Us", 400, 45);

  // Learn Button
  textSize(300);
  text("🐡", 150, 300);
  textSize(40);
  text("LEARN", 140, 300);

  // Progress Button
  textSize(200);
  text("🐢", 400, 280);
  textSize(40);
 
  // Rewards Button
  textSize(300);
  text("🐋", 660, 300);
  textSize(40);
  text("REWARDS", 640, 300);

  // Settings Button
  textSize(100);
  text("⚙️", 70, 520);
}

// Learn Canvas
function drawLearnCanvas() {
  currentCanvas = 'learn';
  background(238, 238, 238);
  inputBox.hide();
  enterButton.hide();

  // Header
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("EXERCISES", 400, 45);

  // Exercise Buttons
  fill(121, 155, 162);

  // Shape Matching Button
  rect(200, 120, 400, 60, 10);
  fill(255, 255, 0);
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT, CENTER);
  text("Shape Matching >", 220, 150);

  // Counting Button
  fill(121, 155, 162);
  rect(200, 220, 400, 60, 10);
  fill(255, 255, 0);
  text("Counting >", 220, 250);

  // Buttoning Buttons
  fill(121, 155, 162);
  rect(200, 320, 400, 60, 10);
  fill(255, 255, 0);
  text("Buttoning Buttons >", 220, 350);
  textStyle(NORMAL);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// Shape Matching Instructions Canvas
function drawShapeMatchingInstructions(){
  currentCanvas = 'shape_instructions';
  background(238, 238, 238);
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(19, 79, 92);
  text("Let's match some shapes!", 400, 250);
  text("Answer 'yes' if they match and type it into the 'type here' box", 400, 300);

  // The button for starting shape activity
  textSize(100);
  text("▶️", 400, 400);
  
  // Home Button
  textSize(50);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);  
}

// Counting Instructions Canvas
function drawCountingInstructions() {
  currentCanvas = 'counting_instructions';
  background(238, 238, 238);
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(19, 79, 92);
  text("Let's count some shapes!", 400, 250);
  text("Answer 'yes' if they match and type it into the 'type here' box", 400, 300);

  // The button for starting counting activity
  textSize(100);
  text("▶️", 400, 400);
  
  // Home Button
  textSize(50);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);  
}

// Buttoning Buttons Instructions Canvas
function drawButtoningButtonsInstructions() {
  currentCanvas = 'buttons_instructions';
  background(238, 238, 238);
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(19, 79, 92);
  text("Let's learn about buttons", 400, 250);
  text("Click on the button according to the prompt on the screen", 400, 300);

  // Draw the play button (▶️)
  textSize(100);
  text("▶️", 400, 400); 

  // Home Button
  textSize(50);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);  
}

// Shape Matching Exercise Canvas
function drawShapeMatching() {
  currentCanvas = 'shape_matching';
  background(238, 238, 238);
  inputBox.show();
  enterButton.show();

  // Draw shapes
  fill(65,255,0);
  ellipse(250, 200, 200, 150); // G 0val
  fill(65,255,0);
  ellipse(500, 200, 200, 150); // G 0val

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Do these shapes match?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

function drawShapeMatching2(){
  currentCanvas = 'shape_matching2';
  background(197,197,197);
  inputBox.show();
  enterButton.show();
  
  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 2 - MEDIUM", 400, 45);
  
  // Draw shapes
  fill(255, 0, 0);
  rect(200, 200, 55, 40);//red rect
  fill(0,45,255);
  rect(300, 230, 55, 40);//blue rect
  fill(244,255,0);
  rect(400, 200, 55, 40);//yellow rect
  
  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Do these shapes match?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

//LVL 3 - HARD
function drawShapeMatching3() {
  currentCanvas = 'shape_matching3';
  background(135,135,135);
  inputBox.show();
  enterButton.show();
  
  //Level 3
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 3 - HARD", 400, 45);
  
  // Draw shapes
  fill(255,172,0);
  square(150, 200, 55); //orange square
  fill(95,255,0);
  square(250, 200, 55, 20); // green curved square
  fill(255,0,217);
  square(350, 200, 55) //pink square

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Are these all the same shapes?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

//Shape Matching Correct
// lvl 1
function drawCorrectScreenMatch1() {
  currentCanvas = 'correct_match1';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// lvl 2
function drawCorrectScreenMatch2() {
  currentCanvas = 'correct_match2';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// lvl 3
function drawCorrectScreenMatch3() {
  currentCanvas = 'correct_match3';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

//incorrect
// lvl1
function drawIncorrectScreen() {
  currentCanvas = 'incorrect_Match';
  background(255, 200, 200);
  inputBox.hide();
  enterButton.hide();

  fill(255, 0, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("INCORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 120, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("Try Again >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// Microtransaction Screen
function drawRewards() {
  currentCanvas = 'rewards';
  background(255, 200, 200);
  inputBox.hide();
  enterButton.hide();

  fill(200, 100, 100);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("Membership", 400, 150);

  fill(19, 79, 92);
  rect(250, 250, 300, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  text("Premium: Only 130$ a week!!", 400, 270);

  fill(19, 79, 92);
  rect(300, 350, 200, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("BUY NOW !!! >", 400, 370);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}


// Count Exercise L1
function drawCount() {
  currentCanvas = 'count';
  background(238, 238, 238);
  inputBox.show();
  enterButton.show();

background(238, 238, 238);
  inputBox.show();
  enterButton.show();

  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 1 - EASY", 400, 45);

  
  // Draw shapes
  fill(0, 255, 0);
  rect(400, 150, 80, 80); // Green square
  fill(0, 0, 255);
  ellipse(550, 200, 100, 100); // Blue circle

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("How many shapes are on the screen?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}
// Count Exercise L2 
function drawCount2() {
  currentCanvas = 'count2';
  background(197,197,197);
  inputBox.show();
  enterButton.show();

  inputBox.show();
  enterButton.show();

  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 2 - MEDIUM", 400, 45);
  
  // Draw shapes
  fill(255, 0, 0);
  ellipse(250, 200, 100, 100); // Red circle
  fill(0, 255, 0);
  rect(400, 150, 80, 80); // Green square
  fill(0, 0, 255);
  ellipse(550, 200, 100, 100); // Blue circle

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("How many shapes are on the screen?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}
// Count Exercise L3 
function drawCount3() {
  currentCanvas = 'count3';
  background(135,135,135);
  inputBox.show();
  enterButton.show();

  inputBox.show();
  enterButton.show();

  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 3 - HARD", 400, 45);
  
  // Draw shapes
  fill(255, 0, 0);
  ellipse(250, 200, 100, 100); // Red circle
  fill(0, 255, 0);
  rect(400, 150, 80, 80); // Green square
  fill(0, 0, 255);
  ellipse(550, 200, 100, 100); // Blue circle
  fill(255,138,0);
  square(400, 200, 80, 80); //orange triangle 
  fill(0,255,118);
  //rotateY(frameCount * 0.01);
  square(400, 300, 80, 80);
  //teal spinning triangle 

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("How many shapes are on the screen?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

//Counting CORRECTS
// lvl 1
function drawCorrectScreenCount1() {
  currentCanvas = 'correct_count1';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// lvl 2
function drawCorrectScreenCount2() {
  currentCanvas = 'correct_count2';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// lvl 3
function drawCorrectScreenCount3() {
  currentCanvas = 'correct_count3';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// Buttoning Buttons L1
function drawButtons() {
  currentCanvas = 'button';
  background(238, 238, 238);

  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 1 - EASY", 400, 45);

  // Draw the larger red button
  fill(255, 0, 0);
  ellipse(largerButtonX, largerButtonY, 100, 100); // smaller button

  // Draw the smaller red button
  fill(255, 0, 0);
  ellipse(smallerButtonX, smallerButtonY, 200, 200); // larger button
  

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Which button is the largest?", 400, 320);


  // Home Button
  textSize(50);
  textAlign(CENTER, CENTER);
  text("🏠", 100, 500);
}

// Button Exercise L2 
function drawButton2() {
  currentCanvas = 'button2';
  background(197,197,197);

  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 2 - MEDIUM", 400, 45);
  
  // Draw the larger red button (still large)
  fill(255, 0, 0);
  ellipse(550, 200, 300, 300); // Big red button

  // Draw the smaller red button (target button)
  fill(255, 0, 0);
  ellipse(200, 200, 200, 200); // Smaller red button

  // Draw the yellow button (this is the clickable button)
  fill(255, 251, 0);
  ellipse(yellowButtonX, yellowButtonY, 100, 100); // Yellow button
  
  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Which button is the smallest", 400, 320);


  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}
// Button Exercise L3
function drawButton3() {
  currentCanvas = 'button3';
  background(135,135,135);
  
  fill(19,79,92);
  fill(19, 79, 92);
  rect(200, 20, 400, 50, 5);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL 3 - HARD", 400, 45);
  
  // Draw the larger red button
  fill(255, 0, 0);
  ellipse(550, 200, 300, 300); // Big red button

  // Draw the smaller red button
  fill(255, 0, 0);
  ellipse(200, 200, 200, 200); // Smaller red button

  // Draw the yellow button
  fill(255, 251, 0);
  ellipse(550, 200, 100, 100); // Yellow button

  // Draw the green button
  fill(87, 255, 0);
  ellipse(200, 100, 50, 50); // Green button

  // Draw the blue button (this is the clickable button)
  fill(0, 2, 255);
  ellipse(blueButtonX, blueButtonY, 30, 30); // Blue button
  
  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Which button is the smallest", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

function drawCorrectScreenButton1() {
  currentCanvas = 'correct_button1';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// lvl 2
function drawCorrectScreenButton2() {
  currentCanvas = 'correct_button2';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// lvl 3
function drawCorrectScreenButton3() {
  currentCanvas = 'correct_button3';
  background(200, 255, 200);
  inputBox.hide();
  enterButton.hide();

  fill(0, 128, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("CORRECT!!!", 400, 200);

  fill(19, 79, 92);
  rect(350, 300, 100, 40, 5);
  fill(255, 255, 0);
  textSize(20);
  text("NEXT >", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

function checkAnswer() {
  let answer = inputBox.value().toLowerCase().trim();
  
  // Handle shape matching answers
  if (currentCanvas === 'shape_matching' && answer === "yes") {
    drawCorrectScreenMatch1();
    progress = Math.min(progress + 10, 100);
  } else if (currentCanvas === 'shape_matching2' && answer === "no") {
    drawCorrectScreenMatch2();
    progress = Math.min(progress + 10, 100);
  } else if (currentCanvas === 'shape_matching3' && answer === "no") {
    drawCorrectScreenMatch3();
    progress = Math.min(progress + 10, 100);
  } 
  // Handle counting answers
  else if (currentCanvas === 'count' && answer === "2") {
    drawCorrectScreenCount1();
    progress = Math.min(progress + 10, 100);
  } else if (currentCanvas === 'count2' && answer === "3") {
    drawCorrectScreenCount2();
    progress = Math.min(progress + 10, 100);
  } else if (currentCanvas === 'count3' && answer === "5") {
    drawCorrectScreenCount3();
    progress = Math.min(progress + 10, 100);
  }
  else {
    drawIncorrectScreen();
  }
}

// Mouse Pressed Function for Navigation
function mousePressed() {
  if (currentCanvas === 'main' && dist(mouseX, mouseY, 150, 300) < 50) {
    drawLearnCanvas();
  } else if (currentCanvas === 'learn') {
    if (mouseX > 200 && mouseX < 600 && mouseY > 120 && mouseY < 180) {
      drawShapeMatchingInstructions();
    } else if (mouseX > 200 && mouseX < 600 && mouseY > 220 && mouseY < 280) {
      drawCountingInstructions();
    } else if (mouseX > 200 && mouseX < 600 && mouseY > 320 && mouseY < 380) {
      drawButtoningButtonsInstructions();
    }
  }
  
  //rewards
    if (currentCanvas === 'main' && dist(mouseX, mouseY, 660, 300) < 50) {
    drawRewards(); // Transition to rewards (microtransaction)
  }
  
  // Transition buttons to activity
  else if (currentCanvas === 'shape_instructions') {
    if (mouseX > 350 && mouseX < 450 && mouseY > 350 && mouseY < 450) {
      drawShapeMatching(); // Transition to shape matching
    }
  }
  
  // Counting transition to activity
  else if (currentCanvas === 'counting_instructions') {
    if (mouseX > 350 && mouseX < 450 && mouseY > 350 && mouseY < 450) {
      drawCount(); // Transition to counting
    }
  }
  
  // Buttoning buttons transition to activity
  else if (currentCanvas === 'buttons_instructions') {
    if (mouseX > 350 && mouseX < 450 && mouseY > 350 && mouseY < 450) {
      drawButtons(); // Transition to buttoning
    }
  }
  
    // transition buttons to net screen
  else if (currentCanvas === 'correct_match1' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawShapeMatching2(); // Transition to level 2
  }
  // Next button for level 2 - Shape Matching
  else if (currentCanvas === 'correct_match2' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawShapeMatching3(); // Transition to level 3
  }
  // Next button for level 3 - Shape Matching
  else if (currentCanvas === 'correct_match3' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawMainCanvas(); // Return to the main canvas or continue with further activities
  }
  
  else if (currentCanvas === 'correct_count1' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawCount2(); // Transition to level 3
  }
  // Counting - Level 3 -> Main Menu
  else if (currentCanvas === 'correct_count2' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawCount3(); // Return to the main canvas or continue with further activities
  }
    else if (currentCanvas === 'correct_count3' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawMainCanvas(); // Return to the main canvas or continue with further activities
  }
  
else if (currentCanvas === 'correct_button1' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
  drawButton2(); // This could transition to Level 3 or another canvas
}
// Return to Main Menu or continue further activities
else if (currentCanvas === 'correct_button2' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
  drawButton3(); // This could either return to the main menu or trigger another action
}
  else if (currentCanvas === 'correct_button3' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
   drawMainCanvas(); // This could either return to the main menu or trigger another action
}
  
  
  //BUTTON PRESSES 
  let d = dist(mouseX, mouseY, smallerButtonX, smallerButtonY);
  if (d < smallerButtonRadius) {
    drawCorrectScreenButton1(); // Call the function when the smaller button is clicked
    progress = Math.min(progress + 10, 100);
  }
    let d2 = dist(mouseX, mouseY, yellowButtonX, yellowButtonY); // Distance from mouse to the yellow button
  if (d2 < yellowButtonRadius) {
    drawCorrectScreenButton2(); // Call this function when the yellow button is clicked
    progress = Math.min(progress + 10, 100);
  }
    let d3 = dist(mouseX, mouseY, blueButtonX, blueButtonY); // Distance from mouse to the blue button
  if (d3 < blueButtonRadius) {
    drawCorrectScreenButton3(); // Call this function when the blue button is clicked
    progress = Math.min(progress + 10, 100);
  }
  
}
   
  // Return to main menu
  //else if (mouseX > 30 && mouseX < 70 && mouseY > 540 && mouseY < 580) {
    //drawMainCanvas();
//}


let progress = 0; // Progress starts at 0 and increases with each completed challenge

function draw() {
  drawProgressBar();
}

function drawProgressBar() {
  fill(238, 238, 238); // Background of the progress bar
  rect(50, 580, 700, 20, 10); // Progress bar background
  
  fill(56, 118, 29); // Fill color for progress
  rect(50, 580, progress * 7, 20, 10); // Progress based on progress variable
  
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(`Progress: ${Math.min(progress, 100)}%`, 400, 590); // Display percentage
}
