import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
	Header,
	Home,
	MyRoutines,
	Routines,
	Activities,
	Message
} from './components';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

async function logInRequest(user){
	try {
		console.log(token)
		localStorage.setItem('username', user.username);
		const response = await fetch(`${BASE_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: {
				  username: `${user.username}`,
				  password: `${user.password}`
				}
			  })
		}).then(response => response.json())
		.then(result => {
			console.log(result)
			if(result.data){
				localStorage.setItem('token', result.data.token);
				
			}
			localStorage.setItem('message', result.error.message);
			console.log(result);
		})
	} catch (error) {
		(console.error);
	}
}



const App = () => {

    const [isLoggedin, setIsLoggedin] = useState(null); 
 

    useEffect(() => {
      {localStorage.getItem('token') ? setIsLoggedin(true) : setIsLoggedin(false)};
    }, []);

	return (
		<>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/">
						<Home 	logInRequest={logInRequest}
                    			isLoggedin={isLoggedin}
                    			setIsLoggedin={setIsLoggedin} 
						/>
					</Route>
					<Route path="/routines">
						<Routines />
					</Route>
					<Route path="/myroutines">
						<MyRoutines />
					</Route>
					<Route path="/activities">
						<Activities />
					</Route>
					<Route>
						<Message />
					</Route>
				</Switch>
			</div>
		</>
	)
}



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))

