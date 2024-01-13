export const useHandleSubmit = async (
	e,
	newTodos,
	setFetchAllTodos,
	fetchTodos,
	createTodo
) => {
	e.preventDefault();
	try {
		// Create a new todo
		await createTodo(newTodos);
		// Fetch updated todos
		fetchTodos(setFetchAllTodos);
	} catch (error) {
		console.error("Error creating todo:", error.message);
		// Handle error, e.g., show a user-friendly error message
	}
};
