"use strict";(self.webpackChunkite_react=self.webpackChunkite_react||[]).push([[774],{90774:function(e,t,n){n.r(t),n.d(t,{Web3Modal:function(){return h}});var r=n(74165),o=n(15861),i=n(15671),a=n(43144),s=n(37762),c=n(20161),l=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=function(e,t,n){return t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},v=function(e,t){for(var n in t||(t={}))f.call(t,n)&&p(e,n,t[n]);if(u){var r,o=(0,s.Z)(u(t));try{for(o.s();!(r=o.n()).done;){n=r.value;d.call(t,n)&&p(e,n,t[n])}}catch(i){o.e(i)}finally{o.f()}}return e},h=function(){function e(t){(0,i.Z)(this,e),this.openModal=c.jb.open,this.closeModal=c.jb.close,this.subscribeModal=c.jb.subscribe,this.setTheme=c.t0.setThemeConfig,c.t0.setConfig(v({enableStandaloneMode:!0},t)),this.initUi()}return(0,a.Z)(e,[{key:"initUi",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,Promise.all([n.e(709),n.e(293)]).then(n.bind(n,29293));case 3:t=document.createElement("w3m-modal"),document.body.insertAdjacentElement("beforeend",t),c.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()},20161:function(e,t,n){n.d(t,{Id:function(){return k},t0:function(){return W},zv:function(){return L},uc:function(){return M},jb:function(){return T},zb:function(){return j},AV:function(){return D},Vs:function(){return _}});var r=n(93433),o=n(29439),i=n(74165),a=n(15861),s=(Symbol(),Symbol()),c=Object.getPrototypeOf,l=new WeakMap,u=function(e){return e&&(l.has(e)?l.get(e):c(e)===Object.prototype||c(e)===Array.prototype)},f=(new WeakMap,function(e){return u(e)&&e[s]||null}),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.set(e,t)},p=function(e){return"object"===typeof e&&null!==e},v=new WeakMap,h=new WeakSet,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return p(e)&&!h.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=a.get(e);if((null==r?void 0:r[0])===t)return r[1];var s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return d(s,!0),a.set(e,[t,s]),Reflect.ownKeys(e).forEach((function(t){var r=Reflect.get(e,t);h.has(r)?(d(r,!1),s[t]=r):r instanceof Promise?Object.defineProperty(s,t,{get:function(){return n(r)}}):v.has(r)?s[t]=function(e,t){var n=v.get(e);n||console.warn("Please use proxy object");var r=(0,o.Z)(n,3),i=r[0],a=r[1],s=r[2];return s(i,a(),t)}(r,n):s[t]=r})),Object.freeze(s)},c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(i){if(!p(i))throw new Error("object required");var a=c.get(i);if(a)return a;var u=l[0],d=new Set,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++l[0];u!==t&&(u=t,d.forEach((function(n){return n(e,t)})))},g=l[1],b=function(e){return function(t,n){var o=(0,r.Z)(t);o[1]=[e].concat((0,r.Z)(o[1])),w(o,n)}},C=new Map,y=function(e){var t,n=C.get(e);n&&(C.delete(e),null==(t=n[1])||t.call(n))},O=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),j={deleteProperty:function(e,t){var n=Reflect.get(e,t);y(t);var r=Reflect.deleteProperty(e,t);return r&&w(["delete",[t],n]),r},set:function(t,r,o,i){var a,s=Reflect.has(t,r),c=Reflect.get(t,r,i);if(s&&e(c,o))return!0;y(r),p(o)&&(o=f(o)||o);var l=o;if(null==(a=Object.getOwnPropertyDescriptor(t,r))?void 0:a.set);else if(o instanceof Promise)o.then((function(e){o.status="fulfilled",o.value=e,w(["resolve",[r],e])})).catch((function(e){o.status="rejected",o.reason=e,w(["reject",[r],e])}));else{!v.has(o)&&n(o)&&(l=m(o));var u=!h.has(l)&&v.get(l);u&&function(e,t){if(C.has(e))throw new Error("prop listener already exists");if(d.size){var n=t[3](b(e));C.set(e,[t,n])}else C.set(e,[t])}(r,u)}return Reflect.set(t,r,l,i),w(["set",[r],o,c]),!0}},E=t(O,j);c.set(i,E);var k=[O,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++l[1];return g===e||d.size||(g=e,C.forEach((function(t){var n=(0,o.Z)(t,1)[0][1](e);n>u&&(u=n)}))),u},s,function(e){d.add(e),1===d.size&&C.forEach((function(e,t){var n=(0,o.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var i=r[3](b(t));C.set(t,[r,i])}));return function(){d.delete(e),0===d.size&&C.forEach((function(e,t){var n=(0,o.Z)(e,2),r=n[0],i=n[1];i&&(i(),C.set(t,[r]))}))}}];return v.set(E,k),Reflect.ownKeys(i).forEach((function(e){var t=Object.getOwnPropertyDescriptor(i,e);t.get||t.set?Object.defineProperty(O,e,t):E[e]=i[e]})),E};return[u,v,h,e,t,n,i,a,s,c,l]},g=w(),b=(0,o.Z)(g,1)[0];function m(){return b(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function C(e,t,n){var r,o=v.get(e);o||console.warn("Please use proxy object");var i=[],a=o[3],s=!1,c=a((function(e){i.push(e),n?t(i.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(i.splice(0))})))}));return s=!0,function(){s=!1,c()}}var y=n(19778),O=m({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,walletConnectVersion:1}),j={state:O,subscribe:function(e){return C(O,(function(){return e(O)}))},setChains:function(e){O.chains=e},setStandaloneChains:function(e){O.standaloneChains=e},setStandaloneUri:function(e){O.standaloneUri=e},getSelectedChain:function(){var e=k.client().getNetwork().chain;return e&&(O.selectedChain=e),O.selectedChain},setSelectedChain:function(e){O.selectedChain=e},setIsStandalone:function(e){O.isStandalone=e},setIsCustomDesktop:function(e){O.isCustomDesktop=e},setIsCustomMobile:function(e){O.isCustomMobile=e},getAccount:function(){var e=k.client().getAccount();O.address=e.address,O.isConnected=e.isConnected},setAddress:function(e){O.address=e},setIsConnected:function(e){O.isConnected=e},setProfileName:function(e){O.profileName=e},setProfileAvatar:function(e){O.profileAvatar=e},setProfileLoading:function(e){O.profileLoading=e},setBalanceLoading:function(e){O.balanceLoading=e},setBalance:function(e){O.balance=e},setIsDataLoaded:function(e){O.isDataLoaded=e},setIsUiLoaded:function(e){O.isUiLoaded=e},setWalletConnectVersion:function(e){O.walletConnectVersion=e},resetEnsProfile:function(){O.profileName=void 0,O.profileAvatar=void 0},resetBalance:function(){O.balance=void 0},resetAccount:function(){O.address=void 0,O.isConnected=!1,j.resetEnsProfile(),j.resetBalance()}},E=m({initialized:!1,ethereumClient:void 0}),k={setEthereumClient:function(e){!E.initialized&&e&&(E.ethereumClient=e,j.setChains(e.chains),E.initialized=!0)},client:function(){if(E.ethereumClient)return E.ethereumClient;throw new Error("ClientCtrl has no client set")}},L={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return L.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isEmptyObject:function(e){return Object.getPrototypeOf(e)===Object.prototype&&0===Object.getOwnPropertyNames(e).length&&0===Object.getOwnPropertySymbols(e).length},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl:function(e,t,n){if(L.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!L.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;e.endsWith("/")&&(r=e.slice(0,-1)),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"/wc?uri=").concat(o)},wait:function(e){return(0,a.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_self";window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){localStorage.setItem(L.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink:function(e){var t=e.split("?"),n=(0,o.Z)(t,1)[0];localStorage.setItem(L.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))},removeWalletConnectDeepLink:function(){localStorage.removeItem(L.WALLETCONNECT_DEEPLINK_CHOICE)},isNull:function(e){return null===e}};var P=m({projectId:"",themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",themeColor:"default",themeBackground:L.isMobile()?"themeColor":"gradient",themeZIndex:89,mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,defaultChain:void 0,explorerAllowList:void 0,explorerDenyList:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),W={state:P,subscribe:function(e){return C(P,(function(){return e(P)}))},setConfig:function(e){var t,n,r,o;if(j.setStandaloneChains(e.standaloneChains),j.setIsStandalone(Boolean(null==(t=e.standaloneChains)?void 0:t.length)||Boolean(e.enableStandaloneMode)),j.setIsCustomMobile(Boolean(null==(n=e.mobileWallets)?void 0:n.length)),j.setIsCustomDesktop(Boolean(null==(r=e.desktopWallets)?void 0:r.length)),j.setWalletConnectVersion(null!=(o=e.walletConnectVersion)?o:1),e.defaultChain)j.setSelectedChain(e.defaultChain);else if(!j.state.isStandalone){var i=k.client().getDefaultChain();j.setSelectedChain(i)}Object.assign(P,e)},setThemeConfig:function(e){Object.assign(P,e)}},I="https://explorer-api.walletconnect.com";function S(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){var t=(0,o.Z)(e,2),n=(t[0],t[1]);return typeof n<"u"&&null!==n&&""!==n})).map((function(e){var t=(0,o.Z)(e,2);return[t[0],t[1].toString()]})));return new URLSearchParams(t).toString()}var Z=function(e,t){return(0,a.Z)((0,i.Z)().mark((function n(){var r,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=S(t),o="".concat(I,"/v3/wallets?projectId=").concat(e,"&").concat(r),n.next=3,fetch(o);case 3:return n.abrupt("return",n.sent.json());case 4:case"end":return n.stop()}}),n)})))()},A=function(e,t){return"".concat(I,"/v3/logo/lg/").concat(t,"?projectId=").concat(e)},N=m({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},previewWallets:[],recomendedWallets:[]});function U(){var e=W.state.projectId;if(!e)throw new Error("projectId is required to work with explorer api");return e}var M={state:N,getPreviewWallets:function(e){return(0,a.Z)((0,i.Z)().mark((function t(){var n,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(U(),e);case 2:return n=t.sent,r=n.listings,t.abrupt("return",(N.previewWallets=Object.values(r),N.previewWallets));case 5:case"end":return t.stop()}}),t)})))()},getRecomendedWallets:function(){return(0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(U(),{page:1,entries:6});case 2:t=e.sent,n=t.listings,N.recomendedWallets=Object.values(n);case 5:case"end":return e.stop()}}),e)})))()},getPaginatedWallets:function(e){return(0,a.Z)((0,i.Z)().mark((function t(){var n,o,a,s,c,l,u;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.page,o=e.search,t.next=4,Z(U(),e);case 4:return a=t.sent,s=a.listings,c=a.total,l=Object.values(s),u=o?"search":"wallets",t.abrupt("return",(N[u]={listings:[].concat((0,r.Z)(N[u].listings),l),total:c,page:null!==n&&void 0!==n?n:1},{listings:l,total:c}));case 10:case"end":return t.stop()}}),t)})))()},getImageUrl:function(e){return A(U(),e)},resetSearch:function(){N.search={listings:[],total:0,page:1}}},x=m({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),D={state:x,subscribe:function(e){return C(x,(function(){return e(x)}))},push:function(e,t){e!==x.view&&(x.view=e,t&&(x.data=t),x.history.push(e))},replace:function(e){x.view=e,x.history=[e]},goBack:function(){if(x.history.length>1){x.history.pop();var e=x.history.slice(-1),t=(0,o.Z)(e,1)[0];x.view=t}}},B=m({open:!1}),T={state:B,subscribe:function(e){return C(B,(function(){return e(B)}))},open:function(e){return(0,a.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=j.state,r=n.isConnected,o=n.isStandalone,i=n.isUiLoaded,a=n.isDataLoaded,s=W.state.enableNetworkView;if(o?(j.setStandaloneUri(null===e||void 0===e?void 0:e.uri),j.setStandaloneChains(null===e||void 0===e?void 0:e.standaloneChains),D.replace("ConnectWallet")):null!=e&&e.route?D.replace(e.route):r?D.replace("Account"):s?D.replace("SelectNetwork"):D.replace("ConnectWallet"),i&&a)B.open=!0,t();else var c=setInterval((function(){j.state.isUiLoaded&&j.state.isDataLoaded&&(clearInterval(c),B.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){B.open=!1}},R=m({open:!1,message:"",variant:"success"}),_={state:R,subscribe:function(e){return C(R,(function(){return e(R)}))},openToast:function(e,t){R.open=!0,R.message=e,R.variant=t},closeToast:function(){R.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=y.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))}}]);
//# sourceMappingURL=774.a5dccc0e.chunk.js.map