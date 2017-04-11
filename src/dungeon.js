'use strict';
import React, { Component } from 'react';

class Dungeon extends Component {
    constructor(props) {
        super(props);

    };
    render() {
        return (
            <div className="Dungeon">
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
            <div className="Room">
            </div>    
        );
    }
}

export { Room };
export default Dungeon;