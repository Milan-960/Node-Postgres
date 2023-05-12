import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

pool.query("SELECT * FROM employees", (error, results) => {
  if (error) {
    throw error;
  }
  console.log(results.rows);
  pool.end();
});
