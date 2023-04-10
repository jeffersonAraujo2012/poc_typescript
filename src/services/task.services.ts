import { CreateTaskBody, TaskEntity } from "../protocols.js";
import taskRepositories from "../repositories/task.repositories.js";

async function createTask(task: CreateTaskBody): Promise<void> {
  await taskRepositories.createTask(task);
}

async function getAllTasks(): Promise<TaskEntity[]> {
  const tasks = await taskRepositories.getAllTasks();
  return tasks;
}

async function deleteTask(taskId: number): Promise<void> {
  //verificar se task existe
  await taskRepositories.deleteTask(taskId);
}

async function changeDeadline(taskId: number, newDeadline: Date): Promise<void> {
  //verificar se task existe
  await taskRepositories.changeDeadline(taskId, newDeadline);
}

export default {
  createTask,
  getAllTasks,
  deleteTask,
  changeDeadline,
};
