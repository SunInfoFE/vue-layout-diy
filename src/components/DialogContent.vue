<template>
  <el-dialog
    title="选择内容"
    :visible="visible"
    @close="handleClose">
    <el-form :model="form" label-width="120px">
      <el-form-item label="业务名称">
        <el-select v-model="form.content">
          <el-option
            v-for="(item, index) in content"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取消</el-button>
      <el-button @click="handleSubmit" type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean,
    keyStr: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        content: 's-portlet-a'
      },
      content: [
        { label: '业务A', value: 's-portlet-a' },
        { label: '业务B', value: 's-portlet-b' },
        { label: '业务C', value: 's-portlet-c' },
        { label: '业务D', value: 's-portlet-d' }
      ]
    };
  },
  computed: {
    visible () {
      return this.show;
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:show', false);
      this.reset();
    },
    handleSubmit () {
      this.$store.commit('portletSet', {
        content: this.form.content,
        key: this.keyStr
      });
    },
    reset () {
      this.form.content = 's-portlet-a';
    }
  }
};
</script>

<style>

</style>
