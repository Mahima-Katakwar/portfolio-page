const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes); //(data/notes) - data coming
});

app.get("/api/notes/:id/:id2", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  //console.log(req.params);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started: ${PORT}`));