const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   //1. If there is an error, we will just return
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   let returnedIp = ip.ip;
//   // console.log("IP, ", ip.ip);
//   //2. If the IP is returned to us, we will call the next function by IP
//   fetchCoordsByIP(returnedIp, (error, location) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log(location);
//     let coords = location;


//     fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log('Flyover Times: ', flyOverTimes);
//     });
//   });


// });

/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results. 
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 */ 

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

