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
        //Check if the attack matches any of the currently unhit targets. If so use the attackHit method of whichever ship it is. If it misses increment this.misses. If all ships dead declare win/lose
        //check which ship by comparing the location of each ship with the attack, in which case this.ships[shipindex].attackHit

    }

    validPlacement(location, hp){
        if (location.length > 3) {
            return false
        }

        if (this.ships.length < 5) {

            let split
            //Check if overlaps with any location of another ship. If not split the coordinates in each location, check if any of them are below 0 or above 9. If valid createa a new Ship

            //Iterate through the array of location coordinate arrays
            for (const locationnode of location) {
                
                //Iterate through coordinates in each array.
                for (const coord of locationnode) {
                    split = coord.split('-')
                
                    //Check if any of the coordinates are to high or low
                    if (parseInt(split[0]) > 9 || parseInt(split[0]) < 0 || parseInt(split[1]) > 9 || parseInt(split[1]) < 0){
                        console.log('Out of bounds')
                        return false                                    
                    }                
                }
                // console.log(this)

                //If there are ships already placed in the gameboard
                if (this.ships.length > 0) {

                    //select one of the ships
                    for (const ship of this.ships) {
                    
                        //compare the coordinates of the ship with the cordinates in location
                        for (let i = 0; i < ship.location.length; i++) {
                   
                            if (ship.location[i] === location[0] || ship.location[i] === location[1] || ship.location[i] === location[2] || ship.location[i] === location[3] || ship.location[i] === location[4] || ship.location[i] === location[5]) {
                                console.log('A ship is already placed there')
                                return false
                        }                            
                        }
                      
                }  
                }
            
            
        
            this.ships.push(new Ship(hp, location, 'floating'))

            return this.ships

        }
    }
        console.log('To many ships.')
        return false
    }

}

let testboard = new Gameboard()
// console.log(testboard)
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
