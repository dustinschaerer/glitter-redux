import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import routes from './routes';
import App from './components/App'
import HomePage from './components/HomePage'

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router history={hashHistory} routes={routes} />
    , reactNode);
  }
};

$(documentReady);
