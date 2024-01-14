import axios from "axios";
import { customErrorToast, customSuccessToast } from "./useCustomTodo";

export const useDeleteTodo = async (_id) => {
	try {
		const response = await axios.delete(
			`${
				import.meta.env.VITE_APP_SERVER_URL || "http://localhost:8000"
			}/api/deleteParticularTodo`,
			{
				data: { _id: _id }, // Axios automatically serializes the data as JSON
				headers: { "Content-Type": "application/json" },
			}
		);
		const { data } = response;
		if (data.success) {
			customSuccessToast(data.message);
		} else {
			customErrorToast(data.message);
		}
	} catch (error) {
		customErrorToast("Failed to Delete due to :", error.message);
	}
};
