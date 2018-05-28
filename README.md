# vue-layout-diy
基于vue和flex的自定义布局，[点击查看demo](https://suninfofe.github.io/vue-layout-diy/dist/index.html)。

> `S`前缀为`Sunflower`简写，我们团队的命名空间。

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
  >> 若使用插件的形式，`s-empty`在`dev`模式下渲染正常，在`buid`模式下无法渲染。[ISSUE#1](https://github.com/SunInfoFE/vue-layout-diy/issues/1) <br>
  在`main.js`中通过`Vue.component`直接注册则正常。

  > ~~为了方便在`GithubPage`展示效果，将build后`dist`中的结果拷贝至`demo`目录，并修改资源路径。~~ <br>
  由于`demo`并非部署在`Web`服务器根目录下，所以分离的异步js文件找不到。[ISSUE#2](https://github.com/SunInfoFE/vue-layout-diy/issues/2)
  >> 需要修改`config/index.js`中的`build.assetsPublicPath`为`./`，`.gitignore`中取消忽略`dist`目录，将`dist`目录作为`demo`页。

6. `Vuex`中定义默认数据结构，再次封装`SGrid` `SGridItem`为`SLayout`，实现初始化布局；

7. 实现拆分块功能；
   1. 方向随机1:1拆分;
   2. 设置拆分方向和比例；
      1. 注意`dialog-split`中[`.sync修饰符`](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)的用法；
      2. `dialog-split`传递`prop: show`时，注意[单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)的问题：
          > 在`DialogSplit`中，若定义一个本地的`data`属性并将`prop: show`用做其初始值，那么这个`data`永远是`false`，`Dialog`永远不会被打开，所以需要用这个`prop`的值来定义一个计算属性`visible`，此时`visible`将会跟`prop: show`的值保持同步。在`el-dialog`的`prop: visible`中，我们不能使用修饰符`.async`，因为这个修饰符会给`el-dialog`添加`update:visible`事件监听，关闭`el-dialog`会触发此事件，也就是会强制修改刚才添加的计算属性`visible`，这是绝对不允许的。在`el-dialog`的`close`事件中，我们触发了`dialog-split`的`update:show`事件，更新了`data: show`的值，那么`DialogSplit`的计算属性`visible`也会相应更新。

8. 添加示例业务组件，完成选择内容功能。
