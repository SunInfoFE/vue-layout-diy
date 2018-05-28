<template>
  <div class="s-grid-item-content s-carousel">
    <el-carousel
      trigger="click"
      height="100%"
      style="height: 100%; flex: 1">
      <el-carousel-item
        v-for="item in 4"
        :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'SCarousel'
};
</script>

<style>
.s-carousel .el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.s-carousel .el-carousel__item h3 {
  color: #475669;
  font-size: 32px;
}

.s-carousel .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.s-carousel .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
