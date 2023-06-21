import app from "./app.js";
import {server_port, db_host} from "./config.js"
//
app.listen(server_port, db_host, ()=>{console.log(`servidor iniciado en el puerto http://${db_host}:${server_port}`)})