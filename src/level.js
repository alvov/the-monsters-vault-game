import LevelGenerator from './lib/LevelGenerator';
import {
    PLAYER_SIZE,
    DOOR_STATE_CLOSE,
    PAINTING_TYPE,
    FLOOR_TYPE,
    CEILING_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE,
    ENEMY_STATE,
    PAINTINGS,
    ENEMY_TRIGGER_DOOR_ID
} from './constants/constants';

const level = {
    boundaries: [2500, null, 2500],
    player: {
        pos: [1250, PLAYER_SIZE.HEIGHT, 250],
        size: [PLAYER_SIZE.WIDTH, PLAYER_SIZE.HEIGHT, PLAYER_SIZE.DEPTH],
        angle: [0, 0, 0],
        health: 100
    },
    enemy: {
        state: ENEMY_STATE.LIMBO,
        isVisible: false,
        position: [1250, 70, 750],
        target: [1250, 0, 750],
        direction: 0,
        props: {
            triggerDoorId: ENEMY_TRIGGER_DOOR_ID
        }
    },
    objects: [
        {
            name: 'wall_001',
            type: WALL_TYPE,
            size: [50, 250, 500],
            pos: [2000, 125, 250]
        },
        {
            name: 'wall_002',
            type: WALL_TYPE,
            size: [500, 250, 50],
            pos: [250, 125, 500]
        },
        {
            name: 'wall_003',
            type: WALL_TYPE,
            size: [500, 250, 50],
            pos: [750, 125, 500]
        },
        {
            name: 'wall_004',
            type: WALL_TYPE,
            size: [500, 250, 50],
            pos: [1750, 125, 500]
        },
        {
            name: 'wall_005',
            type: WALL_TYPE,
            size: [50, 250, 500],
            pos: [500, 125, 750]
        },
        {
            name: 'wall_006',
            type: WALL_TYPE,
            size: [50, 250, 500],
            pos: [2000, 125, 750]
        },
        {
            name: 'wall_007',
            type: WALL_TYPE,
            size: [550, 250, 50],
            pos: [1250, 125, 1000],
            props: {
                mode: 2
            }
        },
        {
            name: 'wall_008',
            type: WALL_TYPE,
            size: [50, 250, 450],
            pos: [1000, 125, 1250],
            props: {
                mode: 2
            }
        },
        {
            name: 'wall_009',
            type: WALL_TYPE,
            size: [550, 250, 50],
            pos: [1250, 125, 1500],
            props: {
                mode: 2
            }
        },
        {
            name: 'wall_010',
            type: WALL_TYPE,
            size: [500, 250, 50],
            pos: [2225, 125, 1500],
            props: {
                mode: 3
            }
        },
        {
            name: 'wall_011',
            type: WALL_TYPE,
            size: [50, 250, 500],
            pos: [500, 125, 1750],
            props: {
                mode: 3
            }
        },
        {
            name: 'wall_012',
            type: WALL_TYPE,
            size: [50, 250, 450],
            pos: [2000, 125, 1750],
            props: {
                mode: 3
            }
        },
        {
            name: 'wall_013',
            type: WALL_TYPE,
            size: [500, 250, 50],
            pos: [750, 125, 2000],
            props: {
                mode: 3
            }
        },
        {
            name: 'wall_014',
            type: WALL_TYPE,
            size: [550, 250, 50],
            pos: [1750, 125, 2000],
            props: {
                mode: 3
            }
        },
        {
            name: 'wall_015',
            type: WALL_TYPE,
            size: [50, 250, 500],
            pos: [500, 125, 2250],
            props: {
                mode: 3
            }
        },
        {
            name: 'box_001',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [200, 75, 200],
            props: {
                mode: 1,
                inhabited: 1
            }
        },
        {
            name: 'box_002',
            type: BOX_TYPE,
            size: [50, 50, 50],
            pos: [175, 175, 175],
            props: {
                mode: 2
            }
        },
        {
            name: 'box_003',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [2100, 75, 500],
            props: {
                mode: 3,
                inhabited: 2
            }
        },
        {
            name: 'box_004',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [1300, 75, 899],
            props: {
                mode: 2,
                inhabited: 1,
                triggerDoorId: ENEMY_TRIGGER_DOOR_ID
            }
        },
        {
            name: 'box_005',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [2110, 75, 1975],
            props: {
                mode: 1,
                inhabited: 2
            }
        },
        {
            name: 'box_006',
            type: BOX_TYPE,
            size: [100, 150, 100],
            pos: [900, 75, 2400],
            props: {
                mode: 2
            }
        },
        {
            name: 'box_007',
            type: BOX_TYPE,
            size: [90, 70, 90],
            pos: [900, 185, 2390],
            props: {
                mode: 3
            }
        },
        {
            name: 'painting_' + PAINTINGS.ESCAPE.alias,
            type: PAINTING_TYPE,
            size: PAINTINGS.ESCAPE.size,
            pos: [350, 125, 51],
            angle: [0, 0, 0],
            props: {
                alias: PAINTINGS.ESCAPE.alias
            },
            collides: false
        },
        {
            name: 'painting_' + PAINTINGS.GIVE_UP.alias,
            type: PAINTING_TYPE,
            size: PAINTINGS.GIVE_UP.size,
            pos: [1974, 125, 250],
            angle: [0, -90, 0],
            props: {
                alias: PAINTINGS.GIVE_UP.alias
            },
            collides: false
        },
        {
            name: 'painting_' + PAINTINGS.FOREVER.alias,
            type: PAINTING_TYPE,
            size: PAINTINGS.FOREVER.size,
            pos: [1250, 125, 1474],
            angle: [0, 180, 0],
            props: {
                alias: PAINTINGS.FOREVER.alias
            },
            collides: false
        },
        {
            name: 'painting_' + PAINTINGS.EASTER.alias,
            type: PAINTING_TYPE,
            size: PAINTINGS.EASTER.size,
            pos: [51, 90, 200],
            angle: [0, 90, 0],
            props: {
                alias: PAINTINGS.EASTER.alias
            },
            collides: false
        },
        {
            name: 'painting_' + PAINTINGS.RED_WALL.alias,
            type: PAINTING_TYPE,
            size: PAINTINGS.RED_WALL.size,
            pos: [974, 130, 1300],
            angle: [0, -90, 0],
            props: {
                alias: PAINTINGS.RED_WALL.alias
            },
            collides: false
        },
        {
            name: 'painting_' + PAINTINGS.GAME.alias,
            type: PAINTING_TYPE,
            size: PAINTINGS.GAME.size,
            pos: [2449, 150, 1250],
            angle: [0, -90, 0],
            props: {
                alias: PAINTINGS.GAME.alias
            },
            collides: false
        },
        {
            name: 'switcher_01',
            type: SWITCHER_TYPE,
            pos: [1027, 150, 1250],
            size: [40, 60, 100],
            angle: [0, 90, 0],
            props: {
                id: 1
            },
            isInteractive: true
        },
        {
            name: 'door_01',
            type: DOOR_TYPE,
            size: [500, 250, 20],
            pos: [250, 125, 975],
            props: {
                id: 1,
                state: DOOR_STATE_CLOSE
            }
        },
        {
            name: 'switcher_02',
            type: SWITCHER_TYPE,
            pos: [250, 150, 526],
            size: [40, 60, 100],
            angle: [0, 0, 0],
            props: {
                id: 2
            },
            isInteractive: true
        },
        {
            name: 'door_02',
            type: DOOR_TYPE,
            size: [500, 250, 20],
            pos: [2250, 125, 975],
            props: {
                id: 2,
                state: DOOR_STATE_CLOSE
            }
        },
        {
            name: 'switcher_03',
            type: SWITCHER_TYPE,
            pos: [2026, 150, 250],
            size: [40, 60, 100],
            angle: [0, 90, 0],
            props: {
                id: 3
            },
            isInteractive: true
        },
        {
            name: 'door_03',
            type: DOOR_TYPE,
            size: [500, 250, 20],
            pos: [250, 125, 1525],
            props: {
                id: 3,
                state: DOOR_STATE_CLOSE
            }
        },
        {
            name: 'switcher_04',
            type: SWITCHER_TYPE,
            pos: [250, 150, 2449],
            size: [40, 60, 100],
            angle: [0, 180, 0],
            props: {
                id: 4
            },
            isInteractive: true
        },
        {
            name: 'door_04',
            type: DOOR_TYPE,
            size: [20, 250, 500],
            pos: [1500, 125, 2250],
            props: {
                id: 4,
                state: DOOR_STATE_CLOSE
            }
        },
        {
            name: 'switcher_05',
            type: SWITCHER_TYPE,
            pos: [2250, 150, 1526],
            size: [40, 60, 100],
            angle: [0, 0, 0],
            props: {
                id: 5
            },
            isInteractive: true
        },
        // {
        //     name: 'switcher_05_test',
        //     type: SWITCHER_TYPE,
        //     pos: [1027, 150, 500],
        //     size: [40, 60, 100],
        //     angle: [0, 90, 0],
        //     props: {
        //         id: 5
        //     },
        //     isInteractive: true
        // },
        {
            name: 'door_05',
            type: DOOR_TYPE,
            size: [500, 250, 20],
            pos: [1250, 125, 25],
            props: {
                id: 5,
                state: DOOR_STATE_CLOSE
            }
        }
    ]
};

