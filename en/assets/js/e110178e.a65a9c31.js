"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[3240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"Introduce"},o="Introduce",l={unversionedId:"\u914d\u7f6e\u4e2d\u5fc3/polaris",id:"version-2.1.0/\u914d\u7f6e\u4e2d\u5fc3/polaris",title:"Introduce",description:"Core functions",source:"@site/versioned_docs/version-2.1.0/\u914d\u7f6e\u4e2d\u5fc3/polaris.md",sourceDirName:"\u914d\u7f6e\u4e2d\u5fc3",slug:"/\u914d\u7f6e\u4e2d\u5fc3/polaris",permalink:"/athena_website/en/docs/2.1.0/\u914d\u7f6e\u4e2d\u5fc3/polaris",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/versioned_docs/version-2.1.0/\u914d\u7f6e\u4e2d\u5fc3/polaris.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduce"},sidebar:"docSidebar",previous:{title:"Configuration Center",permalink:"/athena_website/en/docs/2.1.0/category/configuration-center"},next:{title:"Deployment Documentation",permalink:"/athena_website/en/docs/2.1.0/\u914d\u7f6e\u4e2d\u5fc3/install"}},s={},p=[{value:"Core functions",id:"core-functions",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"core module",id:"core-module",level:2},{value:"How to Cite <strong>Polaris</strong> in Your Project",id:"how-to-cite-polaris-in-your-project",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduce"},"Introduce"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3798).Z,width:"1847",height:"827"})),(0,a.kt)("h2",{id:"core-functions"},"Core functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dynamic Config"),(0,a.kt)("li",{parentName:"ul"},"Service Registration, Service Discovery")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full category for managing service"),(0,a.kt)("li",{parentName:"ul"},"Support multiple versions of service configuration"),(0,a.kt)("li",{parentName:"ul"},"Support configuration rollback"),(0,a.kt)("li",{parentName:"ul"},"Support feedback for pushing config"),(0,a.kt)("li",{parentName:"ul"},"Support online management of Provider/Consumer"),(0,a.kt)("li",{parentName:"ul"},"High availability"),(0,a.kt)("li",{parentName:"ul"},"Quick integration"),(0,a.kt)("li",{parentName:"ul"},"Support Docker/k8s deployment")),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5577).Z,width:"1720",height:"938"})),(0,a.kt)("h2",{id:"core-module"},"core module"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cynosure")),(0,a.kt)("p",{parentName:"li"},"This module is used to manage some basic data and configuration, and provides a visual configuration center operation page."),(0,a.kt)("p",{parentName:"li"},"You can use it to create Region, cluster information, service configuration, etc."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(7929).Z,width:"1847",height:"827"})))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![](img/15138461728383.jpg)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Finder(SDK with go/java/c++)")),(0,a.kt)("p",{parentName:"li"},"Client SDK, used for client side integrated configuration center and service discovery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Companion")),(0,a.kt)("p",{parentName:"li"},"This module is used to manipulate components that interact with zookeeper."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Case #1: Service Discovery")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6181).Z,width:"762",height:"642"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Case #2: Configuration Push")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6370).Z,width:"866",height:"652"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Case #3 Feedback?")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9922).Z,width:"770",height:"656"})))),(0,a.kt)("h2",{id:"how-to-cite-polaris-in-your-project"},"How to Cite ",(0,a.kt)("strong",{parentName:"h2"},"Polaris")," in Your Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"You can get from "),(0,a.kt)("a",{parentName:"p",href:"/athena_website/en/docs/2.1.0/%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83/install"},"install.md")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"SDK"),"[supported]"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Beginning it with the Finder SDK as you know, here are some examples in golang. More detail code has uploaded and you can view from "),(0,a.kt)("a",{parentName:"p",href:"http://git.xfyun.cn/AIaaS/finder-go/src/master/example/demo.go"},"finder-go/example/demo.go")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    package main\n    import (\n           "encoding/json"\n           "finder-go"\n           "finder-go/common"\n           "finder-go/utils/httputil"\n           "fmt"\n           "net"\n           "net/http"\n           "os"\n           "time"\n    )    \n    func main() {\n       cachePath, err := os.Getwd()\n       if err != nil {\n          return\n       }        \n        \n       cachePath += "/findercache"\n       config := common.BootConfig{\n          CompanionUrl:     "http://    10.1.86.223:9080",\n          CachePath:        cachePath,\n          TickerDuration:   5000,\n          ZkSessionTimeout: 1000 * time.Second,\n          ZkConnectTimeout: 300 * time.Second,\n          ZkMaxSleepTime:   15 * time.Second,\n          ZkMaxRetryNum:    3,\n          MeteData: &common.ServiceMeteData{\n             Project: "test",\n             Group:   "default",\n             Service: "xsf",\n             Version: "1.0.0",\n             Address: "192.168.1.2:9091",\n          },\n       }    \n       \n       f, err := finder.NewFinder(config)\n       if err != nil {\n          fmt.Println(err)\n       }       \n       \n       // use config with watcher\n       handler := new(ConfigChangedHandle)\n       configFiles, err := f.ConfigFinder.UseAndSubscribeConfig([]string{"default.cfg", "xsfc.tmol"}, handler)     \n       \n       // register service \n       err = f.ServiceFinder.RegisterService()\n       if err != nil {\n          fmt.Println(err)\n       }       \n       \n       // describe service\n       handler := new(ServiceChangedHandle)\n       serviceList, err = f.ServiceFinder.UseAndSubscribeService([]string{"xsf"}, handler)\n       if err != nil {\n          fmt.Println(err)\n       }       \n       \n       //todo business...\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Agent"),"[planning]"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Also,you can have an integration with our agent without coding. This is in the planning stage already.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(697).Z,width:"1092",height:"1264"})))}u.isMDXComponent=!0},5577:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/15138432239107-b2efc17fb6f6ea0742dfda0aac64b135.jpg"},6181:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/15138469634925-749600d1e08b2e21ffd2e4d823030eac.jpg"},6370:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/15138470006112-888d9073821806a28d75017e5ef365a2.jpg"},9922:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/15138470283686-47d61d4023d0812f03b203b3481d1e2f.jpg"},697:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/15138545464059-125b6280019b112906bf51d92087542f.jpg"},3798:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/polaris-w-a77a193920cededa9f8485b7d506fe26.png"},7929:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/polaris-a77a193920cededa9f8485b7d506fe26.png"}}]);