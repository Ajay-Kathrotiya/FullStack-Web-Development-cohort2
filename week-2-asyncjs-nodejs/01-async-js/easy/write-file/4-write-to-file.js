let fs = require("fs");

fs.readFile("ak.t", "utf-8", (err, data) => {
  data += 1;
  fs.writeFile("ak.t", data, "utf-8", (err) => {
    console.log("write done");
  });
});

console.log("outside the loop");
