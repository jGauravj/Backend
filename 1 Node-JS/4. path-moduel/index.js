// Path moduel provide utilitise for working with file and directry paths.

const path = require("path");

// directry name -- important
console.log("Diractory name:", path.dirname(__filename));

// file name
console.log("File name", path.basename(__filename));

// file extention
console.log("file extention", path.extname(__filename));

// combine multiple file in to one and create one apsulute path --> important
const joinPath = path.join("/user", "docs", "node", "tutorial");
console.log("Joined Path", joinPath);

// resolve path
const resolvePath = path.resolve("user", "docs", "node", "tutorial");
console.log("Resolved Path", resolvePath);

// normalizePath -- >
const normalizePath = path.normalize("/user/docs/map/../tutorial/node ");
console.log("Normalize Path", normalizePath);
