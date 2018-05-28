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
  },
  mutations: {
    portletSet (state, payload) {
      let { content, key } = payload;
      let str = 'state.portlet';
      for (let i = 0; i < key.length; i++) {
        str += `.content[${key[i]}]`;
      }
      str += `= ${JSON.stringify(content)}`;
      /* eslint-disable */
      eval(str);
      state.portlet = JSON.parse(JSON.stringify(state.portlet));
    }
  }
});

export default store;
