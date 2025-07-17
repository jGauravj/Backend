function delayedFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayedFn(2000);
  console.log(name);
}
delayedGreet("Gaurav Jangir");

async function divideFn(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Can not divide by 0");
    return num1 / num2;
  } catch(error) {
    console.error("Error:", error);
    return null;
  }
}

async function mainFn() {
  console.log(await divideFn(10, 5));
  console.log(await divideFn(10, 0));
}
mainFn();
