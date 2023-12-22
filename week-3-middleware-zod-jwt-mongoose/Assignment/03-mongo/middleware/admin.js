const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  Admin.findOne({
    username: req.headers.username,
    password: req.headers.password,
  })
    .exec()
    .then((found) => {
      if (found) {
        res.send("Logged in Succesfully ");
        next();
      } else {
        res.send("User Not Exist");
      }
    });
}

module.exports = adminMiddleware;
