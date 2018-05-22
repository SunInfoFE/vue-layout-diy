<template>
  <div :class="`s-grid s-grid-${direction}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SGrid',
  props: {
    direction: {
      type: String,
      default: 'row',
      validator: function (value) {
        return [
          'row',
          'column'
        ].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style>
  .s-grid {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .s-grid-row {
    flex-direction: row;
  }
  .s-grid-column {
    flex-direction: column;
  }
</style>
