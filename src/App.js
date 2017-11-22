import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  state = {
    fields:{}
  }
  onSubmit = fields =>{
    this.setState({fields});
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Form onSubmit={fields => this.onSubmit(fields)}/>
        </MuiThemeProvider>
        <p>{JSON.stringify(this.state.fields,null,2)}</p>
      </div>
    );
  }
}

export default App;
