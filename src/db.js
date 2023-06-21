import {createPool} from "mysql2/promise";
import { db_port, db_host, db_user, db_pass, db_name } from "./config.js";

export const pool = createPool({
    port: db_port,
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_name
});