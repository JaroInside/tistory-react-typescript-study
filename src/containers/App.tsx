import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import { Home, About, PostList, NotFound, Admin } from '.';

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
                <NavLink exact={true} to="/" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>About</NavLink>
              </li>
              <li>
                <NavLink to="/post" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>Post</NavLink>
              </li>
              <li>
                <NavLink to="/admin" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>Admin</NavLink>
              </li>
            </ul>
          </nav>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={About} />
              <Redirect from="/info" to="/about" />
              <Route path="/post" component={PostList} />
              <Route path="/admin" component={Admin} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
