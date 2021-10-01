import {React, useState, useEffect} from 'react';
import {handleActivities} from '../API/index.js';
import {SingleActivity} from './index';

const Activities = () => {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		try {
			Promise.all([handleActivities()]).then(([data]) => {
				setActivities(data);
				console.log(data);
			});
		} catch (error) {
			console.log("ERROR", error);
		}
	}, []);

	return (
		<div>
			<h1>Current Activities:</h1>
			<div>
				{activities.map((activity, id) => {
					return (
						<>
							<SingleActivity
								name={activity.name}
								description={activity.description}
								duration={activity.duration}
								count={activity.count}
							/>
						</>
					)
				})}
			</div>
		</div>
	)
}

export default Activities;