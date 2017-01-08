import styles from './settings.css';

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreators';
import Loop from '../../lib/loop';
import {
    XBOX_STICK_LEFT_AXIS_Y,
    XBOX_STICK_RIGHT_AXIS_X
} from '../../constants/constants';

class Settings extends React.Component {
    static contextTypes = {
        controls: PropTypes.object.isRequired
    };

    static propTypes = {
        settings: PropTypes.object.isRequired,
        gamepadState: PropTypes.number.isRequired,
        setVolume: PropTypes.func.isRequired,
        setMouseSensitivity: PropTypes.func.isRequired,
        setStickSensitivity: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new Loop(this.loopCallback.bind(this));

        this.onVolumeChange = this.onVolumeChange.bind(this);
        this.onMouseSensChange = this.onMouseSensChange.bind(this);
        this.onStickSensChange = this.onStickSensChange.bind(this);

        this.state = {
            itemActive: 0,
            items: [
                {
                    id: 'soundVolume',
                    index: 0,
                    label: 'Sound volume',
                    min: 0,
                    max: 1,
                    step: 0.2,
                    onChange: this.onVolumeChange,
                    action: this.props.setVolume
                },
                {
                    id: 'mouseSensitivity',
                    index: 1,
                    label: 'Mouse sensitivity',
                    min: 0,
                    max: 2,
                    step: 0.5,
                    onChange: this.onMouseSensChange,
                    action: this.props.setMouseSensitivity
                },
                {
                    id: 'stickSensitivity',
                    index: 2,
                    label: 'Stick sensitivity',
                    min: 0,
                    max: 4,
                    step: 0.5,
                    onChange: this.onStickSensChange,
                    action: this.props.setStickSensitivity
                }
            ]
        };
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
    }

    render() {
        const { items } = this.state;
        const { gamepadState } = this.props;
        return <div className={styles.root}>
            {this.renderItem(items[0])}
            {this.renderItem(items[1])}
            {gamepadState !== -1 ? this.renderItem(items[2]) : ''}
        </div>;
    }

    renderItem(item) {
        const { itemActive } = this.state;
        const { settings } = this.props;
        return <div className={styles.item + (itemActive === item.index ? ' ' + styles.itemActive : '')}>
            <label className={styles.label} htmlFor={item.id}>
                {item.label}
            </label>
            <input
                className={[styles.range, styles.input].join(' ')}
                type='range'
                min={item.min}
                max={item.max}
                step={item.step}
                id={item.id}
                value={settings[item.id]}
                onChange={item.onChange}
                onFocus={this.setActiveItem.bind(this, item.index)}
            />
            <output className={styles.output}>{settings[item.id]}</output>
        </div>
    }

    loopCallback() {
        // gamepad
        const gamepadStickLeftMoved = this.getGamepadLeftStickMove();
        const gamepadStickRightMoved = this.getGamepadRightStickMove();
        if (gamepadStickLeftMoved === -1) {
            this.setState({ itemActive: Math.max(0, this.state.itemActive - 1) });
        } else if (gamepadStickLeftMoved === 1) {
            this.setState({ itemActive: Math.min(this.state.items.length - 1, this.state.itemActive + 1) });
        }
        const curItem = this.state.items[this.state.itemActive];
        if (gamepadStickRightMoved === 1) {
            curItem.action(Settings.round(
                Math.min(curItem.max, Math.max(curItem.min, this.props.settings[curItem.id] + curItem.step))
            ));
        }
        if (gamepadStickRightMoved === -1) {
            curItem.action(Settings.round(
                Math.min(curItem.max, Math.max(curItem.min, this.props.settings[curItem.id] - curItem.step))
            ));
        }
    }

    onVolumeChange(event) {
        this.props.setVolume(event.target.value);
    }

    onMouseSensChange(event) {
        this.props.setMouseSensitivity(event.target.value);
    }

    onStickSensChange(event) {
        this.props.setStickSensitivity(event.target.value);
    }

    setActiveItem(id) {
        this.setState({ itemActive: id });
    }

    getGamepadLeftStickMove() {
        if (this.context.controls.gamepadAxesUnit[XBOX_STICK_LEFT_AXIS_Y][0] === 1) {
            return this.context.controls.gamepadAxesUnit[XBOX_STICK_LEFT_AXIS_Y][2];
        }
        return 0;
    }

    getGamepadRightStickMove() {
        if (this.context.controls.gamepadAxesUnit[XBOX_STICK_RIGHT_AXIS_X][0] === 1) {
            return this.context.controls.gamepadAxesUnit[XBOX_STICK_RIGHT_AXIS_X][2];
        }
        return 0;
    }

    static round(value) {
        return Math.round(value * 10) / 10;
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings,
        gamepadState: state.gamepad.state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setVolume: actionCreators.settings.setVolume,
        setMouseSensitivity: actionCreators.settings.setMouseSensitivity,
        setStickSensitivity: actionCreators.settings.setStickSensitivity
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
