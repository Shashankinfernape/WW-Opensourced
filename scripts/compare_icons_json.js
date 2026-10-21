const fs = require('fs');
const analysisIcons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));
const reconIcons = JSON.parse(fs.readFileSync('reconstruction/src/icons/svg-icons.json', 'utf8'));

console.log('Analysis keys:', Object.keys(analysisIcons));
console.log('Recon keys:', Object.keys(reconIcons));
