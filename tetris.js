const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

let dropInterval = 1000;
const dropIntervalDecay = 0.97;

function arenaSweep() {
  let rowCount = 1;
  outer: for (let y = arena.length - 1; y >= 0; y--) {
    for (let x = 0; x < arena[y].length; x++) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }

    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    y++;
    player.score += rowCount * 10;
    rowCount++;
    dropInterval *= dropIntervalDecay;
  }
}

function collide(arena, player) {
  const [matrix, offset] = [player.matrix, player.pos];
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < matrix[y].length; ++x) {
      if (matrix[y][x] !== 0
        && (arena[y + offset.y] === undefined
          || arena[y + offset.y][x + offset.x] !== 0)) {
        return true;
      }
    }
  }
  return false;
}

function createMatrix(width, height) {
  const matrix = [];
  while (height--) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
}

function createPiece(type) {
  if (type === 'T') {
    return [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
  } else if (type === 'O') {
    return [
      [2, 2],
      [2, 2],
    ];
  } else if (type === 'L') {
    return [
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3],
    ];
  } else if (type === 'J') {
    return [
      [0, 4, 0],
      [0, 4, 0],
      [4, 4, 0],
    ];
  } else if (type === 'I') {
    return [
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
    ];
  } else if (type === 'S') {
    return [
      [0, 0, 0],
      [0, 6, 6],
      [6, 6, 0],
    ];
  } else if (type === 'Z') {
    return [
      [0, 0, 0],
      [7, 7, 0],
      [0, 7, 7],
    ];
  }
}

const colors = [
  null,
  'red',
  'blue',
  'violet',
  'green',
  'purple',
  'orange',
  'pink'
];

function draw() {
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(player.matrix, player.pos);
  drawMatrix(arena, {x: 0, y: 0});
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    })
  });
}

let lastTime = 0;
let dropCounter = 0;

function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    })
  })
}

function playerDrop() {
  player.pos.y++;
  if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
  }
  dropCounter = 0;
}

function playerMove(direction) {
  player.pos.x += direction;
  if (collide(arena, player)) {
    playerMove(-direction);
  }
}

function playerReset() {
  const pieces = 'ILJOTSZ';
  player.matrix = player.nextMatrix !== null ? player.nextMatrix : createPiece(pieces[pieces.length * Math.random() | 0]);
  player.nextMatrix = createPiece(pieces[pieces.length * Math.random() | 0]);
  player.pos.y = 0;
  player.pos.x = (arena[0].length / 2 | 0)
    - (player.matrix.length / 2 | 0);
  if (collide(arena, player)) {
    arena.forEach(row => row.fill(0));
    player.score = 0;
    updateScore()
  }
}

function playerRotate(direction) {
  const posX = player.pos.x;
  let offset = 1;

  rotate(player.matrix, direction);

  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -direction);
      player.pos.x = posX;
      return;
    }
  }
}

function rotate(matrix, direction) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < y; x++) {
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }
  if (direction > 0) {
    matrix.forEach(row => row.reverse());
  } else {
    matrix.reverse();
  }
}

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    playerDrop();
  }

  draw();
  requestAnimationFrame(update);
}

function updateScore() {
  document.getElementById('score').innerText = player.score;
}

const arena = createMatrix(12, 20);

const player = {
  pos: {x: 0, y: 0},
  matrix: null,
  nextMatrix: null,
  score: 0
};

document.addEventListener('keydown', event => {
  if (event.keyCode === 37) {
    playerMove(-1);
  } else if (event.keyCode === 39) {
    playerMove(1);
  } else if (event.keyCode === 40) {
    playerDrop();
  } else if (event.keyCode === 81) {
    playerRotate(-1);
  } else if (event.keyCode === 87) {
    playerRotate(1);
  }
});
playerReset();
update();
