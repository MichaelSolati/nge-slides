const concat = require('concat');
const execSync = require('child_process').execSync;
const fs = require('fs');


console.log('Remove any dist code');
execSync('rm -rf dist');

console.log('Build source code');
execSync('ng build --prod');

console.log('Merge JS files');
const files = [
  'dist/staging/runtime.js',
  'dist/staging/scripts.js',
  'dist/staging/main.js'
];
concat(files, 'dist/nge-slides.js').then(() => {
  console.log('Create package.json');
  let packageJson = require('./package.json');
  delete packageJson['scripts'];
  delete packageJson['dependencies'];
  delete packageJson['devDependencies'];
  fs.writeFileSync('dist/package.json', JSON.stringify(packageJson));

  console.log('Copy over markdown files');
  fs.copyFileSync('CHANGELOG.md', 'dist/CHANGELOG.md');
  fs.copyFileSync('LICENSE.md', 'dist/LICENSE.md');
  fs.copyFileSync('README.md', 'dist/README.md');

  execSync('rm -rf dist/staging');
});
