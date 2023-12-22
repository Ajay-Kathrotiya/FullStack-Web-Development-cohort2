/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("One second Done");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Two Second Done");
      resolve();
    }, 5000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Three seconds done");
      resolve();
    }, 3000);
  });
}

let time;

function calculateTime() {
  time = Date.now();
}

calculateTime();

Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(
      "Total Time taken inn second is :  ",
      (Date.now() - time) / 1000
    );
  });

// in promise.all fun all the promises are executed concurantly ::::
