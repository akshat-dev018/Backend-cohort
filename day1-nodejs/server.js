// ab agr tumhe kisi bhi chez ko import krnaho initialy toh aap
//  "require ka use kroge"

let http = require("http");

let server = http.createServer((req,res)=>{
    console.log("hey i am server");
    res.end("ok maine tumhri baat sunli");
});


server.listen(3000,()=>{
    console.log("server is running on port 3000");
});
// listen krne ke liye ek port chaiye hota hai
