import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Faq from './Faq.js';
import People from './People.js';
import Person from './Person.js';
import Company from './Company.js';

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/about' render={() => {
			// example using function in the render property
			// if (user.login == true)
			// gives the render that returns flexibility and versatility
			
			// if you use open and close component tags you can put stuff inside, and access it with props.children
			return (<About>
				<Switch>

					<Route path='/about/company' component={Company} />
					<Route path='/about/faq' component={Faq} />
				</Switch>

			</About>)
		}

		} />
		<Route path='/people/:id' component={Person} />
		<Route path='/people/' component={People} />

	</Switch>
)