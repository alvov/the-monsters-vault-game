import styles from './settings.css';

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreators';
import Loop from '../../lib/Loop';
import {
    XBOX_STICK_LEFT_AXIS_Y,
    XBOX_STICK_RIGHT_AXIS_X,
    GRAPHICS_QUALITY
} from '../../constants/constants';

class Settings extends React.Component {
    static propTypes = {
        settings: PropTypes.object.isRequired,
        gamepadState: PropTypes.number.isRequired,
        setVolume: PropTypes.func.isRequired,
        setMouseSensitivity: PropTypes.func.isRequired,
        setStickSensitivity: PropTypes.func.isRequired
    };
    static contextTypes = {
        controls: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new Loop(this.loopCallback.bind(this));

        this.onVolumeChange = this.onVolumeChange.bind(this);
        this.onGraphicsQualityChange = this.onGraphicsQualityChange.bind(this);
        this.onMouseSensChange = this.onMouseSensChange.bind(this);
        this.onStickSensChange = this.onStickSensChange.bind(this);

        this.state = {
            itemActive: 0
        };
        this.items = [
            {
                id: 'soundVolume',
                label: 'Sound volume',
                min: 0,
                max: 1,
                step: 0.2,
                onChange: this.onVolumeChange,
                action: this.props.setVolume
            },
            {
                id: 'graphicsQuality',
                label: 'Graphics quality',
                min: 0,
                max: 2,
                step: 1,
                onChange: this.onGraphicsQualityChange,
                action: this.props.setGraphicsQuality
            },
            {
                id: 'mouseSensitivity',
                label: 'Mouse sensitivity',
                min: 0,
                max: 2,
                step: 0.5,
                onChange: this.onMouseSensChange,
                action: this.props.setMouseSensitivity
            },
            {
                id: 'stickSensitivity',
                disabled: this.props.gamepadState === -1,
                label: 'Stick sensitivity',
                min: 0,
                max: 4,
                step: 0.5,
                onChange: this.onStickSensChange,
                action: this.props.setStickSensitivity
            }
        ];
    }

    componentWillUpdate(nextProps) {
        if (nextProps.gamepadState !== undefined) {
            this.items[3].disabled = nextProps.gamepadState === -1;
        }
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
    }

    render() {
        const { itemActive } = this.state;
        const { settings } = this.props;
        return <div className={styles.root}>
            {this.items.map((item, index) => {
                let value = settings[item.id];
                return <div
                    key={item.id}
                    className={
                        styles.item +
                        (itemActive === index ? ' ' + styles.itemActive : '') +
                        (item.disabled ? ' ' + styles.itemDisabled : '')
                    }
                >
                    <label className={styles.label} htmlFor={item.id}>
                        {item.label}
                    </label>
                    <div className={styles.inputContainer}>
                        <input
                            className={[styles.range, styles.input].join(' ')}
                            type='range'
                            min={item.min}
                            max={item.max}
                            step={item.step}
                            id={item.id}
                            value={value}
                            disabled={Boolean(item.disabled)}
                            onChange={item.onChange}
                            onFocus={this.setActiveItem.bind(this, index)}
                        />
                        {
                            item.id === 'graphicsQuality' && value === GRAPHICS_QUALITY.ULTRA
                                ? <div className={styles.warning}>may cause low fps</div>
                                : null
                        }
                    </div>
                    <output className={styles.output}>{value}</output>
                </div>;
            })}
        </div>;
    }

    loopCallback() {
        // gamepad
        const gamepadStickLeftMoved = this.getGamepadLeftStickMove();
        const gamepadStickRightMoved = this.getGamepadRightStickMove();
        if (gamepadStickLeftMoved === -1) {
            this.setState({ itemActive: Math.max(0, this.state.itemActive - 1) });
        } else if (gamepadStickLeftMoved === 1) {
            this.setState({ itemActive: Math.min(this.items.length - 1, this.state.itemActive + 1) });
        }
        const curItem = this.items[this.state.itemActive];
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
        this.props.setVolume(Number(event.target.value));
    }

    onGraphicsQualityChange(event) {
        this.props.setGraphicsQuality(Number(event.target.value));
    }

    onMouseSensChange(event) {
        this.props.setMouseSensitivity(Number(event.target.value));
    }

    onStickSensChange(event) {
        this.props.setStickSensitivity(Number(event.target.value));
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
        setGraphicsQuality: actionCreators.settings.setGraphicsQuality,
        setMouseSensitivity: actionCreators.settings.setMouseSensitivity,
        setStickSensitivity: actionCreators.settings.setStickSensitivity
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
