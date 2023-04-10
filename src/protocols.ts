export type TaskEntity = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  deadline: null | Date;
  finishedAt: null | Date;
};

export type CreateTaskBody = Omit<
  TaskEntity,
  "id" | "createdAt" | "finishedAt"
>;
