const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

const GAMES = 50;


function createMatrix(width, height) {
  const matrix = [];
  while (height--) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
}

function Game(id, neatPlayer) {
  this.arena = createMatrix(12, 20);
  this.player = {
    pos: {x: 0, y: 0},
    matrix: null,
    nextMatrix: null,
    score: 0
  };
  this.colors = [
    null,
    'red',
    'blue',
    'violet',
    'green',
    'purple',
    'orange',
    'pink'
  ];

  this.id = id;
  this.gameOver = false;
  this.neatPlayer = neatPlayer;
  this.neatPlayer.score = 0;

  this.playerReset();
}

Game.prototype = {
  arenaSweep: function () {
    let rowCount = 1;
    outer: for (let y = this.arena.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.arena[y].length; x++) {
        if (this.arena[y][x] === 0) {
          continue outer;
        }
      }

      const row = this.arena.splice(y, 1)[0].fill(0);
      this.arena.unshift(row);
      y++;
      this.player.score += rowCount * 10;
      rowCount++;
    }
  },

  collide: function (arena, player) {
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
  },

  createPiece: function (type) {
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
  },

  draw: function () {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.drawMatrix(this.player.matrix, this.player.pos);
    this.drawMatrix(this.arena, {x: 0, y: 0});
  },

  drawMatrix: function (matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          context.fillStyle = this.colors[value];
          context.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      })
    });
  },

  merge: function (arena, player) {
    this.neatPlayer.score -= 0.1;
    player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          arena[y + player.pos.y][x + player.pos.x] = value;
        }
      })
    })
  },

  playerDrop: function () {
    this.player.pos.y++;
    if (this.collide(this.arena, this.player)) {
      this.player.pos.y--;
      this.merge(this.arena, this.player);
      this.playerReset();
      this.arenaSweep();
      this.updateScore();
    }
  },

  playerMove: function (direction) {
    this.player.pos.x += direction;
    if (this.collide(this.arena, this.player)) {
      this.player.pos.x -= direction;
    }
  },

  playerReset: function () {
    const pieces = 'ILJOTSZ';
    this.player.matrix = this.player.nextMatrix !== null ? this.player.nextMatrix : this.createPiece(pieces[pieces.length * Math.random() | 0]);
    this.player.nextMatrix = this.createPiece(pieces[pieces.length * Math.random() | 0]);
    this.player.pos.y = 0;
    this.player.pos.x = (this.arena[0].length / 2 | 0) - (this.player.matrix.length / 2 | 0);
    if (this.collide(this.arena, this.player)) {
      //GameOver
      this.gameOver = true;
      let counter = 0;
      for (let x = 0; x < this.arena.length; x++) {
        for (let y = 0; y < this.arena[x].length; y++) {
          counter += this.arena[x][y];
        }
      }
      this.neatPlayer.score += counter / 10 + this.player.score;
    }
  },

  playerRotate: function (direction) {
    const posX = this.player.pos.x;
    let offset = 1;

    this.rotate(this.player.matrix, direction);

    while (this.collide(this.arena, this.player)) {
      this.player.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > this.player.matrix[0].length) {
        this.rotate(this.player.matrix, -direction);
        this.player.pos.x = posX;
        return;
      }
    }
  },

  rotate: function (matrix, direction) {
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
  },

  update: function () {
    this.playerDrop();

    let input = [];
    for (let i = 0; i < this.arena.length; i++) {
      input.push(...this.arena[i]);
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.player.matrix.length > i && this.player.matrix[i].length > j) {
          input.push(this.player.matrix[i][j]);
        } else {
          input.push(0);
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.player.nextMatrix.length > i && this.player.nextMatrix[i].length > j) {
          input.push(this.player.nextMatrix[i][j]);
        } else {
          input.push(0);
        }
      }
    }

    let output = this.neatPlayer.activate(input, {trace: false, no_trace: true});
    let maxVal = output[0];
    let maxIndex = 0;
    for (let i = 1; i < output.length; i++) {
      if (output[i] > maxVal) {
        maxIndex = i;
        maxVal = output[i];
      }
    }

    if (maxIndex === 0) {
      this.playerMove(-1);
    } else if (maxIndex === 0) {
      this.playerMove(1);
    } else if (maxIndex === 0) {
      this.playerRotate(-1);
    } else {
      this.playerRotate(1);
    }

    if (this.id === 0) {
      this.draw();
    }
  },

  updateScore: function () {
    document.getElementById('score').innerText = this.player.score;
  },
};

let options = {
  population_size: GAMES,
  elitism: 2,
  mutation_rate: 0.7,
  mutation_amount: 2,
};

let neat = new carrot.Neat(272, 4, options);
let generation = 0;

setInterval(async function () {
  let games = [];
  for (let i = 0; i < GAMES; i++) {
    games.push(new Game(i, neat.population[i]))
  }
  for (let i = 0; i < games.length; i++) {
    while (!games[i].gameOver) {
      games[i].update();
    }
  }
  generation++;
  await neat.evolve().then(console.log("Generation: " + generation));
}, 0);
