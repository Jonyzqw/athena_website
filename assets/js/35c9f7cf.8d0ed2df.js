"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[1731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4,sidebar_label:"Python\u8c03\u8bd5\u5de5\u5177"},l="Aiges Python Sdk",o={unversionedId:"\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177",id:"\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177",title:"Aiges Python Sdk",description:"Install && Upgrade",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177.md",sourceDirName:"\u52a0\u8f7d\u5668",slug:"/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177",permalink:"/athena_website/docs/current/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Python\u8c03\u8bd5\u5de5\u5177"},sidebar:"docSidebar",previous:{title:"Python\u63d2\u4ef6",permalink:"/athena_website/docs/current/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6"},next:{title:"Create Cgo Wrapper",permalink:"/athena_website/docs/current/category/create-cgo-wrapper"}},p={},s=[{value:"Install &amp;&amp; Upgrade",id:"install--upgrade",level:2},{value:"Features",id:"features",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aiges-python-sdk"},"Aiges Python Sdk"),(0,a.kt)("h2",{id:"install--upgrade"},"Install && Upgrade"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$ pip install aiges"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$ pip install --upgrade aiges -i https://pypi.org/simple")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8c03\u8bd5: \u672c\u5730\u6a21\u62df\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"li"},"wrapper.py")," \u811a\u672c\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u81ea\u52a8\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"wrapper.py")," \u9879\u76ee\u5de5\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6784\u5efa\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"li"},"wrapper.py")," ")),(0,a.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a21\u62df\u52a0\u8f7d\u5668\u884c\u4e3a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"li"},"wrapper.py")),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"li"},"wrapper.py")," \u4e2d\u7684\u5b9e\u73b0\u662f\u5426\u5305\u542b\u5fc5\u987b\u8981\u5b9e\u73b0\u7684"),(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"wrapper.py")," \u4e2d\u7684 wrapperInit -> wrapperExec -> wrapperFinish"),(0,a.kt)("li",{parentName:"ol"},"check \u8c03\u7528\u7ed3\u679c")))}u.isMDXComponent=!0}}]);