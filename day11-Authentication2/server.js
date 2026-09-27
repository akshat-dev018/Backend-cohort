import app from "./src/app/app.js";
import { connectDB } from "./src/config/db.js";

await connectDB();  
//ye server connect nhi hone dega jbtk database connect nhi hoga

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})