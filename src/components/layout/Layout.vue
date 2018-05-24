<template>
  <s-grid :diretion="portlets.direction">
    <s-grid-item
      v-for="(size, index) in portlets.size"
      :key="index"
      :flex="size">
      <template v-if="portlets.content[index].key">
        <s-layout :portlets="portlets.content[index]"></s-layout>
      </template>
      <template v-else>
        <component
          :is="portlets.content[index]"
          :key-str="portlets.key ? portlets.key + String(index) : String(index)">
        </component>
      </template>
    </s-grid-item>
  </s-grid>
</template>

<script>
import { SGrid, SGridItem } from '../grid';

export default {
  name: 'SLayout',
  components: {
    SGrid,
    SGridItem
  },
  props: {
    portlet: {
      type: Object,
      default: function () {
        return {
          direction: 'row',
          size: [1],
          content: [
            'SEmpty'
          ]
        };
      }
    }
  },
  data () {
    return {
      portlets: this.portlet
    };
  }
};
</script>

<style>

</style>
