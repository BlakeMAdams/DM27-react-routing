import React from 'react';
import { getPerson} from './peopleService.js';

export default function(props) {
	let person = getPerson(props.match.params.id)
	return(
		<div>
			<h2>{person.name}</h2>
			<p>{person.description}</p>
			<img src={person.image} />			
		</div>
	)
}