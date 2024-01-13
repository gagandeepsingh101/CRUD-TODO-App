import mongoose from "mongoose";
import { conn, todo } from "../model/Todo.model.js";

// Centralized error handling function
const handleError = (res, message) => {
  res.json({ success: false, message });
};

// Insert new todo data
export const insertTodoData = async (req, res) => {
  try {
    const newTodo = new todo(req.body);
    await newTodo.save();
    res.json({ success: true, message: "Data saved successfully" });
  } catch (err) {
    handleError(res, "Insertion error: " + err.message);
  }
};

// Get all todos
export const getAllTodos = async (req, res) => {
  try {
    const TodoModel = conn.model("todo");
    // Fetch all todos from the database
    const todosData = await TodoModel.find({});
    if (todosData.length === 0) {
      res.json({ success: true, message: "Todo lists are empty" });
    } else {
      res.json({
        success: true,
        data: todosData,
        message: "Fetch All Todo Successfully",
      });
    }
  } catch (err) {
    handleError(res, "All Todos Fetching error: " + err.message);
  }
};

// Delete a specific todo
export const deleteParticularTodos = async (req, res) => {
  try {
    const TodoModel = conn.model("todo");
    const objectId = new mongoose.Types.ObjectId(req.body._id);

    // Check if the todo exists before deletion
    const findTodo = await TodoModel.findById(objectId);
    if (!findTodo) {
      return res.json({ success: false, message: "Invalid Todo Id" });
    }

    // Delete the specified todo
    const todo = await TodoModel.deleteOne({ _id: objectId });
    res.json({ success: true, message: "Deleted Selected todo", deletedTodo: todo });
  } catch (err) {
    handleError(res, "Todo List Deletion error: " + err.message);
  }
};

// Update a specific todo
export const updateTodoList = async (req, res) => {
  try {
    const TodoModel = conn.model("todo");
    const objectId = new mongoose.Types.ObjectId(req.body._id);
    const { title, description, isCompleted } = req.body;

    // Check if the todo exists before updating
    const findTodo = await TodoModel.findById(objectId);
    if (!findTodo) {
      return res.json({ success: false, message: "Invalid Todo Id" });
    }

    // Update the specified todo
    const updateFields = {};
    if (isCompleted !== findTodo.isCompleted) {
      // Update only the checkbox
      updateFields.isCompleted = isCompleted;
      res.json({ success: true, message: "Update Task Status Successfully" });
    } else {
      // Update title and description
      updateFields.title = title;
      updateFields.description = description;
      res.json({ success: true, message: "Update Task Successfully" });
    }

    await TodoModel.updateOne({ _id: objectId }, updateFields);
  } catch (err) {
    handleError(res, "Update error: " + err.message);
  }
};
