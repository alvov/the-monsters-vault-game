webpackJsonp([1],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(35);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(19);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __WEBPACK_IMPORTED_MODULE_1_redux__ && __WEBPACK_IMPORTED_MODULE_1_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_1_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level_level__ = __webpack_require__(106);




	// fix lack of default parameters support in webpack 2
	const level = __WEBPACK_IMPORTED_MODULE_2__level_level__["a" /* default */];

	function viewAngle(state = level.player.angle, action) {
	    switch (action.type) {
	        case 'updateViewAngle':
	            let viewAngle = [state[0] - action.pointerDelta.x * __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* SENSITIVITY */], Math.min(Math.max(state[1] + action.pointerDelta.y * __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* SENSITIVITY */], -90), 90), 0];
	            viewAngle[0] %= 360;
	            return viewAngle;
	        default:
	            return state;
	    }
	}

	function position(state = level.player.pos, action) {
	    switch (action.type) {
	        case 'updatePos':
	            let newPos = [];
	            for (let i = 0; i < 3; i++) {
	                let newAxisPos = state[i] + action.shift[i];
	                if (level.boundaries[i]) {
	                    newAxisPos = Math.min(Math.max(newAxisPos, 0), level.boundaries[i]);
	                }
	                newPos.push(newAxisPos);
	            }
	            const collision = level.getCollision([[state[0], state[2]], [newPos[0], newPos[2]]]);
	            return [collision.newPos[0], newPos[1], collision.newPos[1]];
	        default:
	            return state;
	    }
	}

	function objects(state = level.objects, action) {
	    switch (action.type) {
	        default:
	            return state;
	    }
	}

	/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
	    viewAngle,
	    pos: position,
	    objects
	});

/***/ },

