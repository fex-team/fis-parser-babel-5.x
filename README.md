fis-parser-babel-5.x
============================

具体的 babel 配置参数可以参考 https://developit.github.io/babel-legacy-docs/

FIS2用法

```
fis.config.set('project.fileType.text', 'es6');
fis.config.set('modules.parser.es6', 'babel-5.x');
fis.config.set('roadmap.ext.es6', 'js');

fis.config.set('settings.parser.babel-5.x', {
    blacklist: ['regenerator'],
    optional: ['asyncToGenerator'],
    stage: 3
});
```


FIS3用法

```
fis.set('project.fileType.text', 'es6');
fis.match('server/**.es6', {
    parser: fis.plugin('babel-5.x', {
        blacklist: ['regenerator'],
        optional: ['asyncToGenerator'],
        stage: 3
    }),
    rExt: 'js'
});
```
