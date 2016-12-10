import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Viewport extends React.Component {
    static propTypes = {
        toggleKeyPressed: PropTypes.func.isRequired,
        updatePointerDelta: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.viewportNode = null;
        this.pointerLocked = false;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.requestPointerLock = this.requestPointerLock.bind(this);
        this.onPointerLockChange = this.onPointerLockChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener('pointerlockchange', this.onPointerLockChange);
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('pointerlockchange', this.onPointerLockChange);
        document.exitPointerLock();
        document.removeEventListener('keyup', this.onKeyUp);
        document.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
        return <div className="viewport"
            onClick={this.requestPointerLock}
            onMouseMove={this.onMouseMove}
            ref={viewportNode => { this.viewportNode = viewportNode; }}
        >
            {this.props.children}
        </div>
    }

    onKeyDown(event) {
        this.props.toggleKeyPressed(event.keyCode, true);
    }

    onKeyUp(event) {
        this.props.toggleKeyPressed(event.keyCode, false);
    }

    onMouseMove(event) {
        if (this.pointerLocked) {
            this.props.updatePointerDelta(-event.nativeEvent.movementX, -event.nativeEvent.movementY);
        }
    }

    requestPointerLock(event) {
        event.currentTarget.requestPointerLock();
    }

    onPointerLockChange() {
        this.pointerLocked = document.pointerLockElement === this.viewportNode;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleKeyPressed(keyCode, on) {
            return {
                type: 'toggleKeyPressed',
                keyCode, on
            }
        },
        updatePointerDelta(x, y) {
            return {
                type: 'updatePointerDelta',
                x, y
            }
        }
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        keyPressed: state.keyPressed
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);
