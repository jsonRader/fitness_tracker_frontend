const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleActivities = async () => {
	try {
		const response = await fetch(BASE_URL + "/activities", {
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

export default handleActivities;