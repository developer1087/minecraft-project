import { Game } from "./modules/game.js";

const startGameBtn = document.querySelector(".start-game-btn")

startGameBtn.addEventListener('click', () => {
  const game = new Game();
  game.startGame()
})