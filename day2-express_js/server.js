// let http = require("http");

// let server = http.createServer((req,res)=>{
//         if(req.url === "/users"){
//             res.end("mai users mein hun");
//         }
//          if(req.url === "/home"){
//             res.end("mai home mein hun");
//         }
//          if(req.url === "/carts"){
//             res.end("mai carts mein hun");
//         }
// })

// server.listen(3000,()=>{
//     console.log("server chalu hai 3000 pe");
// })


// const express = require("express");

// const app = express();

// app.get("/",(req,res)=>{
//     res.send("ok got it");
// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })

// PRORTOCOLS
// http => follow res and req
// https => secured and follow res and req 
// FTP => file transfered protocol also follows req and file and cb(call back)
// SMTP =>simple mail transfer protocol use for sending mail(from ,to,subject,msg)
// WEB-SOCKET => two way communication

// METHODS for REST API'S
// REST => Representational State Transfer
// GET => send data (data base mein ho rha ye sb)
// POST => create or save something (data base mein ho rha ye sb)
// PUT/PATCH=> update something (data base mein ho rha ye sb)
// DELETE => delete anything  (data base mein ho rha ye sb)

const express = require("express");

const app2 = express();

// middlewar for accepting data from frontend
app2.use(express.json())

// this is known as api 
app2.get('/',(req,res)=>{
    res.send("hey you reached")
})

app2.post("/create", (req,res)=>{
    // create
    console.log(req.body);
    res.send("ok post");
})

let port = 3000;

app2.listen(port,()=>{
    console.log(`server is running on port${port} `);
})

// Express is a framework for Node js
// express do not know how to catch text data in req

// req ke ander ki cheze
// body => frontend se bheja hua data
// query => search krte time (extra data in path)
// params => dynamic url
// file / files => jb FTP se kaam krte ho 
