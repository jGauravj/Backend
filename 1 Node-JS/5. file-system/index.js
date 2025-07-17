// File system help you to work with files

const fs = require("fs");
const path = require("path");

// now we make a data folder
const dataFolder = path.join(__dirname, "Data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created");
}

// create a file inside our Data folder

const filePath = path.join(dataFolder, "example.txt");
// sync way of creating a file
fs.writeFileSync(filePath, "Hello from Node js");
console.log("File created successfully");

// Read the file -->
const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File Content:", readContentFromFile);

// Append another line (add another line to file)
fs.appendFileSync(filePath, "\n this is the new line added to that file ");
console.log("New file content Added:");

// ------ Async Way of creating File -----------

const asyncFilePath = path.join(dataFolder, "async-file.txt");
fs.writeFile(asyncFilePath, "Hello Async node js", (err) => {
  if (err) throw err;
  console.log("Async File is Created SuccessFully");

  // read file

  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Async File Content:", data);

    fs.appendFile(asyncFilePath, "\nThis is another line added", (err) => {
      if (err) throw err;
      console.log("New Async file line added ");

      fs.readFile(asyncFilePath, "utf-8", (err, upadatedData) => {
        if (err) throw err;
        console.log("Async file UpdatedData is Here:", upadatedData);
      });
    });
  });
});
