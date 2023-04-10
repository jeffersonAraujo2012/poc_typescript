import pg from "pg";
const { Pool } = pg;

const db = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "poc_ts_task",
});

export default db;
