import express from "express"
import dotenv from "dotenv"
import connectdb from "./db/connect.js"
import router from "./routes/routes.js"
import notFound from "./middleware/notFound.js"
import cors from "cors"
import userRoutes from "./routes/users.js"

dotenv.config()

const app = express();


app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.json({msg:"hey"})
})

app.use("/api/v1/posts", router)
app.use("/api/v1/user", userRoutes)

app.use(notFound)


/*app.use(function(req, res, next){  
    res.header('Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,OPTIONS');  
    res.header('Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin,*');  
    res.header('Access-Control-Allow-Credentials', true);  
    res.header('Access-Control-Allow-Origin',
    'http:localhost:3000');
 if (req.method === 'OPTIONS') {
     res.status(200);
 } next(); })
app.options('*', cors())
*/

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