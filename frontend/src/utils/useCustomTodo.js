import toast from "react-hot-toast";

export const customSuccessToast = (message) =>
	toast.success(message, {
		style: {
			border: "1px solid #020617",
			padding: "16px",
			color: "#647486",
		},
		iconTheme: {
			primary: "#647486",
			secondary: "white",
		},
	});
export const customErrorToast = (message) =>
	toast.error(message, {
		style: {
			border: "1px solid #020617",
			padding: "16px",
			color: "#647486",
		},
		iconTheme: {
			primary: "#647486",
			secondary: "white",
		},
	});
