import express from "express"
import {requireAuth} from "../middleware/auth.js"
import {getAllTasks, createTask, getTask, updateTask, deleteTask} from "../controllers/controller.js"

const router = express.Router()
router.use(requireAuth) // runs everytime before the other routes

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

export default router