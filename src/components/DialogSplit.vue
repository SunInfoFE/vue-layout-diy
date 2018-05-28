<template>
  <el-dialog
    title="拆分设置"
    :visible="visible"
    @close="handleClose">
    <el-form :model="form" label-width="120px">
      <el-form-item
        label="方向">
        <el-select v-model="form.direction">
          <el-option label="水平方向" value="row"></el-option>
          <el-option label="垂直方向" value="column"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="数量">
        <el-input-number
          v-model="form.number"
          :min="2"
          :max="6"
          @change="handleChange">
        </el-input-number>
      </el-form-item>
      <el-form-item
        v-for="i in form.number"
        :key="i"
        :label="`第${i+unit}的比例`">
        <el-input-number
          v-model="form.size[i -1]"
          :min="1"
          :max="24">
        </el-input-number>
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
        direction: 'row',
        number: 2,
        size: [1, 1],
        content: ['s-empty', 's-empty']
      }
    };
  },
  computed: {
    visible () {
      return this.show;
    },
    unit () {
      let _obj = {
        row: '行',
        column: '列'
      };
      return _obj[this.form.direction];
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:show', false);
      this.reset();
    },
    handleChange (value) {
      this.form.size = new Array(value).fill(1);
      this.form.content = new Array(value).fill('s-empty');
    },
    handleSubmit () {
      this.$store.commit('portletSet', {
        content: {
          direction: this.form.direction,
          size: this.form.size,
          key: this.keyStr,
          content: this.form.content
        },
        key: this.keyStr
      });
      this.handleClose();
    },
    reset () {
      this.form = {
        direction: 'row',
        number: 1,
        size: [1]
      };
    }
  }
};
</script>

<style>

</style>
