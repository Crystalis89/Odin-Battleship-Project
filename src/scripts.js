class Ship {
    constructor(hp, location, status) {
        
    }

    hit(target) {

   }

    isSunk(target, hp){


    }
}

class Gameboard {

    //Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.
    constructor() {
        
    }

    receiveAttack(x, y){

    }

}

class Player {
    constructor(parameters) {
        
    }
    // There will be two types of players in the game, ‘real’ players and ‘computer’ players.
    //Each player object should contain its own gameboard.
}

//Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.


module.exports = {}

module.exports.Ship = Ship
    // module.exports.Ship.hit = Ship.hit

module.exports.Gamboard = Gameboard
    // module.exports.gameboard.receiveAttack = gameboard.receiveAttack

module.exports.Player = Player
    module.exports.Player = Player