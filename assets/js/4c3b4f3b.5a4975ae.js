"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[1395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=s,d=u["".concat(i,".").concat(h)]||u[h]||c[h]||l;return a?n.createElement(d,r(r({ref:t},m),{},{components:a})):n.createElement(d,r({ref:t},m))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const l={slug:"aws-sealos-3",title:"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)",authors:"sea-wyq",tags:["sealos","aws"]},r=void 0,o={permalink:"/athena_website/blog/aws-sealos-3",editUrl:"https://github.com/iflytek/athena_website/tree/master/blog/2022-07-14-sealos-aws.md",source:"@site/blog/2022-07-14-sealos-aws.md",title:"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)",description:"1. \u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90",date:"2022-07-14T00:00:00.000Z",formattedDate:"2022\u5e747\u670814\u65e5",tags:[{label:"sealos",permalink:"/athena_website/blog/tags/sealos"},{label:"aws",permalink:"/athena_website/blog/tags/aws"}],readingTime:1.55,hasTruncateMarker:!1,authors:[{name:"sea-wyq",title:"Opensource AI Engineer",url:"https://github.com/sea-wyq",imageURL:"https://avatars.githubusercontent.com/u/22475606?v=4",key:"sea-wyq"}],frontMatter:{slug:"aws-sealos-3",title:"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)",authors:"sea-wyq",tags:["sealos","aws"]},prevItem:{title:"\u5feb\u901f\u5728AthenaServing\u6846\u67b6\u4e2d\u90e8\u7f72YoLoV7",permalink:"/athena_website/blog/yolov7"},nextItem:{title:"Welcome",permalink:"/athena_website/blog/welcome"}},i={authorsImageUrls:[void 0]},p=[{value:"1. \u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90",id:"1-\u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90",level:2},{value:"2. \u4f7f\u7528sealos\u90e8\u7f72k8s\u96c6\u7fa4",id:"2-\u4f7f\u7528sealos\u90e8\u7f72k8s\u96c6\u7fa4",level:2},{value:"2.1. \u5173\u95ed\u9632\u706b\u5899\u548cselinux :All",id:"21-\u5173\u95ed\u9632\u706b\u5899\u548cselinux-all",level:4},{value:"2.2 \u521b\u5efa\u865a\u62df\u673a\u4e4b\u540e\uff0c\u914d\u7f6e\u4e3b\u673a\u540d\uff0c\u914d\u7f6e\u5185\u7f51\u89e3\u6790:All",id:"22-\u521b\u5efa\u865a\u62df\u673a\u4e4b\u540e\u914d\u7f6e\u4e3b\u673a\u540d\u914d\u7f6e\u5185\u7f51\u89e3\u6790all",level:4},{value:"2.3.\u914d\u7f6ehosts\u6587\u4ef6:Master",id:"23\u914d\u7f6ehosts\u6587\u4ef6master",level:4},{value:"2.4.\u914d\u7f6emaster\u514d\u5bc6\u767b\u5f55\u5404\u8282\u70b9\uff1aMaster",id:"24\u914d\u7f6emaster\u514d\u5bc6\u767b\u5f55\u5404\u8282\u70b9master",level:4},{value:"2.5. \u4e0b\u8f7d\u5e76\u5b89\u88c5sealos-3.9\u5e76\u90e8\u7f72\u4e00\u4e2a\u4e00\u4e3b\u4e00\u4ece\u7684k8s\u96c6\u7fa4",id:"25-\u4e0b\u8f7d\u5e76\u5b89\u88c5sealos-39\u5e76\u90e8\u7f72\u4e00\u4e2a\u4e00\u4e3b\u4e00\u4ece\u7684k8s\u96c6\u7fa4",level:4},{value:"2.6. \u5b89\u88ddhelm",id:"26-\u5b89\u88ddhelm",level:4},{value:"2.7 helm\u5b89\u88c5\u672c\u5730\u6301\u4e45\u5316\u5b58\u50a8openebs\u670d\u52a1",id:"27-helm\u5b89\u88c5\u672c\u5730\u6301\u4e45\u5316\u5b58\u50a8openebs\u670d\u52a1",level:4},{value:"2.8. \u901a\u8fc7helm\u5b89\u88c5athena\u670d\u52a1",id:"28-\u901a\u8fc7helm\u5b89\u88c5athena\u670d\u52a1",level:4}],m={toc:p};function c(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-\u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90"},"1. \u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(3998).Z,width:"1655",height:"63"})),(0,s.kt)("h2",{id:"2-\u4f7f\u7528sealos\u90e8\u7f72k8s\u96c6\u7fa4"},"2. \u4f7f\u7528sealos\u90e8\u7f72k8s\u96c6\u7fa4"),(0,s.kt)("h4",{id:"21-\u5173\u95ed\u9632\u706b\u5899\u548cselinux-all"},"2.1. \u5173\u95ed\u9632\u706b\u5899\u548cselinux :All"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"systemctl stop firewalld \nsystemctl disable firewalld \nsetenforce 0\n")),(0,s.kt)("h4",{id:"22-\u521b\u5efa\u865a\u62df\u673a\u4e4b\u540e\u914d\u7f6e\u4e3b\u673a\u540d\u914d\u7f6e\u5185\u7f51\u89e3\u6790all"},"2.2 \u521b\u5efa\u865a\u62df\u673a\u4e4b\u540e\uff0c\u914d\u7f6e\u4e3b\u673a\u540d\uff0c\u914d\u7f6e\u5185\u7f51\u89e3\u6790:All"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"hostnamectl set-hostname master \nhostnamectl set-hostname node1\n")),(0,s.kt)("h4",{id:"23\u914d\u7f6ehosts\u6587\u4ef6master"},"2.3.\u914d\u7f6ehosts\u6587\u4ef6:Master"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# \u8282\u70b9ip\u901a\u8fc7\u5404\u8282\u70b9ipconfig\u83b7\u53d6\ncat <<EOF >> /etc/hosts  \n172.31.1.36 master  \n172.31.11.161 node1   \nEOF\n")),(0,s.kt)("h4",{id:"24\u914d\u7f6emaster\u514d\u5bc6\u767b\u5f55\u5404\u8282\u70b9master"},"2.4.\u914d\u7f6emaster\u514d\u5bc6\u767b\u5f55\u5404\u8282\u70b9\uff1aMaster"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ssh-keygen\nssh-copy-id root@master \nssh-copy-id root@node1 \n")),(0,s.kt)("h4",{id:"25-\u4e0b\u8f7d\u5e76\u5b89\u88c5sealos-39\u5e76\u90e8\u7f72\u4e00\u4e2a\u4e00\u4e3b\u4e00\u4ece\u7684k8s\u96c6\u7fa4"},"2.5. \u4e0b\u8f7d\u5e76\u5b89\u88c5sealos-3.9\u5e76\u90e8\u7f72\u4e00\u4e2a\u4e00\u4e3b\u4e00\u4ece\u7684k8s\u96c6\u7fa4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# \u4e0b\u8f7dsealos\nwget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos/latest/sealos && \n    chmod +x sealos && mv sealos /usr/bin\n\n# \u4e0b\u8f7dkubelete-1.22\u7248\u672c\u79bb\u7ebf\u8d44\u6e90\u5305\nwget -c https://sealyun.oss-cn-beijing.aliyuncs.com/05a3db657821277f5f3b92d834bbaf98-v1.22.0/kube1.22.0.tar.gz\n\n# \u90e8\u7f72k8s\u96c6\u7fa4\nsealos init \\\n--passwd 123456 \\\n--master 172.31.1.36 \\\n--node 172.31.11.161 \\\n--pkg-url /home/ubuntu/kube1.22.0.tar.gz \\\n--version v1.22.0\n")),(0,s.kt)("h4",{id:"26-\u5b89\u88ddhelm"},"2.6. \u5b89\u88ddhelm"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Download your desired version (wget  ",(0,s.kt)("a",{parentName:"li",href:"https://get.helm.sh/helm-v3.9.0-linux-amd64.tar.gz"},"https://get.helm.sh/helm-v3.9.0-linux-amd64.tar.gz"),")"),(0,s.kt)("li",{parentName:"ul"},"Unpack it (tar -zxvf helm-v3.9.0-linux-amd64.tar.gz)"),(0,s.kt)("li",{parentName:"ul"},"Find the helm binary in the unpacked directory, and move it to its desireddestination (mv linux-amd64/helm /usr/local/bin/helm)")),(0,s.kt)("h4",{id:"27-helm\u5b89\u88c5\u672c\u5730\u6301\u4e45\u5316\u5b58\u50a8openebs\u670d\u52a1"},"2.7 helm\u5b89\u88c5\u672c\u5730\u6301\u4e45\u5316\u5b58\u50a8openebs\u670d\u52a1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm add repo openebs https://openebs.github.io/charts\nhelm pull openebs/openebs\n\n# \u4fee\u6539\u670d\u52a1\u5bf9\u5e94\u7684storageclass\u5373\u53ef\n#\u9ed8\u8ba4\u6301\u4e45\u5316\u6570\u636e\u5730\u5740\uff1a/var/openebs/local\n\n# \u5b89\u88c5openebs\nhelm install ebs openebs\n")),(0,s.kt)("h4",{id:"28-\u901a\u8fc7helm\u5b89\u88c5athena\u670d\u52a1"},"2.8. \u901a\u8fc7helm\u5b89\u88c5athena\u670d\u52a1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://github.com/sea-wyq/Athena_deploy.git\ncd Athena_deploy/chart/\nhelm install athena athenaserving\n")),(0,s.kt)("p",null,"\u670d\u52a1\u96c6\u7fa4\u642d\u5efa\u6210\u529f\u3002\u3002\u3002"))}c.isMDXComponent=!0},3998:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-e0957b7cf0eafb47cd2466bfff807802.png"}}]);