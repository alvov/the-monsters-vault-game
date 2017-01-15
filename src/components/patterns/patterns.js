import styles from './patterns.css';
import React  from 'react';

const PATTERNS = [
    ['wall01', 'src/components/wall/wall01.jpg'],
    ['wall02', 'src/components/wall/wall02.jpg'],
    ['wall03', 'src/components/wall/wall03.jpg'],
    ['floor', 'src/components/floor/floor.jpg'],
    ['box01', 'src/components/box/box01.jpg', 240, 160],
    ['box02', 'src/components/box/box02.jpg', 120, 80],
    ['box03', 'src/components/box/box03.jpg', 120, 80],
    ['wood', 'src/components/switcher/wood.jpg', 90, 60]
];

export default function Patterns() {
    return <svg className={styles.root}>
        <defs>
            {PATTERNS.map(([name, imageSrc, width = 450, height = 300]) =>
                <pattern
                    key={name}
                    id={name}
                    width={width} height={height}
                    patternUnits='userSpaceOnUse'
                >
                    <image xlinkHref={imageSrc} width={width} height={height} />
                </pattern>
            )}
        </defs>
    </svg>;
}
