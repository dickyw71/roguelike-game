import React, { Component } from 'react';
import Dungeon from './dungeon.js';

class RoguelikeGame extends Component {
 
    generateDungeon() {
        return (
            <Dungeon></Dungeon>
        );
    }

    render() {
        const dungeon = this.generateDungeon();

        return (
            <div className="RoguelikeGame">
                {dungeon}
            </div>
        );
    }
}

export default RoguelikeGame;