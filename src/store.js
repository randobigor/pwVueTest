import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Igoras',
    x: 0,
    y: 0
  },
  getters: {
    name(state) {
      return state.x
    }
  },
  mutations: {
    setValues(state, [valueX, valueY]) {
      state.x = valueX
      state.y = valueY
    }
  },
  actions: {
  }
})
