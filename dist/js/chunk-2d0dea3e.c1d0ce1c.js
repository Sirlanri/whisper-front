(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dea3e"],{8709:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("waterfall",{attrs:{cardsData:t.cardsData,nopost:t.nopost},on:{moreData:t.getMorePost}})],1)},e=[],n=(s("fe59"),s("08ba"),s("c2a1")),r={components:{waterfall:n["a"]},data:function(){return{cardsData:[],nopost:!1}},mounted:function(){this.getAllPost()},computed:{refresh:function(){return this.$store.state.refreshFlag}},watch:{refresh:function(){this.getAllPost()}},methods:{getAllPost:function(){var t=this;this.cardsData=[],this.axios.get("getAllPost").then((function(a){200==a.status&&(t.cardsData=a.data.posts)}))},getMorePost:function(t){var a=this;this.axios.get("getLazyPost",{params:{num:t}}).then((function(t){if(200==t.status){if(void 0==t.data.posts)return void(a.nopost=!0);t.data.posts.forEach((function(t){a.cardsData.push(t)}))}}))}}},c=r,i=s("9ca4"),u=Object(i["a"])(c,o,e,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0dea3e.c1d0ce1c.js.map