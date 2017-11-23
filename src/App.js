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
    const allowedKeys = ['firstName','lastName','userName','email'];
    const filteredFields = Object.keys(fields)
    .filter(key => allowedKeys.includes(key))
    .reduce((obj,key)=>{
      obj[key] = fields[key];
      return obj;
    },{});
    console.log("Filtered fields");
    console.log(filteredFields);
    this.setState({fields:filteredFields});
      
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
