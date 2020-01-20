#### 本地运行项目
```
  npm run start
```

#### 打包线上项目
```
  npm run build
```

```js
#### 项目结构
***├── build                               // npm run build 生成文件夹 ***
***├── config                              // webpack配置文件 ***
***├── node_modules                        // 各种依赖包 ***
***├── public                              // 存放favicon, index.html ***
***├── scripts                             // npm编译对应命令js文件 ***
***├── src                                 // 源码目录 ***
***│   ├── api                             // 服务器端接口数据映射API ***
***│   ├── components                      // 页面组件 ***
***│   ├── config                          // 项目内静态变量 ***
***│   ├── containers                      // 页面（容器） ***
***│   ├── themes                          // 存放项目的一些资源和LESS样式文件 ***
***│   ├── images                          // 图片资源 ***
***│   ├── redux                           // 公共处理数据redux ***
***├── .gitignore                          // 过滤文件 ***
***├── .jshintrc                           // jshint 配置文件 ***
***├── package.json                        // 项目依赖 ***
***├── postcss.config.js                   // postcss配置文件 ***
***├── yarn.lock                           // 项目依赖锁文件 ***
```