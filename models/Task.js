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
        required: [true,"A date must be provided"],
        default: Date.now()
    },
    content:{
        type:String,
        required: [true, "A content must be provided"],
        trim: true,
        maxlength: [100, 'name can not be more than 20 characters']
    }
}, {
    collection: "posts",
    timestamps: true
})

export default model("Task", TaskSchema)