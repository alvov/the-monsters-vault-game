import styles from './endScreen.css';
import React, { PropTypes } from 'react';

const ENDING_TIME = 3000;

class EndScreen extends React.Component {
    static propTypes = {
        onEnd: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;
    }

    componentDidMount() {
        this.endingTimer = setTimeout(() => {
            this.setState({
                showAnyKeyMessage: true
            });
        }, ENDING_TIME);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        clearTimeout(this.endingTimer);
        this.endingTimer = null;
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return <div
            className={styles.root}
            onClick={this.handleKeyDown}
        >
            <div className={styles.message}>
                You escaped
            </div>
            <div className={styles.anyKey}>
                Press any key
            </div>
        </div>;
    }

    handleKeyDown() {
        if (this.state.showAnyKeyMessage) {
            this.props.onEnd();
        }
    }
}

export default EndScreen;
