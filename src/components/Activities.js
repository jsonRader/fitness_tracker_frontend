import {React, useState, useEffect} from 'react';
import {handleActivities, handleCreateActivity } from '../API/index.js';

const CreateActivity = ({setCreateActivity}) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        await handleCreateActivity(name,goal);
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


const Activities = () => {
	const [activities, setActivities] = useState([]);
	const [createActivity, setCreateActivity] = useState(false);

	useEffect(() => {
		try {
			Promise.all([handleActivities()]).then(([data]) => {
				setActivities(data);
				console.log(data);
			});
		} catch (error) {
			console.log("ERROR", error);
		}
	}, [createActivity]);

	return (
		<div>
			
            <div className="pageContainer">
            <h1 className="pageTitle">Current Activities:</h1>
			<button className= "createButton"
			onClick={(event) => {
				event.preventDefault();
				setCreateActivity(true);
			}}>
				Create Activity</button>
			 {
                createActivity &&
                <CreateActivity setCreateActivity={setCreateActivity}/>
            }
			<div>
				{activities.map((activity, id) => {
					return (
						<>
						<div className="singleActivity">
							<h2>NAME: {activity.name}</h2>
							<p>GOAL: {activity.description}</p>
							<hr />
						</div>

					
						</>
					)
				})}
			</div>
            </div>
		</div>
	)
}

export default Activities;