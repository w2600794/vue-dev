# vue-cli-app 模板

> 支持单页，多页共同开发

##   开始之前，先下载 node  版本>8.0  使用 node -v 检测node版本
#   node 下载 完成之后  使用 npm -v 检测npm版本 >5.0

```
  npm i     下载所有依赖包
  npm i 包名 --save-dev  缺失的包
  npm run dev : 启动    
  npm run build 打包
```

**
  使用px2rem  自动转换px为rem
**

## 目录结构
```
----build                               配置目录
----config                              配置目录
----dist                                打包后目录
----pages                               多页面入口
----src                                 开发目录
      --assets                          资源目录
            --image                     图片资源目录
            --js                        js资源目录
                --commne                公共js资源目录
                --plugin                插件集合目录
            --less                      css资源目录
            --video                     视频资源目录
      --components                      组件目录
      --page                            单页面目录入口
        -index.vue                      首页
      --pages                           多页面目录入口
      --router                          单页面路由目录
      --App.vue                         单页面主架构
      --config.js                       环境变更文件
      --main.js                         vue核心js
----static                              静态资源目录
