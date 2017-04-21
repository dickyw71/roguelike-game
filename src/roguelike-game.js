import React, { Component } from 'react';
import Dungeon from './dungeon.js';
import PlayerStatus from './player-status.js'

class RoguelikeGame extends Component {
 
    generateDungeon() {
        return (
            <Dungeon></Dungeon>
        );
    }

    render() {
        return (
            <div className="RoguelikeGame">
                <PlayerStatus></PlayerStatus>
                <Dungeon></Dungeon>
            </div>
        );
    }
}

export default RoguelikeGame;