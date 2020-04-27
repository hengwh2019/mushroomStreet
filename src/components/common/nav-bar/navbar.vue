<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  position: static;
  top: 0;
  left: 0;
}
.nav-bar .left,
.right {
  width: 60px;
  background: #f00;
}
.nav-bar .center {
  flex: 1;
  background: #0f0;
}
</style>