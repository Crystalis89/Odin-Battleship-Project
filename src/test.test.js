const tests = require('./scripts');

//Ship
    //test that the ship gets the correctly assigned hp, location, and status value

    test('Ship create', () => {
        expect(new tests.Ship(2, ['2-1', '2-2'], 'floating')).toEqual({ hp: 2, location: ['2-1', '2-2'], status: 'floating' });
    });

    //check that a hit correctly registers and updates the HP of the correct ship
    let testship

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
    test('Place ship', () => {
    
        expect(new tests.Gameboard().validPlacement(['2-1', '2-2'], 3)).toEqual([{ hp: 3, location: ['2-1', '2-2'], status: 'floating' }]);
    });
    //Check that returns false if give it more than three coordinates.
    test('Number of coordinates check', () => {
    
        expect(new tests.Gameboard().validPlacement(['2-1', '2-2', '2-3', '2-4'], 3)).toEqual(false);
    });

    //check that it does not place a ship in an invalid or overlapping spot
    test('Invalid Placement', () => {
       let newplayer = new tests.Player('player')
//        console.log (newplayer)

// console.log (newplayer.board)
newplayer.board.validPlacement(['2-1', '2-2'])
// console.log(newplayer.board)

        expect(newplayer.board.validPlacement(['2-1', '2-2'], 3)).toEqual(false);
    });

    //check that it registers a hit correctly and forwards that hit to the correct ship
    //check that it properly displays if there is no hit and increments the miss value of the right ship
    //check if all ships on a side have been sunk to declare winner/loser
    //check that it stops adding ships after they are all placed for both players

//Check that it correctly alternates turns


//player
    //check that player correctly generates a gameboard
    test('Create Player', () => {
   
        expect(new tests.Player('player')).toEqual({type:'player', board:{ships:[], fleetStatus:'floating', misses: 0 }});
    });


    //check that player correctly creates a new ship


//computer
    test('Create Computer', () => {
    
        expect(new tests.Player('computer')).toEqual({type:'computer', board:{ships:[], fleetStatus:'floating', misses: 0 }});
    });
    //check that computer correctly creates a new ship
    //check that computer randomly selects a valid spot when taking placing a ship
    //check that computer randomly selects a valid spot when taking a turn
    //check that computer taking a turn correctly triggers other things to check for hit/miss