// generate border walls
for (let x = 250; x < level.boundaries[0]; x += 500) {
    for (let z = 25; z <= level.boundaries[2] - 25; z += level.boundaries[2] - 50) {
        // leave gap for exit door
        if (x === 1250 && z === 25) {
            continue;
        }
        const wall = {
            name: 'border_wall_' + x + '_' + z,
            type: WALL_TYPE,
            size: [500, 250, 50],
            pos: [x, 125, z]
        };
        // set special mode for far walls
        if (z === 2475) {
            wall.props = {
                mode: 3
            };
        }
        level.objects.push(wall);
    }
}
for (let z = 250; z < level.boundaries[2]; z += 500) {
    for (let x = 25; x <= level.boundaries[0] - 25; x += level.boundaries[0] - 50) {
        const wall = {
            name: 'border_wall_' + x + '_' + z,
            type: WALL_TYPE,
            size: [50, 250, 500],
            pos: [x, 125, z]
        };
        // set special mode for far walls
        if (z >= 1750) {
            wall.props = {
                mode: 3
            };
        }
        level.objects.push(wall);
    }
}

// generate floor and ceiling panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'floor_tile_' + z + '_' + x,
            type: FLOOR_TYPE,
            size: [500, 0, 500],
            pos: [x + 250, 0, z + 250],
            collides: false
        });
        level.objects.push({
            name: 'ceiling_tile_' + z + '_' + x,
            type: CEILING_TYPE,
            size: [500, 0, 500],
            pos: [x + 250, 250, z + 250],
            collides: false
        });
    }
}

// calculate 2d points coordinates for objects hitboxes
LevelGenerator.addHitbox(level);

level.objects = JSON.stringify(level.objects);

export default level;
