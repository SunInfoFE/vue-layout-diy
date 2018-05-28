// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.component('s-empty', () => import(/* webpackChunkName: 'empty' */ './portlet/Empty'));
Vue.component('s-carousel', () => import(/* webpackChunkName: 's-carousel' */ './portlet/Carousel'));
Vue.component('s-portlet-a', () => import(/* webpackChunkName: 's-portlet-a' */ './portlet/PortletA'));
Vue.component('s-portlet-b', () => import(/* webpackChunkName: 's-portlet-b' */ './portlet/PortletB'));
Vue.component('s-portlet-c', () => import(/* webpackChunkName: 's-portlet-c' */ './portlet/PortletC'));
Vue.component('s-portlet-d', () => import(/* webpackChunkName: 's-portlet-d' */ './portlet/PortletD'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
