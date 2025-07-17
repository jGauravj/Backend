// module.export --> export functionality from a moduel
// require --> import functionality from other module



const firstModule = require('./first-module');

console.log(firstModule.add(2, 2));


try {
  console.log("Trying to devide by Zero")
  let result = firstModule.devide(0, 20)
  console.log("Result", result)
} catch (error) {
  console.log("Caught an Error", error);
  
}

// module wrapper 
// (  
//   function (exports, require, module, __filename, __dirname) {
//     // your module code gose here
//   }
// )