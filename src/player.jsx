import React, { Component } from 'react';
import './player.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.name = 'Player';
        this.level = 0;
        this.health = 100;
        this.XP = 0;
        this.weapon = 'Sword';
        this.location = { x: 50, y: 50 };

        this.pickUpWeapon = this.pickUpWeapon.bind(this);
        this.fight = this.fight.bind(this);
        this.move = this.move.bind(this);
    }

    pickUpWeapon() {
        return true;
    }

    fight() {
        return false;
    }

    move(direction) {
        switch (direction.dir) {
            case "LEFT":
                if (location.x > 0) {
                    location.x = location.x -1;
                }
                break;
            case "RIGHT":
                if (location.x < 100) {
                    location.x = location.x +1;
                }
                break;
            case "UP":
                if (location.y > 0) {
                    location.y = location.y -1;
                }
                break;
            case "DOWN":
                if (location.y < 100) {
                    location.y = location.y +1;
                }
                break;
            default:
                break;
        }
        console.log(location);
    }

    handleKeyDown = (e) => {
        let newDirection;
      
        switch(e.keyCode) {
            case 37:
                newDirection = { top: 0, left: -1 , dir: 'LEFT'};
                break;
            case 38:
                newDirection = { top: -1, left: 0 , dir: 'UP'};
                break;
            case 39:
                newDirection = { top: 0, left: 1, dir: 'RIGHT'};
                break;
            case 40:
                newDirection = { top: 1, left: 0, dir: 'DOWN' };
                break;
            default:
                return;
        }

        this.move(newDirection);
    }

    render() {
        return (
            <div className="player"
            >
            </div>
        )
    }

    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}

export default Player;