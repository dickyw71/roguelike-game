import React, { Component } from 'react';
import Player from './player.js';
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

class Room extends Component {
    constructor(props) {
        super(props);
        let max = 200;
        let min = 40;
        this.width = Math.floor(Math.random() * (max - min) + min);
        this.height = Math.floor(Math.random() * (max - min) + min);
        this.margin = Math.floor(Math.random() * 100).toString() + "px 10px";

        console.log(this.width, this.height, this.margin);
    }
    
    render() {
        style.room.width = this.width;
        style.room.height = this.height;
        style.room.margin = this.margin
        return (
            <div 
            className="room" 
            style={style.room}
            >
                <HealthItem />
            </div>
        );
    }
}

class HealthItem extends Component {
    render() {
        return (
            <div 
            className="healthItem" 
            style={style.healthItem}
            >
            🗝
            </div>
        )
    }
}

export { Room };
export default Dungeon;