const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function handleCreateRoutine(name, goal, isPublic) {
	try {
        const token = localStorage.getItem('Token');
           console.log(name, goal, isPublic);
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