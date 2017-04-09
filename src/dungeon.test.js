import React from 'react';
import ReactDOM from 'react-dom';
import Dungeon, { Room } from './dungeon.js';

test('dungeon exist', () => {
    let testDungeon = new Dungeon; 

    expect(testDungeon).toBeDefined();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dungeon />, div);
});

it('contains one or more rooms', () => {

})

test('a room is between 0 and 99 wide', () => {
  let testRoom = new Room;
  expect(testRoom.width).toBeGreaterThan(0);
  expect(testRoom.height).toBeLessThan(100);
  console.log(testRoom.width, testRoom.height);
})