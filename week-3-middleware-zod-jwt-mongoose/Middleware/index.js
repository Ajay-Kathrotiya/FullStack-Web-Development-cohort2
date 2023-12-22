const express = require("express");
const app = express();
const port = 3000;

// middlewre is used for authenticte the req
// is simple fun, having res,res cycle:

// let implement middleware auth like if age > 18 then only allow for ride :::

function middlewareForRideAuth(req, res, next) {
  if (req.query.age < 18 || req.query.age === undefined) {
    res.status(404).send("You are not able to ride ");
  } else {
    next(); // next is simple pass the control to next middelsware fun, ::
  }
}

app.get("/ride", middlewareForRideAuth, (req, res) => {
  // if age > 18 then only control will come here and run below code ::;
  res.json({
    message: "You can use this ride for Fun !!!",
  });
});

// if like any middleware need in every request  then we can use app.use
// let create one

// function globalMiddleware(req, res, next) {
//   res.json({
//     message: "I am global middleware running for every request on app",
//   });
//   next();
// }

// app.use(globalMiddleware); // only triggred for below reqs ::

// app.get("/", (req, res) => {
//   res.json({ message: "globle middleware is called" });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
