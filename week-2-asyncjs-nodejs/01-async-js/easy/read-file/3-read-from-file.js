let fs = require("fs");

fs.readFile("ak.t", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

let c = 0;
for (let i = 0; i < 1000000000; i++) {
  c += i;
}

console.log("outside the loop");
