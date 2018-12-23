import React, { Component } from 'react';
import './App.css';

let var1 ="this is var 1"


function printToConsole(){
  console.log(var1)
}










class App extends Component {
  
  render() {
    printToConsole()




    return (
      <div className="App">
        <h1>This is a test site </h1>
      </div>
    );
  }
}

export default App;
