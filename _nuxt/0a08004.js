(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(t,e,o){var content=o(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("17dbdc4f",content,!0,{sourceMap:!1})},437:function(t,e,o){"use strict";o(403)},438:function(t,e,o){var n=o(83)(!1);n.push([t.i,'.table-of-content[data-v-3cb71be7]{margin-bottom:1.5rem;border:1px solid #ddd;border-radius:5px;padding:1rem}.table-of-content ul[data-v-3cb71be7]{list-style:none}.table-of-content ul li[data-v-3cb71be7]{position:relative}.table-of-content ul li[data-v-3cb71be7]:before{content:" ";position:absolute;top:7px;margin-left:-15px;border:5px solid transparent;border-left-color:#aaa;border-radius:2px}.table-of-content .toc-title[data-v-3cb71be7]{display:flex;justify-content:space-between}.table-of-content .more .more-btn[data-v-3cb71be7]{line-height:36px;text-decoration:none;color:#00afff}.table-of-content .more .more-btn[data-v-3cb71be7]:hover{color:#07f;border-bottom:1px solid #07f}.table-of-content a[data-v-3cb71be7]{text-decoration:none;color:#00afff}.table-of-content .toc2[data-v-3cb71be7]{font-size:1.2rem}.table-of-content .toc3[data-v-3cb71be7]{font-size:1rem;padding-left:1rem}',""]),t.exports=n},459:function(t,e,o){var content=o(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("0d030f2e",content,!0,{sourceMap:!1})},460:function(t,e,o){var content=o(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("6989e29d",content,!0,{sourceMap:!1})},463:function(t,e,o){"use strict";o.r(e);var n={props:{author:{type:Object,required:!0}}},r=o(73),c=o(98),d=o.n(c),l=o(443),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"author-container"},[o("v-img",{attrs:{src:t.author.img}}),o("div",{staticClass:"author"},[o("h4",[t._v("Author")]),o("p",[t._v(t._s(t.author.name))]),o("p",[t._v(t._s(t.author.bio))])])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VImg:l.a})},464:function(t,e,o){"use strict";o.r(e);o(20);var n={name:"TableOfContent",props:{toc:{type:Array,required:!0}},data:function(){return{more:!0}},computed:{tableOfContent:function(){return this.toc.filter((function(t){return t.depth>1&&t.depth<4}))}}},r=(o(437),o(73)),c=o(98),d=o.n(c),l=o(318),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"table-of-content"},[o("div",{staticClass:"toc-title"},[o("h2",[t._v("목차")]),o("div",{staticClass:"more"},[o("a",{staticClass:"more-btn",on:{click:function(e){t.more=!t.more}}},[t._v(t._s(t.more?"더 보기":"닫기"))])])]),o("v-expand-transition",[o("ul",{directives:[{name:"show",rawName:"v-show",value:!t.more,expression:"!more"}]},t._l(t.tableOfContent,(function(link){return o("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[o("nuxt-link",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])],1)}),[],!1,null,"3cb71be7",null);e.default=component.exports;d()(component,{VExpandTransition:l.a})},516:function(t,e,o){"use strict";o(459)},517:function(t,e,o){var n=o(83)(!1);n.push([t.i,'.css-66hu0x[data-v-858620de]{overflow:hidden;position:relative;color:#fff;text-align:center;transition:all .2s ease-in-out 0s;background-color:#407adf}.css-1pbu2z8[data-v-858620de]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-chky3p[data-v-858620de]{padding:45px 0}.css-1r8cg95[data-v-858620de]{color:#fff;font-size:28px;margin-bottom:25px}.css-5vc5y3[data-v-858620de]{display:flex;align-items:center;justify-content:center;margin-bottom:0!important}.css-5vc5y3 p[data-v-858620de]{margin-bottom:0;line-height:1.2;font-size:14px}.css-e00ba0[data-v-858620de]{position:relative;margin:-10px auto 0;max-width:600px}.css-e00ba0 img[data-v-858620de]{position:relative;width:100%;height:auto}.css-e00ba0[data-v-858620de]:before{content:"";position:absolute;left:-100vw;right:-100vw;bottom:0;height:50%;background-color:#fff}.css-2lmhoi[data-v-858620de]{padding:22.5px 0!important}.css-1ricvn[data-v-858620de]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}@media(min-width:576px){.css-1pbu2z8[data-v-858620de],.css-1ricvn[data-v-858620de]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1pbu2z8[data-v-858620de],.css-1ricvn[data-v-858620de]{max-width:540px}}@media(min-width:768px){.css-1pbu2z8[data-v-858620de],.css-1ricvn[data-v-858620de]{max-width:720px}.css-chky3p[data-v-858620de]{padding:55px 0}.css-1r8cg95[data-v-858620de]{font-size:38px}.css-e00ba0[data-v-858620de]{margin-top:-15px}.css-2lmhoi[data-v-858620de]{padding:27.5px 0!important}}@media(min-width:992px){.css-1pbu2z8[data-v-858620de],.css-1ricvn[data-v-858620de]{max-width:730px}.css-chky3p[data-v-858620de]{padding:65px 0}.css-e00ba0[data-v-858620de]{margin-top:-20px}.css-2lmhoi[data-v-858620de]{padding:32.5px 0!important}}',""]),t.exports=n},518:function(t,e,o){"use strict";o(460)},519:function(t,e,o){var n=o(83)(!1);n.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.icon.icon-link{display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),t.exports=n},538:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(74),o(463)),c=o(464),d={name:"Slug",components:{Author:r.default,TableOfContent:c.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,n=t.params,e.next=3,o("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},computed:{topFontColor:function(){return this.article&&this.article.fontColor?this.article.fontColor:"#ffffff"},topBackgroundColor:function(){return this.article&&this.article.backgroundColor?this.article.backgroundColor:"#00afff"}}},l=(o(516),o(518),o(73)),f=o(98),v=o.n(f),m=o(496),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-container"},[o("navigation-bar"),o("v-main",[o("article",[o("header",{staticClass:"css-66hu0x",style:{color:t.topFontColor,backgroundColor:t.topBackgroundColor}},[o("div",{staticClass:"css-1pbu2z8"},[o("div",{staticClass:"css-chky3p"},[o("h1",{staticClass:"css-1r8cg95"},[t._v(t._s(t.article.title))]),o("div",{staticClass:"css-5vc5y3"},[o("time",{staticClass:"updated",attrs:{datetime:"article.updatedAt"}}),o("p",[t._v("최종 수정일: "+t._s(t.formatDate(t.article.updatedAt)))])])]),o("figure",{staticClass:"css-e00ba0"},[o("img",{attrs:{src:t.article.img,alt:t.article.title}})])])]),o("div",{staticClass:"css-2lmhoi"},[o("div",{staticClass:"css-1ricvn"},[o("table-of-content",{attrs:{toc:t.article.toc}}),o("div",{staticClass:"css-107jwiq",attrs:{id:"content"}},[o("nuxt-content",{attrs:{document:t.article}})],1)],1)])])]),o("page-footer")],1)}),[],!1,null,"858620de",null);e.default=component.exports;v()(component,{NavigationBar:o(329).default,PageFooter:o(330).default}),v()(component,{VMain:m.a})}}]);