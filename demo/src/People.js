import React from 'react';
import { getPeople } from './peopleService.js';
import { Link } from 'react-router-dom';

export default function() {

	const people = getPeople().map((e, i) => {
		return <Link to={`/people/${e.id}`} key={i}><h3>{e.name}</h3></Link>
		
	})
	return (
		<div>
			{people}
		</div>
	)
}