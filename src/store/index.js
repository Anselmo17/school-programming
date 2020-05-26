import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex)

// adding modules app
export default new Vuex.Store({
  modules
  });
