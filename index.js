'use strict';

var babel = require('babel-core');

module.exports = function (content, file, conf) {
    // 默认不加载.babelrc，避免错误的加载了全局配置而非编译工具中指定的配置
    if (conf.breakConfig === undefined) {
        conf.breakConfig = true;
    }

    // 出于安全考虑，不使用原始路径
    conf.filename = file.subpath;
    var result = babel.transform(content, conf);

    // 添加resourcemap输出
    if (result.map) {
        var mapping = fis.file.wrap(file.dirname + '/' + file.filename + file.rExt + '.map');
        mapping.setContent(JSON.stringify(result.map, null, 4));
        var url = mapping.getUrl(fis.compile.settings.hash, fis.compile.settings.domain);
        result.code = result.code.replace(/\n?\s*\/\/#\ssourceMappingURL=.*?(?:\n|$)/g, '');
        result.code += '\n//# sourceMappingURL=' + url + '\n';
        file.extras = file.extras || {};
        file.extras.derived = file.extras.derived || [];
        file.extras.derived.push(mapping);
    }

    return result.code;
};
