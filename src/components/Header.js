import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Header = ({loggedIn, setLoggedIn}) => {
	//what is wrong with this relative path for image below? Cannot get it to work.

	const history = useHistory();

	function logOut(event) {
		event.preventDefault();
		localStorage.removeItem('Token')
		setLoggedIn(null);
		history.push('/')
	}

	return (
		<header>
			<h1> Fit Together</h1>
			{/* <img src = '/images/fit_together_logo.svg' width="100" height="50"/> */}
			<div id="nav-bar">
				<Link to="/routines" className="navItem">Public Routines</Link>
				<Link to="/myroutines" className="navItem">My Routines</Link>
				<Link to="/activities" className="navItem">Activities</Link>
				{loggedIn ?
					<>
						<Link className="navItem" onClick={logOut}>Log Out</Link>
					</>
					: <Link to="/LogIn" className="navItem">Log In</Link>
				}
			</div>
		</header>
	)
}

export default Header;