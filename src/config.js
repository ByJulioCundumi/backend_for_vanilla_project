import { config } from "dotenv"
config()

export const server_port = process.env.server_port || 3000;
export const db_port = process.env.db_port || 3306;
export const db_host = process.env.db_host || "localhost";
export const db_user = process.env.db_user || "root";
export const db_pass = process.env.db_pass || "julio.111";
export const db_name = process.env.db_name || "crud_vanilla";