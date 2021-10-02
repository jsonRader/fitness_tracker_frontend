const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleEditRoutine = async (name, goal, isPublic, routineId, token) => {
	try {
		const response = await fetch(BASE_URL + "/routines/" + `${routineId}`, {
            method: "PATCH",
			headers: {
				"Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
			},
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            }),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export default handleEditRoutine;