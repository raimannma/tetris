const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

function save(data, filename, type) {
  let file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

function createMatrix(width, height) {
  const matrix = [];
  while (height--) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
}

function Game(aiPlayer) {
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
  this.gameOver = false;
  this.lastHeight = 0;
  this.aiPlayer = aiPlayer;
  if (aiPlayer instanceof carrot.Network) {
    this.aiPlayer.score = 0;
  }

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
      console.log("ROW CLEARED");

      this.aiPlayer.learn(Math.min(1, 0.1 * rowCount));

      this.aiPlayer.avgReward += Math.min(1, 0.1 * rowCount) / 20;
    }
    return rowCount >= 2;
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
    if (type === 0) {
      return [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ];
    } else if (type === 1) {
      return [
        [2, 2],
        [2, 2],
      ];
    } else if (type === 2) {
      return [
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3],
      ];
    } else if (type === 3) {
      return [
        [0, 4, 0],
        [0, 4, 0],
        [4, 4, 0],
      ];
    } else if (type === 4) {
      return [
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
      ];
    } else if (type === 5) {
      return [
        [0, 0, 0],
        [0, 6, 6],
        [6, 6, 0],
      ];
    } else {
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
    this.updateScore();
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
      let height = 20;
      outer: for (let i = 0; i < this.arena.length; i++) {
        for (let j = 0; j < this.arena[i].length; j++) {
          if (this.arena[i][j] !== 0) {
            height = this.arena.length - i;
            break outer;
          }
        }
      }
      this.playerReset();
      if (!this.arenaSweep()) {
        if (this.lastHeight < height) {
          this.aiPlayer.learn((this.lastHeight - height) / 4);
          this.aiPlayer.avgReward += (this.lastHeight - height) / 4;
        } else if (this.lastHeight === height) {
          this.aiPlayer.learn(0.01);
          this.aiPlayer.avgReward += 0.01;
        } else {
          this.aiPlayer.learn(-0.01);
          this.aiPlayer.avgReward -= 0.01;
        }
      }
      this.lastHeight = height;
    } else if (this.aiPlayer instanceof carrot.Network) {
      // this.aiPlayer.score = Math.max(-1, this.aiPlayer.score + (height < 10 ? 0.1 : -0.1));
    } else {
      this.aiPlayer.learn(-0.01);
      this.aiPlayer.avgReward -= 0.01;
    }
  },

  playerMove: function (direction) {
    this.player.pos.x += direction;
    if (this.collide(this.arena, this.player)) {
      this.player.pos.x -= direction;
    }
  },

  playerReset: function () {
    this.player.matrix = this.player.nextMatrix !== null ? this.player.nextMatrix : this.createPiece(7 * Math.random() | 0);
    this.player.nextMatrix = this.createPiece(7 * Math.random() | 0);
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
      if (this.aiPlayer instanceof carrot.Network) {
        this.aiPlayer.score = Math.min(
          this.aiPlayer.score + counter / 1000 + this.player.score / 10,
          1);
      }
      this.arena.forEach(row => row.fill(0));
      this.player.score = 0;
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
    this.draw();
    this.playerDrop();

    let input = this.arena.flat(Infinity);
    input.push(this.player.pos.x / 12);
    input.push(this.player.pos.y / 20);
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

    for (let i = 0; i < input.length; i++) {
      input[i] = input[i] === 0 ? 0 : 1;
    }
    if (this.aiPlayer instanceof carrot.Network) {
      let output = this.aiPlayer.activate(input, {trace: false, no_trace: true});
      for (let i = 0; i < output.length; i++) {
        output[i] = Math.round(output[i]);
      }

      if (output[0] === 1 && output[1] === 0) {
        this.playerMove(-1);
      } else if (output[0] === 0 && output[1] === 1) {
        this.playerMove(1);
      } else if (output[0] === 1 && output[1] === 1) {
        this.playerRotate(1);
      }
    } else {
      let action = this.aiPlayer.act(input);
      if (action === 3) {
        this.playerMove(-1);
      } else if (action === 1) {
        this.playerMove(1);
      } else if (action === 2) {
        this.playerRotate(1);
      }
    }
  },

  updateScore: function () {
    if (this.aiPlayer instanceof carrot.Network) {
      document.getElementById('score').innerText = "Score: " + this.aiPlayer.score;
    }
  },
};

// NEAT
// const GAMES = 50;
// let neatOptions = {
//   population_size: GAMES,
//   elitism: 2,
//   mutation: carrot.methods.mutation.FFW,
// };
// let neat = new carrot.Neat(274, 2, neatOptions);
// let games = [];
// let generation = 0;
// function timeout() {
//   setTimeout(async function () {
//     games = [];
//     for (let i = 0; i < GAMES; i++) {
//       games.push(new Game(neat.population[i], false));
//       while (!games[i].gameOver) {
//         games[i].update();
//       }
//     }
//
//     if (generation % 100 === 0) {
//       save(JSON.stringify(neat.getFittest().toJSON()), "neat.json", "json");
//     }
//
//     games[0].draw();
//
//     generation++;
//     // console.log("Generation: " + generation);
//     document.getElementById('generation').innerText = "Generation: " + generation;
//     await neat.evolve();
//     timeout();
//   }, 0);
// }
//
// timeout();

//DQN
let dqnOptions = {
  hiddenNeurons: [5],
  isDoubleDQN: false,
  isUsingPER: true,
  startLearningThreshold: 20000,
  experienceSize: 20000,
  learningStepsPerIteration: 10,
  gamma: 0.9,
  exploreDecay: 1,
  explore: 0.5
};
let agent = new carrot.DQN(274, 4, dqnOptions);
agent.avgReward = 0;

let restarts = 0;
let game = new Game(agent);

function timeout() {
  setTimeout(function () {
    if (game.gameOver) {
      game.gameOver = false;
      restarts++;
      document.getElementById('generation').innerText = "Restarts: " + restarts;
      document.getElementById('score').innerText = "AVG Reward: " + agent.avgReward / agent.timeStep;
    }
    game.update();

    timeout();
  }, 0);
}

timeout();
