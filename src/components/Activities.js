import {React, useState, useEffect} from 'react';
import {handleActivities } from '../API/index.js';
import { CreateActivity } from './index'


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
							<h2>{activity.name}</h2>
							<p>{activity.description}</p>
							{/* <p>COUNT: {activity.duration}</p>
							<p>DURATION: {activity.count}</p> */}
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