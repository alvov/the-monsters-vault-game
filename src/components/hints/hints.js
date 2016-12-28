import styles from './hints.css';
import React, { PropTypes } from 'react';

class Hints extends React.Component {
    static propTypes = {
        hints: PropTypes.instanceOf(Map).isRequired
    };

    render() {
        const { hints } = this.props;
        return <div className={styles.root}>
            {Array.from(hints.keys()).map(
                hint => <div className={styles.hint} key={hint}>{hint}</div>
            )}
        </div>;
    }
}

export default Hints;
