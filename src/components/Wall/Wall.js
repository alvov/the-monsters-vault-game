import React from 'react';
import Plain from '../plain/plain';

// no support for rotated walls for now
class Wall extends React.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = props.getTransformRule({ pos: this.posWithInvertedY });
        this.background = 'url(src/components/wall/wall.jpg) 50% 50% / cover';
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { size, playerPos, getTransformRule } = this.props;

        // Front-Back-Left-Right
        return <div className="wall obj" style={this.styleRules}>
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
        </div>;
    }
}

export default Wall;
