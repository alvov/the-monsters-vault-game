import { BROAD_CELL_SIZE } from '../constants';
import Collision from '../lib/Collision';

const level = {
    boundaries: [5000, null, 5000],
    player: {
        pos: [0, 100, 0],
        angle: [135, 0, 0]
    },
    objects: [
        {
            name: 'test wall',
            type: 'wall',
            size: [200, 200, 50],
            pos: [1000, 0, 1000]
        },
        {
            name: 'test wall to make corner',
            type: 'wall',
            size: [50, 200, 200],
            pos: [1125, 0, 925]
        },
        {
            name: 'first wall to see',
            type: 'wall',
            size: [200, 200, 50],
            pos: [200, 0, 425]
        }
        // {
        //     name: 'test tree',
        //     type: 'larch',
        //     size: [50, 100, 50],
        //     pos: [1500, 0, 1500]
        // }
    ]
};

// generate floor panels
for (let i = 0; i < level.boundaries[2]; i += BROAD_CELL_SIZE) {
    for (let j = 0; j < level.boundaries[0]; j += BROAD_CELL_SIZE) {
        level.objects.push({
            name: 'floor tile ' + i + '_' + j,
            type: 'floor',
            size: [BROAD_CELL_SIZE, 0, BROAD_CELL_SIZE],
            pos: [j + BROAD_CELL_SIZE / 2, 0, i + BROAD_CELL_SIZE / 2],
            collides: false
        });
    }
}

// calculate 2d points coordinates for level objects
for (let i = 0; i < level.objects.length; i++) {
    const obj = level.objects[i];
    // enlarge object for 1px each side to prevent "looking through walls"
    const sizeXHalf = obj.size[0] / 2;
    const sizeZHalf = obj.size[2] / 2;
    obj.coords2d = [
        [obj.pos[0] - sizeXHalf, obj.pos[2] - sizeZHalf],
        [obj.pos[0] + sizeXHalf, obj.pos[2] - sizeZHalf],
        [obj.pos[0] + sizeXHalf, obj.pos[2] + sizeZHalf],
        [obj.pos[0] - sizeXHalf, obj.pos[2] + sizeZHalf]
    ];
}

level.collision = new Collision(level);

export default level;
