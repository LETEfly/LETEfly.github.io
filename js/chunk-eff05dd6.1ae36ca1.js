(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eff05dd6"],{"594a":function(t,e,a){"use strict";a("7394")},"6bf4":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SystemThemeDemo full-block theme-background-middle scroll-y pa10"},[a("el-form",[a("el-form-item",{attrs:{label:"主题"}},[a("el-button",{on:{click:function(e){return t.handleThemeClick("dark")}}},[t._v("深色")]),a("el-button",{on:{click:function(e){return t.handleThemeClick("darkBlue")}}},[t._v("深蓝色")]),a("el-button",{on:{click:function(e){return t.handleThemeClick("light")}}},[t._v("浅色")]),a("el-button",{on:{click:function(e){return t.handleThemeClick("followSystem")}}},[t._v("跟随系统")])],1)],1),a("hr"),a("div",[a("h1",[t._v("Button 按钮")]),a("div",[a("el-row",{staticClass:"pa10"},[a("el-button",[t._v("默认按钮")]),a("el-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),a("el-button",{attrs:{type:"success"}},[t._v("成功按钮")]),a("el-button",{attrs:{type:"info"}},[t._v("信息按钮")]),a("el-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),a("el-button",{attrs:{type:"danger"}},[t._v("危险按钮")])],1),a("el-row",{staticClass:"pa10"},[a("el-button",{attrs:{plain:""}},[t._v("朴素按钮")]),a("el-button",{attrs:{type:"primary",plain:""}},[t._v("主要按钮")]),a("el-button",{attrs:{type:"success",plain:""}},[t._v("成功按钮")]),a("el-button",{attrs:{type:"info",plain:""}},[t._v("信息按钮")]),a("el-button",{attrs:{type:"warning",plain:""}},[t._v("警告按钮")]),a("el-button",{attrs:{type:"danger",plain:""}},[t._v("危险按钮")])],1),a("el-row",{staticClass:"pa10"},[a("el-button",{attrs:{round:""}},[t._v("圆角按钮")]),a("el-button",{attrs:{type:"primary",round:""}},[t._v("主要按钮")]),a("el-button",{attrs:{type:"success",round:""}},[t._v("成功按钮")]),a("el-button",{attrs:{type:"info",round:""}},[t._v("信息按钮")]),a("el-button",{attrs:{type:"warning",round:""}},[t._v("警告按钮")]),a("el-button",{attrs:{type:"danger",round:""}},[t._v("危险按钮")])],1),a("el-row",{staticClass:"pa10"},[a("el-button",{attrs:{icon:"el-icon-search",circle:""}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}}),a("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""}}),a("el-button",{attrs:{type:"info",icon:"el-icon-message",circle:""}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-star-off",circle:""}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1)],1),a("hr")]),a("div",[a("h1",[t._v("Radio 单选框")]),a("div",[a("div",{staticClass:"pa10"},[a("el-radio",{attrs:{label:"1"},model:{value:t.staticValue.radio,callback:function(e){t.$set(t.staticValue,"radio",e)},expression:"staticValue.radio"}},[t._v("备选项")]),a("el-radio",{attrs:{label:"2"},model:{value:t.staticValue.radio,callback:function(e){t.$set(t.staticValue,"radio",e)},expression:"staticValue.radio"}},[t._v("备选项")]),a("el-radio",{attrs:{disabled:"",label:"3"},model:{value:t.staticValue.radio,callback:function(e){t.$set(t.staticValue,"radio",e)},expression:"staticValue.radio"}},[t._v("备选项")])],1),a("div",{staticClass:"pa10"},[a("el-radio-group",{model:{value:t.staticValue.radio1,callback:function(e){t.$set(t.staticValue,"radio1",e)},expression:"staticValue.radio1"}},[a("el-radio-button",{attrs:{label:"上海"}}),a("el-radio-button",{attrs:{label:"北京"}}),a("el-radio-button",{attrs:{label:"广州"}}),a("el-radio-button",{attrs:{label:"深圳"}})],1)],1)]),a("hr")]),a("div",[a("h1",[t._v("Checkbox 多选框")]),a("div",{staticClass:"pa10"},[a("el-checkbox-group",{model:{value:t.staticValue.checkList,callback:function(e){t.$set(t.staticValue,"checkList",e)},expression:"staticValue.checkList"}},[a("el-checkbox",{attrs:{label:"复选框 A"}}),a("el-checkbox",{attrs:{label:"复选框 B"}}),a("el-checkbox",{attrs:{label:"复选框 C"}}),a("el-checkbox",{attrs:{label:"禁用",disabled:""}}),a("el-checkbox",{attrs:{label:"选中且禁用",disabled:""}})],1)],1),a("div",{staticClass:"pa10"},[a("el-checkbox-group",{model:{value:t.staticValue.checkboxGroup1,callback:function(e){t.$set(t.staticValue,"checkboxGroup1",e)},expression:"staticValue.checkboxGroup1"}},t._l(t.cities,(function(e){return a("el-checkbox-button",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),1)],1),a("hr")]),a("div",[a("h1",[t._v("Input 输入框")]),a("div",{staticClass:"demo-input-suffix w300 pa10"},[t._v(" 属性方式： "),a("el-input",{staticClass:"pb10",attrs:{placeholder:"请选择日期","suffix-icon":"el-icon-date","show-password":""},model:{value:t.staticValue.input1,callback:function(e){t.$set(t.staticValue,"input1",e)},expression:"staticValue.input1"}}),a("el-input",{staticClass:"pb10",attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:t.staticValue.input2,callback:function(e){t.$set(t.staticValue,"input2",e)},expression:"staticValue.input2"}})],1),a("div",{staticClass:"demo-input-suffix w300 pa10"},[t._v(" slot 方式： "),a("el-input",{staticClass:"pb10",attrs:{placeholder:"请选择日期"},model:{value:t.staticValue.input3,callback:function(e){t.$set(t.staticValue,"input3",e)},expression:"staticValue.input3"}},[a("i",{staticClass:"el-input__icon el-icon-date",attrs:{slot:"suffix"},slot:"suffix"})]),a("el-input",{staticClass:"pb10",attrs:{placeholder:"请输入内容"},model:{value:t.staticValue.input4,callback:function(e){t.$set(t.staticValue,"input4",e)},expression:"staticValue.input4"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("hr")]),a("div",[a("h1",[t._v("InputNumber 计数器")]),a("div",[a("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},model:{value:t.staticValue.num,callback:function(e){t.$set(t.staticValue,"num",e)},expression:"staticValue.num"}})],1),a("hr")]),a("div",[a("h1",[t._v("Select 选择器")]),a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.staticValue.selectValue,callback:function(e){t.$set(t.staticValue,"selectValue",e)},expression:"staticValue.selectValue"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("hr")]),a("div",[a("h1",[t._v("Switch 开关")]),a("div",[a("el-switch",{attrs:{"active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.staticValue.switch,callback:function(e){t.$set(t.staticValue,"switch",e)},expression:"staticValue.switch"}})],1),a("hr")]),a("div",[a("h1",[t._v("Slider 滑块")]),a("div",[a("el-slider",{model:{value:t.staticValue.slider,callback:function(e){t.$set(t.staticValue,"slider",e)},expression:"staticValue.slider"}})],1),a("hr")]),a("div",[a("h1",[t._v("DateTimePicker 日期时间选择器")]),a("div",[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.staticValue.dataPicker,callback:function(e){t.$set(t.staticValue,"dataPicker",e)},expression:"staticValue.dataPicker"}})],1),a("hr")]),a("div",[a("h1",[t._v("Table 表格")]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.staticValue.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),a("hr")]),a("div",[a("h1",[t._v("Tag 标签")]),a("div",t._l(t.staticValue.tags,(function(e){return a("el-tag",{key:e.name,staticClass:"pr10",attrs:{closable:"",type:e.type}},[t._v(" "+t._s(e.name)+" ")])})),1),a("hr")]),a("div",[a("h1",[t._v("Tree 树形控件")]),a("div",[a("el-tree",{attrs:{data:t.staticValue.tree,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5]}})],1),a("hr")]),a("div",[a("h1",[t._v("Pagination 分页")]),a("div",[a("el-pagination",{attrs:{"current-page":5,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}}),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1),a("hr")]),a("div",[a("h1",[t._v("Badge 标记")]),a("div",[a("el-badge",{staticClass:"item",attrs:{value:12}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),a("el-badge",{staticClass:"item",attrs:{value:3}},[a("el-button",{attrs:{size:"small"}},[t._v("回复")])],1),a("el-badge",{staticClass:"item",attrs:{value:1,type:"primary"}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),a("el-badge",{staticClass:"item",attrs:{value:2,type:"warning"}},[a("el-button",{attrs:{size:"small"}},[t._v("回复")])],1)],1),a("hr")]),t._m(0),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("div"),a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("div"),a("hr")])}],s=["上海","北京","广州","深圳"],c={name:"index",components:{},props:{},mounted:function(){},watch:{},data:function(){return{cities:s,options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],staticValue:{radio:"1",radio1:"上海",checkList:["选中且禁用","复选框 A"],checkboxGroup1:["上海"],input1:"",input2:"",input3:"",input4:"",num:1,selectValue:"",switch:!1,slider:50,dataPicker:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],tags:[{name:"标签一",type:""},{name:"标签二",type:"success"},{name:"标签三",type:"info"},{name:"标签四",type:"warning"},{name:"标签五",type:"danger"}],tree:[{id:1,label:"一级 2",children:[{id:3,label:"二级 2-1",children:[{id:4,label:"三级 3-1-1"},{id:5,label:"三级 3-1-2",disabled:!0}]},{id:2,label:"二级 2-2",disabled:!0,children:[{id:6,label:"三级 3-2-1"},{id:7,label:"三级 3-2-2",disabled:!0}]}]}]},darkTheme:!1}},computed:{},methods:{handleThemeClick:function(t){window.localStorage.setItem("systemStyle",t),document.location.reload()}}},n=c,r=(a("594a"),a("2877")),o=Object(r["a"])(n,l,i,!1,null,"6a99d6e7",null);e["default"]=o.exports},7394:function(t,e,a){}}]);