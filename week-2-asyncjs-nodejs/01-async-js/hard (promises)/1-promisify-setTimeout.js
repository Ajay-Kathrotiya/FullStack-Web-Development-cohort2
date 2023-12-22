/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promis fun call after end right ;))))");
    }, n);
  });
}

let p = wait(5000);
p.then((resolveData) => {
  console.log(resolveData);
});

console.log("ajay");

let a = 0;
for (let i = 0; i < 100000; i++) {
  a += i;
}

console.log(`Total sum is ${a}`);
console.log("ajay kathrotiya is here for you !!!!");
