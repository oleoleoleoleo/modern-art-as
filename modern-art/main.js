const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const $body = document.querySelector("body");
const context = $canvas.getContext("2d");

$button.addEventListener("click", generate);
$canvas.addEventListener('touchend', handleTouch);
$body.addEventListener('touchmove', preventDefaultTouchMove, { passive: false })

const intervalRefrex = {
  active: false,
  interval: null,
  tapTimeout: null
};

const rekt = $canvas.getBoundingClientRect();

const canvasHeight = rekt.height;
const canvasWidth = rekt.width;
const maxStrokeWidth = 60;
const intervalInSeconds = 1;

const doubleTapDelay = 300;
let lastTapTime = 0;

function randomXY() {
  return Math.floor(Math.random() * (canvasHeight + 100)) - 50;
};

function randomPI() {
  return parseFloat(Math.random() * 2 * Math.PI);
};

function randomAngle() {
  return Math.floor(Math.random() * 360);
};

function randomColor() {
  return Math.floor(Math.random() * 255);
};

function randomWidth() {
  return Math.floor(Math.random() * maxStrokeWidth);
};

function randomRadius() {
  return Math.floor(Math.random() * 200);
};

function random1to7() {
  return Math.ceil(Math.random() * 7);
};

function clear() {
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasHeight, canvasHeight);
};

function setRandomColor() {
  context.fillStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  context.strokeStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
};

function strokeOrFill() {
  !!Math.round(Math.random()) ? context.fill() : context.stroke();
}

function randomArc() {
  context.beginPath();
  context.arc(
    randomXY(), randomXY(), randomRadius(), randomRadius(), randomPI(), !!Math.round(Math.random())
  );
  strokeOrFill();
  context.closePath();
};

function randomStroke() {
  context.lineWidth = randomWidth();
  context.beginPath();
  context.moveTo(randomXY(), randomXY());
  randomLineTo();
  strokeOrFill();
  context.closePath();
};

function randomRectFull() {
  const randomPiVar = randomPI();
  context.rotate(randomPiVar);
  context.fillRect(randomXY(), randomXY(), randomXY(), randomXY());
  context.rotate(-randomPiVar);
};

function randomEllipse() {
  context.beginPath();
  context.ellipse(
    randomXY(), randomXY(), randomRadius(), randomRadius(), randomAngle(), randomPI(), randomPI()
  );
  context.closePath();
  strokeOrFill();
};

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
};

function bezier() {
  context.lineWidth = randomWidth();
  context.beginPath();
  context.moveTo(randomXY(), randomXY());
  randomBezierTo();
  context.stroke();
};

function randomBezierTo() {
  const numberOfMoves = Math.ceil(Math.random() * 15);
  for (let i = 0; i <= numberOfMoves; i++) {
    context.bezierCurveTo(
      randomXY(), randomXY(), randomXY(), randomXY(), randomXY(), randomXY()
    );
  };
};

function randomLineTo() {
  const numberOfMoves = Math.ceil(Math.random() * 15);
  for (let i = 0; i <= numberOfMoves; i++) {
    context.lineTo(randomXY(), randomXY());
  };
};

function generate() {
  clear();
  let [
    arcCount, rectCount, strokeCount, ellipseCount, closedStrokeCount, bezierCount,
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
    };
  };
  console.log(
    `Arc: ${arcCount} - Rectangle: ${rectCount} - Ellipse: ${ellipseCount} - Bezier Curve: ${bezierCount} - Stroke: ${strokeCount} - Closed Stroke: ${closedStrokeCount} `
  );
  context.fillStyle = "black";
  context.font = "12px arial";
  context.fillText("oleo3", canvasWidth - 35, canvasHeight - 6);
}

function setGenerateInterval() {
  if (intervalRefrex.active) {
    intervalRefrex.active = false;
    clearInterval(intervalRefrex.interval);
    return;
  };

  intervalRefrex.active = true;
  intervalRefrex.interval = setInterval(() => generate(), intervalInSeconds * 1000)
};

function handleTouch(event) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTapTime;

  if (tapLength < doubleTapDelay && tapLength > 0) {
    setGenerateInterval();
    clearTimeout(intervalRefrex.tapTimeout);
  } else {
    intervalRefrex.tapTimeout = setTimeout(() => {
      generate();
    }, doubleTapDelay);
  }

  lastTapTime = currentTime;
};

function preventDefaultTouchMove(event) {
  event.preventDefault();
};

clear();
setRandomColor();
bezier();
