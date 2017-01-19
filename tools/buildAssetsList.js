const fs = require('fs');
const path = require('path');
const getAssetsList = require('./getAssetsList.js');

const OUTPUT = path.join(__dirname, '../preloadAssetsList.js');

fs.writeFileSync(
    OUTPUT,
    'module.exports=' + JSON.stringify(getAssetsList())
);
