import Collision from '../lib/Collision.js';

const level = {
    boundaries: [5000, null, 5000],
    broadCellSize: 500,
    player: {
        pos: [0, 100, 0],
        angle: [135, 0, 0]
    },
    objects: [
        {
            name: 'floor',
            type: 'plain',
            size: [5000, 0, 5000],
            pos: [2500, 0, 2500],
            angle: [90, 0, 0],
            background: '#cfa',
            collides: false
        },
        {
            name: 'test wall',
            type: 'wall',
            size: [200, 200, 50],
            pos: [1000, 0, 1000],
            background: '#b2adb2'
        },
        {
            name: 'test wall to make corner',
            type: 'wall',
            size: [50, 200, 200],
            pos: [1125, 0, 925],
            background: '#b2adb2'
        },
        {
            name: 'test tree',
            type: 'larch',
            size: [50, 100, 50],
            pos: [1500, 0, 1500]
        }
    ]
};

// calculate 2d points coordinates for level objects
for (let i = 0; i < level.objects.length; i++) {
    const obj = level.objects[i];
    // enlarge object for 1px each side to prevent "looking through walls"
    const sizeXHalf = (obj.size[0] + 2) / 2;
    const sizeZHalf = (obj.size[2] + 2) / 2;
    obj.coords2d = [
        [obj.pos[0] - sizeXHalf, obj.pos[2] - sizeZHalf],
        [obj.pos[0] + sizeXHalf, obj.pos[2] - sizeZHalf],
        [obj.pos[0] + sizeXHalf, obj.pos[2] + sizeZHalf],
        [obj.pos[0] - sizeXHalf, obj.pos[2] + sizeZHalf]
    ];
}

level.collision = new Collision(level);

export default level;