/***/ 101:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(37);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall_Wall__ = __webpack_require__(104);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_Larch__ = __webpack_require__(103);
	__webpack_require__(24);
	__webpack_require__(109);






	var Scene = ({ pos, objects, getTransformRule }) => {
	    var transformRule = getTransformRule({
	        pos: [-pos[0], pos[1], -pos[2]]
	    });
	    var renderedObjects = objects.map((object, i) => {
	        switch (object.type) {
	            case 'plain':
	                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                    key: i,
	                    pos: object.pos,
	                    size: [object.size[0], object.size[2]],
	                    angle: object.angle,
	                    background: object.background,
	                    getTransformRule: getTransformRule
	                });
	            case 'wall':
	                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__wall_Wall__["a" /* default */], { key: i, pos: object.pos, size: object.size, angle: object.angle, getTransformRule: getTransformRule });
	            case 'larch':
	                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__tree_Larch__["a" /* default */], { key: i, pos: object.pos, size: object.size, angle: object.angle, getTransformRule: getTransformRule });
	            default:
	                return '';
	        }
	    });
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'scene obj', style: transformRule },
	        renderedObjects
	    );
	};
	Scene.propTypes = {
	    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number),
	    viewAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number),
	    getTransformRule: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
	};

	/* harmony default export */ exports["a"] = Scene;

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(37);
	__webpack_require__(24);




	/* harmony default export */ exports["a"] = ({ pos, size, angle, getTransformRule }) => {
	    const stemBg = '#816b5e';
	    const crownBg = 'rgba(66, 139, 65, 0.7)';
	    const crownSize = size[1] * 2;
	    const transformRule = getTransformRule({ pos, angle });
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'obj', style: transformRule },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [0, -size[1] / 2, 0], size: size, angle: [0, 0, 0], background: stemBg, getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [0, -size[1] / 2, 0], size: size, angle: [0, -90, 0], background: stemBg, getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1] - crownSize / 2, 0], size: [crownSize, crownSize], angle: [0, 10, 0], background: crownBg,
	            getTransformRule: getTransformRule
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1] - crownSize / 2, 0], size: [crownSize, crownSize], angle: [0, -40, 0], background: crownBg,
	            getTransformRule: getTransformRule
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1] - crownSize / 2, 0], size: [crownSize, crownSize], angle: [0, 100, 0], background: crownBg,
	            getTransformRule: getTransformRule
	        })
	    );
	};

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(37);
	__webpack_require__(24);
	__webpack_require__(110);




	/* harmony default export */ exports["a"] = ({ pos, size, angle = [0, 0, 0], getTransformRule }) => {
	    const transformRule = getTransformRule({ pos, angle });
	    // Front-Back-Left-Right-Top-Bottom
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'obj wall', style: transformRule },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [0, -size[1] / 2, size[2] / 2], size: size, angle: [0, 0, 0], getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [0, -size[1] / 2, -size[2] / 2], size: size, angle: [0, 0, 0], getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [-size[0] / 2, -size[1] / 2, 0], size: [size[2], size[1]], angle: [0, 90, 0], getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [size[0] / 2, -size[1] / 2, 0], size: [size[2], size[1]], angle: [0, -90, 0], getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [0, -size[1], 0], size: [size[0], size[2]], angle: [90, 0, 0], getTransformRule: getTransformRule }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], { pos: [0, 0, 0], size: [size[0], size[2]], angle: [-90, 0, 0], getTransformRule: getTransformRule })
	    );
	};

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(35);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __WEBPACK_IMPORTED_MODULE_1_react__ && __WEBPACK_IMPORTED_MODULE_1_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_react___default, 'a', __WEBPACK_IMPORTED_MODULE_1_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(36);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __WEBPACK_IMPORTED_MODULE_2_react_dom__ && __WEBPACK_IMPORTED_MODULE_2_react_dom__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_react_dom__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_react_dom__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_2_react_dom___default, 'a', __WEBPACK_IMPORTED_MODULE_2_react_dom___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(19);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __WEBPACK_IMPORTED_MODULE_3_redux__ && __WEBPACK_IMPORTED_MODULE_3_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_3_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_3_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __WEBPACK_IMPORTED_MODULE_4_react_redux__ && __WEBPACK_IMPORTED_MODULE_4_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_react_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_4_react_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_4_react_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_Controls__ = __webpack_require__(98);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_Loop__ = __webpack_require__(99);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Camera__ = __webpack_require__(97);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers__ = __webpack_require__(100);
	__webpack_require__(101);











	var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_8__reducers__["a" /* default */]);

	var controls = new __WEBPACK_IMPORTED_MODULE_5__lib_Controls__["a" /* default */]();

	new __WEBPACK_IMPORTED_MODULE_6__lib_Loop__["a" /* default */](frameRateCoefficient => {
	    const pointerDelta = controls.getPointerDelta();
	    if (pointerDelta.x || pointerDelta.y) {
	        store.dispatch({
	            type: 'updateViewAngle',
	            pointerDelta
	        });
	    }

	    let angleShift = [];
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]]) {
	        angleShift.push(Math.PI);
	    }
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_S */]]) {
	        angleShift.push(0);
	    }
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_A */]]) {
	        angleShift.push(Math.PI / 2);
	    }
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* KEY_D */]]) {
	        // hack for angles sum
	        if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]]) {
	            angleShift.push(3 * Math.PI / 2);
	        } else {
	            angleShift.push(-Math.PI / 2);
	        }
	    }
	    if (angleShift.length) {
	        let reducedAngleShift = 0;
	        for (let i = 0; i < angleShift.length; i++) {
	            reducedAngleShift += angleShift[i];
	        }
	        reducedAngleShift /= angleShift.length;

	        // convert to radians and add
	        reducedAngleShift += store.getState().viewAngle[0] * Math.PI / 180;

	        let step = frameRateCoefficient * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* STEP */];
	        store.dispatch({
	            type: 'updatePos',
	            shift: [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)]
	        });
	    }
	}, __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* FPS */], true);

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
	    { store: store },
	    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_Camera__["a" /* default */], null)
	), document.querySelector('.viewport'));

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_collision_js__ = __webpack_require__(107);


	const level = {
	    boundaries: [5000, null, 5000],
	    player: {
	        pos: [0, 100, 0],
	        angle: [135, 0, 0]
	    },
	    objects: [{
	        name: 'floor',
	        type: 'plain',
	        size: [5000, 0, 5000],
	        pos: [2500, 0, 2500],
	        angle: [90, 0, 0],
	        background: '#cfa',
	        collides: false
	    }, {
	        name: 'test wall',
	        type: 'wall',
	        size: [700, 200, 50],
	        pos: [1000, 0, 1000]
	    }, {
	        name: 'test tree',
	        type: 'larch',
	        size: [50, 100, 50],
	        pos: [1500, 0, 1500]
	    }]
	};

	// calculate 2d points coordinates for level objects
	for (let i = 0; i < level.objects.length; i++) {
	    const obj = level.objects[i];
	    // enlarge object for 1px each side to prevent "looking through walls"
	    const sizeX = obj.size[0] + 2;
	    const sizeZ = obj.size[2] + 2;
	    obj.coords2d = [[obj.pos[0] - sizeX / 2, obj.pos[2] - sizeZ / 2], [obj.pos[0] + sizeX / 2, obj.pos[2] - sizeZ / 2], [obj.pos[0] + sizeX / 2, obj.pos[2] + sizeZ / 2], [obj.pos[0] - sizeX / 2, obj.pos[2] + sizeZ / 2]];
	}

	/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_collision_js__["a" /* default */])(level, { broadCellSize: 500 });

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony export */ exports["a"] = collision;/**
	 * Returns distance between two points in 2d space
	 * @param {Array} point1 - coordinates of point 1
	 * @param {Array} point2 - coordinates of point 2
	 * @returns {number} - distance
	 */
	function getDistance(point1, point2) {
	    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
	}

	/**
	 * Returns an object with info about collision
	 * @param {Array} line2d - coordinates of initial and final player positions
	 * @param {Set} objectsSet - js set of objects
	 * @returns {{newPos: Array}} - object with info about collision
	 */
	function getCollision(line2d, objectsSet) {
	    let result = { newPos: line2d[1] };
	    // if (line2d[1][0] > 975 || t) {
	    //     debugger;
	    // }
	    // if moving line length is 0
	    if (line2d[0][0] === line2d[1][0] && line2d[0][1] === line2d[1][1]) {
	        return result;
	    }
	    const intersections = [];
	    // search for collisions with given objects
	    for (let obj of objectsSet) {
	        const lineIntersections = [];
	        for (let i = 0; i < 4; i++) {
	            // break, if we've already found maximum number of possible intersections
	            if (lineIntersections.length === 2) {
	                break;
	            }
	            const obstacleLine = [obj.coords2d[i], obj.coords2d[i < 3 ? i + 1 : 0]];
	            // check if obstacle line lies along axis X (has constant Z-coord)
	            if (obstacleLine[0][1] === obstacleLine[1][1]) {
	                const z = obstacleLine[0][1];
	                // check if line2d intersects with z-line
	                if ((line2d[0][1] - z) * (line2d[1][1] - z) > 0) {
	                    continue;
	                }
	                // check if line2d lies along obstacleLine
	                if (line2d[0][1] === z && line2d[1][1] === z) {
	                    continue;
	                }
	                // get x-coordinate
	                const x = (z - line2d[0][1]) * (line2d[0][1] - line2d[1][1]) / (line2d[0][0] - line2d[1][0]) + line2d[0][0];
	                // check if intersection point lies inside obstacleLine
	                if ((obstacleLine[0][0] - x) * (obstacleLine[1][0] - x) > 0) {
	                    continue;
	                }
	                lineIntersections.push({ x, z, i });
	                // positionAfterIntersection = [line2d[1][0], z];
	                // check if obstacle line lies along axis Z (has constant X-coord)
	            } else if (obstacleLine[0][0] === obstacleLine[1][0]) {
	                    const x = obstacleLine[0][0];
	                    // check if line2d intersects with x-line
	                    if ((line2d[0][0] - x) * (line2d[1][0] - x) > 0) {
	                        continue;
	                    }
	                    // check if line2d lies along obstacleLine
	                    if (line2d[0][0] === x && line2d[1][0] === x) {
	                        continue;
	                    }
	                    // get z-coordinate
	                    const z = (x - line2d[0][0]) * (line2d[0][0] - line2d[1][0]) / (line2d[0][1] - line2d[1][1]) + line2d[0][1];
	                    // check if intersection point lies inside obstacleLine
	                    if ((obstacleLine[0][1] - z) * (obstacleLine[1][1] - z) > 0) {
	                        continue;
	                    }
	                    lineIntersections.push({ x, z, i });
	                    // positionAfterIntersection = [x, line2d[1][1]];
	                }
	        }
	        if (lineIntersections.length === 1) {
	            // check if end position is inside object
	            if (line2d[1][0] >= obj.coords2d[0][0] && line2d[1][0] <= obj.coords2d[1][0] && line2d[1][1] >= obj.coords2d[0][1] && line2d[1][1] <= obj.coords2d[3][1]) {
	                intersections.push(Object.assign(lineIntersections[0], {
	                    obj,
	                    distanceFromPos: getDistance(line2d[0], [lineIntersections[0].x, lineIntersections[0].z])
	                }));
	            }
	        } else if (lineIntersections.length === 2) {
	            // check if initial position is in the corner
	            if (lineIntersections[0].x !== lineIntersections[1].x || lineIntersections[0].z !== lineIntersections[1].z) {
	                for (let j = 0; j < 2; j++) {
	                    lineIntersections[j].distanceFromPos = getDistance(line2d[0], [lineIntersections[j].x, lineIntersections[j].z]);
	                    intersections.push(Object.assign(lineIntersections[j], { obj }));
	                }
	            }
	        }
	    }
	    if (intersections.length) {
	        let minDistancePointIndex = null;
	        if (intersections.length === 1) {
	            minDistancePointIndex = 0;
	        } else {
	            let minDistance = Infinity;
	            for (let j = 0; j < intersections.length; j++) {
	                if (intersections[j].distanceFromPos < minDistance) {
	                    minDistance = intersections[j].distanceFromPos;
	                    minDistancePointIndex = j;
	                }
	            }
	        }
	        const intersectionPoint = intersections[minDistancePointIndex];
	        let positionAfterIntersection = null;
	        // if obstacle line lies along axis X (has constant Z-coord)
	        if (intersectionPoint.i === 0 || intersectionPoint.i === 2) {
	            positionAfterIntersection = [line2d[1][0], intersectionPoint.z];
	        } else {
	            positionAfterIntersection = [intersectionPoint.x, line2d[1][1]];
	        }
	        result = {
	            newPos: positionAfterIntersection
	        };
	    }
	    return result;
	}

	/**
	 * Gets closest cells and counts collisions with objects on them
	 * @param {number} broadCellSize - size for broad collision search cell
	 * @param {Array} broadCells - array of all broad cells
	 * @param {Array} line2d - coordinates of initial and final player positions
	 * @returns {{newPos: Array}} - object with info about collision
	 */
	function getCollisionWrapper(broadCellSize, broadCells, line2d) {
	    // get broad cells relative to players movement
	    const relativeBroadCells = [[Math.floor(line2d[0][0] / broadCellSize), Math.floor(line2d[0][1] / broadCellSize)], [Math.floor(line2d[1][0] / broadCellSize), Math.floor(line2d[1][1] / broadCellSize)]];
	    // if player moved to diagonal cell, include two adjacent cells
	    if (relativeBroadCells[0][0] !== relativeBroadCells[1][0] && relativeBroadCells[0][1] !== relativeBroadCells[1][1]) {
	        relativeBroadCells.push([relativeBroadCells[0][0], relativeBroadCells[1][1]], [relativeBroadCells[1][0], relativeBroadCells[0][1]]);
	    }
	    const objectsSet = new Set();
	    for (let i = 0; i < relativeBroadCells.length; i++) {
	        const broadCellObjects = broadCells[relativeBroadCells[i][1]][relativeBroadCells[i][0]].objects;
	        for (let j = 0; j < broadCellObjects.length; j++) {
	            objectsSet.add(broadCellObjects[j]);
	        }
	    }
	    return getCollision(line2d, objectsSet);
	}

	/**
	 * Links collision detection method to level object
	 * @param {Object} level - level description object
	 * @param {number} broadCellSize - size for broad collision search cell
	 * @returns {Object} - level description object with collision detection method
	 */
	function collision(level, { broadCellSize }) {
	    const broadCells = [];

	    let y = 0;
	    let j = 0;

	    do {
	        broadCells[j] = [];
	        let nextY = Math.min(y + broadCellSize, level.boundaries[2]);
	        let x = 0;
	        let i = 0;
	        do {
	            let nextX = Math.min(x + broadCellSize, level.boundaries[0]);
	            broadCells[j][i] = {
	                objects: [],
	                coords: [[x, y], [nextX, y], [nextX, nextY], [x, nextY]]
	            };
	            x = nextX;
	            i++;
	        } while (x < level.boundaries[0]);
	        y = nextY;
	        j++;
	    } while (y < level.boundaries[2]);

	    for (let k = 0; k < level.objects.length; k++) {
	        const obj = level.objects[k];
	        if (obj.collides === false) {
	            continue;
	        }
	        const topLeftCellX = Math.floor(obj.coords2d[0][0] / broadCellSize);
	        const topLeftCellZ = Math.floor(obj.coords2d[0][1] / broadCellSize);
	        const bottomRightCellX = Math.floor(obj.coords2d[2][0] / broadCellSize);
	        const bottomRightCellZ = Math.floor(obj.coords2d[2][1] / broadCellSize);
	        for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
	            for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
	                broadCells[j][i].objects.push(obj);
	            }
	        }
	    }

	    level.getCollision = getCollisionWrapper.bind(level, broadCellSize, broadCells);

	    return level;
	}

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AXIS = ['X', 'Y', 'Z'];

	/* harmony default export */ exports["a"] = {
	    getTransformRule(params) {
	        let transform = '';
	        if (params.pos) {
	            transform += `translate3d(${ params.pos[0] }px,${ params.pos[1] }px,${ params.pos[2] }px)`;
	        }
	        if (params.angle) {
	            for (let axis = 0; axis < params.angle.length; axis++) {
	                transform += ` rotate${ AXIS[axis] }(${ params.angle[axis] }deg)`;
	            }
	        }
	        return { transform };
	    }
	};

