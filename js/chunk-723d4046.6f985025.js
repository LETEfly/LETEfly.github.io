(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-723d4046"],{"16b5":function(e,t,a){"use strict";a("d7b3")},"22b1":function(e,t,a){},4048:function(e,t,a){"use strict";a("22b1")},"56ea":function(e,t,a){},"5cf6":function(e,t,a){},"5f08":function(e,t,a){"use strict";a("e465")},"650a":function(e,t,a){},"8b9c":function(e,t,a){"use strict";a("650a")},9682:function(e,t,a){},c0f4:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mainPageBase",{attrs:{"course-type":2}})},o=[],s=a("d59a"),n={name:"AuditFoundationManage",components:{mainPageBase:s["a"]},props:{},data:function(){return{}},created:function(){},mounted:function(){},filters:{},watch:{},computed:{},methods:{}},r=n,l=(a("5f08"),a("f6c1"),a("2877")),c=Object(l["a"])(r,i,o,!1,null,"55626a6d",null);t["default"]=c.exports},c277:function(e,t,a){"use strict";a("9682")},d0cf:function(e,t,a){"use strict";a("d830")},d59a:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"main"===e.showPage?a("div",{staticClass:"component-mainPageBase flex-layout full-block"},[a("div",{staticClass:"Header flex-none flex-row justify-between"},[a("div",{staticClass:"Search flex-auto"},[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"课程名称"}},[a("el-input",{attrs:{maxlength:20,placeholder:"请输入课程名称",clearable:"","show-word-limit":""},model:{value:e.pageInfo["cname"],callback:function(t){e.$set(e.pageInfo,"cname",t)},expression:"pageInfo['cname']"}})],1),a("el-form-item",{attrs:{label:"修改日期"}},[a("el-date-picker",{staticStyle:{width:"280px"},attrs:{type:"daterange","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.handleSearchDateChange},model:{value:e.searchDateArr,callback:function(t){e.searchDateArr=t},expression:"searchDateArr"}})],1),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-search",type:"primary",plain:""},on:{click:e.getCourseList}},[e._v("搜索")])],1)],1)],1),a("div",{staticClass:"Option flex-none"},[a("el-button",{attrs:{type:"success",icon:"el-icon-plus",plain:""},on:{click:function(t){return e.showAddDialog()}}},[e._v(" 新增课程 ")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",plain:"",disabled:""===e.selectedIds},on:{click:function(t){return e.handleDeleteCourse(e.selectedIds,!0)}}},[e._v(" 批量删除 ")]),a("addCourseDialog",{ref:"addCourse",attrs:{"course-type":e.courseType,"is-classic":e.isClassic},on:{save:e.showDetail}})],1)]),a("div",{staticClass:"Content flex-auto flex-layout"},[a("el-table",{attrs:{data:e.courseList,border:"",height:"100%"},on:{"row-click":e.handleRowClick,"selection-change":e.handleSelectedCourse}},[a("el-table-column",{attrs:{type:"selection"}}),e._l(e.labelList,(function(e,t){return a("el-table-column",{key:t,attrs:{prop:e["prop"],label:e["label"]}})})),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return a.stopPropagation(),e.showAddDialog(t.row)}}},[e._v(" 编辑 ")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return a.stopPropagation(),e.handleDeleteCourse(t.row["id"].toString)}}},[e._v(" 删除 ")])]}}],null,!1,3338636847)})],2),a("el-pagination",{attrs:{background:"","current-page":e.pageInfo["page"],"page-sizes":[10,20,50,100],"page-size":e.pageInfo["pagesize"],layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]):e.courseType&&"detail"===e.showPage?a("detailPageBase",{attrs:{"course-type":e.courseType,"detail-id":e.detailId},on:{"go-back":e.handleDetailGoBack}}):e.isClassic&&"detail"===e.showPage?a("classicDetailPage",{attrs:{"detail-id":e.detailId},on:{"go-back":e.handleDetailGoBack}}):e._e()},o=[],s=(a("a9e3"),a("d3b7"),a("25f0"),a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component-detailPageBase flex-row full-block"},[a("treeBlock",{attrs:{"tree-list":e.treeList,"tree-props":e.treeProps,title:e.courseName},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"edit",fn:function(t){return[a("i",{staticClass:"el-icon-edit",on:{click:function(a){return a.stopPropagation(),e.editTreeItem("edit",t.data,t.node)}}}),a("i",{staticClass:"el-icon-delete",on:{click:function(a){return a.stopPropagation(),e.deleteTreeItem(t.data)}}}),a("i",{staticClass:"el-icon-top",on:{click:function(a){return a.stopPropagation(),e.moveTreeItem(t.node,t.data,"up")}}}),a("i",{staticClass:"el-icon-bottom",on:{click:function(a){return a.stopPropagation(),e.moveTreeItem(t.node,t.data,"down")}}})]}},{key:"option",fn:function(){return[a("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-plus",type:"primary",plain:"",size:"small"},on:{click:function(t){return t.stopPropagation(),e.editTreeItem("new")}}},[e._v(" 添加分类 ")])]},proxy:!0}])}),a("div",{staticClass:"flex-auto DetailBlock"},[a("div",{staticClass:"flex-row justify-between"},[a("div",[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"资源名称"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入课件名称","show-word-limit":"",clearable:""},model:{value:e.resourceSearchValue,callback:function(t){e.resourceSearchValue=t},expression:"resourceSearchValue"}})],1)],1)],1),a("div",[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:e.handleShowFileUpload}},[e._v("上传资源")]),a("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",disabled:""===e.resourceSelectedIds},on:{click:function(t){return e.deleteResourceItem(!1)}}},[e._v(" 批量删除 ")]),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.showEditCourseDialog}},[e._v("课程信息")]),a("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:e.handleGoBack}},[e._v("返回")])],1)]),a("div",[a("el-table",{attrs:{data:e.tableValue,border:""},on:{select:e.handleResourceSelected}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{label:"资源名称",prop:"rname"}}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.deleteResourceItem(!0,i)}}},[e._v(" 删除 ")])]}}])})],1)],1)]),a("addCategoryDialog",{ref:"addCategory"}),a("editCourseDialog",{ref:"editCourse",attrs:{"course-type":e.courseType}}),a("fileUploadDialog",{ref:"fileUpload",attrs:{"current-category":e.currentCategory},on:{save:e.getTreeList}})],1)}),n=[],r=(a("4de4"),a("caad"),a("2532"),a("3559")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BaseDialog",{staticClass:"full-block component-addCategoryDialog",attrs:{title:e.title,center:"",visible:e.visibleDialog,width:"400px",top:"25vh"},on:{"update:visible":function(t){e.visibleDialog=t},close:e.handleCloseDialog}},[a("div",{staticClass:"full-block flex-layout",staticStyle:{"text-align":"center"}},[a("el-form",{staticStyle:{"margin-top":"20px"},attrs:{inline:""}},[e.treeItem.hasOwnProperty("rname")?a("el-form-item",{attrs:{label:"*名称"}},[a("el-input",{staticClass:"w230",attrs:{maxlength:20,"show-word-limit":"",clearable:"",placeholder:"请输入课程分类名称"},model:{value:e.treeItem["rname"],callback:function(t){e.$set(e.treeItem,"rname",t)},expression:"treeItem['rname']"}})],1):a("el-form-item",{attrs:{label:"*分类名称"}},[a("el-input",{staticClass:"w230",attrs:{maxlength:20,"show-word-limit":"",clearable:"",placeholder:"请输入课程分类名称"},model:{value:e.treeItem["cname"],callback:function(t){e.$set(e.treeItem,"cname",t)},expression:"treeItem['cname']"}})],1)],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:e.handleSave}},[e._v("保存")]),a("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:e.handleCloseDialog}},[e._v("关闭")])],1)])],1)},c=[],u=a("08f2"),d={name:"addCategoryDialog",components:{BaseDialog:u["a"]},props:{},mounted:function(){},data:function(){return{visibleDialog:!1,treeItem:{id:0,cname:"",course_id:""}}},computed:{title:function(){return 0===this.treeItem["id"]?"新增课程分类":this.treeItem.hasOwnProperty("rname")?"资源信息维护":"分类信息维护"}},watch:{visibleDialog:function(e){}},created:function(){},methods:{handleCloseDialog:function(){this.visibleDialog=!1,this.treeItem={id:0,cname:"",course_id:""}},handleSave:function(){var e=this.treeItem.hasOwnProperty("rname")?"/am/courseresource/update":"/am/coursecategory/save",t={};t.url=e,t.action="资源与课程分类信息维护",t.json=this.treeItem,this.$emit("save",r["a"].CloneDeep(this.treeItem))}}},p=d,f=(a("d0cf"),a("2877")),h=Object(f["a"])(p,l,c,!1,null,"1cbd0074",null),m=h.exports,g=a("5b54"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BaseDialog",{staticClass:"full-block component-fileUploadDialog",attrs:{title:"文件上传",center:"",visible:e.visibleDialog,width:"600px",top:"15vh"},on:{"update:visible":function(t){e.visibleDialog=t},close:e.handleCloseDialog}},[a("div",{staticClass:"full-block"},[a("FileUpload",{attrs:{"file-list":e.fileList,"quantity-limit":10,tips:e.tips},on:{"update:fileList":function(t){e.fileList=t},"update:file-list":function(t){e.fileList=t}}})],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")]),a("el-button",{attrs:{type:"info"},on:{click:e.handleCloseDialog}},[e._v("取消")])],1)])],1)},v=[],y=a("3e2a"),C={name:"fileUploadDialog",components:{BaseDialog:u["a"],FileUpload:y["a"]},props:{currentCategory:{type:null|Object,required:!0}},mounted:function(){},data:function(){return{visibleDialog:!1,title:null,fileList:[],tips:["一次只能上传总计不超过10个的word、pdf、ppt、图片、视频文件；","支持的文件格式为jpg、png、gif、jpeg、doc、docx、ppt、pptx、pdf、mp4；","单个文件的大小不能大于500MB(兆)。"]}},computed:{},watch:{visibleDialog:function(e){}},created:function(){},methods:{handleCloseDialog:function(){this.visibleDialog=!1,this.fileList=[]},handleSave:function(){if(this.fileList.length){var e=this.fileList.map((function(e){return{id:0,url:e["response"]["file_path"],res_type:0,file_name:e["response"]["file_name"]}})),t={url:"/am/courseresource/save",action:"资源上传"};t.json={records:{course_category_id:this.currentCategory.id,resource:e}},this.handleCloseDialog(),this.$emit("save"),this.$message.success("资源已上传！")}else this.$popTip.info("请先上传文件！")}}},w=C,D=(a("16b5"),Object(f["a"])(w,b,v,!1,null,"606f7e7c",null)),k=D.exports,I=a("7b7c"),_={name:"detailPageBase",components:{addCategoryDialog:m,editCourseDialog:g["a"],fileUploadDialog:k,treeBlock:I["a"]},props:{courseType:{type:Number,required:!0},detailId:{type:String,required:!0}},data:function(){return{course:{},treeList:[],treeProps:{children:"child",label:"label"},currentCategory:null,resourceSelectedIds:"",resourceSearchValue:""}},created:function(){},mounted:function(){this.getCourseDetail(),this.getTreeList()},filters:{},watch:{},computed:{tableValue:function(){if(this.currentCategory&&this.currentCategory.hasOwnProperty("child")){var e=this.resourceSearchValue;return this.currentCategory["child"].filter((function(t){return!e||t.label.toLowerCase().includes(e.toLowerCase())}))}return[]},courseName:function(){return this.course?this.course["cname"]:""}},methods:{handleShowFileUpload:function(){this.$refs.fileUpload.visibleDialog=!0},showEditCourseDialog:function(){this.$refs.editCourse.visibleDialog=!0,this.$refs.editCourse.course=r["a"].CloneDeep(this.course),this.$refs.editCourse.isAdd=!1},handleResourceSelected:function(e){this.resourceSelectedIds=e.map((function(e){return e["id"]})).toString()},deleteResourceItem:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,i=t?"确认要删除该资源吗？":"确认要删除所选资源吗？";this.$confirm(i,"提示",{type:"warning"}).then((function(){var i;i=t?a["id"].toString():e.resourceSelectedIds;var o={url:"/am/courseresource/del",action:"课程资源删除"};o.json={ids:i},e.getTreeList(),e.$message.success("操作已完成!")})).catch((function(){e.$message.info("已取消操作!")}))},moveTreeItem:function(e,t,a){var i;i=t.hasOwnProperty("cname")?"up"===a?"/am/coursecategory/up":"/am/coursecategory/down":"up"===a?"/am/courseresource/up":"/am/courseresource/down";var o={};o.url=i,o.action="课程(资源)分类移动",o.json={id:t["id"]},this.getCourseDetail(),t.hasOwnProperty("rname")},editTreeItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.$refs.addCategory.visibleDialog=!0,"edit"===e){var a=t;t.hasOwnProperty("rname")&&(a={id:t["id"],course_category_id:t["parentId"],rname:t["rname"]}),this.$refs.addCategory.treeItem=r["a"].CloneDeep(a)}},deleteTreeItem:function(e){var t=this,a=e.hasOwnProperty("cname");a?this.$confirm('确认要删除课程"'.concat(e["cname"],'"吗？'),"提示",{type:"warning"}).then((function(){var a={url:"/am/coursecategory/del",action:"课程分类删除"};a.json={id:e["id"]},t.$message.success("操作已完成!")})).catch((function(){t.$message.info("已取消操作!")})):this.deleteResourceItem(!0,e)},handleNodeClick:function(e){e.hasOwnProperty("cname")&&(this.currentCategory=e)},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},getTreeList:function(){var e={url:"/am/coursecategory/tree",action:"课程分类树"};e.json={course_id:this.detailId};var t={result:0,error:"",errorcode:0,list:[{id:"4001",cname:"1dsdasdasdasdasdddddddddddddddd",child:[{id:"67001",rname:"1dasdasd",file_name:"dasdasdas.png",res_type:"0",url:"http://pb.debug.com:51001/862883.png",size:"253050"}]},{id:"1401",cname:"分类名称"},{id:"140s1",cname:"64sd6a"}],debuginfo:""};this.treeList=r["a"].depthFirstSearch(t["list"],(function(e,t,a){e.hasOwnProperty("cname")?e["label"]=e["cname"]:(e["parentId"]=a["id"],e["label"]=e["rname"])}),"child"),this.currentCategory=this.treeList[0]},getCourseDetail:function(){var e={url:"/am/course/detail",action:"课程详情"};e.json={id:this.detailId};var t={result:0,error:"",errorcode:0,data:{id:"1001",cname:"联合勤务知识",sort:"4",cover:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-b6b082427a2ae87ddfa95ccea8b9213c_400x224.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652255530&t=fe0d214abca1a43dafd9d8b7460e4656",ctype:"1"},debuginfo:""};this.course=t["data"]},handleGoBack:function(){this.$emit("go-back")}}},S=_,x=(a("dcb0"),a("4048"),Object(f["a"])(S,s,n,!1,null,"b4219a02",null)),P=x.exports,L=a("75bb"),$={name:"mainPageBase",components:{addCourseDialog:g["a"],detailPageBase:P,classicDetailPage:L["a"]},props:{courseType:{type:Number,required:!0},isClassic:{type:Boolean,default:!1}},data:function(){return{showPage:"main",pageInfo:{ctype:null,cname:"",start_at:"",end_at:"",page:1,pagesize:10},pageTotal:0,searchDateArr:[],selectedIds:"",courseList:[],labelList:[{label:"课程名称",prop:"cname"},{label:"最后修改时间",prop:"updated_at"},{label:"排序",prop:"sort"}],detailId:null}},created:function(){this.pageInfo["ctype"]=this.courseType},mounted:function(){this.getCourseList()},filters:{},watch:{},computed:{},methods:{handleSearchDateChange:function(e){this.pageInfo["start_at"]=e[0],this.pageInfo["end_at"]=e[1]},showAddDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$refs.addCourse.visibleDialog=!0,e&&(this.$refs.addCourse.course=r["a"].CloneDeep(e),this.$refs.addCourse.isAdd=!1)},handleDeleteCourse:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i="确定删除该课程吗？";a&&(i="确定删除所选课程吗？"),this.$confirm(i,"提示",{type:"warning"}).then((function(){var a="/am/course/del";t.isClassic&&(a="/am/classic/del");var i={};i.url=a,i.action="删除课程",i.json={ids:e},t.getCourseList(),t.$message.success("操作已完成！")})).catch((function(){t.$message.info("已取消操作！")}))},handleSelectedCourse:function(e){this.selectedIds=e.map((function(e){return e["id"]})).toString()},handleSizeChange:function(e){this.pageInfo["pagesize"]=e,this.getCourseList()},handleCurrentChange:function(e){this.pageInfo["page"]=e,this.getCourseList()},getCourseList:function(){var e="/am/course/list";this.isClassic&&(e="/am/classic/list");var t={};t.url=e,t.action="获取课程列表",t.json=this.pageInfo;var a={result:0,error:"",errorcode:0,list:[{id:"1001",cname:"联合勤务知识",sort:"4",updated_at:"2022-04-01 14:27:41.7719",cover:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-b6b082427a2ae87ddfa95ccea8b9213c_400x224.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652255530&t=fe0d214abca1a43dafd9d8b7460e4656"}],total:1,debuginfo:""};this.courseList=a["list"],this.pageTotal=a["total"]},showDetail:function(e){null!==e?(this.detailId=e,this.showPage="detail"):this.getCourseList()},handleRowClick:function(e){this.showDetail(e["id"])},handleDetailGoBack:function(){this.showPage="main",this.getCourseList()}}},z=$,T=(a("8b9c"),a("c277"),Object(f["a"])(z,i,o,!1,null,"66cafc34",null));t["a"]=T.exports},d7b3:function(e,t,a){},d830:function(e,t,a){},dcb0:function(e,t,a){"use strict";a("56ea")},e465:function(e,t,a){},f6c1:function(e,t,a){"use strict";a("5cf6")}}]);