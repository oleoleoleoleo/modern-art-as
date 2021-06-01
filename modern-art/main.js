const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const context = $canvas.getContext("2d");

$button.addEventListener("click", generate);

function randomXY() {
  return Math.floor(Math.random() * 700) - 50;
}
function randomPI() {
  return parseFloat(Math.random() * 2 * Math.PI);
}
function randomAngle() {
  return Math.floor(Math.random() * 360);
}
function randomColor() {
  return Math.floor(Math.random() * 255);
}
function randomWidth() {
  return Math.floor(Math.random() * 60);
}
function randomRadius() {
  return Math.floor(Math.random() * 200);
}
function random1to7() {
  return Math.ceil(Math.random() * 7);
}

function clear() {
  context.fillStyle = "white";
  context.fillRect(0, 0, 800, 800);
}

function setRandomColor() {
  context.fillStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  context.strokeStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function strokeOrFill() {
  !!Math.round(Math.random()) ? context.fill() : context.stroke();
}

function randomArc() {
  context.beginPath();
  context.arc(
    randomXY(),
    randomXY(),
    randomRadius(),
    randomRadius(),
    randomPI(),
    !!Math.round(Math.random())
  );
  strokeOrFill();
  context.closePath();
}

function randomStroke() {
  context.lineWidth = randomWidth();
  context.beginPath();
  context.moveTo(randomXY(), randomXY());
  randomLineTo();
  strokeOrFill();
  context.closePath();
}

function randomRectFull() {
  const randomPiVar = randomPI();
  context.rotate(randomPiVar);
  context.fillRect(randomXY(), randomXY(), randomXY(), randomXY());
  context.rotate(-randomPiVar);
}

function randomEllipse() {
  context.beginPath();
  context.ellipse(
    randomXY(),
    randomXY(),
    randomRadius(),
    randomRadius(),
    randomAngle(),
    randomPI(),
    randomPI()
  );
  context.closePath();
  strokeOrFill();
}

function randomStrokeClosed() {
  const initialX = randomXY();
  const initialY = randomXY();
  context.lineWidth = randomWidth();
  context.beginPath();
  context.moveTo(initialX, initialY);
  randomLineTo();
  context.lineTo(initialX, initialY);
  context.closePath();
  context.stroke();
}

function bezier() {
  context.lineWidth = randomWidth();
  context.beginPath();
  context.moveTo(randomXY(), randomXY());
  randomBezierTo();
  context.stroke();
}

function randomBezierTo() {
  const numberOfMoves = Math.ceil(Math.random() * 15);
  for (let i = 0; i <= numberOfMoves; i++) {
    context.bezierCurveTo(
      randomXY(),
      randomXY(),
      randomXY(),
      randomXY(),
      randomXY(),
      randomXY()
    );
  }
}

function randomLineTo() {
  const numberOfMoves = Math.ceil(Math.random() * 15);
  for (let i = 0; i <= numberOfMoves; i++) {
    context.lineTo(randomXY(), randomXY());
  }
}

function generate() {
  clear();
  let [
    arcCount,
    rectCount,
    strokeCount,
    ellipseCount,
    closedStrokeCount,
    bezierCount,
  ] = Array(6).fill(0);
  for (let i = 0; i < 101; i++) {
    setRandomColor();
    let x = random1to7();
    switch (x) {
      case 1:
        randomArc();
        arcCount++;
        break;
      case 2:
        randomRectFull();
        rectCount++;
        break;
      case 3:
        randomStroke();
        strokeCount++;
        break;
      case 4:
        randomEllipse();
        ellipseCount++;
        break;
      case 5:
        randomStrokeClosed();
        closedStrokeCount++;
        break;
      default:
        bezier();
        bezierCount++;
    }
  }
  console.log(
    `Arc: ${arcCount} - Rectangle: ${rectCount} - Ellipse: ${ellipseCount} - Bezier Curve: ${bezierCount} - Stroke: ${strokeCount} - Closed Stroke: ${closedStrokeCount} `
  );
  context.fillStyle = "black";
  context.font = "12px arial";
  context.fillText("oleo3", 565, 594);
}

clear();
setRandomColor();
bezier();
