import React, {useState} from 'react'
import {handleRegister} from '../API/index';
import {useHistory, Link} from 'react-router-dom'

const Register = ({
	username, 
	password, 
	setUsername, 
	setPassword, 
	setRegisterToken, 
	registerToken, 
	setLoggedIn }) => {

	const history = useHistory();

	const [confirmPassword, setconfirmPassword] = useState("");

	const confirmPasswords = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			history.push("/message");
		} else {
			registerRequest(event);
		}
	};

	const registerRequest = async (event) => {
		event.preventDefault();
		try {
			const data = await handleRegister(username, password);
			if (data.success === false) {
				setUsername("");
				setPassword("");
				setconfirmPassword("");
			} else {
				const token = data.token;
				localStorage.setItem(`Token`, token);
				setRegisterToken(token);
				setUsername(username);
				setLoggedIn(false);
				localStorage.setItem(`Username`, username);
				console.log(data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	if (registerToken) {
		history.push("/")
	}

	return (
		<div>
			<form onSubmit={confirmPasswords}>
				<div>
					<input
						name="userName"
						required
						placeholder="Username"
						onChange={(event) => setUsername(event.target.value)} value={username}
					/>
				</div>
				<div>
					<input
						required
						name="password"
						placeholder="Password"
						onChange={(event) => setPassword(event.target.value)} value={password} required
						type="password"
					/>

					<input
						required
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(event) => setconfirmPassword(event.target.value)}
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default Register;