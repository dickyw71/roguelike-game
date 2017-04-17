import React from 'react';
import ReactDOM from 'react-dom';
import RoguelikeGame from './roguelike-game.js';
import Dungeon from './dungeon.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoguelikeGame />, div);
});

it('should procedurally generate a dungeon', () => {
    let game = new RoguelikeGame;

    expect(game.generateDungeon).toBeDefined();

    expect(game.generateDungeon()).toBeInstanceOf(Dungeon);
})