const fs = require('fs');
const path = require('path');
const getAssetsList = require('../getAssetsList.js');

const SW_TEMPLATE = path.join(__dirname, './serviceWorker.tpl.js');
const OUTPUT = path.join(__dirname, '../../serviceWorker.js');

const DEFAULT_RESOURCES = [
    './',
    './dist/vendor.js',
    './dist/bundle.js',
    './dist/bundle.css'
];

let resources = DEFAULT_RESOURCES.concat(
    getAssetsList().map(([assetPath]) => './' + assetPath)
);

const swTemplate = fs.readFileSync(SW_TEMPLATE);

fs.writeFileSync(
    OUTPUT,
    '/* This script is auto-generated with `npm run build-sw` */\n\n' +
        'const RESOURCES = ' + JSON.stringify(resources) + ';\n' +
        swTemplate
);
