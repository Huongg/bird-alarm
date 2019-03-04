import React, { Component } from 'react';

import Button from './components/button/button.renderer'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1>Lorem Ipsum</h1>
        </header>

        <div className='signal-wrapper'>
          <div className='signal-icon' src=''></div>
        </div>

        <div className='button-wrapper'>
          <Button />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
