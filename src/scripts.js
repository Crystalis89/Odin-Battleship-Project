//

class Ship {
    constructor(hp, location, status) {
        this.hp = hp
        this.location = location
        this.status = status
    }

    attackHit() {

        this.hp--
        if (this.hp === 0) {
            return this.isSunk()
        }
        return this.hp
   }

    isSunk(){
        //Trigger end of game.
        return this.status = 'sunk'
    }
}
// let test = new Ship(2,['2-1', '2-2'], 'floating')

// console.log(test)
class Gameboard {

    //Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.
    constructor() {
        this.ships = []
        this.fleetStatus = 'floating'
        this.misses = 0        
    }

    receiveAttack(){
        if (this.hp === 1) {
            this.hp--
            this.status = 'sunk'
        }
    }

    validPlacement(location, placedShips){

    }

    placeShip(location) {
        
    }

}

let testboard = new Gameboard()
console.log(testboard)
class Player {
    constructor(playerType) {
        this.type = playerType
        this.board = new Gameboard()
    }
    // There will be two types of players in the game, ‘real’ players and ‘computer’ players.
    //Each player object should contain its own gameboard.
}



// let testplayer = new Player('player')
// console.log(testplayer)
// console.log(testplayer)

//Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.


module.exports = {}

module.exports.Ship = Ship

module.exports.Gameboard = Gameboard

module.exports.Player = Player
