const fs = require('fs');
const path = require('path');

const ENTRIES = [
    ['dist', ['jpg', 'svg']],
    ['src', ['m4a']]
];

const OUTPUT = path.join(__dirname, '../preloadAssetsList.js');

const result = ENTRIES.map(([entry, ext]) => {
    const dir = path.join(__dirname, '../', entry);
    return getFilesRecursively(dir, ext);
});

fs.writeFileSync(
    OUTPUT,
    'module.exports=' + JSON.stringify(Array.prototype.concat(...result))
);

function getFilesRecursively(dir, ext) {
    return fs.readdirSync(dir).reduce((result, file) => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            result = result.concat(getFilesRecursively(file, ext));
        } else {
            const curExt = path.extname(file).slice(1);
            if (ext.includes(curExt)) {
                result.push([
                    path.relative(path.join(__dirname, '../'), file),
                    curExt === 'm4a' ? 'audio' : 'image'
                ]);
            }
        }
        return result;
    }, []);
}
