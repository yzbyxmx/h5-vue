/**
 * created by xumx 2019/3/1
 * */

import Vue from 'vue'
import Vuex from 'vuex'
import mutationLog from './mutationLog'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  debug: __LOCAL__,
  loading: false,
  user: {}
}

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  plugins: [ mutationLog ],
  debug
})
