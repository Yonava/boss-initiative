import express from "express";

const app = express();

app.get("/", (req,res) =>{
    res.status(200).json({message:"Hello world!"})
})

app.get("/api/articles/", (req,res)=>{
    res.status(200).json({message:"Getting Article"})
})

app.get("/api/article/:id", (req,res) => {
    const id = req.params.id
    res.status(200).json({message:`Getting article ${id}`})
})

app.put("/api/article/:id", (req,res) => {
    const id = req.params.id
    res.status(200).json({message:`updating article ${id}`})
})

app.post("/api/articles/", (req,res) => {
    res.status(200).json({message:`Posting article`})
})

app.delete("/api/article/:id", (req,res) =>{
    const id = req.params.id
    res.status(200).json({message:`deleting article ${id}`})
})


app.listen(5000,()=>{
    console.log("server running on http://localhost:5000")
})