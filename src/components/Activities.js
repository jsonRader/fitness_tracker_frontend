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
                <button onClick={() => setCreateActivity(false)}>CLOSE </button>
                <div>
                <input placeholder="Activity Name" value={name} onChange= {(e) => setName(e.target.value)}></input>
                <input placeholder="Activity Goal" value={goal} onChange= {(e) => setGoal(e.target.value)}></input>
                
                <button onClick={handleSubmit}>Create Activity</button>
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
			<button onClick={(event) => {
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