import styles from './playerHealth.css';
import React, { PropTypes } from 'react';

const PLAYER_HEALTH_STATES = [30, 60, 100];

class PlayerHealth extends React.PureComponent {
    static propTypes = {
        health: PropTypes.number.isRequired
    };

    constructor(...args) {
        super(...args);

        this.state = {
            healthState: PlayerHealth.getPlayerHealthState(this.props.health)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.health < this.props.health) {
            this.setState({ healthState: PlayerHealth.getPlayerHealthState(nextProps.health) });
        }
    }

    render() {
        const { healthState } = this.state;

        const className = [
            styles.root,
            styles['health-state-' + healthState]
        ].join(' ');

        return <div className={className} />
    }

    static getPlayerHealthState(health) {
        for (let i = 0; i < PLAYER_HEALTH_STATES.length; i++) {
            if (health <= PLAYER_HEALTH_STATES[i]) {
                return i;
            }
        }
        return PLAYER_HEALTH_STATES.length - 1;
    }
}

export default PlayerHealth;
