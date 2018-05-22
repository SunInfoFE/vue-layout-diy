<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div style="width: 100%; height: 300px; background: lightblue;">
      <s-grid>
        <s-grid-item>
          <s-grid direction="column">
            <s-grid-item :flex="1">A1</s-grid-item>
            <s-grid-item :flex="2">A2</s-grid-item>
          </s-grid>
        </s-grid-item>
        <s-grid-item>B</s-grid-item>
      </s-grid>
    </div>
  </div>
</template>

<script>
import { SGrid, SGridItem } from '@/components/grid';

export default {
  name: 'HelloWorld',
  components: {
    SGrid,
    SGridItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<style>
h1, h2 {
  font-weight: normal;
}
</style>
