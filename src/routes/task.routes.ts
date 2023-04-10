import express from "express";
import taskControllers from "../controllers/task.controllers.js";

const taskRoutes = express.Router();

taskRoutes.get("/", taskControllers.getAllTask);
taskRoutes.post("/", taskControllers.createTask);
taskRoutes.delete("/:id", taskControllers.deleteTask);
taskRoutes.patch("/:id", taskControllers.changeDeadline);

export default taskRoutes;
