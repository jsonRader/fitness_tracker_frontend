import React from 'react';

const SingleActivity = ({name, description, duration, count}) => {

	return (
		<div className="user-post">
			<h2>{name}</h2>
			<p>{description}</p>
			<p>{duration}</p>
			<p>{count}</p>
		</div>
	)
}

export default SingleActivity;