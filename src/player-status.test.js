import React from 'react';
import ReactDOM from 'react-dom';
import PlayerStatus from './player-status.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerStatus />, div);
});