const express = require('express');
const { message } = require('statuses');
const upload = require('../config/multer');

const router = express.Router();

router.post('/', upload.single("image"), (req,res)=>{
    try {
        let body = req.body;
        let file = req.file;
        res.status(200).json({
            message:"file recived successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
        })
    }
})

module.exports = router;