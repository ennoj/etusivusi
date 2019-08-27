import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import FrontPage from './pages/FrontPage';
import LinksPage from './pages/LinksPage';

import CssBaseline from '@material-ui/core/CssBaseline';

import { LinkProvider } from './context/LinkContext';

function App() {
  return (
    <LinkProvider>
      <Router>
        <CssBaseline />
        <FrontPage />
        <LinksPage />
      </Router>
    </LinkProvider>
  );
}

export default App;
