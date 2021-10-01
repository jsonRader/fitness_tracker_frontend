const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const getAllActivities = async () => {
	try {
		const response = await fetch(BASE_URL + "activities", {
			method: "GET",
		});
		const activities = await response.json();

		return activities
	} catch (error) {
		console.error("ERROR getting all public routines.");
		throw error;
	}
};

export default getAllActivities;