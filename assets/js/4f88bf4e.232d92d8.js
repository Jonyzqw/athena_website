"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[649],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>c});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),s=m(n),c=l,g=s["".concat(i,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(g,p(p({ref:e},k),{},{components:n})):a.createElement(g,p({ref:e},k))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:l,p[1]=o;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1301:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={slug:"opensource-guide",title:"\u8baf\u98de\u5f00\u6e90\u6307\u5bfc",authors:["ybyang7"],tags:["pybind11","ai","python","athenaserving"]},p="\u8baf\u98de\u5f00\u6e90\u80cc\u666f",o={permalink:"/athena_website/blog/opensource-guide",editUrl:"https://github.com/iflytek/athena_website/tree/master/blog/2022-08-30-release2.0.md",source:"@site/blog/2022-08-30-release2.0.md",title:"\u8baf\u98de\u5f00\u6e90\u6307\u5bfc",description:"\u968f\u7740\u8fd1\u51e0\u5e74\u5f00\u6e90\u7684\u84ec\u52c3\u53d1\u5c55\uff0c\u5f00\u6e90\u7684\u5f71\u54cd\u529b\u5728\u4e1a\u5185\u4e5f\u662f\u5e7f\u6cdb\u88ab\u8ba4\u53ef\u3002\u4ee5BAT\u4e3a\u9996\u7684\u5404\u884c\u4e1a\u7684\u4f01\u4e1a\u90fd\u5728\u5f00\u6e90\u9886\u57df\u5185\u53d1\u5c55\u5176\u4e00\u4e9b\u5173\u952e\u6280\u672f;\u4e00\u4e9b\u5173\u952e\u7684\u5546\u4e1a\u5316\u573a\u666f\u66f4\u662f\u4ee5\u516c\u53f8\u7684\u5f00\u6e90\u5b9e\u529b\u6765\u91cf\u5316\u62db\u6807\u8981\u6c42\uff1b",date:"2022-08-30T00:00:00.000Z",formattedDate:"2022\u5e748\u670830\u65e5",tags:[{label:"pybind11",permalink:"/athena_website/blog/tags/pybind-11"},{label:"ai",permalink:"/athena_website/blog/tags/ai"},{label:"python",permalink:"/athena_website/blog/tags/python"},{label:"athenaserving",permalink:"/athena_website/blog/tags/athenaserving"}],readingTime:7.83,hasTruncateMarker:!1,authors:[{name:"ybyang7",title:"Opensource AI Engineer",url:"https://github.com/berlinsaint",imageURL:"https://avatars.githubusercontent.com/u/10629930?v=4",key:"ybyang7"}],frontMatter:{slug:"opensource-guide",title:"\u8baf\u98de\u5f00\u6e90\u6307\u5bfc",authors:["ybyang7"],tags:["pybind11","ai","python","athenaserving"]},nextItem:{title:"\u53c2\u4e0e\u5f00\u6e90\u7684\u90a3\u4e9b\u4e8b\uff1f",permalink:"/athena_website/blog/git"}},i={authorsImageUrls:[void 0]},m=[{value:"\u5185\u90e8\u53c2\u4e0e\u5f00\u6e90?",id:"\u5185\u90e8\u53c2\u4e0e\u5f00\u6e90",level:2},{value:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90? \u9700\u8981\u5b66\u4f1a\u54ea\u4e9bGithub\u64cd\u4f5c\uff1f",id:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90-\u9700\u8981\u5b66\u4f1a\u54ea\u4e9bgithub\u64cd\u4f5c",level:2},{value:"\u5199\u5728\u7ed3\u5c3e",id:"\u5199\u5728\u7ed3\u5c3e",level:2}],k={toc:m};function u(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u968f\u7740\u8fd1\u51e0\u5e74\u5f00\u6e90\u7684\u84ec\u52c3\u53d1\u5c55\uff0c\u5f00\u6e90\u7684\u5f71\u54cd\u529b\u5728\u4e1a\u5185\u4e5f\u662f\u5e7f\u6cdb\u88ab\u8ba4\u53ef\u3002\u4ee5BAT\u4e3a\u9996\u7684\u5404\u884c\u4e1a\u7684\u4f01\u4e1a\u90fd\u5728\u5f00\u6e90\u9886\u57df\u5185\u53d1\u5c55\u5176\u4e00\u4e9b\u5173\u952e\u6280\u672f;\u4e00\u4e9b\u5173\u952e\u7684\u5546\u4e1a\u5316\u573a\u666f\u66f4\u662f\u4ee5\u516c\u53f8\u7684\u5f00\u6e90\u5b9e\u529b\u6765\u91cf\u5316\u62db\u6807\u8981\u6c42\uff1b"),(0,l.kt)("p",null,"\u6211\u53f8\u5728\u51e0\u5e74\u524d\u5df2\u7ecf\u5f00\u5c55\u4e86\u4e00\u4e9b\u5f00\u6e90\u7684\u5de5\u4f5c\uff0c\u4e5f\u6536\u96c6\u5230\u96c6\u56e2\u5185\u90e8\u4e00\u4e9b\u96f6\u661f\u7684\u529b\u91cf\u53c2\u4e0e\u4e86\u5f00\u6e90\u793e\u533a\u7684\u5de5\u4f5c\u4fe1\u606f\uff0c\u603b\u800c\u8a00\u4e4b\uff0c\u96c6\u56e2\u5c42\u9762\u7684\u5f00\u6e90\u5de5\u4f5c\u6ca1\u6709\u5f62\u6210\u6709\u6548\u7684\u5408\u529b\u3002"),(0,l.kt)("p",null,"\u4e3a\u6b64:"),(0,l.kt)("p",null,"3\u6708\u521d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec"),"\u91cd\u65b0\u62fe\u8d77\u4e86\u5728\u51e0\u5e74\u524d\u5c31\u5df2\u5728Github\u5f00\u653e\u4ee3\u7801\u7684AthenaServing\u63a8\u7406\u670d\u52a1\u6846\u67b6"),(0,l.kt)("p",null,"6\u6708\uff0c\u6211\u4eec\u79ef\u6781\u63a8\u8fdb\uff0c\u6700\u7ec8\u96c6\u56e2\u6b63\u5f0f\u6210\u7acb\u4e86",(0,l.kt)("a",{parentName:"p",href:"mailto:ifly_ospo@iflytek.com"},"\u96c6\u56e2\u7684\u5f00\u6e90\u5de5\u4f5c\u7ec4")),(0,l.kt)("p",null,"7\u670825\u65e5\uff0c\u6211\u4eec\u5f00\u5c55\u4e86\u7b2c\u4e00\u6b21\u5f00\u6e90\u5206\u4eab\u4f1a\uff0c\u5206\u4eab\u4f1a\u4e0a\uff0c\u6211\u4eec\u5bf9\u5185\u5ba3\u53d1\u4e86\u5f00\u6e90\u5de5\u4f5c\u6210\u7acb\u7684\u6d88\u606f\uff0c\u540c\u65f6\uff0c\u6211\u4eec\u9080\u8bf7\u4e862\u4f4d\u5f00\u6e90\u5927\u5496\u7ed9\u8baf\u98deer\u4eec\u5206\u4eab\u4e86\u4e00\u4e9b\u975e\u5e38\u6709\u7528\u7684\u5fc3\u8def\u5386\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u5185\u90e8\u53c2\u4e0e\u5f00\u6e90"},"\u5185\u90e8\u53c2\u4e0e\u5f00\u6e90?"),(0,l.kt)("p",null,"\u5728\u96c6\u56e2\u5185\u90e8\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u5957\u57fa\u7840\u7684\u5f00\u6e90\u5de5\u4f5c\u6d41"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/png/VLBDRjD06BpxAVQON2e1jmILSkB2WGVWuYRRU8LPL_PM5JT7RR3D3tPKKbMfAzKghIn-J42bj4bA7WRlP_l4As1dqyf83f8bM_FDUBwTdJM3oJhRUgvAymz98XkezeWmPMkT__mElfC5LybXzA2Ec88fght0Hbr2g25WU7NAFrZD0W3Ru_s398XuD9m3ZqaBKmFV85WrCAfHhL0N7lnbBzi9btlaj0eRX7IyYMM66l7a93dkBluI1N1ysHIQTRdrR5lMspSK69p3-oiXfXh3I2STXJNG_PQcQdf3n-tLTFSR3Dm_qpSySdWl1ESJk6xonIaRRYj4nQXMKWdNp1ocColVdHZ_JhspUk5t2tPqZEag77ojYwCbZWt-P-xs-UNERxCBX-UmFohMB2TL4K55rXLfqpRPa1QlV2nkD9xiyV5UKreQn9qLGHIU-SEl1n06S3I3Ts4yUOsUqhiB2dhOOaIZMUzjSXtTJk-j22diMn2S2EOJkOFBj68VtW_ZwH3yCRSlvcr9hO_fp4kzq_ziLwwCI4-4nkqHdvemzaIOyQ-ZPFSYyytqh9l-68aMYClAIwvjIcjvB7dZ_m80",alt:"img"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u9879\u76ee\u62a5\u5907\u9636\u6bb5")),"\n\u5176\u4e2d\u9879\u76ee\u62a5\u5907\u9636\u6bb5\u6709\u5982\u4e0b\u7ec6\u5206\u6d41\u7a0b:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuG8pk1GKh5uktFbyzhhdKpO_wrfg3HJ8ooz9LIZAJCyeiLAmISxFoI-oAafDiLDusZ_nPTEw9xktFPenpoOpBQSoFh-u8Dy1n2f9pTPBpi-r0-fMA4ejI4qiWHdxTDt25ylRh1MuG58AIOd9sUM9HIaALiyw9p-TFGza7JuBrp_PqVTqJyEpNHEURb_wPE-SvxjRddLCU3fnnhDDyrysp08gUD4uvVdctGesbKcLYNdfvYYkqR41YILdfEOPcQAw4k7CyepCd5G53IHh8Iu6clvYVxkzfa9cCQhiX6MQ80V31TEBKbFpx9xDMAy92altp9ACqgGdkoS_tJNvsTpcbpCd0CFrnVhjm030wKq2lk020eVKl1HWd040",alt:"img"})),(0,l.kt)("p",null,"\u6709\u610f\u5411\u5f00\u6e90\u9700\u8981\u5411",(0,l.kt)("a",{parentName:"p",href:"mailto:ifly_ospo@iflytek.com"},"\u5f00\u6e90\u5de5\u4f5c\u7ec4"),"\u63d0\u4f9b\u5982\u4e0b\u4fe1\u606f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u660e\u786e\u9879\u76ee\u4e3b\u8981\u8d1f\u8d23\u4eba"),(0,l.kt)("li",{parentName:"ol"},"\u5411\u5f00\u6e90\u5de5\u4f5c\u7ec4\u62a5\u5907\u8ba1\u5212\u5f00\u6e90\u5185\u5bb9: \u9879\u76ee\u540d\u79f0\u3001\u52a8\u673a\u3001\u76ee\u6807\uff0c\u9635\u5730\u7b49"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u9879\u76ee\u5927\u81f4\u5185\u5bb9\u4ee5\u53caRoadMap\u4ecb\u7ecd\uff0c\u4ef7\u503c\u5206\u6790\u7b49"),(0,l.kt)("li",{parentName:"ol"},"\u5f97\u5bf9\u5e94\u90e8\u95e8\u9886\u5bfc\u8bb8\u53ef")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9\u5f00\u6e90\u6709\u4efb\u4f55\u7591\u95ee\u7684\u540c\u5b66\uff0c\u4e5f\u53ef\u4ee5\u53d1\u90ae\u4ef6\u81f3",(0,l.kt)("a",{parentName:"p",href:"mailto:ifly_ospo@iflytek.com"},"\u5f00\u6e90\u5de5\u4f5c\u7ec4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u9879\u76ee\u4ee3\u7801\u5185\u90e8\u8bc4\u5ba1"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8d1f\u8d23\u4eba\u5148\u5728\u5185\u90e8\u8bc4\u4f30\u8ba1\u5212\u5f00\u6e90\u4ee3\u7801\u5f00\u6e90\u8303\u56f4\uff0c\u5373\u529f\u80fd\u6e05\u5355(\u6b64\u4e3e\u4e3a\u4fdd\u62a4\u90e8\u5206\u975e\u5e38\u5546\u4e1a\u5316\u9886\u57df\u6838\u5fc3\u4ee3\u7801)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8131\u654f\u3001\u5e76\u53d1\u8d77\u5185\u90e8\u4ee3\u7801\u8bc4\u5ba1"))),(0,l.kt)("p",null,"\u8bc4\u5ba1\u5b9a\u76ee\u6807\u4ea7\u7269:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5426\u53ef\u5f00\u6e90")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u6e90\u529f\u80fd\u6e05\u5355"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f: \u4ee3\u7801\u8bc4\u5ba1\u4f1a\u7531\u9879\u76ee\u8d1f\u8d23\u4eba\u53d1\u8d77\uff0c\u6700\u7ec8\u63d0\u4f9b\u7ed9\u5f00\u6e90\u5de5\u4f5c\u7ec4\u7ed3\u8bba\u5373\u53ef\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u9879\u76ee\u4ee3\u7801\u6210\u5458\u786e\u5b9a"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u786e\u5b9a\u5185\u90e8\u53c2\u4e0e\u4eba\u5458\uff0c\u4ee5\u53ca\u89d2\u8272\u5206\u914d")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5916\u90e8\u6210\u5458\u6839\u636e\u9879\u76ee\u8d1f\u8d23\u4eba\u9080\u8bf7\u81ea\u884c\u8ba4\u5b9a\uff0c\u4f46\u5fc5\u987b\u4fdd\u8bc1\u7ecf\u8fc7\u4e00\u7cfb\u5217\u6709\u6548\u4ee3\u7801\u63d0\u4ea4\u3002\u5916\u90e8\u4f18\u79c0\u5f00\u53d1\u8005\uff0c\u53ef\u6839\u636e\u63d0\u4ea4\u6570\u91cf\u3001\u8d28\u91cf\u5411\u5de5\u4f5c\u7ec4\u63a8\u8350\u9080\u8bf7\u8fdb\u5165Github \u8baf\u98de\u5f00\u6e90\u7ec4\u7ec7\u3002 (\u6b64\u5de5\u4f5c\u6d41\u5f85\u5b8c\u5584)"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u7248\u672c\u53d1\u5e03\u3001\u66f4\u65b0"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f00\u6e90\u7684\u9879\u76ee\u7248\u672c\u53d1\u5e03\u3001\u66f4\u65b0\u7b56\u7565\u7531\u9879\u76ee\u8d1f\u8d23\u4eba\u81ea\u884c\u63a7\u5236"),(0,l.kt)("li",{parentName:"ol"},"\u7531\u5185\u90e8\u9879\u76ee\u6f14\u5316\u800c\u6765\u7684\u5f00\u6e90\u9879\u76ee\u66f4\u65b0\u65f6\uff0c\u4ea6\u9700\u8981\u7ecf\u8fc7\u5185\u90e8\u4ee3\u7801\u5ba1\u6838\u786e\u4fdd\u529f\u80fd\u6e05\u5355\u5408\u89c4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Github\u4ed3\u5e93"))),(0,l.kt)("p",null,"\u96c6\u56e2\u7edf\u4e00\u5f00\u6e90\u7ec4\u7ec7\u4e3a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iflytek"},"iflytek"),"\uff0c \u5f53\u524d\u7ec4\u7ec7\u7ba1\u7406\u5458\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"mailto:ybyang7@iflytek.com"},"ybyang7")),(0,l.kt)("p",null,"\u539f\u5219\u4e0a\uff0c\u540e\u7eed\u4ee5\u516c\u53f8\u540d\u4e49\u5f00\u6e90\u7684\u65b0\u9879\u76ee\u9700\u8981\u7edf\u4e00\u5728\u6b64\u7ec4\u7ec7\u4e0b\u7ef4\u62a4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Github Member\u6743\u9650\u7533\u8bf7"))),(0,l.kt)("p",null,"Github iflytek\u7ec4\u7ec7Member\u7684\u6743\u9650\u7533\u8bf7\uff0c\u53ef\u4ee5\u53d1\u90ae\u4ef6\u81f3",(0,l.kt)("a",{parentName:"p",href:"mailto:ifly_ospo@iflytek.com"},"ifly_ospo")," "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u6b64\u6d41\u7a0b\u4e3a\u5185\u90e8\u5458\u5de5\u6d41\u7a0b\uff0c \u5916\u90e8\u5f00\u53d1\u8005\u8fdb\u5165\u7ec4\u7ec7\u6743\u9650\u5c06\u4ee5github workflow\u5f62\u5f0f\u81ea\u52a8\u5316\u52a0\u5165"))),(0,l.kt)("p",null,"\u90ae\u4ef6\u5185\u5bb9\u9700\u63d0\u4f9b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5df2\u5f00\u6e90\u3001\u6216\u8005\u8ba1\u5212\u5f00\u6e90\u9879\u76ee\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ol"},"\u57df\u8d26\u53f7\u4ee5\u53cagithub\u8d26\u6237\u540d"),(0,l.kt)("li",{parentName:"ol"},"\u4e2a\u4eba\u804c\u4f4d\u89d2\u8272\u4ee5\u53ca\u90e8\u95e8\u4fe1\u606f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Github\u9879\u76ee\u76ee\u5f55"))),(0,l.kt)("p",null,"\u4e0d\u540c\u8bed\u8a00\u6709\u4e0d\u540c\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u9664\u4e86\u57fa\u7840\u7684\u4ee3\u7801\u90e8\u5206\uff0c\u9879\u76ee\u76ee\u5f55\u63a8\u8350\u63d0\u4f9b\u5982\u4e0b\u6587\u4ef6:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/iflytek/opensource_templates/blob/master/README.md"},"Readme.md"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/iflytek/opensource_templates/blob/master/LICENSE"},"LICENSE\u6587\u4ef6"),": \u4e00\u822c\u63a8\u4ecb(Apache2.0License)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},".github/workflows/build.yml"),"\u6587\u4ef6: Github Action\u914d\u7f6e\u6587\u4ef6\uff0c\u591a\u7528\u4e8e\u81ea\u52a8\u6784\u5efa")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},".github/workflows/release.yml"),"\u6587\u4ef6: Github Action\u914d\u7f6e\u6587\u4ef6\uff0c\u591a\u7528\u4e8e\u81ea\u52a8\u53d1\u5e03"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/iflytek/opensource_templates"},"\u76ee\u5f55\u793a\u4f8b")),(0,l.kt)("p",null,"CI\u9875\u9762\u793a\u4f8b:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ci",src:n(8306).Z,width:"1886",height:"879"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u9759\u6001\u6587\u6863\u7f51\u7ad9\u6258\u7ba1\u914d\u7f6e"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(3236).Z,width:"1909",height:"852"})),(0,l.kt)("p",null,"Github\u63d0\u4f9b\u4e86\u975e\u5e38\u6613\u7528\u7684\u9759\u6001\u7f51\u7ad9\u6258\u7ba1\u529f\u80fd\uff0c\u914d\u5408Github\u7684CI\u5de5\u5177: ",(0,l.kt)("inlineCode",{parentName:"p"},"Github Action"),"\n\u4ee5\u53ca\u4e00\u4e9b\u4e09\u65b9\u6587\u6863\u751f\u6210\u5de5\u5177\u5982: ",(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"\uff0c ",(0,l.kt)("a",{parentName:"p",href:"https://www.mkdocs.org/"},"mkdocs"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://iflytek.github.io/athena_website/"},"ASF Website"),"\u5c31\u662f\u5229\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"\u6784\u5efa\uff0c\u5e76\u6258\u7ba1\u5728github pages\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u5468\u4f1a\u673a\u5236"))),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u4e2a\u5c42\u9762\u5468\u4f1a:"),(0,l.kt)("p",null,"1: \u5f00\u6e90\u7ef4\u62a4\u8005\u4ea4\u6d41\u5468\u4f1a(\u5185\u90e8\u89c6\u89d2): \u662f\u9700\u8981\u5b9a\u671f\u5411\u96c6\u56e2\u6c47\u62a5\u5f00\u6e90\u8fdb\u5c55\u7684\u53cc\u5468\u4f1a(\u5468\u671f\u5f85\u8c03\u6574)\n\u96c6\u56e2\u5185\u90e8\u5f00\u6e90\u9879\u76ee\u8d1f\u8d23\u4eba\u9700\u8981\u7edf\u4e00\u52a0\u5165\u5f00\u6e90\u4ea4\u6d41\u7fa4\uff0c\u5e76\u5b9a\u671f\u62a5\u544a\u8fdb\u5c55\u3002"),(0,l.kt)("p",null,"2: \u9879\u76ee\u81ea\u8eab\u5468\u4f1a\u673a\u5236: \u9700\u8981\u9879\u76ee\u8d1f\u8d23\u4eba\u6839\u636e\u5404\u81ea\u9879\u76ee\u5f00\u6e90\u8fdb\u7a0b\u81ea\u884c\u53d1\u8d77\u5e76\u5f00\u5c55\uff0c\u63a8\u8350\u4ee5\u516c\u5f00\u5728\u7ebf\u4f1a\u8bae\u65b9\u5f0f\u5f00\u5c55\uff0c\u5468\u671f\u53ef\u4ee5\u4e0d\u7528\u592a\u9891\u7e41"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u81ea\u8fd0\u8425"))),(0,l.kt)("p",null,"\u5f00\u6e90\u5de5\u4f5c\u7ec4\u63d0\u4f9b\u96c6\u56e2\u7edf\u4e00\u5f00\u6e90\u9635\u5730\u4ee5\u53ca\u95e8\u6237\uff0c\u6307\u5bfc\u5e76\u89c4\u8303\u6bcf\u4e2a\u5f00\u6e90\u9879\u76ee\u7684\u57fa\u7840\u914d\u7f6e\uff0c\u4f46\u771f\u6b63\u7684\u9879\u76ee\u662f\u5426\u80fd\u591f\u826f\u6027\u8fd0\u8425\u53d6\u51b3\u4e8e\u9879\u76ee\u53d1\u8d77\u4eba\u53ca\u5176\u90e8\u95e8\u5bf9\u8be5\u5f00\u6e90\u9879\u76ee\u7684\u5b9a\u4f4d\u548c\u4ef7\u503c\u5206\u6790\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u53ef\u89c2\u7684RoadMap\u3002 \u5f00\u6e90\u867d\u7136\u770b\u8d77\u6765\u4f3c\u4e4e\u5f88\u7b80\u5355\uff0c\u4f46\u5b83\u662f\u4e00\u4e2a\u9700\u8981\u957f\u671f\u6295\u5165\u7684\u4e8b\u60c5\uff0c\u540c\u65f6\u505a\u597d\u4e86\u4e5f\u662f\u4e00\u4ef6\u5bf9\u4f01\u4e1a\u5f71\u54cd\u529b\uff0c\u4e2a\u4eba\u5f71\u54cd\u529b\u6709\u6781\u5927\u52a0\u6210\u7684\u4e8b\u60c5"),(0,l.kt)("h2",{id:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90-\u9700\u8981\u5b66\u4f1a\u54ea\u4e9bgithub\u64cd\u4f5c"},"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90? \u9700\u8981\u5b66\u4f1a\u54ea\u4e9bGithub\u64cd\u4f5c\uff1f"),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://iflytek.github.io/athena_website/en/blog/git"},"\u5982\u4f55\u4ece0\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee")),(0,l.kt)("h2",{id:"\u5199\u5728\u7ed3\u5c3e"},"\u5199\u5728\u7ed3\u5c3e"),(0,l.kt)("p",null,"\u5f00\u6e90\u7684\u5de5\u4f5c\u662f\u4e00\u4e2a\u975e\u5e38Open\u7684\u5de5\u4f5c\uff0c\u867d\u7136\u5f88\u591a\u65f6\u5019\u662f\u6211\u4eec\u7801\u519c\u62bd\u53d6\u81ea\u5df1\u7684\u975e\u5de5\u4f5c\u65f6\u95f4\u6765\u53c2\u4e0e\uff0c\u6211\u53f8\u867d\u7136\u6ca1\u6709\u4e13\u95e8\u7684\u5f00\u6e90\u5c97\u4f4d\uff0c\u4f46\u662f\u5f00\u6e90\u672c\u8eab\u8fd9\u4e2a\u4e8b\u60c5\u5728\u4e1a\u754c\u5f71\u54cd\u529b\u5bf9\u4e8e\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\u4e5f\u6709\u76ee\u5171\u7779\u3002\u76f8\u4fe1\u6709\u4e00\u5929\uff0c\u6211\u53f8\u4f1a\u4e3a\u5f00\u6e90\u4e13\u95e8\u8bbe\u7acb\u5c97\u4f4d\uff0c\u8fd9\u4e00\u5929\u9700\u8981\u6bcf\u4f4d\u6709\u5174\u8da3\u53c2\u4e0e\u5f00\u6e90\u7684\u540c\u4e8b\u5171\u540c\u52aa\u529b\uff0c\u8fd9\u4e00\u5929\u4e00\u5b9a\u4e0d\u4f1a\u8fdc\u3002 "),(0,l.kt)("p",null,"\u4e07\u4e8b\u5f00\u5934\u96be\uff0c \u6211\u4eec\u5728\u5f88\u591a\u9886\u57df\u6280\u672f\u4e0a\u90fd\u6709\u4e00\u4e9b\u8d77\u4e86\u4e2a\u5927\u65e9\uff0c\u5374\u8d76\u4e86\u4e2a\u665a\u96c6\uff0c\u5f88\u5927\u539f\u56e0\u662f\u7531\u4e8e\u6211\u4eec\u6ca1\u6709\u575a\u6301\uff0c\u53e6\u5916\u6211\u4eec\u4e0d\u65ad\u7684\u7ed9\u81ea\u5df1\u8bbe\u9650\uff0c\u5426\u5b9a\u81ea\u5df1\uff0c\u6211\u4eec\u5f00\u6e90\u4e0d\u4f1a\u6210\u529f\uff0c\u6ca1\u6709\u51fa\u8def\u7684\u601d\u60f3\u7ecf\u5e38\u8426\u7ed5\u5728\u6211\u4eec\u773c\u5e18\uff0c\u627e\u4e0d\u5230\u5f00\u6e90\u7684\u51fa\u8def\u548c\u601d\u8def\u3002"),(0,l.kt)("p",null,"\u5f00\u6e90\u867d\u96be\uff0c\u4f46\u672a\u6765\u53ef\u671f\uff01"))}u.isMDXComponent=!0},8306:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ci-7da2a720697d606b10040448cacee0ef.png"},3236:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/docwebsite-4e7658f185908d1d242dd06cdd595273.png"}}]);