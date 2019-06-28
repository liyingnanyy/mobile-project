<template>
  <div>
    <h1>点餐</h1>

    <span>{{$store.state.num}}</span> <button @click="jian">--</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    jian () {
      // this.$store.state.num-- 建议不直接操作state
      this.$store.commit('mutationjian')
    }
  }
}
</script>

<style>
</style>
