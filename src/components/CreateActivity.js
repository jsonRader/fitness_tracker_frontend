const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

import React, { useState } from 'react';
import { postCreateActivity } from '../API/index'



const CreateActivity = ({setCreateActivity}) => {

    const [activity, setActivity] = useState({name: '', goal: ''});
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    // function handleChange(event, activityKey) {
    //     const newState = {...activity};
    //     newState[activityKey] = event.target.value;
    //     setActivity(newState);
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        await postCreateActivity(name,goal);
        setCreateActivity(false);
    }

    return (
        <div className="createActivity">
            <form>
                <button onClick={() => setCreateActivity(false)}>CLOSE </button>
                <div>
                <input value={name} onChange= {(e) => setName(e.target.value)}></input>
                <input value={goal} onChange= {(e) => setGoal(e.target.value)}></input>
                
                <button onClick={handleSubmit}>Create Activity</button>
                </div>
            </form>
        </div>
    )
}

export default CreateActivity;