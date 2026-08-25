const { default: mongoose } = require("mongoose");

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://akshattiwariglbajaj_db_user:%3cohort123%3E@cohort-cluster.7b95jye.mongodb.net/");
// mongoose ke mongoDb ke liye jitne bhi operations honge wo promise return krenge
    console.log("mongoDb connected");
    } catch (error) {
        console.log("error while connecting db",error)
    }
}

module.exports =connectDb;