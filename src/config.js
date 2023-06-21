import { config } from "dotenv"
config()

const server_port = process.env.server_port || 3000;
const db_port = process.env.db_port || 3306;
const db_host = process.env.db_host || "localhost";
const db_user = process.env.db_user || "root";
const db_pass = process.env.db_pass || "julio.111";
const db_name = process.env.db_name || "crud_vanilla";