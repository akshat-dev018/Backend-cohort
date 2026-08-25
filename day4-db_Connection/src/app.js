const express = require("express");
const connectDb = require('./config/db');
const NotesModel = require('./models/noteSchema')

const app = express();
app.use(express.json())

connectDb();

app.get("/",(req,res)=>{
    res.send("ok mai chalu hun");
})


// frontend se data lena hai body mein
app.post('/create',async (req,res)=>{
    let {title,description} = req.body;

    const newNote = await NotesModel.create({
        title,
        description,
    });

    res.send({
        sucess:true,
        message : "Note created successfully",
        data : newNote,
    })
})



module.exports = app;