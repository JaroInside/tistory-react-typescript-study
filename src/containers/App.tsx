import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home, About, Post } from '.';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post/:postId" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
