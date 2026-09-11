const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Absolute path to server/uploads
const uploadPath = path.join(__dirname, "../../uploads");

// Create uploads folder automatically if it doesn't exist
fs.mkdirSync(uploadPath, { recursive: true });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadPath);
//     },

//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// });

const storage = multer.memoryStorage()

const upload = multer({ storage });

module.exports = upload;