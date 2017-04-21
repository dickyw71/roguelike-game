
class Player {
    constructor() {
        this.name = 'Player';
        this.level = 0;
        this.health = 100;
        this.XP = 0;
        this.weapon = 'Sword';

        this.pickUpWeapon = this.pickUpWeapon.bind(this);
        this.fight = this.fight.bind(this);
    }

    pickUpWeapon() {
        return true;
    }

    fight() {
        return false;
    }
}

export default Player;