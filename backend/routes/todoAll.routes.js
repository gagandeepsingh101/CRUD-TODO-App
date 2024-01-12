import { Router } from "express";
import {
	getAllTodos,
	insertTodoData,
	deleteParticularTodos,
	updateTodoList,
} from "../controller/todoAll.controller.js";
const router = Router();

router.post("/api/createTodo", insertTodoData);
router.get("/api/getAllTodos", getAllTodos);
router.delete("/api/deleteParticularTodo", deleteParticularTodos);
router.put("/api/updateParticularTodo", updateTodoList);
export default router;
