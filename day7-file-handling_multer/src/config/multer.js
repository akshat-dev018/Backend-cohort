const multer = require('multer');

// multer provide 2 things => DISK STORAGE and MEMORY STORAGE
//  DISK STORAGE => local save krna ho  => system mein
// MEMORY STORAGE => google pe jo images hai 

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null , "uploads/")
    },
    filename : (req,file,cb)=>{
        cb(null, Date.now()+file.originalname);
    }
})

// server
// const storage = multer.memoryStorage();

const upload = multer({storage:storage});
module.exports = upload;

// destination mtlb file jaha store hoga
// filename mtlb unique name of file
// req mtlb jo api aa rhi wo
// file mtlb jo api mein file aa rhi wo 
// cb take two things error and destination