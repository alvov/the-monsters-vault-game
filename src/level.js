import Collision from './lib/collision';
import { getVisibleObjects, getPointPosition } from './lib/utils';
import {
    BROAD_CELL_SIZE,
    HAND_LENGTH,
    DOOR_CLOSE,
    PAINTING_TYPE,
    FLOOR_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE
} from './constants/constants';

const level = {
    boundaries: [2500, null, 2500],
    player: {
        pos: [1250, 100, 250],
        size: [50, 150, 50],
        angle: [0, 0, 0]
    },
    objects: [
        {
            name: 'wall_001',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [2000, 100, 250]
        },
        {
            name: 'wall_002',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [250, 100, 500]
        },
        {
            name: 'wall_003',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [750, 100, 500]
        },
        {
            name: 'wall_004',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [1750, 100, 500]
        },
        {
            name: 'wall_005',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [500, 100, 750]
        },
        {
            name: 'wall_006',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [2000, 100, 750]
        },
        {
            name: 'wall_007',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [1250, 100, 1000]
        },
        {
            name: 'wall_008',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [1000, 100, 1250]
        },
        // {
        //     name: 'dickbutt',
        //     type: PAINTING_TYPE,
        //     size: [50, 50, 0],
        //     pos: [1026, 100, 1250],
        //     angle: [0, 90, 0],
        //     background: 'url(assets/dickbutt.png) 50% 50% / contain',
        //     collides: false
        // },
        {
            name: 'wall_009',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [1250, 100, 1500]
        },
        {
            name: 'wall_010',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [2250, 100, 1500]
        },
        {
            name: 'wall_011',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [500, 100, 1750]
        },
        {
            name: 'wall_012',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [2000, 100, 1750]
        },
        {
            name: 'wall_013',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [750, 100, 2000]
        },
        {
            name: 'wall_014',
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [1750, 100, 2000]
        },
        {
            name: 'wall_015',
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [500, 100, 2250]
        },
        {
            name: 'box_001',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [200, 75, 200],
            props: {
                mode: 1
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
            pos: [2425, 75, 75],
            props: {
                mode: 3
            }
        },
        {
            name: 'box_004',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [1300, 75, 900],
            props: {
                mode: 2
            }
        },
        {
            name: 'box_005',
            type: BOX_TYPE,
            size: [150, 150, 150],
            pos: [2110, 75, 1975],
            props: {
                mode: 1
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
            name: 'switcher_01',
            type: SWITCHER_TYPE,
            pos: [1027, 100, 1250],
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
            size: [500, 200, 20],
            pos: [250, 100, 1000],
            props: {
                id: 1,
                state: DOOR_CLOSE
            }
        },
        {
            name: 'switcher_02',
            type: SWITCHER_TYPE,
            pos: [250, 100, 526],
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
            size: [500, 200, 20],
            pos: [2250, 100, 1000],
            props: {
                id: 2,
                state: DOOR_CLOSE
            }
        },
        {
            name: 'switcher_03',
            type: SWITCHER_TYPE,
            pos: [2026, 100, 250],
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
            size: [500, 200, 20],
            pos: [250, 100, 1500],
            props: {
                id: 3,
                state: DOOR_CLOSE
            }
        },
        {
            name: 'switcher_04',
            type: SWITCHER_TYPE,
            pos: [250, 100, 2474],
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
            size: [20, 200, 500],
            pos: [1500, 100, 2250],
            props: {
                id: 4,
                state: DOOR_CLOSE
            }
        },
        {
            name: 'switcher_05',
            type: SWITCHER_TYPE,
            pos: [2250, 100, 1526],
            size: [40, 60, 100],
            angle: [0, 0, 0],
            props: {
                id: 5
            },
            isInteractive: true
        },
        {
            name: 'door_05',
            type: DOOR_TYPE,
            size: [500, 200, 20],
            pos: [1250, 100, 0],
            props: {
                id: 5,
                state: DOOR_CLOSE
            }
        }
    ]
};

// generate border walls
for (let x = 250; x < level.boundaries[0]; x += 500) {
    for (let z = 0; z <= level.boundaries[2]; z += level.boundaries[2]) {
        // leave gap for exit door
        if (x === 1250 && z === 0) {
            continue;
        }
        level.objects.push({
            name: 'border wall ' + x + '_' + z,
            type: WALL_TYPE,
            size: [500, 200, 50],
            pos: [x, 100, z]
        });
    }
}
for (let z = 250; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x <= level.boundaries[0]; x += level.boundaries[0]) {
        level.objects.push({
            name: 'border wall ' + x + '_' + z,
            type: WALL_TYPE,
            size: [50, 200, 500],
            pos: [x, 100, z]
        });
    }
}

// generate floor panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'floor tile ' + z + '_' + x,
            type: FLOOR_TYPE,
            size: [500, 0, 500],
            pos: [x + 250, 0, z + 250],
            collides: false
        });
    }
}

// calculate 2d points coordinates for objects hitboxes
for (let i = 0; i < level.objects.length; i++) {
    const obj = level.objects[i];
    let sizeXHalf = 0;
    let sizeYHalf = 0;
    let sizeZHalf = 0;

    if (obj.collides !== false) {
        sizeXHalf = obj.size[0] / 2;
        sizeYHalf = obj.size[1] / 2;
        sizeZHalf = obj.size[2] / 2;
    }
    const playerXHalf = level.player.size[0] / 2;
    const playerYHalf = level.player.size[1] / 2;
    const playerZHalf = level.player.size[2] / 2;
    // if object is "collidable", enlarge its hitbox to simulate players size (actual player is a dot)
    obj.hitbox = [
        [obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[0] + sizeXHalf + playerXHalf],
        [obj.pos[1] - sizeYHalf - playerYHalf, obj.pos[1] + sizeYHalf + playerYHalf],
        [obj.pos[2] - sizeZHalf - playerZHalf, obj.pos[2] + sizeZHalf + playerZHalf]
    ];

    // define to which broad cells does an object belong
    obj.broadCells = [];
    const broadCellsXMax = Math.ceil(level.boundaries[0] / BROAD_CELL_SIZE) - 1;
    const broadCellsYMax = Math.ceil(level.boundaries[2] / BROAD_CELL_SIZE) - 1;
    const topLeftCellX = Math.min(
        broadCellsXMax,
        Math.max(0, Math.floor(obj.hitbox[0][0] / BROAD_CELL_SIZE))
    );
    const topLeftCellZ = Math.min(
        broadCellsYMax,
        Math.max(0, Math.floor(obj.hitbox[2][0] / BROAD_CELL_SIZE))
    );
    const bottomRightCellX = Math.min(
        broadCellsXMax,
        Math.max(0, Math.floor(obj.hitbox[0][1] / BROAD_CELL_SIZE))
    );
    const bottomRightCellZ = Math.min(
        broadCellsYMax,
        Math.max(0, Math.floor(obj.hitbox[2][1] / BROAD_CELL_SIZE))
    );
    for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
        for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
            obj.broadCells.push([i, j]);
        }
    }

    const visibleObjects = getVisibleObjects(level.player.pos, [obj]);
    obj.isVisible = visibleObjects.length === 1;

    obj.isReachable = false;
}

const collisionView = Collision.getCollisionView(
    [level.player.pos, getPointPosition({ pos: level.player.pos, distance: HAND_LENGTH, angle: level.player.angle })],
    level.objects,
    BROAD_CELL_SIZE
);
if (collisionView) {
    collisionView.obj.isReachable = true;
}

level.objects = JSON.stringify(level.objects);

export default level;
