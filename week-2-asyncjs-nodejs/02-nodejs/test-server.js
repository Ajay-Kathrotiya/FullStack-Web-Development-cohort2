const express = require("express");
const app = express();

const port = 3000;

app.get("/ajay", (req, res) => {
  res.send("Hello World !!!");
});

app.listen(port, () => {
  console.log(`Http Server is running on the port ${port}`);
});
