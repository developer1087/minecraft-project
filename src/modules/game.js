// The Game Class serves as the main orchestrator for the entire game. It initializes other objects and coordinates the gameplay

import { World } from "./world.js";
import { Player } from "./player.js";

const introAreaDiv = document.querySelector('.main-container')
const worldDiv = document.querySelector('.main-game-container')

export class Game {
  world
  player
  
  constructor() {
    this.world = new World()
    this.player = new Player()
  }

  startGame() {
    // Hide the intro area
    introAreaDiv.classList.add('hidden');
    worldDiv.classList.remove('hidden')
    const world = new World(document.querySelector('.world-area'));
    world.generateWorld();
  

  }
  updateWorld() {

  }
  resetGame() {

  }
}

