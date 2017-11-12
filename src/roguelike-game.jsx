import React, { Component } from 'react';
import Dungeon from './dungeon.jsx';
import PlayerStatus from './player-status.jsx'

const defaultGameState = () => {
    
}


class RoguelikeGame extends Component {

    constructor(props) {
        super(props)
        this.state = {dungeonSize: props.dungeonSize, playerSize: props.playerSize};
    }
    generateDungeon() {
        return (
            <Dungeon />
        );
    }

    render() {
        return (
            <div className="roguelikeGame">
                <PlayerStatus />
                <Dungeon size={this.state.dungeonSize} playerSize={this.state.playerSize}/>
            </div>
        );
    }
}

export default RoguelikeGame;