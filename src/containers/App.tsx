import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home, About } from '.';

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
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/page">page</Link>
            </li>
            <li>
              <Link to="/render">render</Link>
            </li>
          </ul>
        </nav>
        <Route exact={true} path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/page" children={(props) => (props.match ? <h1>/page 주소입니다</h1> : <h1>/page 주소가 아닙니다</h1>)}/>
        <Route path="/render" render={(props) => (props.match ? <h1>/render 주소입니다</h1> : <h1>/render 주소가 아닙니다</h1>)}/>
      </div>
      </Router>
    );
  }
}

export default App;
