import {Schema, model} from "mongoose"

const TaskSchema = new Schema ({
    title:{
        type:String,
        required: [true,"A title must be added"],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    date:{
        type:Date,
        required:[true, "date must be added"]
        //default:  Date.now 
    },
    content:{
        type:String,
        required: [true, "A content must be provided"],
        trim: true,
        maxlength: [100, 'name can not be more than 20 characters']
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref: "User" // references the user model
    }
}, {
    collection: "posts",
    timestamps: true
})

export default model("Task", TaskSchema)