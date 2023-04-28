const express = require("express");
const app = express();

const users = [];

// get: we get all users
app.get("/", (req, res) => {
  res.send(users);
});

// post: we add a user
app.post("/user", (req, res) => {
  // we get the user from the request body
  const user = req.body;
  // we add the user to the users array
  users.push(user);
  // we send a response to the client
  res.send("user added");
});

// put: we update a user
app.put("/user/:id", (req, res) => {
  // we get the id from the request parameters
  const id = req.params.id;
  //  we get the updated user from the request body
  const updatedUser = req.body;
  //   we update the user in the users array
  users[id] = updatedUser;
  //   we send a response to the client
  res.send("user updated");
});

// delete: we delete a user
app.delete("/user/:id", (req, res) => {
  // we get the id from the request parameters
  const id = req.params.id;
  // we delete the user from the users array
  users.splice(id, 1);
  // we send a response to the client
  res.send("user deleted");
});
