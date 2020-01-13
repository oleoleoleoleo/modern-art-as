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
  return Math.floor(Math.random() * 255);
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

function randomArc(x, y, r, a, p, c, c2, c3) {
  context.fillStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.beginPath();
  context.arc(x, y, r, a, p, true);
  context.fill();
  context.closePath();
}

function randomStroke(x, y, z, w, h, u, t, c, c2, c3) {
  context.lineWidth = t;
  context.strokeStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.stroke();
  context.closePath();
}

function randomStrokePlus(x, y, z, w, h, u, h2, u2, h3, u3, t, c, c2, c3) {
  context.lineWidth = t;
  context.strokeStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.lineTo(h2, u2);
  context.lineTo(h3, u3);
  context.stroke();
  context.closePath();
}

function randomRectFull(x, y, w, h, c, p, c2, c3) {
  context.rotate(p);
  context.fillStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.fillRect(x, y, w, h);
  context.rotate(-p);
}

function randomEllipse(x, y, xr, yr, a, p, p2, c, c2, c3) {
  context.fillStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.beginPath();
  context.ellipse(x, y, xr, yr, a, p2, p);
  context.closePath();
  context.fill();
}

function randomStrokeClosed(x, y, z, w, h, u, t, c, c2, c3) {
  context.lineWidth = t;
  context.strokeStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(z, w);
  context.lineTo(h, u);
  context.closePath();
  context.stroke();
}

function randomStrokeFilled(x, y, z, w, h, u, t, c, c2, c3) {
  context.lineWidth = t;
  context.strokeStyle = `rgb(${c}, ${c2}, ${c3})`;
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
  randomWidth(),
  randomColor(),
  randomColor()
);

function bezier(x, y, z, w, g, h, r, q, c, t, c2, c3) {
  context.lineWidth = t;
  context.strokeStyle = `rgb(${c}, ${c2}, ${c3})`;
  context.beginPath();
  context.moveTo(x + 200, y + 200);
  context.bezierCurveTo(z, w, g, h + c, r, q);
  context.bezierCurveTo(g / c, q - c2, z, y - c * 2, t, c);
  context.bezierCurveTo(y - x, h, r, q * c3, x, h);
  context.bezierCurveTo(x - c * 2, t * c, y, q, g + c3, c);
  context.bezierCurveTo(r * c2, z, c, h, z, g);
  context.bezierCurveTo(y, x, t, c, r, c);
  context.stroke();
}

//this for loop works
function generate() {
  let path = [];
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let r4 = 0;
  let r5 = 0;
  let r6 = 0;
  let r7 = 0;
  let r8 = 0;
  for (let i = 0; i <= 80; i++) {
    let x = random1to3();
    if (x === 1) {
      randomArc(
        randomXY(),
        randomXY(),
        randomRadius(),
        randomRadius(),
        randomPI(),
        randomColor(),
        randomColor(),
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
        randomPI(),
        randomColor(),
        randomColor()
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
        randomColor(),
        randomColor(),
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
        randomColor(),
        randomColor(),
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
        randomColor(),
        randomColor(),
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
        randomColor(),
        randomColor(),
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
        randomColor(),
        randomColor(),
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
        randomWidth(),
        randomColor(),
        randomColor()
      );
      r8++;
    }
  }
  console.log(
    `Arc ${r1} -  Rect ${r2} - Stroke ${r3} - randomEllipse ${r4} - strokeClosed ${r5} - strokeFilled ${r6} - strokePlus ${r7} - bezier ${r8} `
  );
  context.fillStyle = 'black';
  context.font = '12px arial';
  context.fillText('oleo3', 565, 594);
  // THIS DOESNT WORK
  /*
  let img = $canvas.toDataURL('image/png');
  // console.log(img);
  fs.writeFile('newImage.png', img, function(err) {
    if (err) throw err;
    console.log('Saved!');
  });
*/
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
