const fs = require('fs');
const path = require('path');
const getAssetsList = require('./getAssetsList.js');

const OUTPUT = path.join(__dirname, '../preloadAssetsList.js');

fs.writeFileSync(
    OUTPUT,
    '/* This script is auto-generated with `npm run build-assets-list` */\n\n' +
    'var RESOURCES = ' + JSON.stringify(getAssetsList()) + ';\n' +
    'if (typeof module !== \'undefined\') module.exports = RESOURCES;'
);
