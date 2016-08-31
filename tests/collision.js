require('babel-register')({
    plugins: [
        'transform-es2015-modules-commonjs',
        'syntax-object-rest-spread',
        'transform-object-rest-spread',
        'syntax-export-extensions',
        'transform-export-extensions'
    ]
});
const test = require('tape');

const Collision = require('../src/lib/Collision.js').default;
const BROAD_CELL_SIZE = 250;

const mockData = {
    boundaries: [5000, null, 5000],
    objects: [
        { hitbox: [[100, 200], [0, 200], [100, 150]] },

        { hitbox: [[500, 1000], [0, 200], [500, 600]] },
        { hitbox: [[1000, 1100], [0, 200], [300, 600]] },
        { hitbox: [[1100, 1300], [0, 200], [500, 600]] },
        { hitbox: [[1100, 1200], [0, 200], [600, 800]] }
    ]
};
for (let i = 0; i < mockData.objects.length; i++) {
    const obj = mockData.objects[i];
    obj.broadCells = [];
    const broadCellsXMax = Math.ceil(mockData.boundaries[0] / BROAD_CELL_SIZE) - 1;
    const broadCellsYMax = Math.ceil(mockData.boundaries[2] / BROAD_CELL_SIZE) - 1;
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
}

function boundGetCollisions(line) {
    return Collision.getCollisions(line, mockData.objects, BROAD_CELL_SIZE);
}

test('no collision', function(t) {
    t.plan(1);

    t.deepEqual(boundGetCollisions([[10, 100, 10], [99, 100, 99]]), [{
        newPos: [99, 100, 99]
    }]);
});

test('single wall, single collision', function(t) {
    t.plan(4);

    t.deepEqual(boundGetCollisions([[140, 100, 90], [160, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 99],
        newPos: [160, 100, 99]
    }]);

    t.deepEqual(boundGetCollisions([[250, 100, 120], [150, 100, 130]]), [{
        obj: mockData.objects[0],
        collisionPoint: [201, 100, 125],
        newPos: [201, 100, 130]
    }]);

    t.deepEqual(boundGetCollisions([[170, 100, 170], [150, 100, 130]]), [{
        obj: mockData.objects[0],
        collisionPoint: [160, 100, 151],
        newPos: [150, 100, 151]
    }]);

    t.deepEqual(boundGetCollisions([[10, 100, 149], [190, 100, 101]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 125],
        newPos: [99, 100, 101]
    }]);
});

test('single wall, single collision with end point on the edge', function(t) {
    t.plan(1);

    t.deepEqual(boundGetCollisions([[140, 100, 90], [150, 100, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 99],
        newPos: [150, 100, 99]
    }]);
});

test('single wall, double collisions on opposite sides', function(t) {
    t.plan(4);

    t.deepEqual(boundGetCollisions([[170, 100, 90], [100, 100, 160]]), [{
        obj: mockData.objects[0],
        collisionPoint: [160, 100, 99],
        newPos: [100, 100, 99]
    }]);

    t.deepEqual(boundGetCollisions([[250, 100, 150], [50, 100, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [201, 100, 137.5],
        newPos: [201, 100, 100]
    }]);

    t.deepEqual(boundGetCollisions([[175, 100, 200], [100, 100, 50]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 151],
        newPos: [100, 100, 151]
    }]);

    t.deepEqual(boundGetCollisions([[50, 100, 150], [250, 100, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 137.5],
        newPos: [99, 100, 100]
    }]);
});

test('single wall, double collisions on adjacent sides', function(t) {
    t.plan(1);

    t.deepEqual(boundGetCollisions([[100, 100, 75], [250, 100, 150]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 99],
        newPos: [250, 100, 99]
    }]);

    // todo other sides
});

test('single wall, double collisions on corners', function(t) {
    t.plan(5);

    // < 45deg
    t.deepEqual(boundGetCollisions([[95, 100, 90], [105, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 99],
        newPos: [105, 100, 99]
    }]);

    // > 45deg
    t.deepEqual(boundGetCollisions([[90, 100, 95], [110, 100, 105]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 99],
        newPos: [99, 100, 105]
    }]);

    // == 45deg
    t.deepEqual(boundGetCollisions([[90, 100, 90], [110, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 99],
        newPos: [99, 100, 110]
    }]);

    // slide corner (no collision)
    t.deepEqual(boundGetCollisions([[110, 100, 90], [90, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [100, 100, 99],
        newPos: [90, 100, 99]
    }]);

    // slide one side
    t.deepEqual(boundGetCollisions([[90, 100, 110], [110, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 110],
        newPos: [99, 100, 110]
    }]);

    // todo other corners
});

test('two walls, rebound collision', function(t) {
    t.plan(2);

    t.deepEqual(boundGetCollisions([[700, 100, 400], [1000, 100, 600]]), [
        {
            obj: mockData.objects[1],
            collisionPoint: [850, 100, 499],
            newPos: [1000, 100, 499]
        },
        {
            obj: mockData.objects[2],
            collisionPoint: [999, 100, 499],
            newPos: [999, 100, 499]
        }
    ]);

    t.deepEqual(boundGetCollisions([[700, 100, 700], [1000, 100, 500]]), [{
            obj: mockData.objects[1],
            collisionPoint: [850, 100, 601],
            newPos: [1000, 100, 601]
    }]);
});

test('two walls, corner case', function(t) {
    t.plan(2);

    t.deepEqual(boundGetCollisions([[950, 100, 650], [1050, 100, 550]]), [{
        obj: mockData.objects[2],
        collisionPoint: [1000, 100, 601],
        newPos: [1050, 100, 601]
    }]);

    t.deepEqual(boundGetCollisions([[1050, 100, 650], [950, 100, 550]]), [{
        obj: mockData.objects[1],
        collisionPoint: [1000, 100, 601],
        newPos: [950, 100, 601]
    }]);
});

test('three walls', function(t) {
    t.plan(3);

    t.deepEqual(boundGetCollisions([[900, 100, 650], [1100, 100, 550]]), [
        {
            obj: mockData.objects[2],
            collisionPoint: [1000, 100, 601],
            newPos: [1100, 100, 601]
        },
        {
            obj: mockData.objects[4],
            collisionPoint: [1099, 100, 601],
            newPos: [1099, 100, 601]
        }
    ]);

    t.deepEqual(boundGetCollisions([[1000, 100, 950], [1200, 100, 450]]), [
        {
            obj: mockData.objects[4],
            collisionPoint: [1099, 100, 700],
            newPos: [1099, 100, 450]
        },
        {
            obj: mockData.objects[2],
            collisionPoint: [1099, 100, 601],
            newPos: [1099, 100, 601]
        }
    ]);

    t.deepEqual(boundGetCollisions([[1000, 100, 650], [1200, 100, 550]]), [{
        obj: mockData.objects[3],
        collisionPoint: [1099, 100, 601],
        newPos: [1099, 100, 601]
    }]);
});
