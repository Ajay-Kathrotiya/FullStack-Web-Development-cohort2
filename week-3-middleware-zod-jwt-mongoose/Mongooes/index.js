const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BlogPost = new schema({
  name: String,
  title: String,
});

mongoose
  .connect(
    "mongodb+srv://ajay:ajay123@cluster0.dt687z1.mongodb.net/logins?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connectd !!!");
  });

const loginSchema = mongoose.Schema({
  username: String,
  password: String,
});

const Login = mongoose.model("Login", loginSchema);

function addLogin(login) {
  Login.findOne({ username: login.username }).then((err, existingUser) => {
    if (err) {
    } else {
      if (existingUser) {
        console.log("Data already exists. Not adding to the collection.");
      } else {
        const newlogin = new Login(login);
        newlogin.save().then(() => {
          console.log("data added succesfully");
        });
      }
    }
  });
}

function deleteUser(user) {
  Login.deleteOne({ username: user }).then((err) => {
    if ((err.deletedCount = 1)) {
      console.log("Deleted Succesfully", err);
    } else {
      console.log("user not tehre dude");
    }
  });
}

function findUser(user) {
  Login.findOne({ username: user })
    .exec()
    .then((foundUser) => {
      if (foundUser) {
        console.log("Found user:", foundUser);
      } else {
        console.log("User not found.");
      }

      // Additional logic can be placed here

      // Close the connection if needed
      // mongoose.connection.close();
    })
    .catch((err) => {
      console.error("Error finding user:", err);
    });
}

findUser("ajay kathrotiya");
