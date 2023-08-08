// difference between node.js and vanilla.js =
// 1. node.js runs on the server and not the browser (backend vs front-end)
// 2. the console is the terminal window
// type node and the js file name (server in this case) to run the below code
console.log("Yep, I'm working");
// 3. global object vs window object
// console.log(global);

// 4. uses commonjs modules vs ES6 modules (require vs import)
// 5. node.js is missing some javascript APIs like fetch

const os = require('os');
const path = require('path');
const { add, subtract, multiply, divide } = require('./math');

console.log(add(2,2));
console.log(subtract(5,2));
console.log(multiply(1,2));
console.log(divide(2,2));


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));