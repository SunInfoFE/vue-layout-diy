<template>
  <s-grid :direction="portlet.direction">
    <s-grid-item
      v-for="(size, index) in portlet.size"
      :key="index"
      :flex="size">
      <template v-if="portlet.content[index].key">
        <s-layout :portlet="portlet.content[index]"></s-layout>
      </template>
      <template v-else>
        <component
          :is="portlet.content[index]"
          :key-str="portlet.key ? portlet.key + String(index) : String(index)">
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
            's-empty'
          ]
        };
      }
    }
  }
};
</script>

<style>

</style>
