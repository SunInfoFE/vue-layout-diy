<template>
  <div class="hello">
    <s-layout :portlet="portlet"></s-layout>
  </div>
</template>

<script>
import SLayout from '@/components/layout';
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  components: {
    SLayout
  },
  computed: {
    ...mapState({
      portlet: (state) => state.portlet
    })
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.hello {
  height: 100vh;
}
.hello .s-empty {
  border: 1px dashed #a0cfff;
}
</style>
