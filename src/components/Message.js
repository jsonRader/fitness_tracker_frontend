import React from 'react';
import {Link} from 'react-router-dom';

function removeMessage() {
	localStorage.removeItem('message')
}

const Message = () => {
	console.log(localStorage)
	return (
		<div id="message">
			<h1>This is an incorrect username or password.</h1>
			{/* <h3 className="errorType">{localStorage.getItem("message")}</h3> */}
			<Link to="/LogIn" onClick={removeMessage()}>Please try again</Link>
		</div>
	)
}

export default Message