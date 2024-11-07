let currentCanvas = 'main';
let inputBox, enterButton;

function setup() {
  createCanvas(800, 600);
  textFont('Times New Roman');
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

  // Completion Button
  fill(56, 118, 29);
  rect(10, 50, 120, 40, 5);
  fill(255, 255, 255);
  textSize(12);
  text("COMPLETION", 70, 70);

  // Messages Button
  fill(19, 79, 92);
  rect(670, 50, 120, 40, 5);
  fill(255, 255, 255);
  text("MESSAGES", 730, 70);

  // Learn Button
  textSize(200);
  text("🐡", 150, 300);
  textSize(40);
  text("LEARN", 140, 300);

  // Progress Button
  textSize(300);
  text("🐢", 400, 280);
  textSize(40);
  text("PROGRESS", 400, 300);

  // Rewards Button
  textSize(200);
  text("🐋", 660, 300);
  textSize(40);
  text("REWARDS", 640, 300);

  // Settings Button
  fill(19, 79, 92);
  rect(10, 500, 120, 40, 5);
  fill(255, 255, 255);
  textSize(40);
  text("SETTINGS", 70, 520);

  // Change Theme Button
  fill(19, 79, 92);
  rect(650, 500, 120, 40, 5);
  fill(255, 255, 255);
  textSize(40);
  text("CHANGE THEME", 710, 520);
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

// Shape Matching Exercise Canvas
function drawShapeMatching() {
  currentCanvas = 'shape_matching';
  background(238, 238, 238);
  inputBox.show();
  enterButton.show();

  // Draw shapes
  fill(255, 0, 0);
  ellipse(250, 200, 200, 150); // Red oval
  fill(255, 255, 102);
  ellipse(500, 200, 200, 150); // Yellow oval

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

// Counting Exercise Canvas
function drawCounting() {
  currentCanvas = 'counting';
  background(238, 238, 238);
  inputBox.show();
  enterButton.show();

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

// Buttoning Buttons Exercise Canvas
function drawButtoningButtons() {
  currentCanvas = 'buttoning_buttons';
  background(238, 238, 238);
  inputBox.show();
  enterButton.show();

  // Draw buttons
  fill(255, 0, 0);
  rect(250, 200, 100, 50); // Small red button
  fill(0, 255, 0);
  rect(450, 200, 150, 50); // Large green button

  // Prompt
  fill(19, 79, 92);
  rect(200, 300, 400, 40, 5);
  fill(255, 255, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("What is the color of the smaller button?", 400, 320);

  // Home Button
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🏠", 50, 560);
}

// Correct Screen
function drawCorrectScreen() {
  currentCanvas = 'correct';
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

// Incorrect Screen
function drawIncorrectScreen() {
  currentCanvas = 'incorrect';
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
function drawMicrotransactionScreen() {
  currentCanvas = 'microtransaction';
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

// Check Answer Logic
function checkAnswer() {
  let answer = inputBox.value().toLowerCase().trim();
  if (currentCanvas === 'shape_matching' && answer === "yes") {
    drawCorrectScreen();
  } else if (currentCanvas === 'counting' && answer === "3") {
    drawCorrectScreen();
  } else if (currentCanvas === 'buttoning_buttons' && answer === "red") {
    drawCorrectScreen();
  } else {
    drawIncorrectScreen();
  }
}

// Mouse Pressed Function for Navigation
function mousePressed() {
  if (currentCanvas === 'main' && dist(mouseX, mouseY, 150, 300) < 50) {
    drawLearnCanvas();
  } else if (currentCanvas === 'learn') {
    if (mouseX > 200 && mouseX < 600 && mouseY > 120 && mouseY < 180) {
      drawShapeMatching();
    } else if (mouseX > 200 && mouseX < 600 && mouseY > 220 && mouseY < 280) {
      drawCounting();
    } else if (mouseX > 200 && mouseX < 600 && mouseY > 320 && mouseY < 380) {
      drawButtoningButtons();
    }
  } else if (currentCanvas === 'correct' && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 340) {
    drawMicrotransactionScreen();
  } else if (currentCanvas === 'incorrect' && mouseX > 350 && mouseX < 470 && mouseY > 300 && mouseY < 340) {
    if (currentCanvas === 'shape_matching') drawShapeMatching();
    if (currentCanvas === 'counting') drawCounting();
    if (currentCanvas === 'buttoning_buttons') drawButtoningButtons();
  } else if (mouseX > 30 && mouseX < 70 && mouseY > 540 && mouseY < 580) {
    drawMainCanvas();
  }
}
