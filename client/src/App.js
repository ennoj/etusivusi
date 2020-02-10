import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Clock from './pages/Clock';
import Links from './pages/Links';

import CssBaseline from '@material-ui/core/CssBaseline';

import { LinkProvider } from './context/LinkContext';

function App() {
	return (
		<LinkProvider>
			<Router>
				<CssBaseline />
				<Clock />
				<Links />
			</Router>
		</LinkProvider>
	);
}

export default App;
