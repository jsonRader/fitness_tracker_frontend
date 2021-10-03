import {React, useState, useEffect} from 'react';
import {handleRoutines, handleCreateRoutine} from '../API/index.js';

const CreateRoutine = ({setCreateRoutine}) => {
	const [name, setName] = useState('');
	const [goal, setGoal] = useState('');
	const [isPublic, setIsPublic] = useState(true);

	async function handleSubmit(event) {
		event.preventDefault();
		await handleCreateRoutine(name, goal, isPublic);
		setCreateRoutine(false);
	}

	async function handleIsPublicChange(event) {
		event.preventDefault();
		setIsPublic(event.target.value);
	};

	return (
		<div className="createRoutine">
			<form>
				<button className="closeMenu" onClick={() => setCreateRoutine(false)}>x</button>
				<div>
					<div className="createInputs">
                		<h2>Routine Name</h2>
						<input value={name} onChange={(event) => setName(event.target.value)} />
						</div>
					<div className="createInputs">	
						<h2>Goal</h2>
						<input  value={goal} onChange={(event) => setGoal(event.target.value)} />
					</div>
					<div>
						<span>
							<label>Make Public? </label>
							<span className="ispublic-radio">
								<span>
									<label htmlFor="Yes">Yes</label>
									<input
										type="radio"
										name="isPublic"
										checked={isPublic == "true"}
										id="Yes"
										value={true}
										onChange={handleIsPublicChange}
									/>
								</span>
								<span>
									<label htmlFor="No">No</label>
									<input
										type="radio"
										name="isPublic"
										checked={isPublic == "false"}
										value={false}
										id="No"
										onChange={handleIsPublicChange}
									/>
								</span>
							</span>
						</span>
					</div>
					<button className="createRoutinePublishButton"  onClick={handleSubmit}>Create Routine</button>
				</div>
			</form>
		</div>
	)
}


const Routines = () => {
	const [publicRoutines, setPublicRoutines] = useState([]);
	const [createRoutine, setCreateRoutine] = useState(false);

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
		<div>
			<div className="pageContainer">
				<h1 className="pageTitle">Current Routines:</h1>
				<button className= "createButton" onClick={(event) => {
					event.preventDefault();
					setCreateRoutine(true);
				}}>Create Routine</button>
				{
					createRoutine &&
					<CreateRoutine setCreateRoutine={setCreateRoutine} />
				}
				<div>
					{publicRoutines.map((routine, id) => {
						return (
							<div key={id} className= "singleActivity">
								<h1>ROUTINE: {routine.name}</h1>
								<h2>GOAL: {routine.goal}</h2>
								<h3>BY USER: {routine.creatorName}</h3>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Routines;