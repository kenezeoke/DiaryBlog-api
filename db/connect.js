import mongoose from "mongoose"

const connectdb = (url) =>{

    mongoose.set('strictQuery', true)
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default connectdb

