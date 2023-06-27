import {Schema, model} from "mongoose"

const UserSchema = new Schema ({
    email:{
        type: String,
        required: [true,"A title must be added"],
        maxlength: [20, 'name can not be more than 20 characters'],
        unique: true
    },
    password:{
        type: String,
        required: [true, "A content must be provided"],
        maxlength: [20, 'name can not be more than 20 characters']
    }
}, {
    collection: "users",
    timestamps: true
})

export default model("User", UserSchema)