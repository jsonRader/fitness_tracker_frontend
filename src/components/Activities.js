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
<<<<<<< HEAD
							<SingleActivity
								name={activity.name}
								description={activity.description}
								// duration={activity.duration}
								// count={activity.count}
							/>
=======
						<div className="singleActivity">
							<h2>NAME: {activity.name}</h2>
							<p>GOAL: {activity.description}</p>
							<p>COUNT: {activity.duration}</p>
							<p>DURATION: {activity.count}</p>
							<hr />
						</div>

					
>>>>>>> 531339dee3061fdaa6e19eb5496f87f28d29e543
						</>
					)
				})}
			</div>
            </div>
		</div>
	)
}

export default Activities;