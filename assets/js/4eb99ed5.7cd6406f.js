"use strict";(self.webpackChunkkube_project_github_io=self.webpackChunkkube_project_github_io||[]).push([[698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},s="Create a Local Cluster",i={unversionedId:"kubernetes-basics/create-a-local-cluster",id:"kubernetes-basics/create-a-local-cluster",title:"Create a Local Cluster",description:"Instead of reading endless lines of documentation to understand the basics of Kubernetes, this guide is trying to be",source:"@site/docs/kubernetes-basics/create-a-local-cluster.mdx",sourceDirName:"kubernetes-basics",slug:"/kubernetes-basics/create-a-local-cluster",permalink:"/docs/kubernetes-basics/create-a-local-cluster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes-basics/create-a-local-cluster.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Assumption About the environment",permalink:"/docs/kubernetes-basics/assumptions-about-the-environment"},next:{title:"Spin up the environment",permalink:"/docs/kubernetes-basics/spin-up-the-environment"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-local-cluster"},"Create a Local Cluster"),(0,o.kt)("p",null,"Instead of reading endless lines of documentation to understand the basics of Kubernetes, this guide is trying to be\nmore hands-on."),(0,o.kt)("p",null,"We will start by creating a cluster. We will create this cluster locally and not use any cloud providers."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"A local cluster will be different from a cloud based cluster in many ways. Load Balancer, persistent volumes, networking\nand routing will be different. You don't have to concern yourself with that for now. Just remember, this here, we are\ntrying to get to know the building blocks.")),(0,o.kt)("p",null,"To create a local cluster, we will use ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind"),". Kind is a convenient way to launch all sorts\nof local clusters. It's quite resilient but it is ",(0,o.kt)("em",{parentName:"p"},"NOT")," intended for production use. Long lived kind clusters tend to\ndeteriorate. It's using docker containers to simulate nodes."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"This project has a kind configuration that it uses, we'll get to that later.")),(0,o.kt)("p",null,"Let's explore a cluster."),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kind create cluster\n")),(0,o.kt)("p",null,"What you should see looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kind create cluster\nCreating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.27.1) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6\n \u2713 Writing configuration \ud83d\udcdc\n \u2713 Starting control-plane \ud83d\udd79\ufe0f\n \u2713 Installing CNI \ud83d\udd0c\n \u2713 Installing StorageClass \ud83d\udcbe\nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nThanks for using kind! \ud83d\ude0a\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is your basic tool to explore clusters. A general move in every new environment is to immediately alias it to\njust ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"alias k='kubectl'"),". This will save you a LOT of typing."),(0,o.kt)("p",null,"Your first command will be: ",(0,o.kt)("inlineCode",{parentName:"p"},"k get pods -A"),"."),(0,o.kt)("p",null,"The output looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"k get pods -A\n\nNAMESPACE            NAME                                         READY   STATUS    RESTARTS   AGE\nkube-system          coredns-5d78c9869d-rlbx8                     1/1     Running   0          3m9s\nkube-system          coredns-5d78c9869d-vww68                     1/1     Running   0          3m9s\nkube-system          etcd-kind-control-plane                      1/1     Running   0          3m22s\nkube-system          kindnet-b2zwz                                1/1     Running   0          3m9s\nkube-system          kube-apiserver-kind-control-plane            1/1     Running   0          3m22s\nkube-system          kube-controller-manager-kind-control-plane   1/1     Running   0          3m24s\nkube-system          kube-proxy-bgg6q                             1/1     Running   0          3m9s\nkube-system          kube-scheduler-kind-control-plane            1/1     Running   0          3m22s\nlocal-path-storage   local-path-provisioner-6bc4bddd6b-m95zz      1/1     Running   0          3m9s\n")),(0,o.kt)("p",null,"You see the main building blocks of Kubernetes here. These are ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/"},"pods"),". The linked document has a nice explanation\nabout what pods are. TL;DR would be that they are just containers or Linux namespaces. They can contain multiple containers,\nhowever, which makes them a little bit more than just a 1:1 with a single application. A single pod could run, for example,\nan application and the monitoring stack for that application inside the pod. Or a network router."),(0,o.kt)("p",null,"That said, you should usally restrict yourself from running too many containers in a single Pod. Mostly because they eat\nresources and increase the need of a single Pod."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The keen observe notices the ",(0,o.kt)("inlineCode",{parentName:"p"},"-A")," in that command. For now, you can ignore that. It means to list all pods in all\nnamespaces.")),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"nodes")," next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"k get nodes\n\nNAME                 STATUS   ROLES           AGE   VERSION\nkind-control-plane   Ready    control-plane   9m    v1.27.1\n")),(0,o.kt)("p",null,"We have a single node right now. A node is basically a worker machine. Pods are scheduled in machines. We'll talk about\nhow that happens later on. Scheduling is not an easy subject."))}d.isMDXComponent=!0}}]);