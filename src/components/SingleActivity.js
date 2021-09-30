import React from 'react';


const SingleActivity = ({activity, name, description}) => {

    return (
        <div className="user-post">
            <h2>{name}</h2>
            <p>{description}</p> 
        </div>
    )
}

export default SingleActivity;