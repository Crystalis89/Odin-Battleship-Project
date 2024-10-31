//

class Ship {
    constructor(hp, location, status) {
        this.hp = hp
        this.location = location
        this.status = status
    }

    attackHit() {

        this.hp--
        // console.log(this.hp)
        if (this.hp === 0) {
            this.isSunk()
        }
        return this
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

    receiveAttack(target){
        let targetship
        //Check if the attack matches any of the currently unhit targets. If so use the attackHit method of whichever ship it is. If it misses increment this.misses. If all ships dead declare win/lose
        //check which ship by comparing the location of each ship with the attack, in which case this.ships[shipindex].attackHit
        // console.table(this.ships)

        //Check whether to many attack targets.
        if (target.length > 1) {
            // console.log("To many targets")
            return false
        }

        //Increment through ships on gameboard to compare against the coordinates targeted
        for (const ship of this.ships) {
            //Get the location of the ship
            for (const loccheck of ship.location) {
                //Compare the location to up to three coordinates
                if (loccheck === target[0] || loccheck === target[1] || loccheck === target[2] ) {

                    //If it hits call this which decrements the hp by 1
                    ship.attackHit()

                    // console.log(ship.status)
                    // console.log(ship.hp)

                    // //If the ship was changed to sunk after the hit go down this path.
                    if (ship.status === 'sunk') {
                        // console.log(ship.hp)
                        // console.log(ship.status)

                        let losscheck = this.ships.length
                        // console.log(losscheck)
                        //Loop through array of ships to see if they all are sunk. If so end the game.
                        for (const shipcheck of this.ships) {

                            if (shipcheck.status === 'sunk') {
                                losscheck--
                            }
                        }

                        //When create the game driver/listen add if gameboard.fleetStatus = 'sunk 'after recieveAttack is run then end the game.

                        if (losscheck === 0) {
                            // console.log('Fleet is sunk')
                            this.fleetStatus = 'fleetsunk'
                            return  this.fleetStatus
                        }
                    }
                    return this.ships

                }
            }
            // ship.location
        }
        
        this.misses++
        return this
    }

    validPlacement(location){
        if (location.length > 3) {
            return false
        }
        // console.table(this.ships)
        if (this.ships.length <= 5) {

            let split = []

            for (const tosplit of location) {
                split.push(tosplit.split('-'))
                
            }

            //Check if overlaps with any location of another ship. If not split the coordinates in each location, check if any of them are below 0 or above 9. If valid createa a new Ship
            for (const coord of split) {
              
                //Check if any of the coordinates are to high or low
                if (parseInt(coord[0]) > 9 || parseInt(coord[0]) < 0 || parseInt(coord[1]) > 9 || parseInt(coord[1]) < 0){
                    // console.log('Out of bounds')
                    return false                                    
                }                
            }
            //Iterate through the array of location coordinate arrays
            // console.table(split)
            for (const locationnode of location) {
   
                //Iterate through coordinates in each array.
           
                //If there are ships already placed in the gameboard
                if (this.ships.length > 0) {

                    //select one of the ships
                    for (const ship of this.ships) {
                    
                        //compare the coordinates of the ship with the cordinates in location
                        for (let i = 0; i < ship.location.length; i++) {
                   
                            if (ship.location[i] === location[0] || ship.location[i] === location[1] || ship.location[i] === location[2] || ship.location[i] === location[3] || ship.location[i] === location[4] || ship.location[i] === location[5]) {
                                // console.log('A ship is already placed there')
                                return false
                        }                            
                        }
                      
                }  
            }
            
        
  

        }
    } 
    else {
        // console.log('To many ships.')
        return false
    }
    // console.log(this)

    this.ships.push(new Ship(location.length, location, 'floating'))
    // console.log(this)

    return this.ships
    }

}

// let testboard = new Gameboard()
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
