import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Clock from './pages/Clock';
import Links from './pages/Links';
import Register from './pages/Register';
import Login from './pages/Login';

import CssBaseline from '@material-ui/core/CssBaseline';

import { LinkProvider } from './context/LinkContext';

function App() {
  return (
    <LinkProvider>
      <Router>
        <CssBaseline />
        <Route exact path='/' component={Clock} />
        <Route exact path='/' component={Links} />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </LinkProvider>
  );
}

export default App;
