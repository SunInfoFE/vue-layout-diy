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
  methods: {
    handleCommand (command) {
      console.log(command);
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
