const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://ajay:ajay123@cluster0.dt687z1.mongodb.net/mydb")
  .then(() => {
    console.log("connected successfully !!!!");
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
