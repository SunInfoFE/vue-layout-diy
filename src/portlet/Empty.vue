<template>
  <div class="s-empty">
    <el-dropdown @command="handleCommand">
      <el-button type="primary">
        设置内容<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">拆分此块</el-dropdown-item>
        <el-dropdown-item command="2">选择内容</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <dialog-split :show.sync="show" :key-str="key"></dialog-split>
    <dialog-content :show.sync="display" :key-str="key"></dialog-content>
  </div>
</template>

<script>
let DialogSplit = () => import(/* webpackChunkName: 'dialog-split' */ '../components/DialogSplit');
let DialogContent = () => import(/* webpackChunkName: 'dialog-content' */ '../components/DialogContent');

export default {
  name: 'SEmpty',
  components: {
    DialogSplit,
    DialogContent
  },
  props: {
    keyStr: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      key: this.keyStr,
      show: false,
      display: false
    };
  },
  methods: {
    handleCommand (command) {
      if (command === '1') {
        this.show = true;
      } else {
        this.display = true;
      }
    }
  }
};
</script>

<style>
.s-empty {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
