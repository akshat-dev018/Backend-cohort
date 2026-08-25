const mongoose = require("mongoose");

// schema class hoti hai mongoose ke ander 
// toh agr class ko object bnana hai kya krna hai 
let notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description : {
        type:String,
        minlength : 10,
    },
});

//schema ka kya banaoge ab model jo tumhare mongodb mein collection banayega 

const NotesModel = mongoose.model('notes',notesSchema);

module.exports = NotesModel;

