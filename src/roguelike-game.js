import React, { Component } from 'react';
import Dungeon from './dungeon.js';

class RoguelikeGame extends Component {
 
    generateDungeon() {
        return (
            <Dungeon></Dungeon>
        );
    }

    render() {
        return (
            <div className="RoguelikeGame">
                <Dungeon></Dungeon>
            </div>
        );
    }
}

export default RoguelikeGame;