const tests = require('./scripts');

//    expect(tests.analyzeArray([1,2,3,4,5])).toEqual({
//     'average': 3,
//     'min': 1,
//     'max': 5,
//     'length': 5
//  })


// expect(tests.caesarCipher('Test', 3)).toBe('Whvw')
// console.log(tests.Ship)

//Ship
    //test that the ship gets the correctly assigned hp, location, and status value

    test('Ship create', () => {
        expect(new tests.Ship(2, ['2-1', '2-2'], 'floating')).toEqual({ hp: 2, location: ['2-1', '2-2'], status: 'floating' });
    });

    //check that a hit correctly registers and updates the HP of the correct ship
    // beforeEach(() =>{
        // Initiate new player and computer for the following tests
    let testship
        // })

    test('Hit, HP Reduce', () => {
        testship = testship = new tests.Ship(2, ['2-1', '2-2'], 'floating')
        expect(testship.attackHit()).toBe(testship.hp = 1);

    });
    // //check that ship correctly switched to sunk when hp becomes 0
    test('HP Sunk', () => {
        testship = new tests.Ship(1, ['2-1', '2-2'], 'floating')
        
        expect(testship.attackHit()).toBe(testship.status = 'sunk');
    });



//gameboard


    test('Create Gameboard', () => {
    
        expect(new tests.Gameboard()).toEqual({ships:[], fleetStatus:'floating', misses: 0 });
    });


    //check that it is able to place a ship on the board.
    // test('Placeship', () => {
    //     expect(new tests.Ship(2, ['2-1', '2-2'], 'floating')).toEqual({ hp: 2, location: ['2-1', '2-2'], status: 'floating' });

    // });
    //check that it does not place a ship in an invalid or overlapping spot
    //check that it registers a hit correctly and forwards that hit to the correct ship
    //check that it properly displays if there is no hit
    //check if all ships on a side have been sunk to declare winner/loser
    //check that it stops adding ships after they are all placed for both players



//check that it correctly alternates turns
//check that it correctly alternates who's turn it is when adding a ship


//player
    //check that player correctly generates a gameboard
    test('Create Player', () => {
   
        expect(new tests.Player('player')).toEqual({type:'player', board:{ships:[], fleetStatus:'floating', misses: 0 }});
    });


    //check that player correctly creates a new ship
    //check that player taking a turn correctly triggers other things to check for hit/miss

//computer
test('Create Computer', () => {
   
    expect(new tests.Player('computer')).toEqual({type:'computer', board:{ships:[], fleetStatus:'floating', misses: 0 }});
});
    //check that computer correctly creates a new ship
    //check that computer randomly selects a valid spot when taking placing a ship
    //check that computer randomly selects a valid spot when taking a turn
    //check that computer taking a turn correctly triggers other things to check for hit/miss

