const fs = require("fs");
const path = require("path");

const starterTXT = path.join(__dirname, 'files', 'starter.txt');

fs.readFile(starterTXT, "utf8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});

console.log("I'll come first because I process faster");

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'writeFile creates a new file', (err) => {
    if (err){
        throw err;
    } else {
        console.log("Write successful");
    }

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\n *appendFile has updated this file*",
      (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Append successful");
        }
      }
    );
})

fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "appendFile will create a file or update a file, but it's best to create the file first then append it",
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Append successful");
    }
  }
);

fs.rename(
  path.join(__dirname, "files", "test.txt"),
  path.join(__dirname, "files", "append.txt"),
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Rename successful");
    }
  }
);

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
