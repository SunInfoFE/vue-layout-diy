import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    portlet: {
      direction: 'row',
      size: [1],
      content: [
        's-empty'
      ]
    }
  }
});

export default store;
