const scripts = require('./scripts');


//Listener for gameboard clicks for placement and attacks. After click first check if board is player or computer class. Then check if full ship load for both. If not pass coordinates to validplacement, if full pass to recieveattack. 

//after player takes turn and a short delay have computer generate random coordinate and feed it to the same methods. If returns 'fleetsunk' after either player or computer turn announce that one as the loser and end the game.
