/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let date = Date.now();
  while (Date.now() - date < seconds) {
    // do nothing  just ake the tread busy ;;;
  }
}

console.log("start");
sleep(10000);
console.log("end");
