"use strict";(self.webpackChunkkube_project_github_io=self.webpackChunkkube_project_github_io||[]).push([[869],{9192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(4848),o=s(8453);const i={sidebar_position:4},r="What am I seeing?",a={id:"kubernetes-basics/what-am-i-seeing",title:"What am I seeing?",description:"After tilt up successfully finished starting all the controllers, you should see something like this:",source:"@site/docs/kubernetes-basics/what-am-i-seeing.mdx",sourceDirName:"kubernetes-basics",slug:"/kubernetes-basics/what-am-i-seeing",permalink:"/docs/kubernetes-basics/what-am-i-seeing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Spin up the environment",permalink:"/docs/kubernetes-basics/spin-up-the-environment"},next:{title:"Project - Basics",permalink:"/docs/category/project---basics"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"what-am-i-seeing",children:"What am I seeing?"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.code,{children:"tilt up"})," successfully finished starting all the controllers, you should see something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" k get pods -A\nNAMESPACE            NAME                                                                READY   STATUS    RESTARTS   AGE\ndefault              face-recog-d9476dbdc-x7hjz                                          1/1     Running   0          7m7s\ndefault              frontend-8d9f448d5-gvdpf                                            1/1     Running   0          6m23s\ndefault              image-processor-deployment-6db7754485-4rt27                         1/1     Running   0          6m24s\ndefault              mysql-6579bd84bc-z8qxc                                              1/1     Running   0          7m8s\ndefault              nsqd-0                                                              1/1     Running   0          7m8s\ndefault              nsqlookup-677f8b9dfb-qwct4                                          1/1     Running   0          7m8s\ndefault              receiver-deployment-7fcf6f77d7-5rx6r                                1/1     Running   0          6m24s\nkube-system          coredns-558bd4d5db-25czq                                            1/1     Running   0          11m\nkube-system          coredns-558bd4d5db-85nwq                                            1/1     Running   0          11m\nkube-system          etcd-kube-facerecog-test-cluster-control-plane                      1/1     Running   0          11m\nkube-system          kindnet-h9x7x                                                       1/1     Running   0          11m\nkube-system          kindnet-rmg75                                                       1/1     Running   0          11m\nkube-system          kindnet-z9fj9                                                       1/1     Running   0          11m\nkube-system          kube-apiserver-kube-facerecog-test-cluster-control-plane            1/1     Running   0          12m\nkube-system          kube-controller-manager-kube-facerecog-test-cluster-control-plane   1/1     Running   0          11m\nkube-system          kube-proxy-dffdm                                                    1/1     Running   0          11m\nkube-system          kube-proxy-hbwss                                                    1/1     Running   0          11m\nkube-system          kube-proxy-rlbd7                                                    1/1     Running   0          11m\nkube-system          kube-scheduler-kube-facerecog-test-cluster-control-plane            1/1     Running   0          11m\nlocal-path-storage   local-path-provisioner-547f784dff-87xbk                             1/1     Running   0          11m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Tilt exposed two things for you. One, is the ",(0,t.jsx)(n.a,{href:"/docs/project-basics/high-level-components#frontend",children:"frontend"})," and the other is the ",(0,t.jsx)(n.a,{href:"/docs/project-basics/high-level-components#receiver",children:"receiver"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Let's take a look at the frontend. Without anything in the database, we should see\nan empty view like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kube-cluster",src:s(4959).A+"",width:"2880",height:"854"})}),"\n",(0,t.jsxs)(n.p,{children:["It will change once we put the receiver to work. Namly, we send it an image to\nprocess. Tilt uses port-forwarding to achieve this. If we would to do this manually\nyou could run something like this: ",(0,t.jsx)(n.code,{children:"kubectl port-forward deployment/frontend 8081:8081"}),". Which forwards\nthe deployment, or perhaps a service like this ",(0,t.jsx)(n.code,{children:"kubectl port-forward service/frontend 8081:8081"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Your volume should contain a couple known images and some unknown images. Right now, the database\nis primed using this file here: ",(0,t.jsx)(n.a,{href:"https://github.com/kube-project/kube-project/blob/main/requirements/requirements.yaml",children:"https://github.com/kube-project/kube-project/blob/main/requirements/requirements.yaml"})]}),"\n",(0,t.jsx)(n.p,{children:"This will create a ConfigMap in the system from which the database is seeded."}),"\n",(0,t.jsx)(n.p,{children:"Alter these values if you wish to insert different named people and images:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"    insert into person_images (image_name, person_id) values ('hannibal_1.jpg', 1);\n    insert into person_images (image_name, person_id) values ('hannibal_2.jpg', 1);\n    insert into person_images (image_name, person_id) values ('skarlso_1.jpg', 2);\n    insert into person_images (image_name, person_id) values ('skarlso_2.jpg', 2);\n    insert into person_images (image_name, person_id) values ('john_doe_1.jpg', 3);\n    insert into person_images (image_name, person_id) values ('gergely_01.jpg', 4);\n"})}),"\n",(0,t.jsx)(n.p,{children:"To mock about in the database, you need to create a shell on the database pod and run some mysql\ncommands directly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# From the above pod-list we would like to execute a sql shell in the mysql pod.\nkubectl exec -it mysql-6579bd84bc-bpc99 -- mysql -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 9\nServer version: 8.0.37 MySQL Community Server - GPL\n\nCopyright (c) 2000, 2024, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The password is ",(0,t.jsx)(n.code,{children:"password123"}),". Now, we can run some sql commands, like show databases, select\none and then select some values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| kube               |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n5 rows in set (0.01 sec)\n\nmysql> use kube;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+----------------+\n| Tables_in_kube |\n+----------------+\n| images         |\n| person         |\n| person_images  |\n+----------------+\n3 rows in set (0.00 sec)\n\nmysql> select * from person;\n+----+----------+\n| id | name     |\n+----+----------+\n|  1 | Hannibal |\n|  2 | Skarlso  |\n|  3 | John Doe |\n|  4 | Gergely  |\n+----+----------+\n4 rows in set (0.00 sec)\n\nmysql>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, let's send something to the receiver! To do that, use the following CURL format."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -XPOST -d \'{"path": "/unknown_people/unknown_05.jpg"}\' http://localhost:8000/image/post\ngot path: {Path:/unknown_people/unknown_05.jpg}\ngot paths: {Paths:[{Path:/unknown_people/unknown_05.jpg}]} with length: 1\nimage saved with id: 1\nimage sent to nsq\n'})}),"\n",(0,t.jsx)(n.p,{children:"After this was successfully sent, we should see an entry in the database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select * from images;\n+----+--------------------------------+--------+--------+\n| id | path                           | person | status |\n+----+--------------------------------+--------+--------+\n|  1 | /unknown_people/unknown_05.jpg |     -1 |      0 |\n+----+--------------------------------+--------+--------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Great! Let's check the frontend! We should see a single row in Pending. If\nwe weren't quick enough, that row would say processed and the person that matched\nthe person on the image, if any."}),"\n",(0,t.jsx)(n.p,{children:"Pending:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pending",src:s(8183).A+"",width:"2422",height:"750"})}),"\n",(0,t.jsx)(n.p,{children:"Processed:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pending",src:s(3900).A+"",width:"2400",height:"696"})}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.p,{children:["If nothing happens or you got an error for whatever reason, try looking at the pod logs\nwith the ",(0,t.jsx)(n.code,{children:"logs"})," command like this:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl logs receiver-deployment-7fcf6f77d7-5rx6r\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4959:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/empty-frontend-be8ead9fe143eac835fe66d73416f2ae.png"},3900:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/frontend-processed-9ed9484bbf2d21bfe635bee4b2b38aa7.png"},8183:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/frontend-processing-7243431048a38891e89f25ce059ca5f0.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);