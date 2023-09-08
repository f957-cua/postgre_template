import Pool from "pg-pool";
import dotenv from "dotenv";
dotenv.config();

const { USER, PASSWORD, HOST, PORT } = process.env;

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  database: "NewDB",
});

export default pool;
