// Callback in Js is a Function that passed an argument to another Funtion, which gets executes letter,     usually after an async operation is completed.

const fs = require("fs");

function person(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
function address() {
  console.log("India");
}
person("Gaurav jangir", address);

// Node Perspective --->

fs.readFile("input.txt", "utf-8", (err, data) => {
  // this is the callback

  if (err) {
    console.log(" Error reading file", err);
    return;
  }
  console.log(data);
});
