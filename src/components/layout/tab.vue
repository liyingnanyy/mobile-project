<template>
  <div class="tab">
    <ul>
      <router-link :to="item.path" tag="li" v-for="(item, index) in tabList" :key="index">{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: [
        {
          name: '首页',
          path: '/home',
          icon: '',
          activeIcon: ''
        },
        {
          name: '点餐',
          path: '/foods',
          icon: '',
          activeIcon: ''
        },
        {
          name: '订单',
          path: '/order',
          icon: '',
          activeIcon: ''
        },
        {
          name: '我的',
          path: '/my',
          icon: '',
          activeIcon: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .tab {
    width: 100%;
    position: fixed;
    bottom: 0;
    ul {
      width: 100%;
      height: 50px;
      display: flex;
      list-style: none;
      justify-content: space-between;
      align-items: center;
      li {
        width: 25%;
        text-align: center;
        font-size: 18px;
      }
    }
  }
</style>
