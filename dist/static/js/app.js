webpackJsonp([8],{"/XKd":function(e,t){},IcnI:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1_vue__=__webpack_require__("7+uW"),__WEBPACK_IMPORTED_MODULE_2_vuex__=__webpack_require__("NYxO");__WEBPACK_IMPORTED_MODULE_1_vue__.default.use(__WEBPACK_IMPORTED_MODULE_2_vuex__.a);var store=new __WEBPACK_IMPORTED_MODULE_2_vuex__.a.Store({state:{portlet:{direction:"row",size:[1],content:["s-empty"]}},mutations:{portletSet:function portletSet(state,payload){for(var content=payload.content,key=payload.key,str="state.portlet",i=0;i<key.length;i++)str+=".content["+key[i]+"]";str+="= "+__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(content),eval(str),state.portlet=JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(state.portlet))}}});__webpack_exports__.a=store},NHnr:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_("7+uW"),r=_("zL8q"),o=_.n(r),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=_("VU/8")({name:"App"},u,!1,function(e){_("/XKd")},null,null).exports,a=_("/ocq"),s=_("Dd8w"),i=_.n(s),c=function(){return _.e(2).then(_.bind(null,"i/0a"))},p=_("NYxO"),d={name:"HelloWorld",components:{SLayout:c},computed:i()({},Object(p.b)({portlet:function(e){return e.portlet}}))},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("s-layout",{attrs:{portlet:this.portlet}})],1)},staticRenderFns:[]};var E=_("VU/8")(d,f,!1,function(e){_("vXUN")},null,null).exports;n.default.use(a.a);var b=new a.a({routes:[{path:"/",name:"HelloWorld",component:E}]}),m=_("IcnI");n.default.config.productionTip=!1,n.default.use(o.a),n.default.component("s-empty",function(){return _.e(4).then(_.bind(null,"sf0h"))}),n.default.component("s-carousel",function(){return _.e(3).then(_.bind(null,"WbRl"))}),n.default.component("s-portlet-a",function(){return _.e(5).then(_.bind(null,"IaoB"))}),n.default.component("s-portlet-b",function(){return _.e(0).then(_.bind(null,"W7RB"))}),n.default.component("s-portlet-c",function(){return _.e(1).then(_.bind(null,"OMDl"))}),n.default.component("s-portlet-d",function(){return _.e(6).then(_.bind(null,"xAcT"))}),new n.default({el:"#app",router:b,store:m.a,components:{App:l},template:"<App/>"})},vXUN:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.js.map