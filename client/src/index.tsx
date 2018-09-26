import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Articles from './Articles';
import About from './About';

import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
