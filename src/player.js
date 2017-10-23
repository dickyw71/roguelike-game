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
        switch (direction) {
            case "left":
                if (location.x > 0) {
                    // location.x = location.x -1;
                }
                break;
            case "right":
                if (location.x < 100) {
                    // location.x = location.x +1;
                }
                break;
            case "up":
                if (location.y > 0) {
                    // location.y = location.y -1;
                }
                break;
            case "down":
                if (location.y < 100) {
                    // location.y = location.y +1;
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="player"
            >
            </div>
        )
    }
}

export default Player;