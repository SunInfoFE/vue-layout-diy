# vue-layout-diy
基于vue和flex的自定义布局，[点击查看demo](https://suninfofe.github.io/vue-layout-diy/dist/index.html)。

## 项目步骤

1. 使用`vue-cli@2.9.3`初始化项目；

```bash
  vue init webpack vue-layout-diy
```

2. 根据个人/团队代码规范，配置`eslint`；

3. 安装[`vuex`](https://vuex.vuejs.org/zh/)；

4. 完成基于`flex`布局的组件`SGrid` `SGridItem`；

5. 引入`Element`，完成`SEmpty`默认显示块；

  > 异步组件配合代码分离时:
  >> 若使用插件的形式，`s-empty`在`dev`模式下渲染正常，在`buid`模式下无法渲染。[ISSUE](https://github.com/SunInfoFE/vue-layout-diy/issues/1) <br>
  在`main.js`中通过`Vue.component`直接注册则正常。

  > ~~为了方便在`GithubPage`展示效果，将build后`dist`中的结果拷贝至`demo`目录，并修改资源路径。~~ <br>
  由于`demo`并非部署在`Web`服务器根目录下，所以分离的异步js文件找不到。[ISSUE](https://github.com/SunInfoFE/vue-layout-diy/issues/2)
  >> 需要修改`config/index.js`中的`build.assetsPublicPath`为`./`，`.gitignore`中取消忽略`dist`目录，将`dist`目录作为`demo`页。
