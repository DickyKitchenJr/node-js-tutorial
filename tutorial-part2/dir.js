const { error } = require("console");
const fs = require("fs");

// if the directory doesn't exist, make the directory (safe way to prevent overwriting a pre-existing directory)
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
}

// if the directory does exist, remove it
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Removed");
  });
}