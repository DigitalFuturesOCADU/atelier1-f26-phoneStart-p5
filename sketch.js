let targetX;
let targetY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  targetX = width / 2;
  targetY = height / 2;

  lockGestures();
  enableSensorOn("#motion-button");
}

function draw() {
  const hasMotion = window.sensorsEnabled;

  if (hasMotion) {
    targetX = map(
      constrain(rotationY, -35, 35),
      -35,
      35,
      width * 0.18,
      width * 0.82,
    );
    targetY = map(
      constrain(rotationX, -35, 35),
      -35,
      35,
      height * 0.22,
      height * 0.78,
    );
  }

  background(222, 54, 12);
  const fieldX = lerp(width / 2, targetX, 0.08);
  const fieldY = lerp(height / 2, targetY, 0.08);
  targetX = fieldX;
  targetY = fieldY;

  for (let diameter = max(width, height) * 1.5; diameter > 30; diameter -= 34) {
    const amount = map(diameter, 30, max(width, height) * 1.5, 0, 1);
    fill(35 + amount * 220, 78, 96, 15);
    circle(fieldX, fieldY, diameter);
  }

  fill(0, 0, 100, 86);
  textAlign(CENTER, CENTER);
  textSize(min(width, height) * 0.052);
  const instruction = hasMotion
    ? "tilt to move the field"
    : "drag to move the field\nor use the motion button";
  text(instruction, width / 2, height * 0.88);
}

function userSetupComplete() {
  document.querySelector("#motion-button").textContent = "Motion enabled";
}

function mouseDragged() {
  if (!window.sensorsEnabled) {
    targetX = mouseX;
    targetY = mouseY;
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
