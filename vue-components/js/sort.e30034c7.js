(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sort"],{b9bb:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("sort-bar",{attrs:{sorts:n.sorts},on:{change:n.onChange}}),t("pre",[n._v("    <sort-bar ref=\"mySort\" :sorts=\"arr(option)\" @change=\"onChange\" />\n\n    Props:\n      sorts: default: [\n          {name: '推荐', value: 1},\n          {name: '销量', value: {up: 2, down: 3, active: 'down'}},\n          {name: '价格', value: {up: 4, down: 5, active: 'up'}},\n        ]\n    Event:\n      change: param: {value, index, item}\n    可通过this.$refs.mySort.setSorts(sorts = default)重置/设置排序状态\n  ")])],1)},a=[],r=t("41f5"),s={components:{SortBar:r["i"]},data:function(){return{sorts:[{name:"加入时间",value:{up:"id_asc ",down:"id_des",active:"down"}},{name:"订单数",value:{up:"order_count_asc",down:"order_count_des ",active:"down"}}]}},methods:{onChange:function(n){alert(JSON.stringify(n))}}},u=s,c=t("2877"),d=Object(c["a"])(u,o,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=sort.e30034c7.js.map