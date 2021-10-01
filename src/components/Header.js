import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
 //what is wrong with this relative path for image below? Cannot get it to work.
	return (
		<header>
			<h1> Fit Together</h1>
			{/* <img src = '/images/fit_together_logo.svg' width="100" height="50"/> */}
			<div id="nav-bar">
				<Link to="/routines" className = "navItem">Public Routines</Link>
				<Link to="/myroutines" className = "navItem">My Routines</Link>
				<Link to="/activities" className = "navItem">Activities</Link>
				<Link to="/" className = "navItem">Log In</Link>
				{/* {loggedIn ?
					<>
						<Link to="/profile">Profile</Link>
						<Link onClick={logOut}>Log Out</Link>
					</>
            		: <Link to="/login">Log In</Link>
				} */}
				{/* --- FOR WHEN WE PASS THE LOGIN/SETLOGIN IN AS PROPS --- */}
			</div>
		</header>
	)
}

export default Header;