import {
    PAINTING_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE
} from '../constants/constants';

const CANVAS_SCALE = 10;

/**
 * Returns the canvas node with a drawn map of the current level
 * @param {Cell[]} cells
 * @param {Object} level
 * @returns {Element}
 */
export default function getLevelCanvas(cells, level) {
    const canvasNode = document.createElement('canvas');
    canvasNode.width = level.boundaries[0] / CANVAS_SCALE;
    canvasNode.height = level.boundaries[2] / CANVAS_SCALE;
    const ctx = canvasNode.getContext('2d');

    cells.forEach(cell => {
        if (cell.state === 2) {
            ctx.fillStyle = '#dbffdb';
        } else if (cell.state === 1) {
            ctx.fillStyle = '#ffdde2';
        } else {
            ctx.fillStyle = '#fff';
        }
        ctx.fillRect(
            cell.column * 500 / CANVAS_SCALE,
            cell.row * 500 / CANVAS_SCALE,
            500 / CANVAS_SCALE,
            500 / CANVAS_SCALE
        );
    });
    JSON.parse(level.objects).forEach(obj => {
        ctx.font = '14px sans-serif';
        switch (obj.type) {
            case WALL_TYPE:
                if (obj.props.mode === 2) {
                    ctx.strokeStyle = '#ff655b';
                } else if (obj.props.mode === 3) {
                    ctx.strokeStyle = '#804f36';
                } else {
                    ctx.strokeStyle = '#000';
                }
                ctx.beginPath();
                ctx.rect(
                    (obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE,
                    (obj.pos[2] - obj.size[2] / 2) / CANVAS_SCALE,
                    obj.size[0] / CANVAS_SCALE,
                    obj.size[2] / CANVAS_SCALE
                );
                ctx.stroke();
                ctx.strokeStyle = '#000';
                // ctx.fillStyle = '#aacbff';
                // ctx.fillText(i, obj.pos[0] / CANVAS_SCALE, obj.pos[2] / CANVAS_SCALE);
                break;
            case DOOR_TYPE:
                ctx.fillStyle = '#d4d4d4';
                ctx.fillRect(
                    (obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE,
                    (obj.pos[2] - obj.size[2] / 2) / CANVAS_SCALE,
                    obj.size[0] / CANVAS_SCALE,
                    obj.size[2] / CANVAS_SCALE
                );
                ctx.fillStyle = '#000';
                ctx.fillText(obj.props.id, obj.pos[0] / CANVAS_SCALE, obj.pos[2] / CANVAS_SCALE);
                break;
            case SWITCHER_TYPE:
                ctx.fillStyle = '#d6a372';
                ctx.fillRect(
                    (obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE,
                    (obj.pos[2] - obj.size[0] / 2) / CANVAS_SCALE,
                    obj.size[0] / CANVAS_SCALE,
                    obj.size[0] / CANVAS_SCALE
                );
                ctx.fillText(
                    obj.props.id,
                    obj.pos[0] / CANVAS_SCALE,
                    obj.pos[2] / CANVAS_SCALE
                );
                break;
            case PAINTING_TYPE:
                ctx.fillStyle = '#b33fac';
                ctx.fillRect(
                    (obj.pos[0] - 25) / CANVAS_SCALE,
                    (obj.pos[2] - 25) / CANVAS_SCALE,
                    50 / CANVAS_SCALE,
                    50 / CANVAS_SCALE
                );
                break;
            case BOX_TYPE:
                if (obj.props.triggerDoorId) {
                    ctx.fillStyle = '#8a5252';
                } else {
                    ctx.fillStyle = '#7b8a7b';
                }
                ctx.fillRect(
                    (obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE,
                    (obj.pos[2] - obj.size[2] / 2) / CANVAS_SCALE,
                    obj.size[0] / CANVAS_SCALE,
                    obj.size[2] / CANVAS_SCALE
                );
                ctx.fillStyle = '#fff';
                ctx.font = '6px sans-serif';
                ctx.fillText(
                    `${obj.props.mode}${obj.props.inhabited}`,
                    obj.pos[0] / CANVAS_SCALE,
                    obj.pos[2] / CANVAS_SCALE
                );
                break;
        }
    });
    // player
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.fillRect(
        (level.player.pos[0] - level.player.size[0] / 2) / CANVAS_SCALE,
        (level.player.pos[2] - level.player.size[2] / 2) / CANVAS_SCALE,
        level.player.size[0] / CANVAS_SCALE,
        level.player.size[2] / CANVAS_SCALE
    );
    if (level.player.angle[0] === 0) {
        ctx.fillRect(
            level.player.pos[0] / CANVAS_SCALE - 1,
            level.player.pos[2] / CANVAS_SCALE - 20,
            2,
            20
        );
    } else if (level.player.angle[0] === 180) {
        ctx.fillRect(
            level.player.pos[0] / CANVAS_SCALE - 1,
            level.player.pos[2] / CANVAS_SCALE,
            2,
            20
        );
    } else if (level.player.angle[0] === -90) {
        ctx.fillRect(
            level.player.pos[0] / CANVAS_SCALE - 20,
            level.player.pos[2] / CANVAS_SCALE - 1,
            20,
            2
        );
    } else if (level.player.angle[0] === 90) {
        ctx.fillRect(
            level.player.pos[0] / CANVAS_SCALE,
            level.player.pos[2] / CANVAS_SCALE - 1,
            20,
            2
        );
    }

    return canvasNode;
}
