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
                <button className="closeMenu" onClick={() => setCreateActivity(false)}>x</button>
                <div>
                <div className="createInputs">
                <h2>name</h2>
                <input value={name} onChange= {(e) => setName(e.target.value)}></input>
                </div>
                <div className="createInputs">
                <h2>goal</h2>
                <input  value={goal} onChange= {(e) => setGoal(e.target.value)}></input>
                </div>
                <button className="createActivityPublishButton" onClick={handleSubmit}>Create Activity</button>
                </div>
            </form>
        </div>
    )
}

export default CreateActivity;