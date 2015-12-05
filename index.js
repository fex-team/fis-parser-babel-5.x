'use strict';

var babel = require('babel-core');

module.exports = function (content, file, conf) {
    // 默认不加载.babelrc，避免错误的加载了全局配置而非编译工具中指定的配置
    if (conf.breakConfig === undefined) {
        conf.breakConfig = true;
    }
    var result = babel.transform(content, conf);
    return result.code;
};
