const lodash = require("lodash");

const names = ["gaurav", 'jony', 'himanshu', 'darshan', 'kk'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);