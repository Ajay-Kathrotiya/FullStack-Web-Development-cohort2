const express = require("express");
const jwt = require("jsonwebtoken");
const port = 3000;
const app = express();

// JWT generte , decode, varify token ::

// generate jwt token ::;

const user = {
  username: "ajay kathrotiya",
  password: "ajay1234",
};

const secret = "Ajay123@";

const token = jwt.sign({ username: user.username }, secret);
console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFqYXkga2F0aHJvdGl5YSIsImlhdCI6MTcwMzE3NjAyOX0.d3ZDHeKAw9FaeHS9u3co-GwRKCaaIVyJ13hGLhRRvFo

// let varify above token ::

// console.log(
//   jwt.verify(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFqYXkga2F0aHJvdGl5YSIsImlhdCI6MTcwMzE3NjAyOX0.d3ZDHeKAw9FaeHS9u3co-GwRKCaaIVyJ13hGLhRRvFo",
//     secret
//   )
// );

const verifyResult = jwt.verify(token, secret);
console.log(verifyResult);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// decode

const decode = jwt.decode(token);
console.log(decode, " this is decode");
