import axios from "axios";
import { customErrorToast, customSuccessToast } from "./useCustomTodo";

export const useNewInsertTodo = async (newTodoData) => {
	try {
		const response = await axios.post(
			"/api/createTodo",
			{
				title: newTodoData.title,
				description: newTodoData.description,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		// Handle the response data
		const { data } = response;
		customSuccessToast(data.message);
	} catch (error) {
		// Handle network errors or any other exceptions
		customErrorToast("Failed to create a new Todo: " + error.message);
	}
};
