import React from 'react';
import Plain from '../plain/plain';

const backgrounds = ['src/components/box/box01.jpg', 'src/components/box/box02.jpg', 'src/components/box/box03.jpg'];

class Box extends React.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = props.getTransformRule({ pos: this.posWithInvertedY });
        this.background = `url(${backgrounds[props.mode - 1]}) 50% 50% / cover`;
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { pos, playerPos, size, getTransformRule } = this.props;

        // Front-Back-Left-Right-Top
        return <div className="box obj" style={this.styleRules}>
            <Plain
                pos={[0, 0, size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 0, 0]}
                getTransformRule={getTransformRule}
                background={this.background}
            />
            <Plain
                pos={[0, 0, -size[2] / 2]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={size}
                angle={[0, 180, 0]}
                getTransformRule={getTransformRule}
                background={this.background}
            />
            <Plain
                pos={[-size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, -90, 0]}
                getTransformRule={getTransformRule}
                background={this.background}
            />
            <Plain
                pos={[size[0] / 2, 0, 0]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[2], size[1]]}
                angle={[0, 90, 0]}
                getTransformRule={getTransformRule}
                background={this.background}
            />
            {playerPos[1] > pos[1] + size[1] / 2 ?
                <Plain
                    pos={[0, -size[1] / 2, 0]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[size[0], size[2]]}
                    angle={[90, 0, 0]}
                    getTransformRule={getTransformRule}
                    background={this.background}
                />
                : ''
            }
        </div>
    }
}

export default Box;
