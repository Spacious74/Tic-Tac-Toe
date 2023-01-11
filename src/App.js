import React from 'react'
import './App.css';
import Board from './board.jsx'

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Board />
      </div>
    );
  }

}

export default App;
