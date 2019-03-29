import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // state : 定义需要共享的数据
  state: {
    flavor: 'init'
  },
  // mutations : 对共享数据的修改操作都必须在此定义
  mutations: {
    change (state, flavor) {
      state.flavor = flavor
    }
  },
  // getters : 该属性让组件读取共享数据
  getters: {
    flavor: state => state.flavor
  }
})
