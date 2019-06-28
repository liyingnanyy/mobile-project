import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 1,
    userInfo: {}
  },
  mutations: {
    mutationAdd (state) {
      setTimeout(() => { // mutations中不能存在异步否则会出现bugactions中可以存在异步
        state.num++
      }, 5000)
    },
    mutationjian (state) {
      state.num--
    }
  },
  actions: {
    actionAdd ({commit, state}) {
      setTimeout(() => {
        commit('mutationAdd')
      }, 1000)
    },
    actionjian ({commit, state}) {
      commit('mutationjian')
    }
  }
})

export default store
