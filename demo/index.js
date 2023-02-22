import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'
import '../src/SnakeGame.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>Play Snake Game</h1>
    <div className="textWrapper">
      <p id="instructions">Use the arrow keys or W/A/S/D to play</p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);
