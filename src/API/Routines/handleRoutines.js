const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleRoutines = async () => {
	try {
		const response = await fetch(BASE_URL + "/routines", {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export default handleRoutines;