Roguelike Dungeon crawler game created using React.js

Game Features:
- Procedurally generated dungeon

User Story: I have health, a level, and a weapon. I can pick up a better weapon. I can pick up health items.

User Story: All the items and enemies on the map are arranged at random.

User Story: I can move throughout a map, discovering items.

User Story: I can move anywhere within the map's boundaries, but I can't move through an enemy until I've beaten it.

User Story: Much of the map is hidden. When I take a step, all spaces that are within a certain number of spaces from me are revealed.

User Story: When I beat an enemy, the enemy goes away and I get XP, which eventually increases my level.

User Story: When I fight an enemy, we take turns damaging each other until one of us loses. I do damage based off of my level and my weapon. The enemy does damage based off of its level. Damage is somewhat random within a range.

User Story: When I find and beat the boss, I win.

User Story: The game should be challenging, but theoretically winnable.

Game
    display player current status
        health
        weapon
        level
        XP
    has
        state
            player initial position

        Dungeon
            has 
                Size (width and height)
                Rooms
                    have doors (to other rooms) 
                    have walls
                    have floors
                    have ceilings
                    may randomly contain 
                        enemies
                            can be fought
                            have a random location
                        health items (food, potions etc)
                            can be picked up by player 
                            have a random location        
                        weapons
                            can be picked up by player
                            have a random location
                a boss
                    must be found, fought and beaten to win game
                    has a location
                a player
                    can move around the dungeon
                    has a location
                    has a health value
                    has a level value
                    has an XP value
                    has a weapon
                    has a size (width and height)

## Test To-do list
- Each dungeon has a random number of interconnected rooms in the range 5 to 15
- Each room has 4 walls and each wall may have a door
- Each room is rectangular and each side is between 1 and 5 units long
- Each door leads to another room within the dungeon
- Each door may be at any point along the length of the wall
- Rooms are connected to their neigbours by corridors
- Room contains random items


the game should procedurally generate a dungeon 
containing multiple connected rooms which in turn contain enemies, weapons, player, health items etc.

