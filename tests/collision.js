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
const testCollision = new Collision(mockData);

test('no collision', function(t) {
    t.plan(1);

    t.deepEqual(testCollision.getCollisions([[10, 100, 10], [99, 100, 99]]), [{
        newPos: [99, 100, 99]
    }]);
});

test('single wall, single collision', function(t) {
    t.plan(4);

    t.deepEqual(testCollision.getCollisions([[140, 100, 90], [160, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 99],
        newPos: [160, 100, 99]
    }]);

    t.deepEqual(testCollision.getCollisions([[250, 100, 120], [150, 100, 130]]), [{
        obj: mockData.objects[0],
        collisionPoint: [201, 100, 125],
        newPos: [201, 100, 130]
    }]);

    t.deepEqual(testCollision.getCollisions([[170, 100, 170], [150, 100, 130]]), [{
        obj: mockData.objects[0],
        collisionPoint: [160, 100, 151],
        newPos: [150, 100, 151]
    }]);

    t.deepEqual(testCollision.getCollisions([[10, 100, 149], [190, 100, 101]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 125],
        newPos: [99, 100, 101]
    }]);
});

test('single wall, single collision with end point on the edge', function(t) {
    t.plan(1);

    t.deepEqual(testCollision.getCollisions([[140, 100, 90], [150, 100, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 99],
        newPos: [150, 100, 99]
    }]);
});

test('single wall, double collisions on opposite sides', function(t) {
    t.plan(4);

    t.deepEqual(testCollision.getCollisions([[170, 100, 90], [100, 100, 160]]), [{
        obj: mockData.objects[0],
        collisionPoint: [160, 100, 99],
        newPos: [100, 100, 99]
    }]);

    t.deepEqual(testCollision.getCollisions([[250, 100, 150], [50, 100, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [201, 100, 137.5],
        newPos: [201, 100, 100]
    }]);

    t.deepEqual(testCollision.getCollisions([[175, 100, 200], [100, 100, 50]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 151],
        newPos: [100, 100, 151]
    }]);

    t.deepEqual(testCollision.getCollisions([[50, 100, 150], [250, 100, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 137.5],
        newPos: [99, 100, 100]
    }]);
});

test('single wall, double collisions on adjacent sides', function(t) {
    t.plan(1);

    t.deepEqual(testCollision.getCollisions([[100, 100, 75], [250, 100, 150]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 100, 99],
        newPos: [250, 100, 99]
    }]);

    // todo other sides
});

test('single wall, double collisions on corners', function(t) {
    t.plan(5);

    // < 45deg
    t.deepEqual(testCollision.getCollisions([[95, 100, 90], [105, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 99],
        newPos: [105, 100, 99]
    }]);

    // > 45deg
    t.deepEqual(testCollision.getCollisions([[90, 100, 95], [110, 100, 105]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 99],
        newPos: [99, 100, 105]
    }]);

    // == 45deg
    t.deepEqual(testCollision.getCollisions([[90, 100, 90], [110, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 99],
        newPos: [99, 100, 110]
    }]);

    // slide corner (no collision)
    t.deepEqual(testCollision.getCollisions([[110, 100, 90], [90, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [100, 100, 99],
        newPos: [90, 100, 99]
    }]);

    // slide one side
    t.deepEqual(testCollision.getCollisions([[90, 100, 110], [110, 100, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 100, 110],
        newPos: [99, 100, 110]
    }]);

    // todo other corners
});

test('two walls, rebound collision', function(t) {
    t.plan(2);

    t.deepEqual(testCollision.getCollisions([[700, 100, 400], [1000, 100, 600]]), [
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

    t.deepEqual(testCollision.getCollisions([[700, 100, 700], [1000, 100, 500]]), [{
            obj: mockData.objects[1],
            collisionPoint: [850, 100, 601],
            newPos: [1000, 100, 601]
    }]);
});

test('two walls, corner case', function(t) {
    t.plan(2);

    t.deepEqual(testCollision.getCollisions([[950, 100, 650], [1050, 100, 550]]), [{
        obj: mockData.objects[2],
        collisionPoint: [1000, 100, 601],
        newPos: [1050, 100, 601]
    }]);

    t.deepEqual(testCollision.getCollisions([[1050, 100, 650], [950, 100, 550]]), [{
        obj: mockData.objects[1],
        collisionPoint: [1000, 100, 601],
        newPos: [950, 100, 601]
    }]);
});

test('three walls', function(t) {
    t.plan(3);

    t.deepEqual(testCollision.getCollisions([[900, 100, 650], [1100, 100, 550]]), [
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

    t.deepEqual(testCollision.getCollisions([[1000, 100, 950], [1200, 100, 450]]), [
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

    t.deepEqual(testCollision.getCollisions([[1000, 100, 650], [1200, 100, 550]]), [{
        obj: mockData.objects[3],
        collisionPoint: [1099, 100, 601],
        newPos: [1099, 100, 601]
    }]);
});
