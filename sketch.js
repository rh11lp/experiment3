
function setup() {
    createCanvas(displayWidth, displayHeight);
    fill(0);
}

function draw() {

  noFill();

  ellipse(56, 46, 55, 55);
  arc(15, 20, 50, 100, 0, HALF_PI);
  arc(25, 20, 50, 100, 0, HALF_PI);
  arc(35, 40, 20, 10, 25, HALF_PI);
  arc(70, 38, 20, 10, HALF_PI, PI);
  arc(50, 55, 20, 20, QUARTER_PI, 2);
}
