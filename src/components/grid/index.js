let SGrid = () => import(/* webpackChunkName: 'grid' */ './Grid');
let SGridItem = () => import(/* webpackChunkName: 'grid-item' */ './GridItem');

module.exports = {
  SGrid,
  SGridItem
};
