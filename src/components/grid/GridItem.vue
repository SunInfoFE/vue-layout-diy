<template>
  <div class="s-grid-item" :style="{flex: flex}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SGridItem',
  props: {
    flex: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style>

</style>
