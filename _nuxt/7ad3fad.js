(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{412:function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return v})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return k}));n(33),n(19),n(11),n(53);var o=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",r=t.env.NUXT_APP_FRONTEND_PORT||"",c="".concat(o).concat(r),l="kakao-sdk-script",h=function(t){return/^(?:[a-z]+:)?\/\//i.test(t)?t:("/"!==t.charAt(0)&&(t="/".concat(t)),"".concat(c).concat(t))},d=function(dt){if(dt){var t=new Date(dt),e=function(t){return 1==="".concat(t).length?"0".concat(t):t};return"".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1),"-").concat(e(t.getDate()))}},v=function(t){var script=document.querySelector("#".concat(l));script?t&&t():((script=document.createElement("script")).id=l,script.src="/js/kakao-sdk.min.js",script.addEventListener("load",(function(e){Kakao.init("33d3fefda63de9dadf73b14cd69f8d93"),Kakao.isInitialized(),t&&t()})),document.body.appendChild(script))},k=function(t,e){return{author:{"@type":"Person",name:t.author.name},description:t.description,url:"".concat(c,"/").concat(e,"/").concat(t.slug),"@type":"BlogPosting",image:h(t.img),publisher:{"@type":"Organization",logo:{"@type":"ImageObject",url:"".concat(c,"/jettanalysis.png")},name:"엔지니어"},headline:t.title,dateModified:d(t.updatedAt),datePublished:d(t.createdAt),mainEntityOfPage:{"@type":"WebPage","@id":"".concat(c,"/").concat(e,"/").concat(t.slug)},"@context":"https://schema.org"}},f={"@context":"http://schema.org",author:{"@type":"Person",name:"엔지니어"},"@type":"webSite",headline:"검색엔진 최적화 전략 가이드",name:"JETT Analysis",description:"이제 검색엔진 최적화는 저희에게 맡기세요! JETT Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.",url:c,publisher:{"@type":"Organization",logo:{"@type":"ImageObject",url:"".concat(c,"/jettanalysis.png")},name:"엔지니어"}}}).call(this,n(132))},417:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("602f8699",content,!0,{sourceMap:!1})},434:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("63c9496b",content,!0,{sourceMap:!1})},435:function(t,e,n){var o=n(27)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},438:function(t,e,n){"use strict";n.r(e);n(33),n(11),n(53);var o=n(412),r={name:"ShareBox",props:{shareUrl:{type:String,required:!0},shareTwitter:{type:String,required:!0},shareFacebook:{type:String,required:!0},post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareKakaoStory:function(){var t=this;Object(o.c)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(o.c)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:Object(o.d)(t.post.img),title:t.post.title,description:t.post.description,path:"".concat(t.post.type,"/").concat(t.post.id)}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}}},c=(n(453),n(38)),l=n(52),h=n.n(l),d=n(599),v=n(504),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"share"},[n("li",[n("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-twitter.png"}})])]),n("li",[n("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/signin-facebook.png"}})])]),n("li",[n("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-kakao-story.png"}})])]),n("li",[n("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/signin-kakao.png"}})])]),n("li",[n("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[n("img",{staticClass:"share-icon",attrs:{src:"/icons/share-link.png"}})])]),n("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"78ab5ac4",null);e.default=component.exports;h()(component,{VBtn:d.a,VSnackbar:v.a})},453:function(t,e,n){"use strict";n(417)},454:function(t,e,n){var o=n(27)(!1);o.push([t.i,".share[data-v-78ab5ac4]{margin-bottom:0;margin-top:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-78ab5ac4]{text-decoration:none}.share a .share-icon[data-v-78ab5ac4]{width:32px;height:32px;transition:transform .2s}.share a .share-icon[data-v-78ab5ac4]:hover{transform:scale(1.15)}.share li+li[data-v-78ab5ac4]{margin-left:10px}",""]),t.exports=o},504:function(t,e,n){"use strict";var o=n(2),r=(n(67),n(54),n(74),n(434),n(136)),c=n(110),l=n(73),h=n(183),d=n(413),v=n(59),k=n(4),f=n(23);e.a=Object(v.a)(r.a,c.a,h.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(k.d)(n+footer+o),paddingLeft:this.app?Object(k.d)(r):void 0,paddingRight:this.app?Object(k.d)(c):void 0,paddingTop:Object(k.d)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(f.e)("auto-height",this),0==this.timeout&&Object(f.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(k.l)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(k.l)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);