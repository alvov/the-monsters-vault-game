import Collision from '../lib/Collision';

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
            type: 'wall',
            size: [500, 200, 50],
            pos: [750, 0, 500]
        },
        {
            name: 'wall_002',
            type: 'wall',
            size: [500, 200, 50],
            pos: [1750, 0, 500]
        },
        {
            name: 'wall_003',
            type: 'wall',
            size: [50, 200, 500],
            pos: [500, 0, 750]
        },
        {
            name: 'wall_004',
            type: 'wall',
            size: [50, 200, 500],
            pos: [2000, 0, 750]
        },
        {
            name: 'wall_005',
            type: 'wall',
            size: [500, 200, 50],
            pos: [1250, 0, 1000]
        },
        {
            name: 'wall_006',
            type: 'wall',
            size: [50, 200, 500],
            pos: [1000, 0, 1250]
        },
        {
            name: 'wall_007',
            type: 'wall',
            size: [500, 200, 50],
            pos: [1250, 0, 1500]
        },
        {
            name: 'wall_008',
            type: 'wall',
            size: [50, 200, 500],
            pos: [500, 0, 1750]
        },
        {
            name: 'wall_009',
            type: 'wall',
            size: [50, 200, 500],
            pos: [2000, 0, 1750]
        },
        {
            name: 'wall_010',
            type: 'wall',
            size: [500, 200, 50],
            pos: [750, 0, 2000]
        },
        {
            name: 'wall_011',
            type: 'wall',
            size: [500, 200, 50],
            pos: [1750, 0, 2000]
        }
    ]
};

// generate border walls
for (let x = 250; x < level.boundaries[0]; x += 500) {
    for (let z = 0; z <= level.boundaries[2]; z += level.boundaries[2]) {
        level.objects.push({
            name: 'border wall ' + x + '_' + z,
            type: 'wall',
            size: [500, 200, 50],
            pos: [x, 0, z]
        });
    }
}
for (let z = 250; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x <= level.boundaries[0]; x += level.boundaries[0]) {
        level.objects.push({
            name: 'border wall ' + x + '_' + z,
            type: 'wall',
            size: [50, 200, 500],
            pos: [x, 0, z]
        });
    }
}

// generate floor panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'floor tile ' + z + '_' + x,
            type: 'floor',
            size: [500, 0, 500],
            pos: [x + 250, 0, z + 250],
            collides: false
        });
    }
}

// calculate 2d points coordinates for objects hitboxes
for (let i = 0; i < level.objects.length; i++) {
    const obj = level.objects[i];
    // enlarge object's hitbox to simulate players volume
    const sizeXHalf = obj.size[0] / 2;
    const sizeZHalf = obj.size[2] / 2;
    obj.coords2d = [
        [obj.pos[0] - sizeXHalf, obj.pos[2] - sizeZHalf],
        [obj.pos[0] + sizeXHalf, obj.pos[2] - sizeZHalf],
        [obj.pos[0] + sizeXHalf, obj.pos[2] + sizeZHalf],
        [obj.pos[0] - sizeXHalf, obj.pos[2] + sizeZHalf]
    ];
    if (obj.collides !== false) {
        const playerXHalf = level.player.size[0] / 2;
        const playerZHalf = level.player.size[2] / 2;
        obj.hitbox = [
            [obj.coords2d[0][0] - playerXHalf, obj.coords2d[0][1] - playerZHalf],
            [obj.coords2d[1][0] + playerXHalf, obj.coords2d[1][1] - playerZHalf],
            [obj.coords2d[2][0] + playerXHalf, obj.coords2d[2][1] + playerZHalf],
            [obj.coords2d[3][0] - playerXHalf, obj.coords2d[3][1] + playerZHalf]
        ];
    }
}

level.collision = new Collision(level);

export default level;
