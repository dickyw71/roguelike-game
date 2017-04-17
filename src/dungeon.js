import React, { Component } from 'react';
import './dungeon.css';

let style = {
    dungeon: {
        border: "1px solid black",
        margin: "10px",
        width: "900px",
        height: "900px",
        background: "#CCCCCC"
    },
    room: {
        margin: "10px",
        width: "40px",  //  default, will be changed by object
        height: "40px",  //  default, will be changed by object
        background: "#FFFFFF"
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
            <div className="Dungeon" style={style.dungeon}>
                {rooms}    
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
    }

    render() {
        style.room.width = this.width;
        style.room.height = this.height;
        return (
            <div 
                className="RoomContents" 
                style={style.room} 
            >
            </div>    
        );
    }
}


export { Room };
export default Dungeon;