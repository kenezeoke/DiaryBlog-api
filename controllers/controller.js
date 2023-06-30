import mongoose,{mongo} from "mongoose"
import Task from "../models/Task.js"
import asyncWrapper from "../middleware/async.js"



export const getAllTasks = asyncWrapper(async (req,res) =>{
    const user_id = req.user._id
    const tasks = await Task.find({user_id}).sort({ createdAt: -1}).limit(10)
    res.status(200).json(tasks)
})

export const getTask = asyncWrapper(async (req,res) => {
    const {id:taskID} = req.params
    if (!mongoose.Types.ObjectId.isValid(taskID)) return res.status(404).json({err: "task id is incorrect"})
    const task = await Task.findById({_id:taskID}) // findOne can be used
    if (!task){
        return res.status(404).send("Task not found")
    }
    res.status(200).json(task)
})

export const createTask = asyncWrapper(async(req,res) => {
    const user_id = req.user._id
    const task = await Task.create({...req.body, user_id})
    res.status(200).json(task)
})

export const updateTask = asyncWrapper(async(req,res) => {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, {...req.body} , {
        new: true,
        runValidations:true
    })
    if (!task){
        return res.status(404).send("Task not found")
    }
    res.status(200).json(task)
})

 export const deleteTask = asyncWrapper(async (req,res) => {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if (!task){
        return res.status(404).send("Task not found")
    }
    res.status(200).json(task)

})