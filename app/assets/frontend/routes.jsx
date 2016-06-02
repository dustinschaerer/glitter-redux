import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import HomePage from './components/HomePage'
import { Route, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={App}>
    <Route path="homepage" component={HomePage} />
  </Route>
);