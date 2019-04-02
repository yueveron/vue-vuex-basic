<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" name="flavor" />

    <div class="block">
      <h3>
        Example - 如果 state
        为基本数据类型（布尔、null、undefined、String和Number），则为值传递。如要实现响应式必须将
        state 放在 computed 属性内
      </h3>
      <p>computed 引用 flavor : {{ msg }}，响应式改变</p>
      <p>直接引用 flavor : {{ flavor }} ，不会改变</p>
    </div>

    <div class="block">
      <h3>
        Exmaple - 如果 state 为对象类型（Array, Function,
        Object），则为引用传递。即使直接将 state 放在 data 内，也会响应式改变
      </h3>
      <div>
        <div v-for="item in list" :key="item.id">
          {{ item.id }} - {{ item.text }}
        </div>
      </div>
      <button @click="clickAddItem">add item</button>
    </div>

    <div class="block">
      <h3>
        结论：统一对待 state , 如在组件内引用 state（无论类型是何种） 都放入
        computed 属性内
      </h3>
      <div>
        <div v-for="item in myList" :key="item.id">
          {{ item.id }} - {{ item.text }}
        </div>
      </div>
      <button @click="clickAddItem">add item</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    msg () {
      return this.$store.getters.flavor
    },
    myList () {
      return this.$store.getters.list
    }
  },
  data () {
    return {
      flavor: this.$store.getters.flavor,
      list: this.$store.getters.list
    }
  },
  methods: {
    changed (evt) {
      // console.debug(evt.target.value)
      this.$store.commit('change', evt.target.value)
    },
    clickAddItem (evt) {
      const newId = Math.max(Math.max.apply(null, this.list.map(t => t.id)) + 1, 0)
      const newItem = {
        id: newId,
        text: '新增项目' + newId
      }
      this.$store.commit('addToList', newItem)
    }
  }
}
</script>

<style>
.block {
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-bottom: 1px solid #999;
}
h3 {
  font-size: 18px;
}
</style>
