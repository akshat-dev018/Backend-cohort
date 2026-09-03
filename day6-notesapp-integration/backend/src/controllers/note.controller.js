const NotesModel = require("../models/notes-model");

const createNoteController =  async (req,res)=>{
    try {
        let {title,description} =  req.body;
        let newNote = await NotesModel.create({
            title,description
        });

        return res.status(201).json({
            messag : "Note created successfully",
            data : newNote,
        }) // .json lagya hai ye ek method hai jo aapke json data ko bhejta hai

    } catch (error) {
         return res.status(500).json({
            message:"internal server error",
        })
    }
}

const getAllNotesController = async (req,res)=>{
    try {
        
        const allNotes = await NotesModel.find();
        res.status(200).json({
            message:"All notes fetched",
            data:allNotes
        });

    } catch (error) {
          return res.status(500).json({
            message:"internal server error",
        })
    }
}

const getSingleNoteController = async (req,res)=>{
    try {
        let noteId = req.params.id;
        
        let note = await NotesModel.findById(noteId);
        res.status(200).json({
            message:"Note fetched successfully",
            data : note,
        })
    } catch (error) {
         return res.status(500).json({
            message:"internal server error",
        })    }
}
 
const updatesNoteController = async (req,res)=>{
    try {
        let noteId = req.params.id;
        let body = req.body

        let updatedNotes = await NotesModel.findByIdAndUpdate(noteId , body , {new:true}, )

        return res.status(200).json({
            message: "note updated ",
            data : updatedNotes
        })

    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
        })
    }
}

const deleteNotesController = async (req,res)=>{
    try {
         
        let noteId = req.params.id;
        
        await NotesModel.findByIdAndDelete(noteId);

        return req.status(200).json({
            message : "note deleted ",
        })

    } catch (error) {
         return res.status(500).json({
            message:"internal server error",
        })
    }
}

const singleEntityController = async (req,res)=>{
    try {

        let noteId = req.params.id;
        let body = req.body;

        let updatedNotes = await NotesModel.findByIdAndUpdate(noteId, body , {
            new:true,
        });

        return res.status(200).json({
            message:"Note updated sucessfully",
            data:updatedNotes,
        })

    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
        });
    }
}

module.exports = {
    createNoteController,
    getAllNotesController,
    getSingleNoteController,
    updatesNoteController,
    deleteNotesController,
    singleEntityController,
};