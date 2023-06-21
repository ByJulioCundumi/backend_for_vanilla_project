import Express from "express";
import { router as usersRoutes } from "./routes/users.routes.js";
//
const app = Express()
//
app.use(Express.json())
app.use("/api", usersRoutes)
//
export default app;