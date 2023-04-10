import { Request, Response } from "express";
import { CreateTaskBody, TaskEntity } from "../protocols.js";
import taskServices from "../services/task.services.js";

async function createTask(req: Request, res: Response): Promise<void> {
  const task = req.body as CreateTaskBody;

  try {
    await taskServices.createTask(task);
    res.sendStatus(201);
  } catch (error) {}
}

async function getAllTask(req: Request, res: Response): Promise<void> {
  try {
    const tasks = await taskServices.getAllTasks();
    res.status(200).send(tasks);
  } catch (error) {}
}

async function deleteTask(req: Request, res: Response): Promise<void> {
  const taskId = req.params.id;
  try {
    await taskServices.deleteTask(Number(taskId));
    res.sendStatus(200);
  } catch (error) {}
}

async function changeDeadline(req: Request, res: Response): Promise<void> {
  const taskId = req.params.id;
  const newDeadline = req.body.newDeadline as Date;
  try {
    await taskServices.changeDeadline(Number(taskId), newDeadline);
    res.sendStatus(200);
  } catch (error) {}
}

export default {
  createTask,
  getAllTask,
  deleteTask,
  changeDeadline,
};
