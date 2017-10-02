function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();


  strokeWeight(8)
  stroke(255, 100, 150)
  noFill();

  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);

  stroke(150, 100, 255);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);

  stroke(150, 255, 100);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);

  // stroke(150, 100, 100);
  // let end4 = map(hr, 0, 24, 0, 360);
  // arc(0, 0, 240, 240, 0, end4);

  // stroke(255);
  // let end5 = map(sc, 0, 86400, 0, 360);
  // arc(0, 0, 220, 220, 0, end5);

}
