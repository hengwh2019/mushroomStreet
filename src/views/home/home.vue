<template>
  <div>
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../components/common/nav-bar/navbar";
export default {
  name: "category",
  components: {
    Navbar
  }
};
</script>
<style scoped>
.nav-bar {
  background: hotpink;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
</style>