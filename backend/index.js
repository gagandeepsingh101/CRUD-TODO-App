import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";
import { config } from "dotenv";
config();
connectDB().then(() => {
	app.listen(process.env.PORT || 3000, () => {
		console.log(
			"Server listening on http://localhost:" + process.env.PORT || 3000
		);
	});
});
