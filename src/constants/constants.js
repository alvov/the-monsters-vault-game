export const GAME_VERSION = '1.1.0-alpha';

export const FPS = 60;
export const BROAD_CELL_SIZE = 250;
export const SPOTLIGHT_RADIUS = 1.5 * BROAD_CELL_SIZE;

export const KEY_FORWARD = 'KeyW';
export const KEY_BACKWARD = 'KeyS';
export const KEY_LEFT = 'KeyA';
export const KEY_RIGHT = 'KeyD';
export const KEY_INTERACT = 'KeyE';
export const KEY_QUIT_GAME = 'KeyQ';
export const KEY_RUN = 'ShiftLeft';
export const KEY_BACK = 'Escape';
export const KEY_ENTER = 'Enter';

export const XBOX_BUTTON_A = 0;
export const XBOX_BUTTON_X = 2;
export const XBOX_BUTTON_B = 1;
export const XBOX_BUTTON_CROSS_UP = 11;
export const XBOX_BUTTON_CROSS_DOWN = 12;
export const XBOX_BUTTON_BACK = 9;
export const XBOX_STICK_LEFT_AXIS_X = 0;
export const XBOX_STICK_LEFT_AXIS_Y = 1;
export const XBOX_STICK_RIGHT_AXIS_X = 3;
export const XBOX_STICK_RIGHT_AXIS_Y = 4;
export const XBOX_TRIGGER_RIGHT_AXIS = 5;

export const CONTROL_STATE = {
    UNUSED: 0,
    FIRST_TIME_DOWN: 1,
    DOWN: 2
};

export const PLAYER_SPEED = 4;
export const PLAYER_RUNNING_COEFF = 1.5;
export const PLAYER_HAND_LENGTH = 150;
export const PLAYER_STATE_RUN = 'run';
export const PLAYER_STATE_WALK = 'walk';
export const PLAYER_STATE_STOP = 'stop';

export const HINT_SHOW_TIME = 5000;
export const DOOR_OPEN_TIME = 3000;

export const ENEMY_STATE = {
    LIMBO: 'limbo',
    WANDER: 'wander',
    STOP: 'stop',
    ATTACK: 'attack'
};
export const ENEMY_SPEED = 1.5;
export const ENEMY_SPEED_RUNNING = 6;
export const ENEMY_ATTACK_DISTANCE = 400;
export const ENEMY_ATTACK_DISTANCE_VISIBLE = 600;
export const ENEMY_KILL_DISTANCE = 100;
export const ENEMY_VIEW_ANGLE_DEG = 120;
export const ENEMY_VIEW_ANGLE_RAD = ENEMY_VIEW_ANGLE_DEG / 180 * Math.PI;
export const ENEMY_TARGET_REACH_THRESHOLD = 50;
export const ENEMY_CHANGE_TARGET_TIME = 1000;

export const PAINTING_TYPE = 'painting';
export const FLOOR_TYPE = 'floor';
export const CEILING_TYPE = 'ceiling';
export const WALL_TYPE = 'wall';
export const BOX_TYPE = 'box';
export const SWITCHER_TYPE = 'switcher';
export const DOOR_TYPE = 'door';

export const DOOR_STATE_OPEN = 'open';
export const DOOR_STATE_OPENING = 'opening';
export const DOOR_STATE_CLOSE = 'close';
export const DOOR_STATE_CLOSING = 'closing';

export const GAME_STATE_LOADING = 'loading';
export const GAME_STATE_START = 'start';
export const GAME_STATE_PLAY = 'play';
export const GAME_STATE_WIN = 'win';
export const GAME_STATE_LOOSE = 'loose';

export const GRAPHICS_QUALITY = {
    LOW: 0,
    NORMAL: 1,
    ULTRA: 2
};
