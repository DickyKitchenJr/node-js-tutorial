const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(
      path.join(__dirname, "files", "starter.txt")
    );
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n One day soon I will be a professional dev."
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "renamedPromise.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "renamedPromise.txt"),
      "utf8"
    );
    console.log(newData)
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });

// console.log("I'll come first because I process faster");

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'writeFile creates a new file', (err) => {
//     if (err){
//         throw err;
//     } else {
//         console.log("Write successful");
//     }

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\n *appendFile has updated this file*",
//       (err) => {
//         if (err) {
//           throw err;
//         } else {
//           console.log("Append successful");
//         }
//       }
//     );
// })

// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "appendFile will create a file or update a file, but it's best to create the file first then append it",
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Append successful");
//     }
//   }
// );

// fs.rename(
//   path.join(__dirname, "files", "test.txt"),
//   path.join(__dirname, "files", "append.txt"),
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Rename successful");
//     }
//   }
// );

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
