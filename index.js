const express = require("express");
const path = require("path");
const app = express();

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Route for courses page
app.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname, "courses.html"));
});

// Route for contact page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

// Route for login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
