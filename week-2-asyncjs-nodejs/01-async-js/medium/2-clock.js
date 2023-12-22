let sec = 0;
let min = 0;
let hour = 0;

function clock() {
  setTimeout(() => {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hour++;
    }
    if (hour == 24) {
      hour = 0;
    }
    console.log(`${hour} : ${min} : ${sec}`);
    clock(); // Call the clock function recursively
  }, 1000);
}

clock(); // Start the clock without passing any arguments
