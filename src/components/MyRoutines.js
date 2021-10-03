import {React, useState, useEffect} from "react";
import {handleCreateRoutine, handleMyRoutines} from "../API/index";

const CreateRoutine = ({setCreateRoutine}) => {
	const [name, setName] = useState('');
	const [goal, setGoal] = useState('');
	const [isPublic, setIsPublic] = useState(true);

	async function handleIsPublicChange(event) {
		event.preventDefault();
		setIsPublic(event.target.value);
	};

	async function handleSubmit(event) {
		event.preventDefault();
		await handleCreateRoutine(name, goal, isPublic);
		setCreateRoutine(await handleMyRoutines());
	};

	return (
		<div className="createRoutine">
			<span>Create A Routine</span>
			<form>
				<div>
					<input placeholder="Routine Name" value={name} onChange={(event) => setName(event.target.value)} />
					<input placeholder="Routine Goal" value={goal} onChange={(event) => setGoal(event.target.value)} />
					<div>
						<span>
							<label>Is Public </label>
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
						<span>
							<button onClick={handleSubmit}>Create Routine</button>
						</span>
					</div>
				</div>
			</form>
		</div>
	);
};


const DisplayMyRoutines = ({createRoutine, setCreateRoutine}) => {
	useEffect(() => {
		async function showMyRoutines() {
			if (createRoutine.length == 0) {
				setCreateRoutine(await handleMyRoutines());
			}
		}
		showMyRoutines();
	}, []);

	return (
		<div>
			<div className="pageContainer">
				<h1 className="pageTitle">My Routines:</h1>
				{createRoutine ? (
					<div className="routine-list-holder ">
						{createRoutine?.map(({goal, name, isPublic, id}) => (
							<div key={id} className="routines-list">
								<h1>ROUTINE: {name}</h1>
								<h2>GOAL: {goal}</h2>
								<h4>{isPublic 
									? "Public" 
									: "Private"}
								</h4>
							</div>
						))}
					</div>
				) : (
					<>
					</>
				)}
			</div>
		</div>
	);
};


const MyRoutines = () => {
	const [user, setUser] = useState(null);
	const [createRoutine, setCreateRoutine] = useState([]);
	
	useEffect(() => {
		async function showMyRoutines() {
			if (!user) {
				return;
			}
			try {
				const showMyRoutines = await handleMyRoutines();
				setCreateRoutine(showMyRoutines);
			} catch (error) {
				console.log(error);
			}
		}
		showMyRoutines();
	}, [user]);

	return (
		<div className="content-container">
			<div className="container-right">
				<CreateRoutine setCreateRoutine={setCreateRoutine} />

			</div>
			<div className="container-left">
				<DisplayMyRoutines
					setCreateRoutine={setCreateRoutine}
					createRoutine={createRoutine}
				/>
			</div>
		</div>
	);
};

export default MyRoutines;

