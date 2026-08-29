// router ek express ka method hai jo tumhare path ko main file se join krta hai

const express = require('express');
const {createNoteController,
    getAllNotesController,
    getSingleNoteController,
    updatesNoteController,
    deleteNotesController} = require("../controllers/note.controller");

const NotesModel = require('../models/notes-model');

const router = express.Router();

// create api
router.post('/create',createNoteController);

// read 
router.get("/allnotes", getAllNotesController);

// read 2
router.get('/:id', getSingleNoteController);

// update
 router.put('/:id', updatesNoteController);

// delete
router.delete("/:id", deleteNotesController); 

module.exports = router;