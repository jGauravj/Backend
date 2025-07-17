function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise Start");
delayFn(2000).then(() => console.log("After 2 sec Promise Resolve"));
console.log("End");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can not perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 0)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log("Error:", error));
