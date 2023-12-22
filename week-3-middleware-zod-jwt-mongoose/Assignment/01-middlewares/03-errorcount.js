const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get("/user", function (req, res, next) {
  throw new Error("User not found");
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

app.use((err, req, res, next) => {
  // err middleware
  // this will run when error occured :::
  res.status(404).send("");
  errorCount++;
});

//Error-handling middleware in Express is designed to handle errors that occur during the processing of the request-response cycle. It runs only when an error is explicitly passed to it or when an unhandled error occurs during the processing of the request.

module.exports = app;
