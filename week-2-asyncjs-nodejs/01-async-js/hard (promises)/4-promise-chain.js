/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("One Second Done");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Two Second Done");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Three Seconds Done");
      resolve();
    }, 3000);
  });
}

let time = Date.now();

async function syncFun() {
  console.log("syncFun is called");
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
}

syncFun().finally(() => {
  console.log("Total time taken is :   ", (Date.now() - time) / 1000);
});

function calculateTime() {}
