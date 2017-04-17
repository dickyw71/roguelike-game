import React, { Component } from 'react';
import './dungeon.css';

let style = {
    room: {
        border: "1px solid black",
        margin: "5px",
        width: "40px",
        height: "40px"
    }
};

class Dungeon extends Component {
    constructor(props) {
        super(props);
        
        this.calculateRandomNoOfRooms = this.calculateRandomNoOfRooms.bind(this);
    };

    calculateRandomNoOfRooms() {
        let max = 15;   // Dungeons can have upto 15 rooms
        let min = 5;    // Dungeons have at least 5 rooms
        return Math.floor(Math.random() * (max-min)+1) + min;
    }

    render() {
        const rooms = [];
        for(let i=0; i < this.calculateRandomNoOfRooms()+1; i++) {
            rooms.push(<Room id="room" key={i.toString()} style={style.room}></Room>);
        }
    
        return (
            <div className="Dungeon">
                {rooms}    
            </div>
        );
    }
}


class Room extends Component {
    constructor(props) {
        super(props);
        this.width = Math.floor(Math.random() * 100);
        this.height = Math.floor(Math.random() * 100);
    }

    render() {
        return (
            <div className="RoomContents" style={style.room}>
            </div>    
        );
    }
}


export { Room };
export default Dungeon;