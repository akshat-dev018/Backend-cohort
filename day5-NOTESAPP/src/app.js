const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/notes-model");
const createNoteController = require("./controllers/note.controller");

const app = express();

app.use(express.json());

connectDb();

app.get("/",(req,res)=>{
    res.send("ok got it")
})

// api for create
app.post('/create',createNoteController)

module.exports = app;

