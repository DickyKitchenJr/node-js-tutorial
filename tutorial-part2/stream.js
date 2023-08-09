const fs = require('fs');

const rs = fs.createReadStream('./files/lotsOfWords.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/newLotsOfWords.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// does the same as above but is more efficient
rs.pipe(ws);
