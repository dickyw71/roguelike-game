import React, { Component } from 'react';
import Dungeon from './dungeon.js';
import PlayerStatus from './player-status.js'

class RoguelikeGame extends Component {
 
    generateDungeon() {
        return (
            <Dungeon />
        );
    }

    render() {
        return (
            <div className="roguelikeGame">
                <PlayerStatus />
                <Dungeon />
            </div>
        );
    }
}

export default RoguelikeGame;