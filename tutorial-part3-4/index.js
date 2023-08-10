const { format } = require('date-fns');

// using the v4 : uuid is like saying import as, so in this case it's importing version 4 as the variable uuid
const { v4 : uuid} = require('uuid');


console.log("The Current Date And Time Is:");

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss')); 

console.log("Your unique id is:")

console.log(uuid());