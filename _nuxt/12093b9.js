(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{529:function(t,e,c){var content=c(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("21f4f926",content,!0,{sourceMap:!1})},530:function(t,e,c){var content=c(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("6989e29d",content,!0,{sourceMap:!1})},601:function(t,e,c){"use strict";c(529)},602:function(t,e,c){var n=c(18)(!1);n.push([t.i,'#content img[data-v-17ec03a8]{display:block;max-width:100%;margin:auto}#content ul[data-v-17ec03a8]{margin:1rem 0}#content h2[data-v-17ec03a8]{margin:4rem 0 1rem}.css-66hu0x[data-v-17ec03a8]{overflow:hidden;position:relative;color:#fff;text-align:center;transition:all .2s ease-in-out 0s;background-color:#407adf}.css-1pbu2z8[data-v-17ec03a8]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-chky3p[data-v-17ec03a8]{padding:45px 0}.css-1r8cg95[data-v-17ec03a8]{color:#fff;font-size:28px;margin-bottom:25px}.css-5vc5y3[data-v-17ec03a8]{display:flex;align-items:center;justify-content:center;margin-bottom:0!important}.css-5vc5y3 p[data-v-17ec03a8]{margin-bottom:0;line-height:1.2;font-size:14px}.css-e00ba0[data-v-17ec03a8]{position:relative;margin:-10px auto 0;max-width:600px}.css-e00ba0 .article-img[data-v-17ec03a8]{position:relative;width:100%;height:auto}.css-e00ba0[data-v-17ec03a8]:before{content:"";position:absolute;left:-100vw;right:-100vw;bottom:0;height:50%;background-color:#fff}.css-2lmhoi[data-v-17ec03a8]{padding:22.5px 0!important}.css-1ricvn[data-v-17ec03a8]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.tags[data-v-17ec03a8]{margin:0 auto;padding-left:10px;padding-right:10px}.tags ul[data-v-17ec03a8]{padding:0;list-style:none}.tags ul li[data-v-17ec03a8]{display:inline;cursor:pointer;background:#eee;border:1px solid #ddd;border-radius:3px;margin-right:5px;padding:0 5px}@media(min-width:576px){.css-1pbu2z8[data-v-17ec03a8],.css-1ricvn[data-v-17ec03a8]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1pbu2z8[data-v-17ec03a8],.css-1ricvn[data-v-17ec03a8],.tags[data-v-17ec03a8]{max-width:540px}}@media(min-width:768px){.css-1pbu2z8[data-v-17ec03a8],.css-1ricvn[data-v-17ec03a8],.tags[data-v-17ec03a8]{max-width:720px}.css-chky3p[data-v-17ec03a8]{padding:55px 0}.css-1r8cg95[data-v-17ec03a8]{font-size:38px}.css-e00ba0[data-v-17ec03a8]{margin-top:-15px}.css-2lmhoi[data-v-17ec03a8]{padding:27.5px 0!important}}@media(min-width:992px){.css-1pbu2z8[data-v-17ec03a8],.css-1ricvn[data-v-17ec03a8],.tags[data-v-17ec03a8]{max-width:730px}.css-chky3p[data-v-17ec03a8]{padding:65px 0}.css-e00ba0[data-v-17ec03a8]{margin-top:-20px}.css-2lmhoi[data-v-17ec03a8]{padding:32.5px 0!important}}',""]),t.exports=n},603:function(t,e,c){"use strict";c(530)},604:function(t,e,c){var n=c(18),o=c(531),r=c(532),l=n(!1),d=o(r);l.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.icon.icon-link{background-image:url("+d+");display:inline-block;width:20px;height:20px;background-size:20px 20px}.icon.icon-link.small{width:14px;height:14px;background-size:14px 17px}",""]),t.exports=l},638:function(t,e,c){"use strict";c.r(e);var n=c(7),o=(c(56),c(29),c(72),c(9),c(47),c(511)),r=c(512),l=c(513),d=c(514),h=c(528),m="".concat("https://jettanalysis.com").concat(""),f={name:"Slug",components:{Author:o.default,TableOfContent:r.default,Comment:l.default,StickyShareBox:d.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$content,n=t.params,o=t.error,article=null,e.prev=2,e.next=5,c("articles","blog",n.slug).fetch();case 5:article=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),o(e.t0);case 11:return e.abrupt("return",{article:article});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()},head:function(t){var e=t.$seoMeta;return{title:this.article.title,meta:[{hid:"keyword",name:"keyword",content:this.article.tags.join(",")}].concat(e({title:"".concat(this.article.title," | ").concat("JETT Analysis"),url:"".concat(m,"/blog/").concat(this.article.id),description:this.article.description,image:Object(h.a)(this.article.img)},!1)),link:[{rel:"canonical",href:"".concat(m).concat(this.$route.path)}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},computed:{topFontColor:function(){return this.article&&this.article.fontColor?this.article.fontColor:"#ffffff"},topBackgroundColor:function(){return this.article&&this.article.backgroundColor?this.article.backgroundColor:"#00afff"},post:function(){return{id:this.article.slug,title:this.article.title,description:this.article.description,img:this.article.img}}}},v=(c(601),c(603),c(36)),x=c(49),w=c.n(x),k=c(269),y=c(396),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"article-container"},[c("navigation-bar"),c("sticky-share-box",{attrs:{post:t.post}}),c("v-main",[c("article",[c("header",{staticClass:"css-66hu0x",style:{color:t.topFontColor,backgroundColor:t.topBackgroundColor}},[c("div",{staticClass:"css-1pbu2z8"},[c("div",{staticClass:"css-chky3p"},[c("h1",{staticClass:"css-1r8cg95"},[t._v(t._s(t.article.title))]),c("div",{staticClass:"css-5vc5y3"},[c("time",{staticClass:"updated",attrs:{datetime:"article.updatedAt"}}),c("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])])]),c("figure",{staticClass:"css-e00ba0"},[c("v-img",{staticClass:"article-img",attrs:{src:t.article.img,alt:t.article.title}})],1)])]),c("div",{staticClass:"css-2lmhoi"},[c("div",{staticClass:"css-1ricvn"},[c("table-of-content",{attrs:{toc:t.article.toc}}),c("div",{staticClass:"css-107jwiq",attrs:{id:"content"}},[c("nuxt-content",{attrs:{document:t.article}})],1)],1)]),c("div",{staticClass:"tags"},[c("ul",t._l(t.article.tags,(function(e){return c("li",[c("span",{staticClass:"icon icon-link small"}),t._v(t._s(e))])})),0)])]),c("comment",{attrs:{post:t.post}})],1),c("page-footer")],1)}),[],!1,null,"17ec03a8",null);e.default=component.exports;w()(component,{NavigationBar:c(134).default,PageFooter:c(135).default}),w()(component,{VImg:k.a,VMain:y.a})}}]);