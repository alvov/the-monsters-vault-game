import styles from './externalLink.css';
import React, { PropTypes } from 'react';

export default function ExternalLink({ href, children }) {
    return <a href={href} target='_blank' rel='noreferer noopener' className={styles.root}>
        {children ? children : href}
    </a>;
}
ExternalLink.propTypes = {
    href: PropTypes.string.isRequired
};
