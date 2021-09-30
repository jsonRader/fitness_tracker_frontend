import React, {useState} from 'react';

import { useHistory, Link } from "react-router-dom";


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
    const history = useHistory() 
    
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
            history.push('/');
            console.log(localStorage.getItem('token')) //getting a token, this is good.
        } else {
            history.push('/message') 
        }
    }


    
    return (
    <>
    <div className="loginMenu">
           
        
            
    </div>
    <div className="loginMenuContent">
            <form onSubmit={handleSubmit}>
            <div className="loginInputs">
                <h2>username</h2>
                <input className = "inputareas"
                           onChange= {handleInput}
                           label="Username"
                           name="username"
                           type="text"
                           />
            </div>
            <div className= "loginInputs">
            <h2>password</h2>
                <input className = "inputareas"
                           onChange= {handleInput} 
                           label="Password"
                           name="password"
                           type= "password"
                           />
            </div>
            
            </form> 
        </div>
        <div className="buttonContainer">
        <button className= "loginButton" onClick={handleSubmit}>Log In</button>
        </div>
        
        <div className= "signUpSection">
            <p> Don't have an account? </p>
            <Link to="/signup" className="signUpLink">Sign Up</Link>
            
        </div>
        
    </>
    )
}

export default Home;