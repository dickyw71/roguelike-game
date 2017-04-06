import Player from './player.js';

it('has a level property', () => {
    let myPlayer = new Player;
    expect(myPlayer.level).toBeDefined();
    expect(myPlayer.level).toEqual(0);
});

it('has a health property', () => {
    let myPlayer = new Player;
    expect(myPlayer.health).toBeDefined();
    expect(myPlayer.health).toEqual(100);
});

it('has an XP property', () => {
    let myPlayer = new Player;
    expect(myPlayer.XP).toBeDefined();
});

it('has a weapon', () => {
    let myPlayer = new Player;
    expect(myPlayer.weapon).toBeDefined();
});

it('can pick up a weapon', () => {
    let myPlayer = new Player;
    expect(myPlayer.pickUpWeapon).toBeDefined();
    expect(myPlayer.pickUpWeapon()).toBeTruthy();
});

it('can fight an enemy', () => {
    let myPlayer = new Player;
    expect(myPlayer.fight).toBeDefined();
    expect(myPlayer.fight()).toBeDefined();
});