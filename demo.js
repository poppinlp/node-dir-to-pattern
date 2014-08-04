var dir2pattern = require('./dir2pattern.js');

console.log(dir2pattern.fix('test'));
console.log(dir2pattern.fix('test/'));
console.log(dir2pattern.fix('test/file'));
console.log(dir2pattern.fix('test123'));
console.log(dir2pattern.fix('test/*.html'));
