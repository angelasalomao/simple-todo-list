import React, { Component } from 'react';
import Button from './components/Button.js/Button';
import Input from './components/Input/Input';

class App extends Component {
  constructor() {
    super()

    this.state = {
      
    }
  }
  render() {

    return (
      <main>
        <Input placeholder="Enter item" />
        <Button onClick={() => console.log('clicou')}>Submit</Button>
      </main>
    );
  }
}

export default App;
