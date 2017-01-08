import styles from './viewport.css';

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreators';

class Viewport extends React.Component {
    static propTypes = {
        updatePointerDelta: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.viewportNode = null;
        this.pointerLocked = false;

        this.onMouseMove = this.onMouseMove.bind(this);
        this.requestPointerLock = this.requestPointerLock.bind(this);
        this.onPointerLockChange = this.onPointerLockChange.bind(this);
    }

    componentDidMount() {
        this.viewportNode.requestPointerLock();
        document.addEventListener('pointerlockchange', this.onPointerLockChange);
    }

    componentWillUnmount() {
        document.removeEventListener('pointerlockchange', this.onPointerLockChange);
        document.exitPointerLock();
    }

    render() {
        return <div className={styles.root}
            onMouseMove={this.onMouseMove}
            onClick={this.requestPointerLock}
            ref={viewportNode => { this.viewportNode = viewportNode; }}
        >
            {this.props.children}
        </div>
    }

    onMouseMove(event) {
        if (this.pointerLocked) {
            this.props.updatePointerDelta(-event.nativeEvent.movementX, -event.nativeEvent.movementY);
        }
    }

    requestPointerLock() {
        this.viewportNode.requestPointerLock();
    }

    onPointerLockChange() {
        this.pointerLocked = document.pointerLockElement === this.viewportNode;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updatePointerDelta: actionCreators.game.updatePointerDelta
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Viewport);
