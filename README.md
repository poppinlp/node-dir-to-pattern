# node-dir-to-pattern

[![Build Status](https://travis-ci.org/poppinlp/node-dir-to-pattern?branch=master)](https://travis-ci.org/poppinlp/node-dir-to-pattern)

Fix `dir` path to pattern such as `dir/**/*` for `grunt.file.expand`.

### Getting Started

Install with this command:

```shell
npm install dir2pattern --save-dev
```

### Usage Examples

#### Basic

```js
var dir2pattern = require('dir2pattern');
cnosole.log(dir2pattern('path/to/'));
// path/to/**/*
```

### Demo

```shell
node demo.js
```

### History

- Ver 0.0.1 init
