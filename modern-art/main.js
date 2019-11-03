const $canvas = document.querySelector('canvas');
const $button = document.querySelector('button');
const context = $canvas.getContext('2d');

$button.addEventListener('click', generate);

function randomXY() {
  return Math.floor(Math.random() * 700) - 100;
}
function randomPI() {
  return parseFloat(Math.random() * 2 * Math.PI);
}
function randomAngle() {
  return Math.floor(Math.random() * 360);
}
function randomColor() {
  return Math.floor(Math.random() * 280);
}
function randomWidth() {
  return Math.floor(Math.random() * 60);
}
function randomRadius() {
  return Math.floor(Math.random() * 200);
}
function random1to3() {
  return Math.ceil(Math.random() * 8);
}

context.fillStyle = 'white';
context.fillRect(10, 10, 500, 500);

function randomArc(x, y, r, a, p, c) {
  context.fillStyle = colorArray[c];
  context.beginPath();
  context.arc(x, y, r, a, p, true);
  context.fill();
  context.closePath();
}

function randomStroke(x, y, z, w, h, u, t, c) {
  context.lineWidth = t;
  context.strokeStyle = colorArray[c];
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.stroke();
  context.closePath();
}

function randomStrokePlus(x, y, z, w, h, u, h2, u2, h3, u3, t, c) {
  context.lineWidth = t;
  context.strokeStyle = colorArray[c];
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.lineTo(h2, u2);
  context.lineTo(h3, u3);
  context.stroke();
  context.closePath();
}

function randomRectFull(x, y, w, h, c, p) {
  context.rotate(p);
  context.fillStyle = colorArray[c];
  context.fillRect(x, y, w, h);
  context.rotate(-p);
}

function randomEllipse(x, y, xr, yr, a, p, p2, c) {
  context.fillStyle = colorArray[c];
  context.beginPath();
  context.ellipse(x, y, xr, yr, a, p2, p);
  context.closePath();
  context.fill();
}

function randomStrokeClosed(x, y, z, w, h, u, t, c) {
  context.lineWidth = t;
  context.strokeStyle = colorArray[c];
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.closePath();
  context.stroke();
}

function randomStrokeFilled(x, y, z, w, h, u, t, c) {
  context.lineWidth = t;
  context.strokeStyle = colorArray[c];
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.closePath();
  context.fill();
}

bezier(
  randomXY(),
  randomXY(),
  randomXY(),
  randomXY(),
  randomXY(),
  randomXY(),
  randomXY(),
  randomXY(),
  randomColor(),
  randomWidth()
);
function bezier(x, y, z, w, g, h, r, q, c, t) {
  context.lineWidth = t;
  context.strokeStyle = colorArray[c];
  context.beginPath();
  context.moveTo(x + 200, y + 200);
  context.bezierCurveTo(z, w, g, h, r, q);
  context.bezierCurveTo(g / 2, q, z, y * 2, t, c);
  context.bezierCurveTo(y, h, r, q, x / r, h);
  context.bezierCurveTo(x, t + 100, y, q, g, c);
  context.bezierCurveTo(r, z, c, h, z - 100, g);
  context.bezierCurveTo(y, x % c, t, c * 3, r, c);
  context.stroke();
}

//this doesnt work

//this for loop works
function generate() {
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let r4 = 0;
  let r5 = 0;
  let r6 = 0;
  let r7 = 0;
  let r8 = 0;
  for (let i = 0; i <= 100; i++) {
    let x = random1to3();
    if (x === 1) {
      randomArc(
        randomXY(),
        randomXY(),
        randomRadius(),
        randomRadius(),
        randomPI(),
        randomColor()
      );
      r1++;
    } else if (x === 2) {
      randomRectFull(
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomColor(),
        randomPI()
      );
      r2++;
    } else if (x === 3) {
      randomStroke(
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomWidth(),
        randomColor()
      );
      r3++;
    } else if (x === 4) {
      randomEllipse(
        randomXY(),
        randomXY(),
        randomRadius(),
        randomRadius(),
        randomAngle(),
        randomPI(),
        randomPI(),
        randomColor()
      );
      r4++;
    } else if (x === 5) {
      randomStrokeClosed(
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomWidth(),
        randomColor()
      );
      r5++;
    } else if (x === 6) {
      randomStrokeFilled(
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomWidth(),
        randomColor()
      );
      r6++;
    } else if (x === 7) {
      randomStrokePlus(
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomWidth(),
        randomColor()
      );
      r7++;
    } else if (x === 8) {
      bezier(
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomXY(),
        randomColor(),
        randomWidth()
      );
      r8++;
    }
  }
  console.log(
    `Arc ${r1} -  Rect ${r2} - Stroke ${r3} - randomEllipse ${r4} - strokeClosed ${r5} - strokeFilled ${r6} - strokePlus ${r7} - bazier ${r8} `
  );
  context.fillStyle = 'black';
  context.font = '6px arial';
  context.fillText(
    'programei sai correndo pau no cu de quem ta lendo',
    465,
    594
  );
}

//make random rect - working
// randomRectFull(randomXY(), randomXY(), randomXY(), randomXY(), randomColor());

//make random arc - working
// randomArc(
//   randomXY(),
//   randomXY(),
//   randomRadius(),
//   randomRadius(),
//   randomPI(),
//   randomColor()
// );

// //make random stroke - working
// randomStroke(
//   randomXY(),
//   randomXY(),
//   randomXY(),
//   randomXY(),
//   randomXY(),
//   randomXY(),
//   randomWidth(),
//   randomColor()
// );

// for (let i = 0; i <= 100; i++) {
//   let x = random1to3();
//   let r1 = 0;
//   let r2 = 0;
//   let r3 = 0;
//   if (x === 1) {
//     randomArc(
//       randomXY(),
//       randomXY(),
//       randomRadius(),
//       randomRadius(),
//       randomPI(),
//       randomColor()
//     );
//     r1++;
//   } else if (x === 2) {
//     randomRectFull(
//       randomXY(),
//       randomXY(),
//       randomXY(),
//       randomXY(),
//       randomColor()
//     );
//     r2++;
//   } else if (x === 3) {
//     randomStroke(
//       randomXY(),
//       randomXY(),
//       randomXY(),
//       randomXY(),
//       randomXY(),
//       randomXY(),
//       randomWidth(),
//       randomColor()
//     );
//     r3++;
//     console.log(x);
//   } else {
//     console.log('random equaled 0');
//   }
// }
