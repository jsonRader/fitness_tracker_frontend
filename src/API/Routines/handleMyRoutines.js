const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleMyRoutines = async ({token, username}) => {
	try {
		const response = await fetch(BASE_URL + "/users/" + `${username}` + "/routines", {
			headers: {
				"Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export default handleMyRoutines;