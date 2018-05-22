let SEmpty = () => import(/* webpackChunkName: 'empty' */ './Empty');

const components = [
  SEmpty
];

const install = function (Vue) {
  components.map((component) => {
    if (component.name) {
      Vue.component(component.name, component);
    }
  });
};

export default {
  install
};
