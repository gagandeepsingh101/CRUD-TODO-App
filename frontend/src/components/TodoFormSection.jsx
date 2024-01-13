/* eslint-disable react/prop-types */
export const TodoFormSection = (props) => {
	const {
		handleUpdate,
		handleSubmit,
		setIsUpdated,
		isUpdated,
		newTodos,
		setNewTodos,
	} = props;
	const handleChange = (name, value) => {
		setNewTodos((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Handle form submission based on update status
		if (isUpdated) {
			handleUpdate();
		} else {
			handleSubmit(e);
		}
		// Clear form fields
		setNewTodos({ _id: "", title: "", description: "", isComplete: false });

		setIsUpdated(false);
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			className="w-10/12 mx-auto flex flex-col py-4">
			{/* Input fields for title and description */}
			<label htmlFor="Title" className="text-xl font-bold my-2">
				Enter Title
			</label>
			<input
				value={newTodos.title}
				type="text"
				name="title"
				id=""
				className="w-full text-lg py-2 px-2 rounded-xl my-2"
				placeholder="Like Title 1"
				onChange={(e) => handleChange("title", e.target.value)}
			/>
			<label htmlFor="Title" className="text-xl font-bold my-2">
				Enter Description
			</label>
			<input
				value={newTodos.description}
				type="text"
				name="description"
				id=""
				onChange={(e) => handleChange("description", e.target.value)}
				className="w-full text-lg py-2 px-2 rounded-xl my-2"
				placeholder="Like Description 1"
			/>
			{/* Submit button */}
			<button
				type="submit"
				className={`bg-slate-700 w-fit mx-auto text-white py-2 px-4 my-2 rounded-xl text-xl font-bold uppercase 
				`}>
				{isUpdated ? "Update Todo" : "Create Todo"}
			</button>
		</form>
	);
};
