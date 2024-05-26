// The World Class represents the game world and is responsible for the generation and manipulation of tiles
const matrixSize = 20;

export class World {
  constructor(worldContainer) {
    this.worldContainer = worldContainer;
    this.matrix = Array.from({ length: matrixSize }, () => Array(matrixSize).fill('sky-tile'));
  }

  generateWorld() {
    this.clearWorld();
    this.generateGround();
    this.placeTree(10, 10);
    this.placeRock(13, 6)
    this.placeCloud(3, 5);
    this.renderWorld();
  }

  clearWorld() {
    this.worldContainer.innerHTML = '';
  }

  generateGround() {
    const groundLevel = 15; // The row where the ground starts

    for (let i = groundLevel; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        this.addTile(i, j, 'dirt-tile');
      }
    }
  }

  placeRock(x, y) {
    const rockStructure = [
      ['rock-tile', 'rock-tile'],
      ['rock-tile', 'rock-tile']
    ];
  
    for (let i = 0; i < rockStructure.length; i++) {
      for (let j = 0; j < rockStructure[i].length; j++) {
        this.addTile(x + i, y + j, rockStructure[i][j]);
      }
    }
  }
  placeTree(x, y) {
    const treeStructure = [
      ['tree-tile', 'tree-tile', 'tree-tile'],
      ['tree-tile', 'tree-tile', 'tree-tile'],
      ['tree-tile', 'tree-tile', 'tree-tile'],
      [null, 'tree-tile', null],
      [null, 'tree-tile', null]
    ];

    for (let i = 0; i < treeStructure.length; i++) {
      for (let j = 0; j < treeStructure[i].length; j++) {
        if (treeStructure[i][j]) {
          this.addTile(x + i, y + j, treeStructure[i][j]);
        }
      }
    }
  }

  placeCloud(x, y) {
    const cloudStructure = [
      ['cloud-tile', 'cloud-tile', 'cloud-tile'],
      ['cloud-tile', null, 'cloud-tile']
    ];

    for (let i = 0; i < cloudStructure.length; i++) {
      for (let j = 0; j < cloudStructure[i].length; j++) {
        if (cloudStructure[i][j]) {
          this.addTile(x + i, y + j, cloudStructure[i][j]);
        }
      }
    }
  }

  addTile(x, y, tileType) {
    if (x >= 0 && x < matrixSize && y >= 0 && y < matrixSize) {
      this.matrix[x][y] = tileType;
    }
  }

  removeTile(x, y) {
    if (x >= 0 && x < matrixSize && y >= 0 && y < matrixSize) {
      this.matrix[x][y] = 'sky-tile'; 
    }
  }

  renderWorld() {
    for (let i = 0; i < matrixSize; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < matrixSize; j++) {
        const tile = document.createElement('div');
        tile.classList.add(this.matrix[i][j]);
        row.appendChild(tile);
      }
      this.worldContainer.appendChild(row);
    }
  }
}


// const matrixSize = 10;
// export class World {
//   worldContainer
//   currentTile
//   constructor(worldContainer) {
//     this.worldContainer = worldContainer;  
//   }
//   generateWorld() {
//    const worldDiv = document.querySelector('.world-area');
//   //  worldDiv.style.background = 'url(../assets/images/light-sky.jpg) no-repeat center center/cover'
//    worldDiv.innerHTML = ''
//    for (let i = 0; i < matrixSize; i++) {
//     const row = document.createElement('div');
//     row.classList.add('row')
//     worldDiv.appendChild(row)
//     for (let j = 0; j < matrixSize; j++) {
//       const tile = document.createElement('div')
//       // tile.classList.add('sky-tile')
//       if (j < 5) {
//         tile.className = "sky-tile"
//       } else {
//         tile.className = "dirt-tile"
//       }
//       row.appendChild(tile)
//     }
//    }
//   }
//   addTile() {
//     const row = document.createElement("div")
//     row.className = "row";
//     return row;
//   }
//   removeTile() {

//   }

// }