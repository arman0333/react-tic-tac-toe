import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'

// Import your components
import Board from '../TicTacToeGame/Board'; // Ensure correct file path
import Square from '../TicTacToeGame/Square'; // Ensure correct file path

// Import your CSS files
import './style.css';

// Render your React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
