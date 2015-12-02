export default {
    boundaries: [[0, 5000], null, [0, 5000]],
    player: [[0, 350, 0], [0, 0, 0]],
    objects: [
        {
            type: 'plain',
            size: [5000, 5000],
            pos: [-2500, 0, -2500],
            angle: [90, 0, 0],
            background: '#cfa'
        },
        {
            type: 'wall',
            size: [700, 700, 100],
            pos: [-2500, 0, -2500],
            angle: [0, 0, 0]
        },
        {
            type: 'tree',
            size: [100, 400],
            pos: [-1200, 0, -2500],
            angle: [0, 0, 0]
        }
    ]
};
