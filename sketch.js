let s;
let food;

function setup() {
  createCanvas(450, 350);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var col = floor(width / 10);
  var row = floor(height / 10);
  food = createVector(floor(random(col)), floor(random(row)));
  food.mult(10);
}

function draw() {
  background(103, 202, 103);


  if (s.eat(food)) {
    pickLocation();
  }
  s.returnside();
  s.update();
  s.show();
  s.death();


  fill(255, 50, 120);
  rect(food.x, food.y,15, 15, 15);
}





function keyPressed() {
  if (keyCode === UP_ARROW && s.yspeed !== 1) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed !== -1) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed !== -1) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed !== 1) {
    s.dir(-1, 0);
  }
}

let touchStartX, touchStartY, touchEndX, touchEndY;

function touchStarted() {
  touchStartX = mouseX;
  touchStartY = mouseY;
  return false;
}

function touchEnded() {
  touchEndX = mouseX;
  touchEndY = mouseY;
  handleSwipe();
  return false;
}

function handleSwipe() {
  const dx = touchEndX - touchStartX;
  const dy = touchEndY - touchStartY;

  // Determine the current direction
  const currentXSpeed = s.xspeed;
  const currentYSpeed = s.yspeed;

  if (abs(dx) > abs(dy)) {
    // Horizontal swipe
    if (dx > 0 && currentXSpeed !== -1) {
      s.dir(1, 0); // Right swipe
    } else if (dx < 0 && currentXSpeed !== 1) {
      s.dir(-1, 0); // Left swipe
    }
  } else {
    // Vertical swipe
    if (dy > 0 && currentYSpeed !== -1) {
      s.dir(0, 1); // Down swipe
    } else if (dy < 0 && currentYSpeed !== 1) {
      s.dir(0, -1); // Up swipe
    }
  }
}

