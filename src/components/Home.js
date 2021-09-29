import React from 'react';

const Home = ({isLoggedin, setIsLoggedin}) => {

	return (
		<div id="homePage">
			<h1 className="homepageH1">"I wear black because it's easier than going to the gym..."</h1>
			{/* {isLoggedin ?
				<div>
					<h3>Logged in as {localStorage.getItem("username")}</h3>
				</div>
				:
				<div>
					<h3>Log in or Register to change your life today!</h3>
				</div>
			} */}
			{/* --- FOR WHEN WE PASS THE LOGIN/SETLOGIN IN AS PROPS --- */}
		</div>
	)
}

export default Home;