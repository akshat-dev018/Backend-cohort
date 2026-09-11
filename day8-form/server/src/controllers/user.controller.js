const create = async (req,res)=>{
try {
    const images=req.files
    const singleImage = images.map((img)=>img)
} catch (error) {
    
}
}

module.exports = {create};