/***/ },

/***/ 109:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 110:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 24:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const FPS = 60;/* harmony export */ exports["g"] = FPS;
	const KEY_W = 87;/* harmony export */ exports["a"] = KEY_W;
	const KEY_S = 83;/* harmony export */ exports["b"] = KEY_S;
	const KEY_A = 65;/* harmony export */ exports["c"] = KEY_A;
	const KEY_D = 68;/* harmony export */ exports["d"] = KEY_D;
	const STEP = 4;/* harmony export */ exports["f"] = STEP;
	const SENSITIVITY = 0.5;/* harmony export */ exports["e"] = SENSITIVITY;

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	__webpack_require__(24);



	/* harmony default export */ exports["a"] = ({ pos, size, angle = [0, 0, 0], background, getTransformRule }) => {
	    const transformRule = getTransformRule({ pos, angle });
	    const sizeRule = {
	        width: size[0],
	        height: size[1],
	        margin: `-${ size[1] / 2 }px 0 0 -${ size[0] / 2 }px`
	    };
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'obj', style: _extends({}, transformRule, sizeRule, { background }) });
	};

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(23);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __WEBPACK_IMPORTED_MODULE_1_react_redux__ && __WEBPACK_IMPORTED_MODULE_1_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_react_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_1_react_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_scene_Scene__ = __webpack_require__(102);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(108);





	const Camera = ({ pos, viewAngle, objects }) => {
	    const transformRule = __WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* default */].getTransformRule({
	        pos: [0, 0, 600],
	        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
	    });
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'camera', style: transformRule },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_scene_Scene__["a" /* default */], { pos: pos, objects: objects, getTransformRule: __WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* default */].getTransformRule })
	    );
	};
	Camera.propTypes = {
	    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number),
	    viewAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number)
	};

	function select(state) {
	    return {
	        pos: state.pos,
	        viewAngle: state.viewAngle,
	        objects: state.objects
	    };
	}

	/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(select)(Camera);

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(35);


	class Controls {
	    constructor() {
	        this.keyPressed = {
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_S */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_A */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* KEY_D */]]: false
	        };
	        this.stack = new Set();
	        let lastCursorPos = null;
	        this.pointerDelta = { x: 0, y: 0 };

	        document.addEventListener('keydown', e => {
	            if (e.keyCode in this.keyPressed) {
	                this.keyPressed[e.keyCode] = true;
	                this.stack.add(e.keyCode);
	            }
	        });

	        document.addEventListener('keyup', e => {
	            if (e.keyCode in this.keyPressed) {
	                this.keyPressed[e.keyCode] = false;
	            }
	        });

	        document.addEventListener('mousemove', e => {
	            if (lastCursorPos) {
	                this.pointerDelta.x += lastCursorPos.x - e.clientX;
	                this.pointerDelta.y += lastCursorPos.y - e.clientY;
	            }
	            lastCursorPos = {
	                x: e.clientX,
	                y: e.clientY
	            };
	        });
	    }

	    getPointerDelta() {
	        const pointerDelta = this.pointerDelta;
	        this.pointerDelta = { x: 0, y: 0 };
	        return pointerDelta;
	    }
	}/* harmony export */ exports["a"] = Controls;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	class Loop {
	    constructor(fn = () => {}, fps = 60, startImmediately = false) {
	        this.fn = fn;
	        this.fps = fps;
	        this.oldTimestamp = null;
	        this.rafId = null;
	        if (startImmediately) {
	            this.start();
	        }
	    }

	    start(timestamp) {
	        this.rafId = window.requestAnimationFrame(this.start.bind(this));
	        let frameRateCoefficient = 1;
	        if (timestamp) {
	            if (this.oldTimestamp) {
	                frameRateCoefficient = (timestamp - this.oldTimestamp) * this.fps / 1000;
	            }
	            this.oldTimestamp = timestamp;
	        }
	        this.fn(frameRateCoefficient);
	    }

	    stop() {
	        window.cancelAnimationFrame(this.rafId);
	        this.rafId = null;
	    }
	}/* harmony export */ exports["a"] = Loop;

/***/ }

},[105]);