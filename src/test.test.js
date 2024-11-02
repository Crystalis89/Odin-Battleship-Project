const tests = require('./scripts');
let newplayer
let testship

//Ship
    //test that the ship gets the correctly assigned hp, location, and status value

    test('Ship create', () => {
        expect(new tests.Ship(2, ['2-1', '2-2'], 'floating')).toEqual({ hp: 2, location: ['2-1', '2-2'], status: 'floating' });
    });

    //check that a hit correctly registers and updates the HP of the correct ship

    test('Hit, HP Reduce', () => {
        testship = testship = new tests.Ship(2, ['2-1', '2-2'], 'floating')
        expect(testship.attackHit()).toEqual({ hp: 1, location: ['2-1', '2-2'], status: 'floating' });

    });
    // //check that ship correctly switched to sunk when hp becomes 0
    test('HP Sunk', () => {
        testship = new tests.Ship(1, ['2-1', '2-2'], 'floating')
        
        expect(testship.attackHit()).toEqual({ hp: 0, location: ['2-1', '2-2'], status: 'sunk' });
    });



//gameboard


    test('Create Gameboard', () => {
    
        expect(new tests.Gameboard()).toEqual({ships:[], fleetStatus:'floating', misses: 0 });
    });

    //check that it is able to place a ship on the board.
    test('Place ship', () => {
    
        expect(new tests.Gameboard().validPlacement(['2-1', '2-2'])).toEqual([{ hp: 2, location: ['2-1', '2-2'], status: 'floating' }]);
    });

    //Check that can add a second ship
    test('Place second ship', () => {
       
        newplayer = new tests.Player('player')

        newplayer.board.validPlacement(['2-1', '2-2'])

    

        expect(newplayer.board.validPlacement(['3-1', '3-2'])).toEqual([{hp: 2, location: ['2-1', '2-2'], status: 'floating'}, {hp: 2, location: ['3-1', '3-2'], status: 'floating'}]);

    });

        //Check that can add a third ship
        test('Place third ship', () => {
            newplayer = new tests.Player('player')

            newplayer.board.validPlacement(['2-1', '2-2'])
            newplayer.board.validPlacement(['3-1', '3-2'])
         
        
    
            expect(newplayer.board.validPlacement(['4-1', '4-2'])).toEqual([{hp: 2, location: ['2-1', '2-2'], status: 'floating'}, {hp: 2, location: ['3-1', '3-2'], status: 'floating'}, {hp: 2, location: ['4-1', '4-2'], status: 'floating'}]);
        });

            //Check that can add a fourth ship
    test('Place fourth ship', () => {
        newplayer = new tests.Player('player')

        newplayer.board.validPlacement(['2-1', '2-2'])
        newplayer.board.validPlacement(['3-1', '3-2'])
        newplayer.board.validPlacement(['5-1', '5-2'])
 
    

        expect(newplayer.board.validPlacement(['4-1', '4-2'])).toEqual([{hp: 2, location: ['2-1', '2-2'], status: 'floating'}, {hp: 2, location: ['3-1', '3-2'], status: 'floating'}, {hp: 2, location: ['5-1', '5-2'], status: 'floating'}, {hp: 2, location: ['4-1', '4-2'], status: 'floating'}]);
    });

        //Check that can add a fifth ship
        test('Place fifth ship', () => {
            newplayer = new tests.Player('player')

            newplayer.board.validPlacement(['2-1', '2-2'])
            newplayer.board.validPlacement(['3-1', '3-2'])
            newplayer.board.validPlacement(['5-1', '5-2'])
            newplayer.board.validPlacement(['6-1', '6-2'])        
    
            expect(newplayer.board.validPlacement(['4-1', '4-2'])).toEqual([
                {hp: 2, location: ['2-1', '2-2'],status: 'floating'}, 
                {hp: 2, location: ['3-1', '3-2'], status: 'floating'}, 
                {hp: 2, location: ['5-1', '5-2'], status: 'floating'}, 
                {hp: 2, location: ['6-1', '6-2'], status: 'floating'}, 
                {hp: 2, location: ['4-1', '4-2'], status: 'floating'}]);
        });

            //Check that cannot add a sixth ship
    // test('Cannot add sixth ship', () => {
    //     newplayer = new tests.Player('player')

    //     newplayer.board.validPlacement(['2-1', '2-2'])
    //     newplayer.board.validPlacement(['3-1', '3-2'])
    //     newplayer.board.validPlacement(['5-1', '5-2'])
    //     newplayer.board.validPlacement(['6-1', '6-2'])
    //     newplayer.board.validPlacement(['8-1', '8-2'])
    //     console.table(newplayer.board.ships.length)

    //     expect(newplayer.board.validPlacement(['4-1', '4-2'])).toEqual(false);

    // });

    //Check that returns false if give it more than three coordinates.
    test('Number of coordinates check', () => {
    
        expect(new tests.Gameboard().validPlacement(['2-1', '2-2', '2-3', '2-4'])).toEqual(false);
    });

    //check that it does not place a ship in an overlapping spot
    test('Invalid Placement', () => {
        newplayer = new tests.Player('player')

        newplayer.board.validPlacement(['2-1', '2-2'])

        expect(newplayer.board.validPlacement(['2-1', '2-2'])).toEqual(false);
    });

    //check that placement coord not to high or low.
    test('Check if coordinate within bounds', () => {
    
        expect(new tests.Gameboard().validPlacement(['2-10', '0-2'])).toEqual(false);
    });


    //check that it registers a hit correctly and forwards that hit to the correct ship
    test('Recieve attack', () => {
        newplayer = new tests.Player('player')
        newplayer.board.validPlacement(['2-1', '2-2'])
        newplayer.board.validPlacement(['5-1', '5-2'])


        expect(newplayer.board.receiveAttack(['2-1'])).toEqual([{ hp: 1, location: [false, '2-2'], status: 'floating' }, { hp: 2, location: ['5-1', '5-2'], status: 'floating' }]);
    });
    //Check that it errors if give it to many targets for attack at once.
    test('To many attack targets', () => {
        newplayer = new tests.Player('player')
        newplayer.board.validPlacement(['2-1', '2-2'])

        expect(newplayer.board.receiveAttack(['2-1', '2-2'])).toEqual(false);
    });

    // check that it properly increments the misses value of the right gameboard
    test('Attack misses', () => {
        newplayer = new tests.Player('player')
        newplayer.board.validPlacement(['2-1', '2-2'])

        expect(newplayer.board.receiveAttack(['2-3'])).toEqual({ships:[{ hp: 2, location: ['2-1', '2-2'], status: 'floating' }], fleetStatus:'floating', misses: 1 });
        // console.table(newplayer.board.ships)
    });

    //check if all ships on a side have been sunk to declare winner/loser
    test('Lose check', () => {
        newplayer = new tests.Player('player')
        newplayer.board.validPlacement(['2-1', '2-2', '2-3'])
        newplayer.board.receiveAttack(['2-1'])
        newplayer.board.receiveAttack(['2-2'])
    
        expect(newplayer.board.receiveAttack(['2-3'])).toEqual('fleetsunk');

    });

    
