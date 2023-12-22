const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ajay:ajay123@cluster0.dt687z1.mongodb.net/mydb"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Admin Routes
app.post("/admin/signup", (req, res) => {
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

app.post("/admin/courses", (req, res) => {
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
});

app.get("/admin/courses", (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  });
});

// User Routes
app.post("/users/signup", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "User created successfully",
  });
});

app.get("/users/courses", (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  });
});

app.post("/users/courses/:courseId", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const courseId = req.params.courseId;

  const UserCourseSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    courseId: mongoose.Schema.Types.ObjectId,
  });

  const UserCourse = mongoose.model("UserCourse", UserCourseSchema);

  UserCourse.create({
    userId: user._id,
    courseId,
  });

  res.json({
    message: "Course purchased successfully",
  });
});

app.get("/users/purchasedCourses", (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const password = req.headers.password;

  const UserCourseSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    courseId: mongoose.Schema.Types.ObjectId,
  });

  const UserCourse = mongoose.model("UserCourse", UserCourseSchema);
  const userCourses = UserCourse.find({ userId: user._id });
  const purchasedCourses = Course.find({ _id: { $in: courseIds } });
  res.json({ purchasedCourses });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
