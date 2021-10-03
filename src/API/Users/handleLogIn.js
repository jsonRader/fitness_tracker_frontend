const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export default async function handleLogIn(username, password) {
	try {
		// console.log(username, password);
		const response = await fetch(
			BASE_URL + "/users/login",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			}
		); const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}