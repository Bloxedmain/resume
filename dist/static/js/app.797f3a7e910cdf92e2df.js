webpackJsonp([8],{"7rgd":function(t,e){},EsQD:function(t,e){},Ilzx:function(t,e){},JWEK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},l,!1,function(t){n("JWEK")},null,null).exports,r=n("/ocq"),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},s,!1,function(t){n("rRjX")},"data-v-eb985804",null).exports,n("mtWM");var i=n("SFAN"),c=n.n(i),u={data:function(){return{layout:[{x:0,y:0,w:3,h:10,i:"0",component:"personal",title:"个人基本信息"},{x:3,y:0,w:3,h:10,i:"1",component:"techList",title:"开发技术掌握概览"},{x:0,y:40,w:3,h:10,i:"2",component:"LineComponent",title:"框架类库[VUE]"},{x:3,y:40,w:3,h:10,i:"3",component:"pieComponent",title:"UI框架【BootStrap/Element UI】"},{x:0,y:80,w:6,h:12,i:"4",component:"radarComponent",title:"技术栈能力值分布"}],beforemove:{},aftermoved:{}}},components:{GridLayout:c.a.GridLayout,GridItem:c.a.GridItem,headNav:function(){return n.e(1).then(n.bind(null,"vUA0"))},personal:function(){return n.e(6).then(n.bind(null,"LJW6"))},techList:function(){return n.e(4).then(n.bind(null,"Js1i"))},LineComponent:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"V5UF"))},pieComponent:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"/3l8"))},radarComponent:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"oKQK"))}},mounted:function(){},methods:{formatter:function(t,e){return t.address},cellClick:function(t,e,n,a){this.$message({type:"info",message:"点我"})},moveEvent:function(t,e,n){console.log("MOVE i="+t+", X="+e+", Y="+n),this.beforemove={i:t,x:e,y:n}},movedEvent:function(t,e,n){console.log("MOVED i="+t+", X="+e+", Y="+n)},resizedEvent:function(t,e,n,a,l){console.log("RESIZED i="+t+", H="+e+", W="+n+", H(px)="+a+", W(px)="+l),this.$refs.childWidget[t].resetResize({height:a})}},watch:{}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-row",{staticClass:"dashcontent"},[n("el-col",{staticClass:"right-menu"},[n("div",{staticClass:"dash"},[n("div",[n("headNav")],1),t._v(" "),n("div",{staticClass:"component"},[n("grid-layout",{attrs:{layout:t.layout,"col-num":6,"row-height":30,autoSize:!0,"is-draggable":!0,"is-resizable":!0,useCssTransforms:!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0}},t._l(t.layout,function(e){return n("grid-item",{key:e.i,staticClass:"griditem",attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},on:{move:t.moveEvent,moved:t.movedEvent,resized:t.resizedEvent}},[n("el-row",{staticClass:"drag-title"},[n("el-col",{attrs:{span:23}},[t._v(t._s(e.title))])],1),t._v(" "),n("el-row",{attrs:{draggable:"false"}},[n("el-col",{attrs:{span:24}},[n(e.component,{ref:"childWidget",refInFor:!0,tag:"component",style:{position:"relative","z-index":999},attrs:{draggable:"false"}})],1)],1)],1)}),1)],1)])])],1)],1)},staticRenderFns:[]};var p={dashBoard:n("VU/8")(u,d,!1,function(t){n("Ilzx")},null,null).exports,dashComponent:{}},m={data:function(){return{tableData:[{name:"航司B2C,B2B购票网站",desc:"航司B2C,B2B购票网站由基础数据、Shopping、Booking、Ticketing、Payment、Order等等微服务模块。B2C面向市场客户,B2B面向代理人",duty:"使用yarn管理工具、Vue框架开发项目，jikens项目部署，工程模块化，数据分发。",company:"上海航鹏信息科技有限公司",tag:"上海航鹏信息科技有限公司",tool:"vs code,eclipse,smartgit,ftp,shell,nginx,git,jikens",tech:"yarn,webpack,vue,element UI"},{name:"PSS平台开发",desc:"PSS平台是为了航空体系实施多套系统而开发，平台包括表单查询，工作流，看板，过滤器，表单起草，数据同步分发等等，为/特殊资格/机组执照/乘务资格/签派/舱单/航班动态，辅营等系统作基础平台使用，PSS平台可以根据不同的系统需求配置。",duty:"使用yarn管理工具、Vue框架开发项目，ftp、shell等工具检测和维护系统，开发组件化模块，实现用户管理配置，设计dashBoard并开发，Widget设计开发，联调后台作数据交互，功能开发配置，组件版本控制发布，打包部署项目，发布生产。",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"sublime Text,eclipse,smartgit,ftp,shell,nginx,git",tech:"yarn,npm,webpack,vue,element UI"},{name:"海南航空安全数字化管理平台",desc:"海南航空安全数字化管理平台是根据自身的运行环境、绩效历史和期望值，并通过数学模型，来建立适合自身的、过程的安全监控指标，设置相关的警戒值，将运行网、飞行网、机组资源管理系统、维修管理系统、QAR等系统的相关数据接入飞行网，形成统一工作平台，实现了以安全管理为核心的关联数据的集成，达到了信息查询便捷化和系统化的目的",duty:"根据原型设计和业务需求，开发搭建前端页面，功能开发，数据接口联调，权限开发，系统配置，流程测试，使用JMeter进行系统压力测试，SIT测试",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"sublime Text,eclipse,smartgit,ftp,shell,nginx,JMeter",tech:"npm,vue,element UI, jQuery UI"},{name:"上海机场集团pass办证系统",desc:"pass办证系统是为机场公安开发的机场办证系统，包括人员，车辆，机构，组织，证件等管理，办证流程中包括权限控制，组织配置，表单活动日志，操作历史记录，流程审批，打印证件，身份证扫描，人脸识别，权限点配置等功能",duty:"根据原型设计和业务需求，在平台中使用element UI组件和Vue搭建前端页面，功能开发，数据接口联调，权限开发，系统配置，流程测试，使用JMeter进行系统压力测试，证件打印。",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"sublime Text,eclipse,smartgit,ftp,shell,nginx",tech:"yarn,npm,webpack,vue,element UI, jQuery UI"},{name:"上海吉祥航空SMS安全管理系统",desc:"SMS安全管理系统是一个服务于航空公司的管理系统，推进公司管理一体化，通过数据量化对给个运行单位进行安全状况进行评价和预测，实现预先管理的目标，实行多种工作流方案，员工报告工作流，信息报告，危险源，风险分析，配置组织结构，支持一体化垂直管理、独立运行子公司等个性化安全管理等部门流程的拓展，完善权限管理；适应垂直化、独立运行管理的需求。",duty:"系统前端开发，处理IE和chrome浏览器兼容处理，插件更新，页面的实现和配置，功能的实现，对系统垂直越权和水平越权安全处理，编译前端敏感信息，避免系统遭到恶意攻击，使用Jmeter进行性能测试，数据交互，字典配置，工作流模块配置，代码打包部署。",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"eclipse,smartgit,ftp,shell",tech:"jQuery UI,bootstrap"},{name:"电商平台",desc:"中小型电子商务网站，主要经营特产及一些日常生活用品，包括首页，  列表，详细页，购物车页等 等，实现产品在线销售，顾客通过访问网站选定自己喜欢的商品，购买后商家通过后台查看 顾客的订单， 完成顾客和商城的交易。",duty:"1.负责前端代码的编写及特效的完成，保证网页具有良好的兼容性，采用MVC模式。利用Smarty实现代码分离。实现首页功能，轮播，楼层，选项卡、广告。通过不同的传值实现列表页商品分类显示，商品分页显示，价格排序等功能。用jQuery完成登录、注册页的正则表达式验证，加入购物车，加收藏等功能。详细页实现图片放大查看，查看评论，加入购物车。使用懒加载浏览，jQuery对购物车进行智能计算，以及选项卡切换评论和商品详情。使用Ajax进行数据的无刷新。利用cookie实现购物车数据的存储和获取。",company:"蓝科科技有限公司",tag:"蓝科科技有限公司",tool:"HBuilder,svn,WAMPSERVER",tech:"jQuery,bootstrap"},{name:"新闻网站（M端）",desc:"该网站是一个地区性移动端的新闻网站，分为首页、列表页、详细页三部分。网站的总体布局采用Bootstrap框架响应式布局，能够适应各种屏幕分辨率的手机。该网站给用户提供了时时当地新闻、房地产等动态。首页：首先是网页头部，网站的导航，主要有当地的新闻、房地产、汽车等分类，再下来就是一些比较热点动态的图片的轮播图，主要内容就是各个分类下的动态列表；首页的底部也是一个导航和关于我的之类的内容。列表页：点击首页的分类进入列表页，进入之后列表页显示当前分类的动态列表；",duty:"负责前端代码的编写及特效的完成，适应各种手机的浏览，保证网页具有良好的兼容性。优化前端代码，提高网页及移动端wap性能和用户体验,首页利用顶级分类展示内容。与后台人员编写网站后台，实现登录，注册，管理员管理，文章管理，分类管理等功能。通过修改MySQL语句实现文章搜索功能",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"HBuilder,svn,WAMPSERVER",tech:"jQuery,bootstrap,Smarty,MySQL"}]}},components:{headNav:function(){return n.e(1).then(n.bind(null,"vUA0"))}},methods:{formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},tableHeaderColor:function(t){t.row,t.column;var e=t.rowIndex;t.columnIndex;if(0===e)return"background-color: #ECF0F7;color: #000;font-weight: 500;"},filterHandler:function(t,e,n){return e[n.property]===t}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-row",[n("div",[n("headNav")],1)]),t._v(" "),n("el-row",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left",padding:"3px 0"},attrs:{type:"text"}},[t._v("项目描述")])],1),t._v(" "),n("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{stripe:!0,"header-cell-style":t.tableHeaderColor,data:t.tableData}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-row",[n("el-form-item",{attrs:{label:"项目名称"}},[n("span",[t._v(t._s(e.row.name))])])],1),t._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"项目描述"}},[n("span",[t._v(t._s(e.row.desc))])])],1),t._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"个人职责"}},[n("span",[t._v(t._s(e.row.duty))])])],1),t._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"所属企业"}},[n("span",[t._v(t._s(e.row.company))])])],1),t._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"开发工具"}},[n("span",[t._v(t._s(e.row.tool))])])],1),t._v(" "),n("el-row",[n("el-form-item",{attrs:{label:"开发技术"}},[n("span",[t._v(t._s(e.row.tech))])])],1)],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"140"}}),t._v(" "),n("el-table-column",{attrs:{prop:"desc",label:"项目描述"}}),t._v(" "),n("el-table-column",{attrs:{prop:"duty",label:"个人职责"}}),t._v(" "),n("el-table-column",{attrs:{prop:"company",width:"150",label:"所属企业"}}),t._v(" "),n("el-table-column",{attrs:{prop:"tag",label:"标签",width:"150","show-overflow-tooltip":"",filters:[{text:"思眭",value:"上海思眭信息技术有限公司"},{text:"蓝科",value:"蓝科科技有限公司"}],"filter-method":t.filterTag,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:"上海思眭信息技术有限公司"===e.row.tag?"primary":"success","disable-transitions":""}},[t._v(t._s(e.row.tag))])]}}])})],1)],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(m,f,!1,function(t){n("7rgd")},null,null).exports,v={data:function(){return{data:[{x:0,y:0,w:3,h:10,i:"0",component:"personal",title:"个人基本信息"},{x:3,y:0,w:3,h:10,i:"1",component:"techList",title:"开发技术掌握概览"},{x:0,y:40,w:3,h:10,i:"2",component:"LineComponent",title:"框架类库[VUE]"},{x:3,y:40,w:3,h:10,i:"3",component:"pieComponent",title:"UI框架【BootStrap/Element UI】"},{x:0,y:80,w:6,h:14,i:"4",component:"radarComponent",title:"技术栈能力值分布"}],items:[{name:"航司B2C,B2B购票网站",desc:"航司B2C,B2B购票网站由基础数据、Shopping、Booking、Ticketing、Payment、Order等等微服务模块。B2C面向市场客户,B2B面向代理人",duty:"使用yarn管理工具、Vue框架开发项目，jikens项目部署，工程模块化，数据分发。",company:"上海航鹏信息科技有限公司",tag:"上海航鹏信息科技有限公司",tool:"vs code,eclipse,smartgit,ftp,shell,nginx,git,jikens",tech:"yarn,webpack,vue,element UI"},{name:"PSS平台开发",desc:"PSS平台是为了航空体系实施多套系统而开发，平台包括表单查询，工作流，看板，过滤器，表单起草，数据同步分发等等，为/特殊资格/机组执照/乘务资格/签派/舱单/航班动态，辅营等系统作基础平台使用，PSS平台可以根据不同的系统需求配置。",duty:"使用yarn管理工具、Vue框架开发项目，ftp、shell等工具检测和维护系统，开发组件化模块，实现用户管理配置，设计dashBoard并开发，Widget设计开发，联调后台作数据交互，功能开发配置，组件版本控制发布，打包部署项目，发布生产。",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"sublime Text,eclipse,smartgit,ftp,shell,nginx,git",tech:"yarn,npm,webpack,vue,element UI"},{name:"海南航空安全数字化管理平台",desc:"海南航空安全数字化管理平台是根据自身的运行环境、绩效历史和期望值，并通过数学模型，来建立适合自身的、过程的安全监控指标，设置相关的警戒值，将运行网、飞行网、机组资源管理系统、维修管理系统、QAR等系统的相关数据接入飞行网，形成统一工作平台，实现了以安全管理为核心的关联数据的集成，达到了信息查询便捷化和系统化的目的",duty:"根据原型设计和业务需求，开发搭建前端页面，功能开发，数据接口联调，权限开发，系统配置，流程测试，使用JMeter进行系统压力测试，SIT测试",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"sublime Text,eclipse,smartgit,ftp,shell,nginx,JMeter",tech:"npm,vue,element UI, jQuery UI"},{name:"上海机场集团pass办证系统",desc:"pass办证系统是为机场公安开发的机场办证系统，包括人员，车辆，机构，组织，证件等管理，办证流程中包括权限控制，组织配置，表单活动日志，操作历史记录，流程审批，打印证件，身份证扫描，人脸识别，权限点配置等功能",duty:"根据原型设计和业务需求，在平台中使用element UI组件和Vue搭建前端页面，功能开发，数据接口联调，权限开发，系统配置，流程测试，使用JMeter进行系统压力测试，证件打印。",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"sublime Text,eclipse,smartgit,ftp,shell,nginx",tech:"yarn,npm,webpack,vue,element UI, jQuery UI"},{name:"上海吉祥航空SMS安全管理系统",desc:"SMS安全管理系统是一个服务于航空公司的管理系统，推进公司管理一体化，通过数据量化对给个运行单位进行安全状况进行评价和预测，实现预先管理的目标，实行多种工作流方案，员工报告工作流，信息报告，危险源，风险分析，配置组织结构，支持一体化垂直管理、独立运行子公司等个性化安全管理等部门流程的拓展，完善权限管理；适应垂直化、独立运行管理的需求。",duty:"系统前端开发，处理IE和chrome浏览器兼容处理，插件更新，页面的实现和配置，功能的实现，对系统垂直越权和水平越权安全处理，编译前端敏感信息，避免系统遭到恶意攻击，使用Jmeter进行性能测试，数据交互，字典配置，工作流模块配置，代码打包部署。",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"eclipse,smartgit,ftp,shell",tech:"jQuery UI,bootstrap"},{name:"电商平台",desc:"中小型电子商务网站，主要经营特产及一些日常生活用品，包括首页，  列表，详细页，购物车页等 等，实现产品在线销售，顾客通过访问网站选定自己喜欢的商品，购买后商家通过后台查看 顾客的订单， 完成顾客和商城的交易。",duty:"1.负责前端代码的编写及特效的完成，保证网页具有良好的兼容性，采用MVC模式。利用Smarty实现代码分离。实现首页功能，轮播，楼层，选项卡、广告。通过不同的传值实现列表页商品分类显示，商品分页显示，价格排序等功能。用jQuery完成登录、注册页的正则表达式验证，加入购物车，加收藏等功能。详细页实现图片放大查看，查看评论，加入购物车。使用懒加载浏览，jQuery对购物车进行智能计算，以及选项卡切换评论和商品详情。使用Ajax进行数据的无刷新。利用cookie实现购物车数据的存储和获取。",company:"蓝科科技有限公司",tag:"蓝科科技有限公司",tool:"HBuilder,svn,WAMPSERVER",tech:"jQuery,bootstrap"},{name:"新闻网站（M端）",desc:"该网站是一个地区性移动端的新闻网站，分为首页、列表页、详细页三部分。网站的总体布局采用Bootstrap框架响应式布局，能够适应各种屏幕分辨率的手机。该网站给用户提供了时时当地新闻、房地产等动态。首页：首先是网页头部，网站的导航，主要有当地的新闻、房地产、汽车等分类，再下来就是一些比较热点动态的图片的轮播图，主要内容就是各个分类下的动态列表；首页的底部也是一个导航和关于我的之类的内容。列表页：点击首页的分类进入列表页，进入之后列表页显示当前分类的动态列表；",duty:"负责前端代码的编写及特效的完成，适应各种手机的浏览，保证网页具有良好的兼容性。优化前端代码，提高网页及移动端wap性能和用户体验,首页利用顶级分类展示内容。与后台人员编写网站后台，实现登录，注册，管理员管理，文章管理，分类管理等功能。通过修改MySQL语句实现文章搜索功能",company:"上海思眭信息技术有限公司",tag:"上海思眭信息技术有限公司",tool:"HBuilder,svn,WAMPSERVER",tech:"jQuery,bootstrap,Smarty,MySQL"}]}},components:{headNav:function(){return n.e(1).then(n.bind(null,"vUA0"))},personal:function(){return n.e(6).then(n.bind(null,"LJW6"))},techList:function(){return n.e(4).then(n.bind(null,"Js1i"))},LineComponent:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"V5UF"))},pieComponent:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"/3l8"))},radarComponent:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"oKQK"))}},methods:{}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"total"},[n("el-row",[n("div",[n("headNav")],1)]),t._v(" "),n("el-row",[n("el-carousel",{attrs:{interval:1e4,height:"400px",arrow:"hover","indicator-position":"none"}},t._l(t.data,function(e){return n("el-carousel-item",{key:e.i},[n("el-row",[n("el-row",{staticClass:"drag-title"},[n("el-col",{attrs:{span:23}},[t._v(t._s(e.title))])],1),t._v(" "),n("el-row",{attrs:{draggable:"false"}},[n("el-col",{attrs:{span:24}},[n(e.component,{ref:"childWidget",refInFor:!0,tag:"component",style:{position:"relative","z-index":999},attrs:{draggable:"false"}})],1)],1)],1)],1)}),1)],1),t._v(" "),n("el-row",[n("el-carousel",{attrs:{interval:1e4,height:"400px",arrow:"hover","indicator-position":"none"}},t._l(t.items,function(e){return n("el-carousel-item",{key:e.name},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{float:"left"}},[t._v("项目描述")])]),t._v(" "),n("el-row",{staticClass:"borderbottom"},[n("el-col",{attrs:{span:3}},[n("el-tag",{staticClass:"floatleft"},[t._v("项目名称 :")])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("p",{staticClass:"alignleft"},[t._v(t._s(e.name))])])],1),t._v(" "),n("el-row",{staticClass:"borderbottom"},[n("el-col",{attrs:{span:3}},[n("el-tag",{staticClass:"floatleft"},[t._v("所属企业 :")])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("p",{staticClass:"alignleft"},[t._v("\r\n\t\t\t\t            "+t._s(e.company)+"\r\n\t\t\t\t          ")])])],1),t._v(" "),n("el-row",{staticClass:"borderbottom"},[n("el-col",{attrs:{span:3}},[n("el-tag",{staticClass:"floatleft"},[t._v("项目描述 :")])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("p",{staticClass:"alignleft"},[t._v(t._s(e.desc))])])],1),t._v(" "),n("el-row",{staticClass:"borderbottom"},[n("el-col",{attrs:{span:3}},[n("el-tag",{staticClass:"floatleft"},[t._v("个人职责 :")])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("p",{staticClass:"alignleft"},[t._v(t._s(e.duty))])])],1),t._v(" "),n("el-row",{staticClass:"borderbottom"},[n("el-col",{attrs:{span:3}},[n("el-tag",{staticClass:"floatleft"},[t._v("开发工具 :")])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("p",{staticClass:"alignleft"},[t._v("\r\n\t\t\t\t            "+t._s(e.tool)+"\r\n\t\t\t\t          ")])])],1),t._v(" "),n("el-row",{staticClass:"borderbottom"},[n("el-col",{attrs:{span:3}},[n("el-tag",{staticClass:"floatleft"},[t._v("开发技术 :")])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("p",{staticClass:"alignleft"},[t._v("\r\n\t\t\t\t            "+t._s(e.tech)+"\r\n\t\t\t\t          ")])])],1)],1)],1)}),1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(v,y,!1,function(t){n("EsQD")},null,null).exports;a.default.use(r.a);var b=new r.a({routes:[{path:"/",name:"resume",hidden:!0,redirect:function(t){return"/dash/dashBoard"}},{path:"/dash/dashBoard",name:"dashboard",hidden:!0,component:p.dashBoard},{path:"/table/list",name:"table",hidden:!0,component:h},{path:"/sum",name:"sum",hidden:!0,component:g}]}),_=n("zL8q"),w=n.n(_);n("tvR6");a.default.config.productionTip=!1,a.default.use(w.a),a.default.use(c.a),a.default.Cancel=[],b.beforeEach(function(t,e,n){for(;a.default.Cancel&&a.default.Cancel.length;)a.default.Cancel.shift()("cancel");n()}),new a.default({el:"#app",router:b,components:{App:o},template:"<App/>"})},rRjX:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.797f3a7e910cdf92e2df.js.map