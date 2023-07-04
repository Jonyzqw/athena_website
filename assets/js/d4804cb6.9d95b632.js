"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[2335],{3905:(e,t,o)=>{o.d(t,{Zo:()=>x,kt:()=>d});var s=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,s,r=function(e,t){if(null==e)return{};var o,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)o=a[s],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=s.createContext({}),i=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},x=function(e){var t=i(e.components);return s.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,x=c(e,["components","mdxType","originalType","parentName"]),u=i(o),d=r,p=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return o?s.createElement(p,n(n({ref:t},x),{},{components:o})):s.createElement(p,n({ref:t},x))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,n=new Array(a);n[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,n[1]=c;for(var i=2;i<a;i++)n[i]=o[i];return s.createElement.apply(null,n)}return s.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5145:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var s=o(7462),r=(o(7294),o(3905));const a={slug:"sealos4-athenaserving",title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",authors:["ybyang7"],tags:["sealos","ai","sealos4","athenaserving"]},n="\u524d\u7f6e\u6761\u4ef6",c={permalink:"/athena_website/blog/sealos4-athenaserving",editUrl:"https://github.com/iflytek/athena_website/tree/master/blog/2022-07-15-sealos4.md",source:"@site/blog/2022-07-15-sealos4.md",title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",description:"\u51c6\u5907\u4e00\u53f0\u6d4b\u8bd5\u673a(4c8G),\u786c\u76d8>=20G\u5373\u53ef",date:"2022-07-15T00:00:00.000Z",formattedDate:"2022\u5e747\u670815\u65e5",tags:[{label:"sealos",permalink:"/athena_website/blog/tags/sealos"},{label:"ai",permalink:"/athena_website/blog/tags/ai"},{label:"sealos4",permalink:"/athena_website/blog/tags/sealos-4"},{label:"athenaserving",permalink:"/athena_website/blog/tags/athenaserving"}],readingTime:5.265,hasTruncateMarker:!1,authors:[{name:"ybyang7",title:"Opensource AI Engineer",url:"https://github.com/berlinsaint",imageURL:"https://avatars.githubusercontent.com/u/10629930?v=4",key:"ybyang7"}],frontMatter:{slug:"sealos4-athenaserving",title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",authors:["ybyang7"],tags:["sealos","ai","sealos4","athenaserving"]},prevItem:{title:"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6",permalink:"/athena_website/blog/music/api"},nextItem:{title:"\u5feb\u901f\u5728AthenaServing\u6846\u67b6\u4e2d\u90e8\u7f72YoLoV7",permalink:"/athena_website/blog/yolov7"}},l={authorsImageUrls:[void 0]},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}],x={toc:i};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u51c6\u5907\u4e00\u53f0\u6d4b\u8bd5\u673a(4c8G),\u786c\u76d8>=20G\u5373\u53ef"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5sealos.4.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"}," wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos &&  chmod +x sealos && mv sealos /usr/bin")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u96c6\u7fa4")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/kubernetes:v1.19.16 labring/calico:v3.22.1   --masters 192.168.64.2 -p <password>"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(3804).Z,width:"1497",height:"271"}),"\n",(0,r.kt)("img",{alt:"img2",src:o(9296).Z,width:"1542",height:"625"}),"\n",(0,r.kt)("img",{alt:"img2",src:o(3891).Z,width:"1064",height:"469"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/helm:v3.8.2 # install helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/openebs:v1.9.0 # install openebs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run registry.cn-qingdao.aliyuncs.com/labring/athenaserving:v2.0.0rc1"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528AI demo\u80fd\u529b MMOCR\u80fd\u529b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/lib/sealos/data/default/rootfs/athenaserving/charts/mmocr_ase\n# \u4fee\u6539 demo.py\u4e2d\u7684 url\u90e8\u5206\u4e3a nodeIP\npython3 demo.py\n")),(0,r.kt)("p",null,"\u8c03\u7528\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"200\nHTTP API response is : [{'filename': '0', 'result': [{'box': [190, 37, 253, 31, 254, 46, 191, 52], 'box_score': 0.9566415548324585, 'text': 'nboroughofs', 'text_score': 1.0}, {'box': [253, 47, 257, 36, 287, 47, 282, 58], 'box_score': 0.9649642705917358, 'text': 'fsouthw', 'text_score': 1.0}, {'box': [157, 59, 188, 41, 194, 52, 163, 70], 'box_score': 0.9521175622940063, 'text': 'londond', 'text_score': 0.9897959183673469}, {'box': [280, 58, 286, 50, 306, 67, 300, 74], 'box_score': 0.9397556781768799, 'text': 'thwark', 'text_score': 1.0}, {'box': [252, 78, 295, 78, 295, 98, 252, 98], 'box_score': 0.9694718718528748, 'text': 'hill', 'text_score': 1.0}, {'box': [165, 78, 247, 78, 247, 99, 165, 99], 'box_score': 0.9548642039299011, 'text': 'octavia', 'text_score': 1.0}, {'box': [164, 105, 215, 103, 216, 121, 165, 123], 'box_score': 0.9806956052780151, 'text': 'social', 'text_score': 1.0}, {'box': [219, 104, 294, 104, 294, 122, 219, 122], 'box_score': 0.9688025116920471, 'text': 'reformer', 'text_score': 1.0}, {'box': [150, 124, 226, 124, 226, 141, 150, 141], 'box_score': 0.9752051830291748, 'text': 'established', 'text_score': 1.0}, {'box': [229, 124, 255, 124, 255, 140, 229, 140], 'box_score': 0.94972825050354, 'text': 'this', 'text_score': 1.0}, {'box': [259, 125, 305, 123, 306, 139, 260, 142], 'box_score': 0.9752089977264404, 'text': 'garden', 'text_score': 1.1666666666666667}, {'box': [166, 142, 193, 141, 194, 156, 167, 157], 'box_score': 0.9731062650680542, 'text': 'hall', 'text_score': 1.0}, {'box': [198, 142, 223, 142, 223, 156, 198, 156], 'box_score': 0.9548938870429993, 'text': 'and', 'text_score': 1.0}, {'box': [228, 144, 286, 144, 286, 159, 228, 159], 'box_score': 0.977089524269104, 'text': 'cottages', 'text_score': 1.25}, {'box': [180, 158, 205, 158, 205, 172, 180, 172], 'box_score': 0.9400062561035156, 'text': 'and', 'text_score': 1.0}, {'box': [210, 160, 279, 158, 279, 172, 210, 174], 'box_score': 0.9543584585189819, 'text': 'pioneered', 'text_score': 1.0}, {'box': [226, 176, 277, 176, 277, 188, 226, 188], 'box_score': 0.9748533964157104, 'text': 'cadets', 'text_score': 1.0}, {'box': [183, 177, 223, 177, 223, 189, 183, 189], 'box_score': 0.9633153676986694, 'text': 'army', 'text_score': 1.0}, {'box': [201, 190, 235, 190, 235, 204, 201, 204], 'box_score': 0.9714152216911316, 'text': '1887', 'text_score': 1.25}, {'box': [175, 213, 180, 201, 211, 212, 206, 225], 'box_score': 0.9704344868659973, 'text': 'vted', 'text_score': 0.9191176470588236}, {'box': [241, 213, 278, 200, 283, 213, 246, 227], 'box_score': 0.9607459902763367, 'text': 'epeople', 'text_score': 1.0}, {'box': [208, 224, 210, 212, 223, 214, 220, 227], 'box_score': 0.9337806701660156, 'text': 'by', 'text_score': 1.0}, {'box': [223, 214, 240, 214, 240, 226, 223, 226], 'box_score': 0.969144344329834, 'text': 'the', 'text_score': 1.0}]}]\n########################################\nMMocr Result: box located at [190, 37, 253, 31, 254, 46, 191, 52], box score is 0.9566415548324585.  Detected text is nboroughofs , text  score is 1.0...\nMMocr Result: box located at [253, 47, 257, 36, 287, 47, 282, 58], box score is 0.9649642705917358.  Detected text is fsouthw , text  score is 1.0...\nMMocr Result: box located at [157, 59, 188, 41, 194, 52, 163, 70], box score is 0.9521175622940063.  Detected text is londond , text  score is 0.9897959183673469...\nMMocr Result: box located at [280, 58, 286, 50, 306, 67, 300, 74], box score is 0.9397556781768799.  Detected text is thwark , text  score is 1.0...\nMMocr Result: box located at [252, 78, 295, 78, 295, 98, 252, 98], box score is 0.9694718718528748.  Detected text is hill , text  score is 1.0...\nMMocr Result: box located at [165, 78, 247, 78, 247, 99, 165, 99], box score is 0.9548642039299011.  Detected text is octavia , text  score is 1.0...\nMMocr Result: box located at [164, 105, 215, 103, 216, 121, 165, 123], box score is 0.9806956052780151.  Detected text is social , text  score is 1.0...\nMMocr Result: box located at [219, 104, 294, 104, 294, 122, 219, 122], box score is 0.9688025116920471.  Detected text is reformer , text  score is 1.0...\nMMocr Result: box located at [150, 124, 226, 124, 226, 141, 150, 141], box score is 0.9752051830291748.  Detected text is established , text  score is 1.0...\nMMocr Result: box located at [229, 124, 255, 124, 255, 140, 229, 140], box score is 0.94972825050354.  Detected text is this , text  score is 1.0...\nMMocr Result: box located at [259, 125, 305, 123, 306, 139, 260, 142], box score is 0.9752089977264404.  Detected text is garden , text  score is 1.1666666666666667...\nMMocr Result: box located at [166, 142, 193, 141, 194, 156, 167, 157], box score is 0.9731062650680542.  Detected text is hall , text  score is 1.0...\nMMocr Result: box located at [198, 142, 223, 142, 223, 156, 198, 156], box score is 0.9548938870429993.  Detected text is and , text  score is 1.0...\nMMocr Result: box located at [228, 144, 286, 144, 286, 159, 228, 159], box score is 0.977089524269104.  Detected text is cottages , text  score is 1.25...\nMMocr Result: box located at [180, 158, 205, 158, 205, 172, 180, 172], box score is 0.9400062561035156.  Detected text is and , text  score is 1.0...\nMMocr Result: box located at [210, 160, 279, 158, 279, 172, 210, 174], box score is 0.9543584585189819.  Detected text is pioneered , text  score is 1.0...\nMMocr Result: box located at [226, 176, 277, 176, 277, 188, 226, 188], box score is 0.9748533964157104.  Detected text is cadets , text  score is 1.0...\nMMocr Result: box located at [183, 177, 223, 177, 223, 189, 183, 189], box score is 0.9633153676986694.  Detected text is army , text  score is 1.0...\nMMocr Result: box located at [201, 190, 235, 190, 235, 204, 201, 204], box score is 0.9714152216911316.  Detected text is 1887 , text  score is 1.25...\nMMocr Result: box located at [175, 213, 180, 201, 211, 212, 206, 225], box score is 0.9704344868659973.  Detected text is vted , text  score is 0.9191176470588236...\nMMocr Result: box located at [241, 213, 278, 200, 283, 213, 246, 227], box score is 0.9607459902763367.  Detected text is epeople , text  score is 1.0...\nMMocr Result: box located at [208, 224, 210, 212, 223, 214, 220, 227], box score is 0.9337806701660156.  Detected text is by , text  score is 1.0...\nMMocr Result: box located at [223, 214, 240, 214, 240, 226, 223, 226], box score is 0.969144344329834.  Detected text is the , text  score is 1.0...\n")))}b.isMDXComponent=!0},9296:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/sealos4-run-k8s-2-97ee55405c9372fe1c382b7fb8f4f002.png"},3891:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/sealos4-run-k8s-3-844e7986a2f4a037d2a3a9da07e29ba1.png"},3804:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/sealos4-run-k8s-3c401909adde6b30aa8953c31bfd3291.png"}}]);