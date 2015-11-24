'use strict';

var babel = require('babel-core');

module.exports = function (content, file, conf) {
    var result = babel.transform(content, conf);
    return result.code;
};
