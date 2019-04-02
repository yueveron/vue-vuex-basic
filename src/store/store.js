import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // state : 定义需要共享的数据
  state: {
    flavor: 'init',
    list: [
      {
        id: 0,
        text: '标题模块文字'
      },
      {
        id: 1,
        text: '段落模块文字'
      }
    ]
  },
  // mutations : 对共享数据的修改操作都必须在此定义
  mutations: {
    change (state, flavor) {
      state.flavor = flavor
    },
    addToList (state, newItem) {
      state.list.push(newItem)
    }
  },
  // getters : 该属性让组件读取共享数据
  getters: {
    flavor: state => state.flavor,
    list: state => state.list
  }
})
