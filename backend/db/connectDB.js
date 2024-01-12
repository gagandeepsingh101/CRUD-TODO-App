import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
	try {
		const connectInstance = await mongoose.connect(
			process.env.MONGODB_URI + "/" + DB_NAME
		);
		console.log(
			`\n MongoDB Connected to ${DB_NAME} !! DB Host: ${connectInstance.connection.host}`
		);
	} catch (error) {
		console.log("MONGODB Connection error: " + error);
		process.exit(1);
	}
};
