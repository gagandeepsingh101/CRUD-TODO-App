import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const todo = model("todo", todoSchema);
export const conn = mongoose.connection;
