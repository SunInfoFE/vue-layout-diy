// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import Portlet from './portlet';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Portlet);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
