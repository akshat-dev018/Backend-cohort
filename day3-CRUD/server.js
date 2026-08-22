const express = require("express");

const app = express();

// middlewear for accepting JSON data
app.use(express.json());

let users = []

// create
app.post("/create",(req,res)=>{
    // post frontend se data bhej rha hai body ko 
    let body = req.body;

    users.push(body);

    res.send("users saved successfully");
})

// get -> read
app.get("/",(req,res)=>{
    res.send(users)
})

// update
app.put('/update/:id',(req,res)=>{

    let {id} = req.params;
    let {name} = req.body;

    let updatedUsers = users.map((val)=>val.id===id ?
     {...val , name}:val );
     res.send(updatedUsers);
})

// delete
app.delete("/delete/:id",(req,res)=>{
    let {id} = req.params;

    let usersData = users.filter((val)=>val.id!==id);
    users = usersData;
    res.send(usersData);
})


const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})