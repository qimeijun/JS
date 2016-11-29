# Vuejs
自从vuejs 升级以后，vuejs 的一些相关组件也都已经升级支持vuejs2.0了，当你了解了vuejs， 好奇心驱使你想了解vuejs 一系列的组件，关键是vuejs的一些列组件全都是出自vuejs官方<br/>,
不看吧又显得自己很low, 所以就这样一直被坑下去了呗。
vuejs 的系列组件：
    1、vue-router: 管理路由的组件
    2、vue-resource: 用来替换ajax，发送一些请求
    3、vuex: 专为Vue.js应用程序开发的状态管理模式。采用集中存储管理应用的所有组件的状态。如果不打算开发大型单页应用，使用Vuex可能会繁琐冗余。

## 一、关于搭建vuejs 框架

vuejs 官方出了一个框架助手，只需要几个命令就能搭建出项目框架。

1、全局安装vue-cli
        `npm install vue-cli -g`

2、使用vue-cli初始化项目
        `vue-cli init webpack project-name`

3、进入到项目目录
        `cd project-name`

4、开始安装依赖包
        `npm install`
    
5、开始运行
        `npm run dev`

> `eslint` 语法检查坑

eslint 是一个有JavaScript红宝书作者Nicholas C. Zakas编写的用来避免低级错误和统一代码的QA工具，在`vue-cli init`初始化项目时会让
    你选择，我一般选择否，因为在项目运行时会报一些错误导致项目运行不起来。
    错误提示：` ✘  http://eslint.org/docs/rules/indent Expected indentation of 8 space characters but found 6 /Users/apple/Desktop/VUEJS/vuePro/myvueProject01/src/App.vue:19:7`
    *如果不小心添加的`Eslint`验证，如何去除？*
    **解决办法**： 在`webpack.base.conf.js`里边删除一些配置：
```
                preLoaders: [
                    {
                        test: /\.vue$/,
                        loader: 'eslint',
                        include: projectRoot,
                        exclude: [/node_modules/, /ignore_lib/]
                    },
                    {
                        test: /\.js$/,
                        loader: 'eslint',
                        include: projectRoot,
                        exclude: [/node_modules/, /ignore_lib/]
                    }
                    ]
            ```
  
