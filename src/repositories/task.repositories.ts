import { CreateTaskBody, TaskEntity } from "../protocols.js";
import db from "../config/database.js";
import { QueryResult } from "pg";

async function createTask(task: CreateTaskBody): Promise<void> {
  const { title, description, deadline } = task;
  db.query(
    `INSERT INTO tasks (title, description, deadline) 
     VALUES ($1, $2, $3)`,
    [title, description, deadline]
  );
}

async function getAllTasks(): Promise<TaskEntity[]> {
  const { rows: tasks } = (await db.query(
    `SELECT * FROM tasks`
  )) as QueryResult<TaskEntity>;

  return tasks;
}

async function deleteTask(taskId: number): Promise<void> {
  await db.query(`DELETE FROM tasks WHERE id = $1`, [taskId]);
}

async function changeDeadline(
  taskId: number,
  newDeadline: Date
): Promise<void> {
  await db.query(`UPDATE tasks SET deadline = $1 WHERE id = $2`, [
    newDeadline,
    taskId,
  ]);
}

export default {
  createTask,
  getAllTasks,
  deleteTask,
  changeDeadline,
};
