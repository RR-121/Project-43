var bg, bg2, form, system, code, security, retryButton;
var score = 0;
var num_answers = 0;
var mistakes = 0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000, 500);
  security = new Security();
  system = new System();

  retryButton = createButton('Retry');
  retryButton.position(490, 270);
  retryButton.style('background', 'cyan');
  retryButton.hide();
}

function draw() {
  background(bg);
  clues();
  security.display();

  if (score === 3 && num_answers === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED", 250, 470);
  }
  else if (score !== 3 && num_answers === 3 && mistakes === 1) {
    textSize(20);
    fill("white");
    text("Oops! Looks like one of your answers is wrong!", 300, 250);
    retryButton.show();
    retryButton.mousePressed(() => {
      security.showButtonsAndInputBoxes();
      retryButton.hide();
      score = 0;
      num_answers = 0;
      mistakes = 0;
    })
  }
  else if (score !== 3 && num_answers === 3 && mistakes > 1) {
    textSize(20);
    fill("white");
    text("Oops! Looks like some of your answers are wrong!", 300, 250);
    retryButton.show();
    retryButton.mousePressed(() => {
      security.showButtonsAndInputBoxes();
      retryButton.hide();
      score = 0;
      num_answers = 0;
      mistakes = 0;
    })
  }

  drawSprites()
}
