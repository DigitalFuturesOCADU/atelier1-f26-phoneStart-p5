function setup() {
  createCanvas(windowWidth, windowHeight);
  document.querySelector("#motion-button").remove();
  background(245);
}

function draw() {
  background(245);
  fill(20);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Start here. Change this sketch.", width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
