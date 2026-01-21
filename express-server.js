const path = require("path")

const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "about.html")));

app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "contact-me.html")));

app.get("/{*splat}", (req, res) => res.sendFile(path.join(__dirname, "404.html")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
