(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{386:function(t,e,o){var content=o(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("6404d6cb",content,!0,{sourceMap:!1})},387:function(t,e,o){var content=o(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("30c44c39",content,!0,{sourceMap:!1})},435:function(t,e,o){"use strict";o(386)},436:function(t,e,o){var n=o(83)(!1);n.push([t.i,'#comments[data-v-4c5c04fc]{display:flex;border-bottom:1px solid #ebebeb;padding:25px 0}.comment-size-progress[data-v-4c5c04fc]{margin-right:7.5px}.share[data-v-4c5c04fc]{margin-bottom:0;margin-left:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-4c5c04fc]{text-decoration:none}.share .twitter i[data-v-4c5c04fc]{color:#219bcf}.share .twitter i[data-v-4c5c04fc]:hover{color:#1a7aa3}.share .facebook i[data-v-4c5c04fc]{color:#66679d}.share .facebook i[data-v-4c5c04fc]:hover{color:#51527f}.share li+li[data-v-4c5c04fc]{margin-left:10px}.comments-title[data-v-4c5c04fc]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.comments-title span[data-v-4c5c04fc]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.comments-container[data-v-4c5c04fc]{padding:22.5px 0!important}.comments-inner-container[data-v-4c5c04fc]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto}.comments[data-v-4c5c04fc]{list-style:none;padding-left:0;margin:1rem 0}.comments-wrapper[data-v-4c5c04fc]{margin-bottom:1.75rem;word-wrap:break-word}.comments-author-photo[data-v-4c5c04fc]{width:48px;height:48px;margin-right:16px;line-height:48px;text-align:center;font-weight:700;color:#fff;font-size:14px;text-transform:uppercase}.comments-author-data[data-v-4c5c04fc]{flex-grow:1;min-width:1px}.comments-author-name[data-v-4c5c04fc]{font-weight:700}.comments-author-metadata[data-v-4c5c04fc],.comments-author-name[data-v-4c5c04fc]{line-height:22.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.comments-author-metadata[data-v-4c5c04fc]{font-size:10px}.comments-socials[data-v-4c5c04fc]{display:block;position:absolute;top:0;right:0;display:flex}.comments-link[data-v-4c5c04fc]{display:block;width:1.75rem;height:1.75rem;background:#f7f7f7;display:flex;justify-content:center;align-items:center;fill:#24292e}.comment-form[data-v-4c5c04fc]{border-top:1px solid #ebebeb;margin:25px 0;padding-top:1rem}@media(min-width:576px){.comments-inner-container[data-v-4c5c04fc]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.comments-inner-container[data-v-4c5c04fc]{max-width:540px}}@media(min-width:768px){.comments-inner-container[data-v-4c5c04fc]{max-width:720px}.comments-container[data-v-4c5c04fc]{padding:27.5px 0!important}}@media(min-width:992px){.comments-inner-container[data-v-4c5c04fc]{max-width:730px}}',""]),t.exports=n},437:function(t,e,o){"use strict";o(387)},438:function(t,e,o){var n=o(83)(!1);n.push([t.i,".comments-author{display:flex;margin-bottom:1.75rem;position:relative}",""]),t.exports=n},456:function(t,e,o){"use strict";o.r(e);o(39),o(41),o(155),o(16),o(49);var n=o(54),r="".concat("https://jettanalysis.com").concat(""),c={name:"Comment",props:{post:{type:Object,required:!0}},components:{ValidationObserver:n.a,ValidationProvider:n.b},data:function(){return{comments:[{},{}],isCommentLoading:!0,username:"",password:"",showPassword:!1,content:"",loading:!1,attrs:{class:"mb-6",boilerplate:!1,elevation:0}}},mounted:function(){var t=this;this.$fire.firestore.collection(this.post.id).get().then((function(e){t.comments=e.docs.map((function(t){return t.data()})),t.isCommentLoading=!1}))},methods:{submit:function(){var t=this,e={username:this.username,password:this.password,content:this.content,created_at:(new Date).getTime()};this.loading=!0,this.$fire.firestore.collection(this.post.id).add(e).then((function(){t.loading=!1,t.comments.push(e),t.resetCommentForm()})).catch((function(e){t.loading=!1,alert("댓글 등록에 실패했습니다.")}))},resetCommentForm:function(){this.username="",this.password="",this.content=""},userColor:function(time){switch(Number(time)%8){case 0:return"#855c47";case 1:return"#7a8547";case 2:return"#475085";case 3:return"#7d4785";case 4:return"#477085";case 5:return"#474b85";case 6:return"#7d8547";case 7:return"#478549"}},shareKakaoStory:function(){this.$kakao.Story.share({url:this.shareUrl,text:"".concat(this.post.title,"\n\n").concat(this.post.description)})},shareKakaoTalk:function(){this.$kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:this.post.img,title:this.post.title,description:this.post.description,path:this.post.id}})},copyToClipboard:function(){this.$copyText(this.shareUrl).then((function(t){alert("복사되었습니다.")}),(function(t){alert("복사에 실패했습니다.")}))}},computed:{commentCount:function(){return this.comments?this.comments.length:0},shareUrl:function(){return"".concat(r,"/").concat(this.post.id)},shareTwitter:function(){return"https://twitter.com/share?text=".concat(this.post.title,"&url=").concat(this.shareUrl,"&via=jettanalysis")},shareFacebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)}},filters:{filterFirstChar:function(t){return t?t.toUpperCase().charAt(0):""},toDateTime:function(t){if(!t)return"";var e=new Date(Number(t)),o=function(t){return 1==="".concat(t).length?"0".concat(t):t};return"".concat(e.getFullYear(),".").concat(o(e.getMonth()+1),".").concat(o(e.getDate())," ").concat(o(e.getHours()),":").concat(o(e.getMinutes()))}}},l=(o(435),o(437),o(74)),m=o(98),d=o.n(m),f=o(443),h=o(605),v=o(463),w=o(606),x=o(600),k=o(607),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comments-container"},[o("div",{staticClass:"comments-inner-container"},[o("div",{attrs:{id:"comments"}},[o("p",{staticClass:"comments-title"},[o("span",[t._v(t._s(t.commentCount))]),t._v(" 댓글")]),o("ul",{staticClass:"share"},[o("li",[o("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[o("svg",{staticClass:"icon-twitter",attrs:{fill:"#219bcf",viewBox:"0 0 512 512",width:"24",height:"24"}},[o("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),o("li",[o("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[o("svg",{staticClass:"icon-facebook",attrs:{fill:"#66679d",viewBox:"0 0 320 512",width:"24",height:"24"}},[o("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),o("li",[o("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[o("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[o("g",[o("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[o("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),o("li",[o("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"}},[o("path",{attrs:{fill:"#fae100",d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"}})])])]),o("li",[o("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[o("v-icon",[t._v("mdi-link-variant")])],1)])])]),o("ul",{staticClass:"comments"},t._l(t.comments,(function(e,n){return o("li",{key:n,staticClass:"comment-item"},[o("v-skeleton-loader",t._b({attrs:{loading:t.isCommentLoading,type:"list-item-avatar-two-line, paragraph"}},"v-skeleton-loader",t.attrs,!1),[o("div",{staticClass:"comment-wrapper"},[o("div",{staticClass:"comments-author"},[o("div",{staticClass:"comments-author-photo",style:{backgroundColor:t.userColor(e.created_at)}},[t._v(t._s(t._f("filterFirstChar")(e.username)))]),o("div",{staticClass:"comments-author-data"},[o("div",{staticClass:"comments-author-name"},[t._v(t._s(e.username))]),o("div",{staticClass:"comments-author-metadata"},[o("time",{attrs:{datetime:e.create_at}},[t._v(t._s(t._f("toDateTime")(e.created_at)))])])])]),o("p",{staticClass:"comments-content"},[t._v(t._s(e.content))])])])],1)})),0),o("div",{staticClass:"comment-form"},[o("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit,r=e.reset;return[o("form",{on:{submit:function(e){return e.preventDefault(),n(t.submit)},reset:function(t){return t.preventDefault(),r.apply(null,arguments)}}},[o("v-col",[o("validation-provider",{attrs:{name:"이름",rules:"required|min:1|max:30"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("v-text-field",{staticClass:"mb-3",attrs:{"error-messages":n,label:"이름",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})]}}],null,!0)}),o("validation-provider",{attrs:{name:"비밀번호",rules:"required|min:4|max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("v-text-field",{staticClass:"mb-3",attrs:{"error-messages":n,label:"비밀번호",outlined:"","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})]}}],null,!0)}),o("validation-provider",{attrs:{name:"내용",rules:"required|min:1|max:1500"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("v-textarea",{attrs:{label:"내용","error-messages":n,outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})]}}],null,!0)})],1),o("v-col",[o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading,color:"#00afff",type:"submit",large:""}},[t._v("등록")])],1)],1)]}}])})],1)])])}),[],!1,null,"4c5c04fc",null);e.default=component.exports;d()(component,{VBtn:f.a,VCol:h.a,VIcon:v.a,VSkeletonLoader:w.a,VTextField:x.a,VTextarea:k.a})},467:function(t,e,o){"use strict";function n(t){if("function"!=typeof t.getRootNode){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}o.d(e,"a",(function(){return n}))}}]);