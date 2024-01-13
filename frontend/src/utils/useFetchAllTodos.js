import axios from "axios";
import { customErrorToast } from "./useCustomTodo";

export const useFetchAllTodos = async (setFetchAllTodos) => {
	try {
		const response = await axios.get("/api/getAllTodos");
		const { data } = response;
		setFetchAllTodos(data?.data);
	} catch (error) {
		customErrorToast("Failed to fetch all Todos due to :", error);
	}
};
