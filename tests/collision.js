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
        { coords2d: [[100, 100], [200, 100], [200, 150], [100, 150]] },

        { coords2d: [[500, 500], [1000, 500], [1000, 600], [500, 600]] },
        { coords2d: [[1000, 300], [1100, 300], [1100, 600], [1000, 600]] },
        { coords2d: [[1100, 500], [1300, 500], [1300, 600], [1100, 600]] },
        { coords2d: [[1100, 600], [1200, 600], [1200, 800], [1100, 800]] }
    ]
};
const testCollision = new Collision(mockData);

test('no collision', function(t) {
    t.plan(1);

    t.deepEqual(testCollision.getCollisions([[10, 10], [99, 99]]), [{
        newPos: [99, 99]
    }]);
});

test('single wall, single collision', function(t) {
    t.plan(4);

    t.deepEqual(testCollision.getCollisions([[140, 90], [160, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 99],
        newPos: [160, 99]
    }]);

    t.deepEqual(testCollision.getCollisions([[250, 120], [150, 130]]), [{
        obj: mockData.objects[0],
        collisionPoint: [201, 125],
        newPos: [201, 130]
    }]);

    t.deepEqual(testCollision.getCollisions([[170, 170], [150, 130]]), [{
        obj: mockData.objects[0],
        collisionPoint: [160, 151],
        newPos: [150, 151]
    }]);

    t.deepEqual(testCollision.getCollisions([[10, 149], [190, 101]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 125],
        newPos: [99, 101]
    }]);
});

test('single wall, single collision with end point on the edge', function(t) {
    t.plan(1);

    t.deepEqual(testCollision.getCollisions([[140, 90], [150, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 99],
        newPos: [150, 99]
    }]);
});

test('single wall, double collisions on opposite sides', function(t) {
    t.plan(4);

    t.deepEqual(testCollision.getCollisions([[170, 90], [100, 160]]), [{
        obj: mockData.objects[0],
        collisionPoint: [160, 99],
        newPos: [100, 99]
    }]);

    t.deepEqual(testCollision.getCollisions([[250, 150], [50, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [201, 137.5],
        newPos: [201, 100]
    }]);

    t.deepEqual(testCollision.getCollisions([[175, 200], [100, 50]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 151],
        newPos: [100, 151]
    }]);

    t.deepEqual(testCollision.getCollisions([[50, 150], [250, 100]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 137.5],
        newPos: [99, 100]
    }]);
});

test('single wall, double collisions on adjacent sides', function(t) {
    t.plan(1);

    t.deepEqual(testCollision.getCollisions([[100, 75], [250, 150]]), [{
        obj: mockData.objects[0],
        collisionPoint: [150, 99],
        newPos: [250, 99]
    }]);

    // todo other sides
});

test('single wall, double collisions on corners', function(t) {
    t.plan(5);

    // < 45deg
    t.deepEqual(testCollision.getCollisions([[95, 90], [105, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 99],
        newPos: [105, 99]
    }]);

    // > 45deg
    t.deepEqual(testCollision.getCollisions([[90, 95], [110, 105]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 99],
        newPos: [99, 105]
    }]);

    // == 45deg
    t.deepEqual(testCollision.getCollisions([[90, 90], [110, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 99],
        newPos: [99, 110]
    }]);

    // slide corner (no collision)
    t.deepEqual(testCollision.getCollisions([[110, 90], [90, 110]]), [{
        newPos: [90, 110]
    }]);

    // slide one side
    t.deepEqual(testCollision.getCollisions([[90, 110], [110, 110]]), [{
        obj: mockData.objects[0],
        collisionPoint: [99, 110],
        newPos: [99, 110]
    }]);

    // todo other corners
});

test('two walls, rebound collision', function(t) {
    t.plan(2);

    t.deepEqual(testCollision.getCollisions([[700, 400], [1000, 600]]), [
        {
            obj: mockData.objects[1],
            collisionPoint: [850, 499],
            newPos: [1000, 499]
        },
        {
            obj: mockData.objects[2],
            collisionPoint: [999, 499],
            newPos: [999, 499]
        }
    ]);

    t.deepEqual(testCollision.getCollisions([[700, 700], [1000, 500]]), [{
            obj: mockData.objects[1],
            collisionPoint: [850, 601],
            newPos: [1000, 601]
    }]);
});

test('two walls, corner case', function(t) {
    t.plan(2);

    t.deepEqual(testCollision.getCollisions([[950, 650], [1050, 550]]), [{
        obj: mockData.objects[2],
        collisionPoint: [1000, 601],
        newPos: [1050, 601]
    }]);

    t.deepEqual(testCollision.getCollisions([[1050, 650], [950, 550]]), [{
        obj: mockData.objects[1],
        collisionPoint: [1000, 601],
        newPos: [950, 601]
    }]);
});

test('three walls', function(t) {
    t.plan(3);

    t.deepEqual(testCollision.getCollisions([[900, 650], [1100, 550]]), [
        {
            obj: mockData.objects[2],
            collisionPoint: [1000, 601],
            newPos: [1100, 601]
        },
        {
            obj: mockData.objects[4],
            collisionPoint: [1099, 601],
            newPos: [1099, 601]
        }
    ]);

    t.deepEqual(testCollision.getCollisions([[1000, 950], [1200, 450]]), [
        {
            obj: mockData.objects[4],
            collisionPoint: [1099, 700],
            newPos: [1099, 450]
        },
        {
            obj: mockData.objects[2],
            collisionPoint: [1099, 601],
            newPos: [1099, 601]
        }
    ]);

    t.deepEqual(testCollision.getCollisions([[1000, 650], [1200, 550]]), [{
        obj: mockData.objects[3],
        collisionPoint: [1099, 601],
        newPos: [1099, 601]
    }]);
});
