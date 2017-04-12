import React from 'react';
import ReactDOM from 'react-dom';
import RoguelikeGame from './roguelike-game.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoguelikeGame />, div);
});

it('should procedurally generate a dungeon', () => {
    let aGame = new RoguelikeGame;

    expect(aGame.generateDungeon).toBeDefined();
})