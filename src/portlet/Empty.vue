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
  </div>
</template>

<script>
export default {
  name: 'SEmpty',
  props: {
    KeyStr: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      key: this.KeyStr
    };
  },
  methods: {
    handleCommand (command) {
      if (command === '1') {
        let direction = ['row', 'column'];
        let idx = Math.round(Math.random());
        this.$store.commit('splitPortlet', {
          content: {
            direction: direction[idx],
            size: [1, 1],
            key: this.key,
            content: [
              's-empty',
              's-empty'
            ]
          },
          key: this.key
        });
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
