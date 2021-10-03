const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleMyRoutines = async () => {
	try {
        const username = localStorage.getItem('Username');
        const token = localStorage.getItem('Token');
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