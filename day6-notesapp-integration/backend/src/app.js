const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const NotesModel = require("./models/notes-model");
const createNoteController = require("./controllers/note.controller");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());

connectDb();

app.get("/",(req,res)=>{
    res.send("ok got it")
})


// ye mera common note hai jiske 2 children hai {create , allnotes}
app.use('/notes',notesRoute);


module.exports = app;

