const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const handleCreateRoutine = async (name, goal, isPublic, token) => {
	try {
		const response = await fetch(BASE_URL + "/routines", {
            method: "POST",
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

export default handleCreateRoutine;