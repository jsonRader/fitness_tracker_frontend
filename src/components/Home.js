import React, {useState} from 'react';
// import { useHistory , Link } from "react-router-dom";
import { Link } from "react-router-dom";
// const history = useHistory() 

// const Home = ({isLoggedin, setIsLoggedin}) => {

// 	return (
// 		<div id="homePage">
// 			<h1 className="homepageH1">"I wear black because it's easier than going to the gym..."</h1>
// 			{/* {isLoggedin ?
// 				<div>
// 					<h3>Logged in as {localStorage.getItem("username")}</h3>
// 				</div>
// 				:
// 				<div>
// 					<h3>Log in or Register to change your life today!</h3>
// 				</div>
// 			} */}
// 			{/* --- FOR WHEN WE PASS THE LOGIN/SETLOGIN IN AS PROPS --- */}
// 		</div>
// 	)
// }

const Home = ({ logInRequest, isLoggedin, setIsLoggedin }) => {
    
    const [user, setUser] = useState({username: '', password: ''});

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
        console.log(user);
    }

    // const history = useHistory() 

    async function handleSubmit(event) { 
        
        event.preventDefault();
        await logInRequest(user);
        if (localStorage.getItem('token')) {
            setIsLoggedin(true);
            localStorage.setItem('username', user.username);
            // history.push('/');
            console.log(localStorage.getItem('token')) //getting a token, this is good.
        } else {
            history.push('/message') 
        }
    }


    
    return (
        <div id="loginPage">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
            <div className="loginInputs">
                <input id="outlined-basic-1"
                           onChange= {handleInput}
                           label="Username"
                           name="username"
                           variant="outlined"
                           type="text"
                           style= {{width: 350, marginBottom: 20, marginTop: 10}} />
            </div>
            <div className= "loginInputs">
                <input id="outlined-basic=2"
                           onChange= {handleInput} 
                           label="Password"
                           name="password"
                           variant="outlined"
                           type= "password"
                           style= {{width: 350, marginBottom: 20}} />
            </div>
            <button className= "loginButton">Log In</button>
            </form>
            <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
    )
}

export default Home;