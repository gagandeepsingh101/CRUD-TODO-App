import { customErrorToast } from "./useCustomTodo";

export const useHandleDeleteTodo = async (
	deleteTodos,
	todoId,
	setFetchAllTodos,
	fetchTodos
) => {
	try {
		// Delete the todo
		await deleteTodos(todoId);
		// Fetch updated todos
		fetchTodos(setFetchAllTodos);
	} catch (error) {
		customErrorToast(error.message);
		// Handle error, e.g., show a user-friendly error message
	}
};
