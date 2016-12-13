import styles from './startScreen.css';
import React, { PropTypes } from 'react';
import Logo from '../Logo/Logo';

class StartScreen extends React.Component {
    static propTypes = {
        onStart: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.handleStart = this.handleStart.bind(this);
    }

    render() {
        return <div className={styles.root}>
            <Logo />
            <div className={styles.menuItem}>
                <button className={styles.menuItemButton} onClick={this.handleStart}>Start</button>
            </div>
        </div>;
    }

    handleStart() {
        this.props.onStart();
    }
}

export default StartScreen;
