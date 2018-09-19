(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(e,t,n){},189:function(e,t,n){"use strict";var r=n(178);n.n(r).a},198:function(e,t,n){"use strict";n.r(t);n(70),n(10),n(23);var r=n(192),o=(n(52),n(95),n(26),n(24),n(25),n(94),n(0)),a=n(185),s=n(186),i=(n(187),n(188),{errorMessage:"Json parse failed. Please check it."}),c="http://127.0.0.1:48132/";function u(){return"undefined"!=typeof window&&localStorage.getItem("reqUrl")||c}var l={components:{Tab:s.Tab,Tabs:s.Tabs,Vnodes:{functional:!0,render:function(e,t){return t.props.vnodes}}},computed:{demoConfig:function(){return this.$themeLocaleConfig.demo||i}},data:function(){var e=this.$slots.default;Array.isArray(e)||(e=[]);var t=[];e=e.map(function(e){return{name:(e&&e.data&&e.data.staticClass||"").trim().replace("extra-class","").replace(/language-\w*/g,""),dom:e}}).filter(function(e){return!!e.name&&(!!/tab:.*$/.test(e.name)||(/test:?.*$/.test(e.name)&&t.push(e),!1))}).map(function(e){return Object(r.a)({},e,{name:e.name.replace("tab:","").trim()})}),t=t.map(function(e){return Object(r.a)({},e,{name:e.name.replace("test:","").trim()})});var n=this.$slots.code||[],o=JSON.parse(n.length&&n[0]&&n[0].text||"");Array.isArray(o)||(o=[]);var s=[],i=[];o.filter(function(e){return e&&e.info}).forEach(function(e){var t=e.info,n=void 0===t?"":t,o=n.match(/(\s|^)test(:\s*|$)(.*)/),a=n.match(/(\s|^)tab:\s*(.*)/);(o||a)&&(o?s.push(Object(r.a)({},e,{name:o[3].trim()})):a&&i.push(Object(r.a)({},e,{name:a[2].trim()})))});var c=Object(a.a)({},{testSourceCode:s,tabSourceCode:i}),l={tabSize:4,mode:"application/json",theme:"solarized dark",lineNumbers:!1,line:!1,styleActiveLine:!0};return{codeList:e,testList:t,testSourceCode:s,tabSourceCode:i,originData:c,cmOptions:Object(r.a)({},l),cmResultOptions:Object(r.a)({},l,{readOnly:!0}),selectedTab:null,url:u()}},methods:{onTabChanged:function(e){this.selectedTab=e.tab.name},run:function(e){return fetch(this.url||u(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}).then(function(e){return e.json()})},onPlayClick:function(e){var t=this,n=this.testSourceCode[e],a=n.content;n.error=null,o.a.set(this.testSourceCode,e,Object(r.a)({},n,{pending:!0})),function(e){"undefined"!=typeof window&&localStorage.setItem("reqUrl",e)}(this.url);try{var s=JSON.parse(a);this.run(s).then(function(a){o.a.set(t.testSourceCode,e,Object(r.a)({},n,{success:!0,result:JSON.stringify(a,null,4),pending:!1}));var s=t.$refs["cmResult_".concat(e)];Array.isArray(s)&&s[0]&&s[0].codemirror.refresh()}).catch(function(a){o.a.set(t.testSourceCode,e,Object(r.a)({},n,{error:a,pending:!1}))})}catch(t){console.error(t),o.a.set(this.testSourceCode,e,Object(r.a)({},n,{error:t,pending:!1}))}},onCmCodeChange:function(e,t){this.testSourceCode[e].content=t},onResetClick:function(e){o.a.set(this.testSourceCode,e,Object(r.a)({},this.testSourceCode[e],{content:this.originData.testSourceCode[e].content,result:null,error:null,success:null})),o.a.toasted.show(this.demoConfig.resetMessage,{duration:1e3,theme:"primary"})}}},d=(n(189),n(1)),m=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tabs",{attrs:{options:{useUrlFragment:!1}},on:{changed:e.onTabChanged}},[e._l(e.codeList,function(e){return n("tab",{key:e.name,attrs:{name:e.name}},[n("vnodes",{attrs:{vnodes:e.dom}})],1)}),e._v(" "),e.testSourceCode.length?n("tab",{key:"play",attrs:{name:"Play"},on:{changed:e.onTabChanged}},e._l(e.testSourceCode,function(t,r){return n("div",{key:t.name},[n("div",{staticClass:"tools-wrapper"},[n("div",{staticClass:"demo-test-title"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"url"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),e._v(" "),n("span",{staticClass:"code-play-btn",on:{click:function(t){e.onPlayClick(r)}}},[n("v-icon",{attrs:{icon:"play"}})],1),e._v(" "),n("span",{staticClass:"code-play-btn right",on:{click:function(t){e.onResetClick(r)}}},[n("v-icon",{attrs:{icon:"undo"}})],1)]),e._v(" "),n("ClientOnly",["Play"===e.selectedTab?n("codemirror",{ref:"cm_"+t.name,refInFor:!0,attrs:{options:e.cmOptions,value:t.content},on:{input:function(t){e.onCmCodeChange(r,t)}}}):e._e(),e._v(" "),t.error?n("div",[e._v("\n            "+e._s(e.demoConfig.errorMessage)+"\n            "),n("pre",{staticClass:"error"},[e._v("            "),n("code",[e._v("\n              "+e._s(t.error.stack)+"\n            ")]),e._v("\n          ")])]):t.success?n("div",[e._v("\n            "+e._s(e.demoConfig.successMessage)+"\n            "),n("codemirror",{ref:"cmResult_"+r,refInFor:!0,attrs:{options:e.cmResultOptions,value:t.result}})],1):e._e(),e._v(" "),t.pending?n("div",{staticClass:"loading-wrapper"},[n("div",[n("loading")],1)]):e._e()],1)],1)})):e._e()],2)],1)},[],!1,null,null,null);m.options.__file="Demo.vue";t.default=m.exports}}]);