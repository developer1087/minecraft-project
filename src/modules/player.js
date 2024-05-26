// The Player Class manages the player’s inventory, selected tools, and interactions with tiles.

const inventoryInit = {
  dirt: 0,
  tree: 0, 
  rock: 0,
  cloud: 0
}

export class Player {
  currentTool
  currentTile
  inventoryObject
  constructor(currentTool, currentTile, inventoryObject) {
    this.currentTool = currentTool;
    this.currentTile = currentTile;
    this.inventoryObject = inventoryObject;
  }
  addItem() {

  }
  removeItem() {

  }
  selectTool() {

  }
}