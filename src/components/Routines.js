import {React, useState, useEffect} from 'react';
import {handleRoutines, handleCreateRoutine} from '../API/index.js';

// const CreateRoutine = ({setCreateRoutine}) => {
// 	const [newRoutine, setNewRoutine] = useState({name: '', goal: ''});

// 	function handleChange()
// }


const Routines = () => {
	const [publicRoutines, setPublicRoutines] = useState([]);
	const [createRoutine, setCreateRoutine] = useState(false)

	useEffect(() => {
		try {
			Promise.all([handleRoutines()]).then(([data]) => {
				setPublicRoutines(data);
				console.log(data);
			});
		} catch (error) {
			console.log("ERROR", error);
		}
	}, [createRoutine]);

	return (
<<<<<<< HEAD
		<div>
		<div>
		<button>
			Create Routine
		</button>
		</div>
		<div>
		{publicRoutines.map((routine, id) => {
=======
		
		publicRoutines.map((routine, id) => {
>>>>>>> 531339dee3061fdaa6e19eb5496f87f28d29e543
			return (
				<div key={id}>
					<h1>ROUTINE: {routine.name}</h1>
					<h2>GOAL: {routine.goal}</h2>
					<h3>BY USER: {routine.creatorName}</h3>
				</div>
			)
		})}
		</div>
		</div>
	)
}

export default Routines;