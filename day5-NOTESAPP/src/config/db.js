const { default: mongoose } = require("mongoose");

const connectDb = async ()=>{
    try {
    await mongoose.connect("mongodb://localhost:27017/notes-app");
    console.log("mongoDb connected");
    } catch (error) {
        console.log("error while connecting db",error)
    }
}

module.exports =connectDb;