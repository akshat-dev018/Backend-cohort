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
        console.log("error in creation",error)
    }
}

module.exports = createNoteController;