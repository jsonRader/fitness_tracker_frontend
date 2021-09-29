import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
	Header,
	Home,
	Routines,
} from './components';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

const App = () => {

	return (
		<>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/routines">
						<Routines />
					</Route>
				</Switch>
			</div>
		</>
	)
}



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))

