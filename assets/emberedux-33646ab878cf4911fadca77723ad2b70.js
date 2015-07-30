"use strict";define("emberedux/acceptance-tests/main",["exports","ember-cli-sri/acceptance-tests/main"],function(e,t){e["default"]=t["default"]}),define("emberedux/actions/CounterActions",["exports","emberedux/constants/ActionTypes"],function(e,t){function n(){return{type:t.INCREMENT_COUNTER}}function r(){return{type:t.DECREMENT_COUNTER}}function u(){return function(e,t){var r=t(),u=r.counter;u%2!==0&&e(n())}}function i(){return function(e){setTimeout(function(){e(n())},1e3)}}e.increment=n,e.decrement=r,e.incrementIfOdd=u,e.incrementAsync=i}),define("emberedux/app",["exports","ember","ember/resolver","ember/load-initializers","emberedux/config/environment"],function(e,t,n,r,u){var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:u["default"].modulePrefix,podModulePrefix:u["default"].podModulePrefix,Resolver:n["default"]}),r["default"](i,u["default"].modulePrefix),e["default"]=i}),define("emberedux/components/x-app",["exports","ember"],function(e,t){function n(e){return{counter:e.counter}}e["default"]=t["default"].Component.extend({init:function(){var e=this;this._super.apply(this,arguments);var t=this.get("attrs.redux").value;this.set("redux",t),this.set("actions",t.actions),this.setProperties(n(t.instance.getState())),t.instance.subscribe(function(){var r=n(t.instance.getState());e.setProperties(r)})}})}),define("emberedux/components/x-counter",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({})}),define("emberedux/constants/ActionTypes",["exports"],function(e){var t="INCREMENT_COUNTER",n="DECREMENT_COUNTER";e.INCREMENT_COUNTER=t,e.DECREMENT_COUNTER=n}),define("emberedux/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({redux:t["default"].inject.service()})}),define("emberedux/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("emberedux/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("emberedux/initializers/export-application-global",["exports","ember","emberedux/config/environment"],function(e,t,n){function r(e,r){if(n["default"].exportApplicationGlobal!==!1){var u,i=n["default"].exportApplicationGlobal;u="string"==typeof i?i:t["default"].String.classify(n["default"].modulePrefix),window[u]||(window[u]=r,r.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[u]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("emberedux/instance-initializers/app-version",["exports","emberedux/config/environment","ember"],function(e,t,n){var r=n["default"].String.classify,u=!1;e["default"]={name:"App Version",initialize:function(e){if(!u){var i=r(e.toString());n["default"].libraries.register(i,t["default"].APP.version),u=!0}}}}),define("emberedux/redux/createDispatcher",["exports","emberedux/redux/utils/composeMiddleware"],function(e,t){function n(e){var n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return function(u,i){function o(t){return d=i(e(d,t)),t}function a(){return d}var d=i(e(u,r)),c="function"==typeof n?n(a):n;return t["default"].apply(void 0,c.concat([o]))}}e["default"]=n;var r={type:"@@INIT"}}),define("emberedux/redux/createRedux",["exports","emberedux/redux/Redux"],function(e,t){function n(){for(var e=arguments.length,n=Array(e),u=0;e>u;u++)n[u]=arguments[u];var i,o=new(r.apply(t["default"],[null].concat(n)));return{subscribe:(i=o).subscribe.bind(i),dispatch:(i=o).dispatch.bind(i),getState:(i=o).getState.bind(i),getDispatcher:(i=o).getDispatcher.bind(i),replaceDispatcher:(i=o).replaceDispatcher.bind(i)}}var r=Function.prototype.bind;e["default"]=n}),define("emberedux/redux/index",["exports","emberedux/redux/createRedux","emberedux/redux/createDispatcher","emberedux/redux/utils/composeMiddleware","emberedux/redux/utils/composeStores","emberedux/redux/utils/bindActionCreators"],function(e,t,n,r,u,i){e.createRedux=t["default"],e.createDispatcher=n["default"],e.composeMiddleware=r["default"],e.composeStores=u["default"],e.bindActionCreators=i["default"]}),define("emberedux/redux/middleware/thunk",["exports"],function(e){function t(e){return function(t){var n=function r(n){return"function"==typeof n?n(r,e):t(n)};return n}}e["default"]=t}),define("emberedux/redux/Redux",["exports","emberedux/redux/createDispatcher","emberedux/redux/utils/composeStores","emberedux/redux/middleware/thunk"],function(e,t,n,r){function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(i,o){u(this,e);var a=i;"object"==typeof i&&(a=t["default"](n["default"](i),function(e){return[r["default"](e)]})),this.state=o,this.listeners=[],this.replaceDispatcher(a)}return e.prototype.getDispatcher=function(){return this.dispatcher},e.prototype.replaceDispatcher=function(e){this.dispatcher=e,this.dispatchFn=e(this.state,this.setState.bind(this))},e.prototype.dispatch=function(e){return this.dispatchFn(e)},e.prototype.getState=function(){return this.state},e.prototype.setState=function(e){return this.state=e,this.listeners.forEach(function(e){return e()}),e},e.prototype.subscribe=function(e){var t=this.listeners;return t.push(e),function(){var n=t.indexOf(e);t.splice(n,1)}},e}();e["default"]=i}),define("emberedux/redux/utils/bindActionCreators",["exports","emberedux/redux/utils/mapValues"],function(e,t){function n(e,n){return t["default"](e,function(e){return function(){return n(e.apply(void 0,arguments))}})}e["default"]=n}),define("emberedux/redux/utils/composeMiddleware",["exports"],function(e){function t(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return t.reduceRight(function(e,t){return t(e)})}e["default"]=t}),define("emberedux/redux/utils/composeStores",["exports","emberedux/redux/utils/mapValues","emberedux/redux/utils/pick"],function(e,t,n){function r(e){var r=n["default"](e,function(e){return"function"==typeof e});return function(e,n){return void 0===e&&(e={}),t["default"](r,function(t,r){return t(e[r],n)})}}e["default"]=r}),define("emberedux/redux/utils/createReduxShape",["exports"],function(e){function t(e){return e.shape({subscribe:e.func.isRequired,dispatch:e.func.isRequired,getState:e.func.isRequired})}e["default"]=t}),define("emberedux/redux/utils/getDisplayName",["exports"],function(e){function t(e){return e.displayName||e.name||"Component"}e["default"]=t}),define("emberedux/redux/utils/identity",["exports"],function(e){function t(e){return e}e["default"]=t}),define("emberedux/redux/utils/isPlainObject",["exports"],function(e){function t(e){return e?"object"==typeof e&&Object.getPrototypeOf(e)===Object.prototype:!1}e["default"]=t}),define("emberedux/redux/utils/mapValues",["exports"],function(e){function t(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=t(e[r],r),n},{})}e["default"]=t}),define("emberedux/redux/utils/pick",["exports"],function(e){function t(e,t){return Object.keys(e).reduce(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{})}e["default"]=t}),define("emberedux/redux/utils/shallowEqual",["exports"],function(e){function t(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var u=Object.prototype.hasOwnProperty,i=0;i<n.length;i++)if(!u.call(t,n[i])||e[n[i]]!==t[n[i]])return!1;return!0}e["default"]=t}),define("emberedux/redux/utils/shallowEqualScalar",["exports"],function(e){function t(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var u=Object.prototype.hasOwnProperty,i=0;i<n.length;i++){if(!u.call(t,n[i]))return!1;var o=e[n[i]],a=t[n[i]];if(o!==a||"object"==typeof o||"object"==typeof a)return!1}return!0}e["default"]=t}),define("emberedux/router",["exports","ember","emberedux/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("emberedux/services/redux",["exports","ember","emberedux/redux/index","emberedux/actions/CounterActions","emberedux/stores/counter"],function(e,t,n,r,u){e["default"]=t["default"].Service.extend({init:function(){this._super.apply(this,arguments);var e={counter:u["default"]},t=n.createRedux(e),i=n.bindActionCreators(r["default"],t.dispatch);this.setProperties({instance:t,actions:i})}})}),define("emberedux/stores/counter",["exports","emberedux/constants/ActionTypes"],function(e,t){function n(e,n){switch(void 0===e&&(e=0),n.type){case t.INCREMENT_COUNTER:return e+1;case t.DECREMENT_COUNTER:return e-1;default:return e}}e["default"]=n}),define("emberedux/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"emberedux/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["inline","x-app",[],["redux",["subexpr","@mut",[["get","redux",["loc",[null,[1,14],[1,19]]]]],[],[]]],["loc",[null,[1,0],[1,21]]]]],locals:[],templates:[]}}())}),define("emberedux/templates/components/x-app",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"emberedux/templates/components/x-app.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["inline","x-counter",[],["counter",["subexpr","@mut",[["get","counter",["loc",[null,[2,10],[2,17]]]]],[],[]],"increment",["subexpr","action",["increment"],[],["loc",[null,[3,12],[3,32]]]],"decrement",["subexpr","action",["decrement"],[],["loc",[null,[4,12],[4,32]]]],"incrementIfOdd",["subexpr","action",["incrementIfOdd"],[],["loc",[null,[5,17],[5,42]]]]],["loc",[null,[1,0],[5,44]]]]],locals:[],templates:[]}}())}),define("emberedux/templates/components/x-counter",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"emberedux/templates/components/x-counter.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),r=e.createTextNode("\n  Clicked: ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode(" times\n  ");e.appendChild(n,r);var r=e.createElement("button"),u=e.createTextNode("+");e.appendChild(r,u),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("button"),u=e.createTextNode("-");e.appendChild(r,u),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("button"),u=e.createTextNode("Increment if odd");e.appendChild(r,u),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),u=e.childAt(r,[3]),i=e.childAt(r,[5]),o=e.childAt(r,[7]),a=new Array(4);return a[0]=e.createMorphAt(r,1,1),a[1]=e.createAttrMorph(u,"onClick"),a[2]=e.createAttrMorph(i,"onClick"),a[3]=e.createAttrMorph(o,"onClick"),a},statements:[["content","attrs.counter",["loc",[null,[2,11],[2,28]]]],["attribute","onClick",["get","attrs.increment",["loc",[null,[3,20],[3,35]]]]],["attribute","onClick",["get","attrs.decrement",["loc",[null,[4,20],[4,35]]]]],["attribute","onClick",["get","attrs.incrementIfOdd",["loc",[null,[5,20],[5,40]]]]]],locals:[],templates:[]}}())}),define("emberedux/config/environment",["ember"],function(e){var t="emberedux";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),u=JSON.parse(unescape(r));return{"default":u}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("emberedux/tests/test-helper"):require("emberedux/app")["default"].create({name:"emberedux",version:"0.0.0+81570224"});