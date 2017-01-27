import styles from './patterns.css';
import React from 'react';
import wall01 from '../wall/wall01.jpg';
import wall02 from '../wall/wall02.jpg';
import wall03 from '../wall/wall03.jpg';
import floor from '../floor/floor.jpg';
import box01 from '../box/box01.jpg';
import box02 from '../box/box02.jpg';
import box03 from '../box/box03.jpg';
import wood from '../switcher/wood.jpg';

const PATTERNS = [
    { name: 'wall01', url: wall01 },
    { name: 'wall02', url: wall02 },
    { name: 'wall03', url: wall03 },
    { name: 'floor', url: floor },
    {
        name: 'box01',
        url: box01,
        width: 240,
        height: 160
    },
    {
        name: 'box02',
        url: box02,
        width: 120,
        height: 80
    },
    {
        name: 'box03',
        url: box03,
        width: 120,
        height: 80
    },
    {
        name: 'wood',
        url: wood,
        width: 90,
        height: 60
    }
];

export default function Patterns() {
    return <svg className={styles.root}>
        <defs>
            {PATTERNS
                .map(pattern => ({
                    ...pattern,
                    url: pattern.url.replace('./', './dist/')
                }))
                .map(({ name, url, width = 450, height = 300 }) =>
                <pattern
                    key={name}
                    id={name}
                    width={width} height={height}
                    patternUnits='userSpaceOnUse'
                >
                    <image xlinkHref={url} width={width} height={height} />
                </pattern>
            )}
        </defs>
    </svg>;
}
