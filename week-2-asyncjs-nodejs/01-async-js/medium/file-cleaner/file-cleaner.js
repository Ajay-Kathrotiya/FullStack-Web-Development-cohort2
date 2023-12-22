let fs = require("fs");

fs.readFile("ak.t", "utf-8", (err, data) => {
  console.log(data);

  let arr = data.split(" ");
  data = "";
  let str = "";
  for (let x of arr) {
    if (x !== "") {
      str = str + x + " ";
    }
  }

  fs.writeFile("ak.t", str, "utf-8", (err) => {
    console.log("write done");
  });
});
