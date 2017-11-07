import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import RoguelikeGame from './roguelike-game';
import './index.css';

ReactDOM.render(
  <RoguelikeGame dungeonSize={100} playerSize={10}/>,
  document.getElementById('root')
);
