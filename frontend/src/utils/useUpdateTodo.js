import axios from "axios";
import { customErrorToast, customSuccessToast } from "./useCustomTodo";
export const useUpdateTodo = async (
	updateTodo,
	todoId,
	setFetchAllTodos,
	fetchTodos
) => {
	try {
		const response = await axios.put(
			"/api/updateParticularTodo",
			{
				_id: todoId,
				title: updateTodo.title,
				description: updateTodo.description,
				isCompleted: updateTodo.isCompleted,
			},
			{
				headers: { "Content-Type": "application/json" },
			}
		);

		const { data } = response;

		if (data?.success) {
			fetchTodos(setFetchAllTodos);
			customSuccessToast(data.message);
		} else {
			customErrorToast(data.message);
		}
	} catch (error) {
		customErrorToast("Failed to update Todo due to: " + error.message);
	}
};
