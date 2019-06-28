<template>
  <div class="content">
    <router-view></router-view>
    <Tab />
  </div>
</template>

<script>
import Tab from './tab.vue'
export default {
  components: {
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  body, html {
    width: 100%;
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
</style>
