import express from "express"
import dotenv from "dotenv"
import connectdb from "./db/connect.js"
import router from "./routes/routes.js"
import notFound from "./middleware/notFound.js"

dotenv.config()

const app = express();


app.use(express.json())
app.get("/", (req,res) => {
    res.json({msg:"hey"})
})
app.use("/api/v1/posts", router)
app.use(notFound)

const port = process.env.PORT || 8000
const url= process.env.MONGO_URI

const start = async ()=>{
    try{
        await connectdb(url)
        
        app.listen (port, () => console.log(`Server is running on port ${port}`))
    }catch(err){
        console.log(err)
    }
   
}

start()