const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleDeleteRoutine = async (routineId, token) => {
	try {
		const response = await fetch(BASE_URL + "/routines/" + `${routineId}`, {
            method: "DELETE",
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

export default handleDeleteRoutine;