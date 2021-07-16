const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");

  //File Append
  fs.appendFile(
    path.join(__dirname, "/test", "hello.txt"),
    "I Love NodeJS!",
    (err) => {
      if (err) throw err;
      console.log("File written to...");
    }
  );
});

// Create and write to file
// fs.createFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");
//   }
// );
