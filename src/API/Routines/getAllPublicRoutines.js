const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const getAllPublicRoutines = async () => {
	try {
		const response = await fetch(BASE_URL + "/routines", {
			method: "GET",
		});
		console.log(await response.json());

		return response;
	} catch (error) {
		console.error("ERROR getting all public routines.");
		throw error;
	}
};

export default getAllPublicRoutines;