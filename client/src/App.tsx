import * as React from 'react';

import { Link } from 'react-router-dom';

import './App.css';

import logo from './logo.svg';

interface IState {
  name: string
};

class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props)
    this.state = {
      name: 'hello'
    }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello</h1>
        </header>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="articles">Articles</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;


