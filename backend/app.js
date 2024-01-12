import express from "express";
import { conn, todo } from "./model/Todo.model.js";
import router from "./routes/todoAll.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

export { app };
