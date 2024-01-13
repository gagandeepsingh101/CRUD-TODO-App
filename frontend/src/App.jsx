// Importing React hooks and utility functions
import { useEffect, useState } from "react";
import { ShowAllTodos } from "./components/ShowAllTodos";
import { TodoFormSection } from "./components/TodoFormSection";
import { useDeleteTodo } from "./utils/useDeleteTodo";
import { useFetchAllTodos } from "./utils/useFetchAllTodos";
import { useHandleDeleteTodo } from "./utils/useHandleDeleteTodo";
import { useHandleSubmit } from "./utils/useHandleSubmit";
import { useNewInsertTodo } from "./utils/useNewInsertTodo";
import { useUpdateTodo } from "./utils/useUpdateTodo";

// Main App component
function App() {
	// State variables for managing todos, form input, update status, and loading state
	const [fetchAllTodos, setFetchAllTodos] = useState();
	const [newTodos, setNewTodos] = useState({
		_id: "",
		title: "",
		description: "",
		isCompleted: false,
	});
	const [isUpdated, setIsUpdated] = useState(false);

	// Custom hooks for handling CRUD operations
	const fetchTodos = useFetchAllTodos;
	const deleteTodos = useDeleteTodo;
	const createTodo = useNewInsertTodo;
	const handleSubmit = useHandleSubmit;
	const handleDelete = useHandleDeleteTodo;
	const handleUpdate = useUpdateTodo;

	// Fetch todos on component mount
	useEffect(() => {
		fetchTodos(setFetchAllTodos);
	}, [fetchTodos]);

	// Render the main component
	return (
		<div className="bg-slate-200 flex flex-col h-screen w-screen overflow-x-hidden overflow-y-scroll">

			<div className="sticky top-0 bottom-0 z-50 bg-slate-200 ">
				<div className="bg-black text-white font-bold text-3xl py-2 px-3">
					ToDo App
				</div>
				<TodoFormSection
					isUpdated={isUpdated}
					handleUpdate={() =>
						handleUpdate(newTodos, newTodos._id, setFetchAllTodos, fetchTodos)
					}
					handleSubmit={(e) =>
						handleSubmit(e, newTodos, setFetchAllTodos, fetchTodos, createTodo)
					}
					setIsUpdated={setIsUpdated}
					newTodos={newTodos}
					setNewTodos={setNewTodos}
				/>
			</div>
			{/* Display all todos component */}
			<ShowAllTodos
				setNewTodos={setNewTodos}
				setIsUpdated={setIsUpdated}
				fetchAllTodos={fetchAllTodos}
				handleDeleteTodo={(todoId) =>
					handleDelete(deleteTodos, todoId, setFetchAllTodos, fetchTodos)
				}
				handleUpdateTodo={(todoId, updateTodo) =>
					handleUpdate(updateTodo, todoId, setFetchAllTodos, fetchTodos)
				}
			/>
		</div>
	);
}

// Exporting the App component as the default export
export default App;
