fis-parser-babel-5.x
============================

具体的 babel 配置参数可以参考 https://developit.github.io/babel-legacy-docs/

## FIS2用法

```
fis.config.set('project.fileType.text', 'es');
fis.config.set('modules.parser.es', 'babel-5.x');
fis.config.set('roadmap.ext.es', 'js');

fis.config.set('settings.parser.babel-5.x', {
    blacklist: ['regenerator'],
    optional: ['asyncToGenerator'],
    stage: 3
});
```


## FIS3用法

```
fis.set('project.fileType.text', 'es');
fis.match('server/**.es', {
    parser: fis.plugin('babel-5.x', {
        blacklist: ['regenerator'],
        optional: ['asyncToGenerator'],
        stage: 3
    }),
    rExt: 'js'
});
```

## 如何开启resourcemap

以下例子以 FIS3 为示例，FIS2可参考调整

```
fis.match('server/**.es', {
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true
    }),
    rExt: 'js'
});
```

> 如果使用的是 FIS2 ，为了保证 sourcemap 的功能正常，请确认 FIS2 版本 > 1.9.3

## FIS2 下如何只为 *.es.js 开启Babel编译

```
fis.config.set('modules.parser.js', 'babel-5.x');
fis.config.set('settings.parser.babel-5.x');

fis.config.get('roadmap.path').unshift({
    reg: '**.es.js',
    useBabel: true  // 开启 Babel 编译，可以忽略
}, {
    reg: '**.js',
    useBabel: false // 关闭 Babel 编译
});
```
