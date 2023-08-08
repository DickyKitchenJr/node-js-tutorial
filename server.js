// difference between node.js and vanilla.js =
// 1. node.js runs on the server and not the browser (backend vs front-end)
// 2. the console is the terminal window
// type node and the js file name (server in this case) to run the below code
console.log("Yep, I'm working");
// 3. global object vs window object
// console.log(global);

// 4. uses commonjs modules vs ES6 modules (require vs import)
const os = require('os');
const path = require('path');
const math = require('./math');


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));