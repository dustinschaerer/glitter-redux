import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage'


// using an ES6 transpiler, like babel
import { hashHistory, Router, Route, Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (

      <div>
        <nav>
          <div className="nav-wrapper amber darken-1">
            <a href="/" class="brand-logo">React Header</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">Some Link</a></li>
              <li><a href="#">Some Link</a></li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col s3 grey darken-1">
            <p>Something</p>
          </div>
          <div className="col s9 teal lighten-2">
            <p>Placeholder goes here</p>
          {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

