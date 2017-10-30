import React, { Component } from 'react';
import Dungeon from './dungeon.jsx';
import PlayerStatus from './player-status.jsx'

const defaultGameState = () => {
    
}


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