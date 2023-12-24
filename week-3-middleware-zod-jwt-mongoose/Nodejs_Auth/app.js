require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();
app.use(express.json());

// Authentication middleware calling here :;

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome dude !!!");
});

// Register ::

app.post("/register", async (req, res) => {
  // register logic

  try {
    // get userinput :
    const { firstName, lastName, email, password } = req.body;

    // validate user input ::
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist ::
    // validate if user exist in our database ::
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User is already exist, Please Login");
    }

    // if user not exist create new one and add in our db , encrypt password :: :)

    // encrypt user password :
    encryptedUserPassword = await bcrypt.hash(password, 10);

    // create user in our db :

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(),
      password: encryptedUserPassword,
    });

    // create token ::
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "5h" }
    );

    // save user token :
    user.token = token;

    // return new user :
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Login ::

app.post("/login", async (req, res) => {
  // login logic here

  try {
    // get user input ::

    const { email, password } = req.body;

    // validate user input ::

    if (!(email && password)) {
      res.status(400).send("All Inputs is Required ...");
    }

    // validate if user exist in our db :

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // create token :;

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      // save user token :
      user.token = token;

      //user
      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.error(err);
    res.send("Somthing wrong....");
  }
});

module.exports = app;
