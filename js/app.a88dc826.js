(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],v=0,u=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["a"].use(n["a"],{theme:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-navigation-drawer",{attrs:{fixed:"",clipped:t.$vuetify.breakpoint.mdAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-action",[a("v-icon",[t._v("account_circle")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("USUARIO")])],1)],1)],1),a("v-divider"),a("v-list-tile",{attrs:{to:{name:"home"}}},[a("v-list-tile-action",[a("v-icon",[t._v("home")])],1),a("v-list-tile-title",[t._v("\n            Inicio\n          ")])],1)],[a("v-list-group",[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                Funcionario\n              ")])],1)],1),a("v-list-tile",{attrs:{to:{name:"categorias"}}},[a("v-list-tile-action",[a("v-icon",[t._v("people_alt")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                 Categoria\n              ")])],1)],1),a("v-list-tile",{attrs:{to:{name:"roles"}}},[a("v-list-tile-action",[a("v-icon",[t._v("person_add_disabled")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                Rol\n              ")])],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("person_add_disabled")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                Usuarios\n              ")])],1)],1)],1)]],2)],1),a("v-toolbar",{attrs:{color:"blue darken-2",dark:"",app:"","clipped-left":t.$vuetify.breakpoint.mdAndUp,fixed:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",[t._v("home")])],1),a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"400px"}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v("PROCESOS MP")])]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("logout")]),t._v(" Salir\n    ")],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},o=[],c={name:"App",data:function(){return{usuario:"",clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},computed:{logueado:function(){return this.$store.state.nombreUsuario},esPracticante:function(){},esFuncionario:function(){},esAsistente:function(){}},created:function(){},methods:{}},s=c,l=a("2877"),d=a("6544"),v=a.n(d),u=a("7496"),p=a("8336"),f=a("a523"),m=a("549c"),h=a("ce7e"),b=a("132d"),x=a("8860"),V=a("56b0"),_=a("ba95"),g=a("40fe"),C=a("5d23"),y=a("f774"),k=a("0789"),w=a("9910"),O=a("71d9"),A=a("706c"),R=a("2a7f"),T=Object(l["a"])(s,i,o,!1,null,null,null),I=T.exports;v()(T,{VApp:u["a"],VBtn:p["a"],VContainer:f["a"],VContent:m["a"],VDivider:h["a"],VIcon:b["a"],VList:x["a"],VListGroup:V["a"],VListTile:_["a"],VListTileAction:g["a"],VListTileContent:C["a"],VListTileTitle:C["b"],VNavigationDrawer:y["a"],VSlideYTransition:k["d"],VSpacer:w["a"],VToolbar:O["a"],VToolbarSideIcon:A["a"],VToolbarTitle:R["a"]});var E=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},N=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n       SISTEMA INTEGRADO DE INVENTARIO DE EQUIPOS\n      ")])])],1)],1)},j=[],L={},F=L,$=a("0e8f"),U=a("adda"),P=a("a722"),G=Object(l["a"])(F,D,j,!1,null,null,null),M=G.exports;v()(G,{VContainer:f["a"],VFlex:$["a"],VImg:U["a"],VLayout:P["a"]});var B={components:{HelloWorld:M}},H=B,J=Object(l["a"])(H,S,N,!1,null,null,null),W=J.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-toolbar",{attrs:{dense:""}},[a("v-toolbar-title",[t._v("INFORMACION CATEGORIA")]),a("v-spacer"),0==t.verNuevo?a("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.nuevo()}}},[t._v("NUEVO"),a("v-icon",{attrs:{dark:""}},[t._v("add")])],1):t._e()],1),a("v-divider"),a("v-card",[0==t.verNuevo?a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[t._v("\n                                    LISTA DE CATEGORIA\n                                    "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify","single-line":"","hide-details":""}})],1),a("v-divider"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.cat,items:t.lista},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("v-icon",{attrs:{small:"",color:"red darken-2"}},[t._v("delete")]),a("v-icon",{attrs:{small:"",color:"primary darken-2"},on:{click:function(a){return t.obtenerCategoria(e.item.idcategoria)}}},[t._v("edit")])],1),a("td",[t._v(t._s(e.item.idcategoria))]),a("td",[t._v(t._s(e.item.descripcion))]),a("td",[1==e.item.estado?a("div",{staticClass:"primary darken-2 text-xs-center"},[a("span",{staticClass:"white--text"},[t._v("Activo")])]):a("div",{staticClass:"error darken-2 text-xs-center"},[a("span",{staticClass:"white--text"},[t._v("Anulado")])])])]}}],null,!1,1509447827)},[a("template",{slot:"no-data"},[a("span",{staticClass:"red--text"},[a("h3",[t._v(" No hay categorias.")])])])],2)],1)],1)],1)],1):t._e(),1==t.verNuevo?a("show",{attrs:{info:t.category},on:{cerrar:function(e){return t.cancelar()}}}):t._e(),2==t.verNuevo?a("create",{on:{cerrar:function(e){return t.cancelar()}}}):t._e()],1)],1)],1)},Y=[],Z=(a("96cf"),a("1da1")),q=a("bc3a"),z=a.n(q),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("v-container",[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"DESCRIPCION"},model:{value:t.category.descripcion,callback:function(e){t.$set(t.category,"descripcion",e)},expression:"category.descripcion"}})],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.updated()}}},[t._v("GUARDAR\n            "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1),a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("cerrar")}}},[t._v("CANCELAR\n            "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1)],1)],1)},X=[],tt=(a("c5f6"),{props:{info:{type:Number}},data:function(){return{formTitle:"ACTUALIZAR CATEGORIA",category:""}},created:function(){this.cat()},methods:{updated:function(){var t=this;z.a.put("categoria/update",{idcategoria:t.category.idcategoria,descripcion:t.category.descripcion}).then((function(e){t.$emit("cerrar")})).catch((function(t){}))},cat:function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,z.a.get("categoria/"+this.info);case 4:a=t.sent,e.category=a.data,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()}}),et=tt,at=a("b0af"),rt=a("99d9"),nt=a("2677"),it=Object(l["a"])(et,K,X,!1,null,null,null),ot=it.exports;v()(it,{VBtn:p["a"],VCard:at["a"],VCardActions:rt["a"],VCardText:rt["b"],VContainer:f["a"],VDivider:h["a"],VFlex:$["a"],VIcon:b["a"],VSpacer:w["a"],VTextField:nt["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("v-container",[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"DESCRIPCION"},model:{value:t.descripcion,callback:function(e){t.descripcion=e},expression:"descripcion"}})],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.save()}}},[t._v("GUARDAR\n            "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1),a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("cerrar")}}},[t._v("CANCELAR\n            "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1)],1)],1)},st=[],lt={data:function(){return{formTitle:"NUEVA CATEGORIA",descripcion:""}},methods:{save:function(){var t=this;z.a.post("categoria/save",{descripcion:t.descripcion}).then((function(e){t.$emit("cerrar")})).catch((function(t){}))}}},dt=lt,vt=Object(l["a"])(dt,ct,st,!1,null,null,null),ut=vt.exports;v()(vt,{VBtn:p["a"],VCard:at["a"],VCardActions:rt["a"],VCardText:rt["b"],VContainer:f["a"],VDivider:h["a"],VFlex:$["a"],VIcon:b["a"],VSpacer:w["a"],VTextField:nt["a"]});var pt={data:function(){return{category:"",lista:[],verNuevo:0,data:["Musica","Pelicula","Video"],cat:[{text:"ACCION",value:"",sortable:!1},{text:"ID",value:"",sortable:!1},{text:"CATEGORIA",value:"",sortable:!1},{text:"ESTADO",value:"",sortable:!1}]}},components:{show:ot,create:ut},created:function(){this.getCategoria()},methods:{getCategoria:function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,z.a.get("categoria/listar");case 4:a=t.sent,e.lista=a.data,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),obtenerCategoria:function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.verNuevo=1,this.category=e;case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancelar:function(){this.verNuevo=0,this.getCategoria()},nuevo:function(){this.verNuevo=2}}},ft=pt,mt=a("12b2"),ht=a("8fea"),bt=Object(l["a"])(ft,Q,Y,!1,null,null,null),xt=bt.exports;v()(bt,{VBtn:p["a"],VCard:at["a"],VCardTitle:mt["a"],VContainer:f["a"],VDataTable:ht["a"],VDivider:h["a"],VFlex:$["a"],VIcon:b["a"],VLayout:P["a"],VSpacer:w["a"],VTextField:nt["a"],VToolbar:O["a"],VToolbarTitle:R["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-toolbar",{attrs:{dense:""}},[a("v-toolbar-title",[t._v("INFORMACION ROLES")]),t.ismodal?a("create",{on:{cerrar:t.cancelar}}):t._e(),t.isedit?a("edit",{attrs:{rol:t.roles},on:{cerrar:t.cancelar}}):t._e(),a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.nuevo()}}},[t._v("NUEVO"),a("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),a("v-divider"),a("v-card",[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[t._v("\n                                    LISTA DE ROLES\n                                    "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify","single-line":"","hide-details":""}})],1),a("v-divider"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.rol,items:t.lista},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("v-icon",{attrs:{small:"",color:"primary darken-2"},on:{click:function(a){return t.obtenerRol(e.item.idrol)}}},[t._v("edit")])],1),a("td",[t._v(t._s(e.item.idrol))]),a("td",[t._v(t._s(e.item.descripcion))])]}}])},[a("template",{slot:"no-data"},[a("span",{staticClass:"red--text"},[a("h3",[t._v(" No hay roles.")])])])],2)],1)],1)],1)],1)],1)],1)],1)},_t=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",{staticClass:"primary",staticStyle:{color:"white"},attrs:{"primary-title":""}},[a("h3",[t._v("NUEVO ROL")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"ROL"},model:{value:t.descripcion,callback:function(e){t.descripcion=e},expression:"descripcion"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.cancelar()}}},[t._v("CANCELAR "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("block")])],1),a("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.save()}}},[t._v("GUARDAR"),a("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1)],1)],1)],1)},Ct=[],yt={data:function(){return{modal:!1,descripcion:""}},created:function(){this.modal=!0},methods:{cancelar:function(){this.modal=!1,this.$emit("cerrar")},save:function(){var t=this;z.a.post("rol/save",{descripcion:t.descripcion}).then((function(e){t.modal=!1,t.$emit("cerrar")})).catch((function(t){}))}}},kt=yt,wt=a("169a"),Ot=Object(l["a"])(kt,gt,Ct,!1,null,null,null),At=Ot.exports;v()(Ot,{VBtn:p["a"],VCard:at["a"],VCardActions:rt["a"],VCardText:rt["b"],VCardTitle:mt["a"],VContainer:f["a"],VDialog:wt["a"],VDivider:h["a"],VFlex:$["a"],VIcon:b["a"],VLayout:P["a"],VSpacer:w["a"],VTextField:nt["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",{staticClass:"primary",staticStyle:{color:"white"},attrs:{"primary-title":""}},[a("h3",[t._v("EDITAR ROL")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"ROL"},model:{value:t.rol.descripcion,callback:function(e){t.$set(t.rol,"descripcion",e)},expression:"rol.descripcion"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.cancelar()}}},[t._v("CANCELAR "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("block")])],1),a("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.save()}}},[t._v("GUARDAR"),a("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1)],1)],1)],1)},Tt=[],It={props:{rol:{type:Object}},data:function(){return{modal:!1,descripcion:"",estado:"edit"}},created:function(){this.modal=!0},methods:{cancelar:function(){this.modal=!1,this.$emit("cerrar",this.estado)},save:function(){var t=this;z.a.put("rol/update",{idrol:t.rol.idrol,descripcion:t.rol.descripcion}).then((function(e){t.modal=!1,t.$emit("cerrar",t.estado)})).catch((function(t){}))}}},Et=It,St=Object(l["a"])(Et,Rt,Tt,!1,null,null,null),Nt=St.exports;v()(St,{VBtn:p["a"],VCard:at["a"],VCardActions:rt["a"],VCardText:rt["b"],VCardTitle:mt["a"],VContainer:f["a"],VDialog:wt["a"],VDivider:h["a"],VFlex:$["a"],VIcon:b["a"],VLayout:P["a"],VSpacer:w["a"],VTextField:nt["a"]});var Dt={data:function(){return{roles:"",ismodal:!1,isedit:!1,lista:[],rol:[{text:"ACCION",value:"",sortable:!1},{text:"ID",value:"",sortable:!1},{text:"ROL",value:"",sortable:!1}]}},components:{create:At,edit:Nt},created:function(){this.getRol()},methods:{getRol:function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,z.a.get("rol/listar");case 4:a=t.sent,e.lista=a.data,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),obtenerRol:function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=this,t.next=4,z.a.get("rol/"+e);case 4:r=t.sent,a.isedit=!0,a.roles=r.data,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}(),cancelar:function(t){"edit"==t?(this.isedit=!1,this.getRol()):(this.ismodal=!1,this.getRol())},nuevo:function(){this.ismodal=!0}}},jt=Dt,Lt=Object(l["a"])(jt,Vt,_t,!1,null,null,null),Ft=Lt.exports;v()(Lt,{VBtn:p["a"],VCard:at["a"],VCardTitle:mt["a"],VContainer:f["a"],VDataTable:ht["a"],VDivider:h["a"],VFlex:$["a"],VIcon:b["a"],VLayout:P["a"],VSpacer:w["a"],VTextField:nt["a"],VToolbar:O["a"],VToolbarTitle:R["a"]}),r["a"].use(E["a"]);var $t=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:W},{path:"/categorias",name:"categorias",component:xt},{path:"/roles",name:"roles",component:Ft}]}),Ut=a("2f62");r["a"].use(Ut["a"]);var Pt=new Ut["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,z.a.defaults.baseURL="https://fast-peru.com/inventario/public/api/",new r["a"]({router:$t,store:Pt,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.a88dc826.js.map