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
        margin: "10px 10px",
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
        let max = 30;   // Dungeons can have upto 30 rooms
        let min = 10;    // Dungeons have at least 10 rooms
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
        this.margin = Math.floor(Math.random() * 100).toString() + "px 10px";
    }

    render() {
        style.room.width = this.width;
        style.room.height = this.height;
        style.room.margin = this.margin
        return (
            <div 
                className="Room" 
                style={style.room} 
            >
            </div>    
        );
    }
}


export { Room };
export default Dungeon;