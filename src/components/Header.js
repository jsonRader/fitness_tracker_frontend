import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

	return (
		<header>
			<div id="nav-bar">
				<Link to="/">Home</Link>
				<Link to="/routines">Routines</Link>
				<Link to="/myroutines">My Routines</Link>
				<Link to="/activities">Activities</Link>
				{/* {loggedIn ?
					<>
						<Link to="/profile">Profile</Link>
						<Link onClick={logOut}>Log Out</Link>
					</>
            		: <Link to="/login">Log In</Link>
				} */}
				{/* --- FOR WHEN WE PASS THE LOGIN/SETLOGIN IN AS PROPS --- */}
			</div>
			<h1>Fitness Dudes</h1>
			<h3>Drop and give me 20!</h3>
		</header>
	)
}

export default Header;