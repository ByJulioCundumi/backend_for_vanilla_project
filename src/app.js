import express from "express";
import { router as usersRoutes } from "./routes/users.routes.js";
//
const app = express()
//
app.use(express.json())
app.use("/api", usersRoutes)
//
app.use((req, res)=>{
    res.send("Servidor activo")
})
export default app;