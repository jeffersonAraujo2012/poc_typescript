import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes.ts";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(4000, () => {
  console.log("Server online");
});
