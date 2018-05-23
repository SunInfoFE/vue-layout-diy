# vue-layout-diy
基于vue和flex的自定义布局，[点击查看demo](https://suninfofe.github.io/vue-layout-diy/demo/index.html)。

## 项目步骤

1. 使用`vue-cli@2.9.3`初始化项目；

```bash
  vue init webpack vue-layout-diy
```

2. 根据个人/团队代码规范，配置`eslint`；

3. 安装[`vuex`](https://vuex.vuejs.org/zh/)；

4. 完成基于`flex`布局的组件`SGrid` `SGridItem`；

5. 引入`Element`，完成`SEmpty`默认显示块；

  > 为了方便在`GithubPage`展示效果，将build后`dist`中的结果拷贝至`demo`目录，并修改资源路径。

  > 异步组件配合代码分离时：
  >> 若使用插件的形式，`s-empty`在`dev`模式下渲染正常，在`buid`模式下无法渲染。[ISSUE](https://github.com/SunInfoFE/vue-layout-diy/issues/1)
  在`main.js`中通过`Vue.component`直接注册则正常。
