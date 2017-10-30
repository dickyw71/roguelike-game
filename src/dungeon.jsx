import React, { Component } from 'react';
import Player from './player.jsx';
import './dungeon.css';


class Dungeon extends Component {
    constructor(props) {
        super(props);

     };

    render() {
  
        return (
            <div 
            className="dungeon"
            >
                <Player />
            </div>
        );
    }
}


class HealthItem extends Component {
    render() {
        return (
            <div 
            className="healthItem" 
            >
            🗝
            </div>
        )
    }
}

export default Dungeon;