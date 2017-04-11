import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Dungeon, { Room } from './dungeon.js';

test('dungeon exist', () => {
    let testDungeon = new Dungeon; 

    expect(testDungeon).toBeDefined();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dungeon />, div);
});

it('renders without crashing', () => {
  shallow(<Dungeon />);
});

it('renders without crashing', () => {
  shallow(<Room />);
});

it('contains one or more rooms', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dungeon />, div);

  const dungeonElement = document.getElementsByClassName('Dungeon');
  expect(dungeonElement).toBeDefined();

  const roomElement = document.getElementsByClassName('Room');
  expect(roomElement).toBeDefined();
})



test('a room is between 0 and 99 wide', () => {
  let testRoom = new Room;
  expect(testRoom.width).toBeGreaterThan(0);
  expect(testRoom.height).toBeLessThan(100);
  console.log(testRoom.width, testRoom.height);
})