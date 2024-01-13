import { MdDelete, MdEdit } from "react-icons/md";

export const ShowAllTodos = (params) => {
	const {
		fetchAllTodos,
		handleDeleteTodo,
		handleUpdateTodo,
		setIsUpdated,
		setNewTodos,
	} = params;

	console.log(fetchAllTodos);
	return (
		<div className="bg-white w-10/12 z-10 mx-auto p-3 flex flex-col gap-4 rounded-xl">
			{fetchAllTodos===undefined && "No Todos Available"}
			{fetchAllTodos &&
				fetchAllTodos.map((todo) => (
					<div
						key={todo._id}
						className={
							"px-3 py-3 border-black border-2 rounded-lg flex justify-between items-center " +
							(todo.isCompleted ? "bg-slate-300" : "")
						}>
						<div className="w-[80%]">
							<p className="text-xl font-bold">{todo.title}</p>
							<p className="text-lg">{todo?.description}</p>
						</div>
						<input
							onChange={() =>
								handleUpdateTodo(todo._id, {
									title: todo.title,
									description: todo.description,
									isCompleted: !todo.isCompleted,
								})
							}
							checked={todo.isCompleted}
							type="checkbox"
							name="isCompleted"
							id={`checkbox-${todo._id}`}
							className="w-8 h-8 hover:ring-slate-500 border border-slate-500"
						/>
						<div className="flex gap-1 ml-5">
							<MdDelete
								className="w-8 h-8 text-red-500 cursor-pointer"
								onClick={() => handleDeleteTodo(todo?._id)}
							/>
							<MdEdit
								onClick={() => {
									setIsUpdated(true);
									setNewTodos({
										_id: todo._id,
										title: todo.title,
										description: todo.description,
										isCompleted: todo.isCompleted,
									});
								}}
								className="w-8 h-8 text-blue-500 cursor-pointer"
							/>
						</div>
					</div>
				))}
		</div>
	);
};
