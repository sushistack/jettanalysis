(window.webpackJsonp=window.webpackJsonp||[]).push([[46,11,12],{412:function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return f}));n(33),n(19),n(11),n(53);var o=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",r=t.env.NUXT_APP_FRONTEND_PORT||"",c="".concat(o).concat(r),l="kakao-sdk-script",d=function(t){return/^(?:[a-z]+:)?\/\//i.test(t)?t:("/"!==t.charAt(0)&&(t="/".concat(t)),"".concat(c).concat(t))},h=function(dt){if(dt){var t=new Date(dt),e=function(t){return 1==="".concat(t).length?"0".concat(t):t};return"".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1),"-").concat(e(t.getDate()))}},m=function(t){var script=document.querySelector("#".concat(l));script?t&&t():((script=document.createElement("script")).id=l,script.src="/js/kakao-sdk.min.js",script.addEventListener("load",(function(e){Kakao.init("33d3fefda63de9dadf73b14cd69f8d93"),Kakao.isInitialized(),t&&t()})),document.body.appendChild(script))},f=function(t,e){return{author:{"@type":"Person",name:t.author.name},description:t.description,url:"".concat(c,"/").concat(e,"/").concat(t.slug),"@type":"BlogPosting",image:d(t.img),publisher:{"@type":"Organization",logo:{"@type":"ImageObject",url:"".concat(c,"/jettanalysis.png")},name:"엔지니어"},headline:t.title,dateModified:h(t.updatedAt),datePublished:h(t.createdAt),mainEntityOfPage:{"@type":"WebPage","@id":"".concat(c,"/").concat(e,"/").concat(t.slug)},"@context":"https://schema.org"}},v={"@context":"http://schema.org",author:{"@type":"Person",name:"엔지니어"},"@type":"webSite",headline:"검색엔진 최적화 전략 가이드",name:"JETT Analysis",description:"이제 검색엔진 최적화는 저희에게 맡기세요! JETT Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.",url:c,publisher:{"@type":"Organization",logo:{"@type":"ImageObject",url:"".concat(c,"/jettanalysis.png")},name:"엔지니어"}}}).call(this,n(132))},417:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("602f8699",content,!0,{sourceMap:!1})},436:function(t,e,n){"use strict";(function(t){n(33),n(55),n(67),n(7),n(68);var o=n(66),r=n(438),c=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",l=t.env.NUXT_APP_FRONTEND_PORT||"",d="".concat(c).concat(l);e.a={name:"Comment",props:{post:{type:Object,required:!0}},components:{ValidationObserver:o.a,ValidationProvider:o.b,ShareBox:r.default},data:function(){return{comments:[{},{}],isCommentLoading:!0,username:"",content:"",loading:!1,attrs:{class:"mb-6",boilerplate:!1,elevation:0},snackbar:!1}},mounted:function(){var t=this;this.$fire.firestore.collection("COM_".concat(this.post.type,"_").concat(this.post.id)).get().then((function(e){t.comments=e.docs.map((function(t){return t.data()})),t.isCommentLoading=!1}))},methods:{submit:function(){var t=this,e={username:this.username,content:this.encodedContent,created_at:(new Date).getTime()};this.loading=!0,this.$fire.firestore.collection("COM_".concat(this.post.type,"_").concat(this.post.id)).add(e).then((function(){t.loading=!1,t.comments.push(e),t.resetCommentForm()})).catch((function(e){t.loading=!1,alert("댓글 등록에 실패했습니다.")}))},resetCommentForm:function(){var t=this;this.content="",this.$nextTick((function(){t.$refs.form&&t.$refs.form.reset()}))},userColor:function(t){if(!t)return"#a00077";switch(t.toUpperCase().charCodeAt(0)%8){case 0:return"#855c47";case 1:return"#7a8547";case 2:return"#475085";case 3:return"#7d4785";case 4:return"#477085";case 5:return"#474b85";case 6:return"#7d8547";case 7:return"#478549"}},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}},computed:{commentCount:function(){return this.comments?this.comments.length:0},shareUrl:function(){return"".concat(d,"/").concat(this.post.type,"/").concat(this.post.id)},shareTwitter:function(){return"https://twitter.com/share?text=".concat(this.post.title,"&url=").concat(this.shareUrl,"&via=jettanalysis")},shareFacebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)},encodedContent:function(){return this.content?escape(this.content):""}},filters:{filterFirstChar:function(t){return t?t.toUpperCase().charAt(0):""},toDateTime:function(t){if(!t)return"";var e=new Date(Number(t)),n=function(t){return 1==="".concat(t).length?"0".concat(t):t};return"".concat(e.getFullYear(),".").concat(n(e.getMonth()+1),".").concat(n(e.getDate())," ").concat(n(e.getHours()),":").concat(n(e.getMinutes()))},unescape:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return t?unescape(t):""}))}}}).call(this,n(132))},437:function(t,e,n){"use strict";(function(t){n(33),n(11),n(53);var o=n(412),r=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",c=t.env.NUXT_APP_FRONTEND_PORT||"",l="".concat(r).concat(c);e.a={props:{post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareTwitter:function(){window.open(this.twiterSharingUrl,"twitter-share","width=800,height=500")},shareFacebook:function(){window.open(this.facebookSharingUrl,"facebook-share","width=800,height=500")},shareKakaoStory:function(){var t=this;Object(o.c)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(o.c)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:Object(o.d)(t.post.img),title:t.post.title,description:t.post.description,path:"".concat(t.post.type,"/").concat(t.post.id)}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}},computed:{shareUrl:function(){return"".concat(l,"/").concat(this.post.type,"/").concat(this.post.id)},twiterSharingUrl:function(){return"https://twitter.com/share?text=".concat(this.post.title,"&url=").concat(this.shareUrl,"&via=jettanalysis")},facebookSharingUrl:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)}}}}).call(this,n(132))},438:function(t,e,n){"use strict";n.r(e);n(33),n(11),n(53);var o=n(412),r={name:"ShareBox",props:{shareUrl:{type:String,required:!0},shareTwitter:{type:String,required:!0},shareFacebook:{type:String,required:!0},post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareKakaoStory:function(){var t=this;Object(o.c)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(o.c)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:Object(o.d)(t.post.img),title:t.post.title,description:t.post.description,path:"".concat(t.post.type,"/").concat(t.post.id)}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}}},c=(n(453),n(38)),l=n(52),d=n.n(l),h=n(599),m=n(504),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"share"},[n("li",[n("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-twitter.png"}})])]),n("li",[n("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/signin-facebook.png"}})])]),n("li",[n("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-kakao-story.png"}})])]),n("li",[n("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/signin-kakao.png"}})])]),n("li",[n("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-link.png"}})])]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"78ab5ac4",null);e.default=component.exports;d()(component,{VBtn:h.a,VSnackbar:m.a})},453:function(t,e,n){"use strict";n(417)},454:function(t,e,n){var o=n(27)(!1);o.push([t.i,".share[data-v-78ab5ac4]{margin-bottom:0;margin-top:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-78ab5ac4]{text-decoration:none}.share a .share-icon[data-v-78ab5ac4]{width:32px;height:32px;transition:transform .2s}.share a .share-icon[data-v-78ab5ac4]:hover{transform:scale(1.15)}.share li+li[data-v-78ab5ac4]{margin-left:10px}",""]),t.exports=o},465:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("eeeef668",content,!0,{sourceMap:!1})},466:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("094a5494",content,!0,{sourceMap:!1})},467:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("30c44c39",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("3614089a",content,!0,{sourceMap:!1})},515:function(t,e,n){"use strict";n(465)},516:function(t,e,n){var o=n(27)(!1);o.push([t.i,'.table-of-content[data-v-b66568f6]{margin-bottom:1.5rem;border:1px solid #ddd;border-radius:5px;padding:1rem}.table-of-content ul[data-v-b66568f6]{list-style:none}.table-of-content ul li[data-v-b66568f6]{position:relative}.table-of-content ul li a[data-v-b66568f6]{color:#000}.table-of-content ul li a[data-v-b66568f6]:hover{color:#07f}.table-of-content ul li[data-v-b66568f6]:before{content:" ";position:absolute;top:7px;margin-left:-15px;border:5px solid transparent;border-left-color:#aaa;border-radius:2px}.table-of-content .toc-title[data-v-b66568f6]{display:flex;justify-content:space-between}.table-of-content .toc-title h2[data-v-b66568f6]{margin:0}.table-of-content .more .more-btn[data-v-b66568f6]{line-height:36px;text-decoration:none;color:#00afff;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table-of-content .more .more-btn[data-v-b66568f6]:hover{color:#07f;border-bottom:1px solid #07f}.table-of-content a[data-v-b66568f6]{text-decoration:none;color:#00afff}.table-of-content .toc2[data-v-b66568f6]{font-size:1.2rem}.table-of-content .toc3[data-v-b66568f6]{font-size:1rem;padding-left:1rem}',""]),t.exports=o},517:function(t,e,n){"use strict";n(466)},518:function(t,e,n){var o=n(27)(!1);o.push([t.i,'#comments[data-v-56c2c2b8]{display:flex;justify-content:space-between;border-bottom:1px solid #ebebeb;padding:25px 0}.comment-size-progress[data-v-56c2c2b8]{margin-right:7.5px}.comments-title[data-v-56c2c2b8]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.comments-title span[data-v-56c2c2b8]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.comments-container[data-v-56c2c2b8]{padding:22.5px 0!important}.comments-inner-container[data-v-56c2c2b8]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.comments[data-v-56c2c2b8]{list-style:none;padding-left:0;margin:1rem 0}.comments-wrapper[data-v-56c2c2b8]{margin-bottom:1.75rem;word-wrap:break-word}.comments-author-photo[data-v-56c2c2b8]{width:48px;height:48px;margin-right:16px;line-height:48px;text-align:center;font-weight:700;color:#fff;font-size:14px;text-transform:uppercase}.comments-author-data[data-v-56c2c2b8]{flex-grow:1;min-width:1px}.comments-author-name[data-v-56c2c2b8]{font-weight:700}.comments-author-metadata[data-v-56c2c2b8],.comments-author-name[data-v-56c2c2b8]{line-height:22.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.comments-author-metadata[data-v-56c2c2b8]{font-size:10px}.comments-socials[data-v-56c2c2b8]{display:block;position:absolute;top:0;right:0;display:flex}.comments-link[data-v-56c2c2b8]{display:block;width:1.75rem;height:1.75rem;background:#f7f7f7;display:flex;justify-content:center;align-items:center;fill:#24292e}.comment-form[data-v-56c2c2b8]{margin:25px 0;padding-top:1rem}@media(min-width:576px){.comments-inner-container[data-v-56c2c2b8]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.comments-inner-container[data-v-56c2c2b8]{max-width:540px}}@media(min-width:768px){.comments-inner-container[data-v-56c2c2b8]{max-width:720px}.comments-container[data-v-56c2c2b8]{padding:27.5px 0!important}}@media(min-width:992px){.comments-inner-container[data-v-56c2c2b8]{max-width:730px}}',""]),t.exports=o},519:function(t,e,n){"use strict";n(467)},520:function(t,e,n){var o=n(27)(!1);o.push([t.i,".comments-author{display:flex;margin-bottom:1.75rem;position:relative}",""]),t.exports=o},521:function(t,e,n){"use strict";n(468)},522:function(t,e,n){var o=n(27)(!1);o.push([t.i,".css-1isgq23[data-v-2b801236]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.share-btn[data-v-2b801236]{cursor:pointer}.share-icon[data-v-2b801236]{width:32px;height:32px;transition:transform .2s}.share-icon[data-v-2b801236]:hover{transform:scale(1.15)}.css-72kctk[data-v-2b801236]{display:none}@media(min-width:576px){.css-1isgq23[data-v-2b801236]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1isgq23[data-v-2b801236]{max-width:540px}}@media(min-width:768px){.css-1isgq23[data-v-2b801236]{max-width:720px}}@media(min-width:992px){.css-1isgq23[data-v-2b801236]{max-width:960px}.css-72kctk[data-v-2b801236]{display:block;position:fixed;z-index:1;background-color:#fff;border:1px solid #ebebeb;border-radius:5px;padding:15px 2px 10px;text-align:center;top:140px;width:60px}.css-72kctk ul[data-v-2b801236]{list-style:none;padding:0;margin:0}.css-72kctk ul li a[data-v-2b801236]{display:inline-flex;align-items:center;justify-content:center;width:33px;height:33px;font-size:24px}.css-72kctk ul li a svg[data-v-2b801236]{max-width:26px;height:100%;max-height:26px;pointer-events:none}.css-72kctk ul li a svg.icon-twitter[data-v-2b801236]{fill:#219bcf}.css-72kctk ul li a svg.icon-twitter[data-v-2b801236]:hover{fill:#1d8bba}.css-72kctk ul li a svg.icon-facebook[data-v-2b801236]{fill:#66679d}.css-72kctk ul li a svg.icon-facebook[data-v-2b801236]:hover{fill:#5b5c8d}}@media(min-width:1200px){.css-1isgq23[data-v-2b801236]{max-width:1140px}.css-72kctk ul li a[data-v-2b801236]{font-size:26px;width:50px;height:50px}.css-72kctk[data-v-2b801236]{width:75px}}",""]),t.exports=o},534:function(t,e,n){"use strict";n.r(e);var o={props:{author:{type:Object,required:!0}}},r=n(38),c=n(52),l=n.n(c),d=n(277),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author-container"},[n("v-img",{attrs:{src:t.author.img}}),n("div",{staticClass:"author"},[n("h4",[t._v("Author")]),n("p",[t._v(t._s(t.author.name))]),n("p",[t._v(t._s(t.author.bio))])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:d.a})},535:function(t,e,n){"use strict";n.r(e);n(12);var o={name:"TableOfContent",props:{toc:{type:Array,required:!0}},data:function(){return{more:!0}},computed:{tableOfContent:function(){return this.toc?this.toc.filter((function(t){return t.depth>1&&t.depth<4})):[]}}},r=(n(515),n(38)),c=n(52),l=n.n(c),d=n(402),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"table-of-content"},[n("div",{staticClass:"toc-title"},[n("h2",[t._v("목차")]),n("div",{staticClass:"more"},[n("a",{staticClass:"more-btn",on:{click:function(e){t.more=!t.more}}},[t._v(t._s(t.more?"열기":"접기"))])])]),n("v-expand-transition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.more,expression:"!more"}]},t._l(t.tableOfContent,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+link.id},expression:"{el: `#${link.id}`}"}],attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])],1)}),[],!1,null,"b66568f6",null);e.default=component.exports;l()(component,{VExpandTransition:d.a})},536:function(t,e,n){"use strict";n.r(e);var o=n(436).a,r=(n(517),n(519),n(38)),c=n(52),l=n.n(c),d=n(599),h=n(395),m=n(688),f=n(504),v=n(571),x=n(689),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments-container"},[n("div",{staticClass:"comments-inner-container"},[n("div",{attrs:{id:"comments"}},[n("p",{staticClass:"comments-title"},[n("span",[t._v(t._s(t.isCommentLoading?0:t.commentCount))]),t._v(" 댓글")]),n("share-box",{attrs:{post:t.post,shareUrl:t.shareUrl,shareTwitter:t.shareTwitter,shareFacebook:t.shareFacebook}})],1),n("ul",{staticClass:"comments"},t._l(t.comments,(function(e,o){return n("li",{key:o,staticClass:"comment-item"},[n("v-skeleton-loader",t._b({attrs:{loading:t.isCommentLoading,type:"list-item-avatar-two-line, paragraph"}},"v-skeleton-loader",t.attrs,!1),[n("div",{staticClass:"comment-wrapper"},[n("div",{staticClass:"comments-author"},[n("div",{staticClass:"comments-author-photo",style:{backgroundColor:t.userColor(e.username)}},[t._v(t._s(t._f("filterFirstChar")(e.username)))]),n("div",{staticClass:"comments-author-data"},[n("div",{staticClass:"comments-author-name"},[t._v(t._s(e.username))]),n("div",{staticClass:"comments-author-metadata"},[n("time",{attrs:{datetime:e.create_at}},[t._v(t._s(t._f("toDateTime")(e.created_at)))])])])]),n("p",{staticClass:"comments-content"},[t._v(t._s(t._f("unescape")(e.content)))])])])],1)})),0),n("div",{staticClass:"comment-form"},[n("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit,r=e.reset;return[n("form",{on:{submit:function(e){return e.preventDefault(),o(t.submit)},reset:function(t){return t.preventDefault(),r.apply(null,arguments)}}},[n("v-col",[n("validation-provider",{attrs:{name:"이름",rules:"required|min:1|max:30"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-text-field",{staticClass:"mb-3",attrs:{"error-messages":o,label:"이름",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"내용",rules:"required|min:1|max:1500"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-textarea",{attrs:{label:"내용","error-messages":o,outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})]}}],null,!0)})],1),n("v-col",[n("v-btn",{staticClass:"white--text",attrs:{loading:t.loading,color:"#00afff",type:"submit",large:""}},[t._v("등록")])],1)],1)]}}])})],1)]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"56c2c2b8",null);e.default=component.exports;l()(component,{ShareBox:n(438).default}),l()(component,{VBtn:d.a,VCol:h.a,VSkeletonLoader:m.a,VSnackbar:f.a,VTextField:v.a,VTextarea:x.a})},537:function(t,e,n){"use strict";n.r(e);var o=n(437).a,r=(n(521),n(38)),c=n(52),l=n.n(c),d=n(599),h=n(504),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entry-sticky-shares-wrap css-1isgq23"},[n("div",{staticClass:"entry-sticky-shares css-72kctk"},[n("ul",{staticClass:"entry-shares"},[n("li",[n("a",{staticClass:"share-btn",attrs:{href:t.twiterSharingUrl,target:"_blank"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareTwitter.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-twitter.png"}})])]),n("li",[n("a",{staticClass:"share-btn",attrs:{href:t.facebookSharingUrl,target:"_blank"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareFacebook.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/signin-facebook.png"}})])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-kakao-story.png"}})])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/signin-kakao.png"}})])]),n("li",[n("a",{staticClass:"share-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-link.png"}})])])])]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"2b801236",null);e.default=component.exports;l()(component,{VBtn:d.a,VSnackbar:h.a})},562:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},563:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},564:function(t,e,n){"use strict";(function(t){var o=n(8),r=(n(61),n(33),n(11),n(53),n(70),n(534)),c=n(535),l=n(536),d=n(537),h=n(412),m=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",f=t.env.NUXT_APP_FRONTEND_PORT||"",v="".concat(m).concat(f);e.a={name:"Slug",components:{Author:r.default,TableOfContent:c.default,Comment:l.default,StickyShareBox:d.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,r=t.error,article=null,e.prev=2,e.next=5,n("articles","wiki",o.slug).fetch();case 5:article=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),r(e.t0);case 11:return e.abrupt("return",{article:article});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},head:function(e){var n=e.$seoMeta;return{title:this.article.title,meta:n({title:"".concat(this.article.title," | ").concat(t.env.NUXT_APP_SITE_NAME||"JETT Analysis"),url:"".concat(v).concat(this.$route.path),description:this.article.description,image:Object(h.d)(this.article.img)},!1).concat([{hid:"keyword",name:"keyword",content:this.article.tags.join(",")},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"".concat(this.article.title," | JETT Analysis")}]),link:[{rel:"canonical",href:"".concat(v).concat(this.$route.path)}],script:[{type:"application/ld+json",json:Object(h.b)(this.article,"wiki")}]}},computed:{topFontColor:function(){return this.article&&this.article.color?this.article.color:"#ffffff"},topBackgroundColor:function(){return this.article&&this.article.backgroundColor?this.article.backgroundColor:"#00afff"},post:function(){return{id:this.article.slug,title:this.article.title,description:this.article.description,img:this.article.img,type:"wiki"}}}}}).call(this,n(132))},588:function(t,e,n){var content=n(670);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("12d7688c",content,!0,{sourceMap:!1})},669:function(t,e,n){"use strict";n(588)},670:function(t,e,n){var o=n(27),r=n(562),c=n(563),l=o(!1),d=r(c);l.push([t.i,"article table tr th{padding:0;border:1px solid #ccc;text-align:center;font-weight:700}article table tr td{border:1px solid #ccc;padding:5px}article table tr td.rightright{background:#eee}article table tr td h4{margin:0;padding:0;font-weight:400}article table{margin-bottom:2em;width:100%}article th{border-bottom:2px solid #ccc;font-weight:700;text-align:left}article td{border-bottom:1px solid #ddd}article caption,article td,article th{padding:4px 10px 4px 0}article caption{background:#f1f1f1;padding:10px 0;margin-bottom:1em}article td,article th,article tr{vertical-align:middle}article table .last{padding-right:0}article .nuxt-content ul li>p{margin:0}article .nuxt-content ul>li{margin-bottom:15px}h1{margin-top:5.5rem;margin-bottom:1.5rem}h1.article-title{margin-top:0;font-size:28px}h2{margin-top:5rem}h2,h3{margin-bottom:1rem}h3{margin-top:4.5rem}h4{margin-top:2.5rem;margin-bottom:.8rem}h5,h6{margin-top:1rem}.icon.icon-link{background-image:url("+d+');display:inline-block}h2 .icon.icon-link{width:24px;height:24px;background-size:24px 27px}h3 .icon.icon-link{width:20px;height:20px;background-size:20px 23px}h4 .icon.icon-link{width:15px;height:15px;background-size:15px 17px}h5 .icon.icon-link{width:12px;height:12px;background-size:12px 14px}h6 .icon.icon-link{width:10px;height:10px;background-size:10px 12px}.css-66hu0x{overflow:hidden;position:relative;color:#fff;text-align:center;transition:all .2s ease-in-out 0s;background-color:#407adf}.css-1pbu2z8{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.css-chky3p{padding:45px 0}.css-1r8cg95{font-size:28px;margin-bottom:25px}.css-5vc5y3{display:flex;align-items:center;justify-content:center;margin-bottom:0!important}.css-5vc5y3 p{margin-bottom:0;line-height:1.2;font-size:14px}.css-e00ba0{position:relative;margin:-10px auto 0;max-width:600px}.css-e00ba0 .article-img{border:1px solid transparent;border-radius:10px;position:relative;width:100%;height:auto}.css-e00ba0:before{content:"";position:absolute;left:-100vw;right:-100vw;bottom:0;height:50%;background-color:#fff}.css-2lmhoi{padding:22.5px 0!important}.css-1ricvn{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.tags{margin:0 auto;padding-left:10px;padding-right:10px}.tags ul{padding:0;list-style:none}.tags ul li{display:inline;cursor:pointer;background:#eee;border:1px solid #ddd;border-radius:3px;margin-right:5px;padding:0 5px}@media(min-width:576px){.css-1pbu2z8,.css-1ricvn,.tags{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-1pbu2z8,.css-1ricvn,.tags{max-width:540px}}@media(min-width:768px){.css-1pbu2z8,.css-1ricvn,.tags{max-width:720px}.css-chky3p{padding:55px 0}.css-1r8cg95{font-size:38px}.css-e00ba0{margin-top:-15px}.css-2lmhoi{padding:27.5px 0!important}}@media(min-width:992px){.css-1pbu2z8,.css-1ricvn,.tags{max-width:730px}.css-chky3p{padding:65px 0}.css-e00ba0{margin-top:-20px}.css-2lmhoi{padding:32.5px 0!important}}.nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}',""]),t.exports=l},704:function(t,e,n){"use strict";n.r(e);var o=n(564).a,r=(n(669),n(38)),c=n(52),l=n.n(c),d=n(277),h=n(396),m=n(425),f=n(397),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("navigation-bar"),n("sticky-share-box",{attrs:{post:t.post}}),n("v-main",[n("article",[n("header",{staticClass:"css-66hu0x",style:{color:t.topFontColor,backgroundColor:t.topBackgroundColor}},[n("div",{staticClass:"css-1pbu2z8"},[n("div",{staticClass:"css-chky3p"},[n("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"css-5vc5y3"},[n("time",{staticClass:"updated",attrs:{datetime:"article.updatedAt"}}),n("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])])]),n("figure",{staticClass:"css-e00ba0"},[n("v-img",{staticClass:"article-img",attrs:{"lazy-src":"/images/placeholder.png",src:t.article.img,alt:t.article.title},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)])]),n("div",{staticClass:"css-2lmhoi"},[n("div",{staticClass:"css-1ricvn"},[n("table-of-content",{attrs:{toc:t.article.toc}}),n("div",{staticClass:"css-107jwiq",attrs:{id:"content"}},[n("nuxt-content",{attrs:{document:t.article}})],1)],1)]),n("div",{staticClass:"tags"},[n("ul",t._l(t.article.tags,(function(e){return n("li",[n("span",{staticClass:"icon icon-link small"}),t._v(t._s(e))])})),0)])]),n("comment",{attrs:{post:t.post}})],1),n("page-footer")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{NavigationBar:n(134).default,PageFooter:n(135).default}),l()(component,{VImg:d.a,VMain:h.a,VProgressCircular:m.a,VRow:f.a})}}]);