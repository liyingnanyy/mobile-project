<template>
  <div class="content">
    <h1>首页</h1>
    <span>{{$store.state.num}}</span>
    <button @click="add">++</button>
    <button @click="add2">++</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    add () {
      // this.$store.state.num++
      this.$store.commit('mutationAdd')
    },
    add2 () {
      this.$store.dispatch('actionAdd')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
