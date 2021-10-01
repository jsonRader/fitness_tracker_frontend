import {React, useState, useEffect} from 'react';
import {handleRoutines} from '../API/index.js';

const Routines = () => {
	const [publicRoutines, setPublicRoutines] = useState([]);

	useEffect(() => {
		try {
			Promise.all([handleRoutines()]).then(([data]) => {
				setPublicRoutines(data);
				console.log(data);
			});
		} catch (error) {
			console.log("ERROR", error);
		}
	}, []);

	return (
		publicRoutines.map((routine, id) => {
			return (
				<div key={id}>
					<h1>ROUTINE: {routine.name}</h1>
					<h2>GOAL: {routine.goal}</h2>
					<h3>BY USER: {routine.creatorName}</h3>
				</div>
			)
		})
	)
}

export default Routines;