import React from 'react';

// need an if "logged in" render "Welcom...logged in as {user.username}"
// else {data.message} these messages change depending on situation 'username already taken' for instance 'already logged in'



const Home = ({isLoggedin, setIsLoggedin}) => {
     
   
    
    return (
        <div id="homePage">
            <h1 className="homepageH1">Welcome to Stranger Things!</h1>
            {
                isLoggedin ? 
            <div>
                <h3>Logged in as </h3> 
            </div>
            :
            <div>
                <h3>Please login or register which can be done at the top!</h3>
            </div>
            }
        </div>
    )
}

export default Home;