//player
    //check that player correctly generates a gameboard
    test('Create Player', () => {
   
        expect(new tests.Player('player')).toEqual({type:'player', board:{ships:[], fleetStatus:'floating', misses: 0 }});
    });


    //check that player correctly creates a new ship
    test('Add ships to player', () => {
        newplayer = new tests.Player('player')


        expect(newplayer.board.validPlacement(['2-1', '2-2'])).toEqual([{ hp: 2, location: ['2-1', '2-2'], status: 'floating' }])
    });


//computer
    test('Create Computer', () => {
    
        expect(new tests.Player('computer')).toEqual({type:'computer', board:{ships:[], fleetStatus:'floating', misses: 0 }});
    });
     //check that computer randomly selects a valid spot when taking placing a ship


    //check that computer correctly creates a new ship
    test('Add ships to computer', () => {
        newplayer = new tests.Player('computer')
        let testcoords = newplayer.randomCoords()
  


        expect(newplayer.board.validPlacement(testcoords)).toEqual([{ hp:testcoords.length, location: testcoords, status: 'floating' }])
    });

   
    //check that computer randomly selects a valid target when taking a turn
    // test('Random Target for attack', () => {
    //     newplayer = new tests.Player('computer')
    //     let testtarget = newplayer.randomCoords(1)
    //     newplayer.board.validPlacement(['2-1', '2-2'])



    //     expect(newplayer.board.receiveAttack(testtarget)).toEqual([{ hp:testcoords.length, location: testcoords, status: 'floating' }])
    // });

    
    //check that computer taking a turn correctly triggers other things to check for hit/miss





//check that it stops adding ships after they are all placed for both players and begins the game

//Check that it correctly alternates turns
