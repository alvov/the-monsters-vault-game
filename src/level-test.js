import LevelGenerator from './lib/LevelGenerator';
import levelCanvas from './lib/levelCanvas';

const { cells, level } = new LevelGenerator();
document.getElementById('app').appendChild(levelCanvas(cells, level));
