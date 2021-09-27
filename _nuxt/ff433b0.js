(window.webpackJsonp=window.webpackJsonp||[]).push([[3,24],{479:function(t,e,o){var content=o(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("50da162d",content,!0,{sourceMap:!1})},489:function(t,e,o){"use strict";o.r(e);o(25),o(5),o(47);var n=o(159),r={name:"ShareBox",props:{shareUrl:{type:String,required:!0},shareTwitter:{type:String,required:!0},shareFacebook:{type:String,required:!0},post:{type:Object,required:!0}},data:function(){return{snackbar:!1}},methods:{shareKakaoStory:function(){var t=this;Object(n.c)((function(){window.Kakao.Story.share({url:t.shareUrl,text:"".concat(t.post.title,"\n\n").concat(t.post.description)})}))},shareKakaoTalk:function(){var t=this;Object(n.c)((function(){window.Kakao.Link.sendCustom({templateId:60106,templateArgs:{thumbnail:t.post.img,title:t.post.title,description:t.post.description,path:t.post.id}})}))},copyToClipboard:function(){var t=this;this.$copyText(this.shareUrl).then((function(e){t.snackbar=!0}),(function(t){alert("복사에 실패했습니다.")}))}}},l=(o(498),o(38)),d=o(56),c=o.n(d),f=o(478),h=o(497),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"share"},[o("li",[o("a",{staticClass:"twitter",attrs:{href:t.shareTwitter,target:"_blank"}},[o("svg",{staticClass:"icon-twitter",attrs:{fill:"#219bcf",viewBox:"0 0 512 512",width:"24",height:"24"}},[o("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),o("li",[o("a",{staticClass:"facebook",attrs:{href:t.shareFacebook,target:"_blank"}},[o("svg",{staticClass:"icon-facebook",attrs:{fill:"#66679d",viewBox:"0 0 320 512",width:"24",height:"24"}},[o("path",{attrs:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])])]),o("li",[o("a",{staticClass:"kakao-story",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoStory.apply(null,arguments)}}},[o("svg",{attrs:{fill:"#f2d41e",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 1000 1000","xml:space":"preserve",width:"24",height:"24"}},[o("g",[o("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[o("path",{attrs:{d:"M2743.4,4958.8c-75.2-27.3-140.1-51.2-143.5-51.2c-3.4,0-47.8-58.1-95.7-126.4l-85.4-129.8V2410V168.8l78.6-116.2c150.3-228.9,194.7-235.8,1332.4-235.8H4848l-23.9-177.7c-30.7-252.8-170.8-686.7-310.9-966.9c-208.4-410-444.1-714.1-919-1175.3c-252.8-245.9-457.8-471.5-457.8-498.8c0-109.3,116.2-259.6,792.6-1007.9c594.5-659.4,710.6-768.7,799.5-779c92.2-10.2,157.2,30.7,410,242.6C6200.9-3661.1,6973-2468.8,7324.9-1177.3c232.4,850.7,228.9,775.5,242.6,3440.4l13.7,2432.6l-105.9,123c-61.5,68.3-164,136.7-232.3,157.2c-78.6,20.5-908.8,34.2-2244.7,34.2C3242.2,5006.6,2856.1,4999.8,2743.4,4958.8z"}})])])])])]),o("li",[o("a",{staticClass:"kakao-talk",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.shareKakaoTalk.apply(null,arguments)}}},[o("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.678 5.749-2.664 6.123 4.244 1.287.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399 0-5.19-5.373-9.398-12-9.398z",fill:"#3e2723"}}),o("g",{attrs:{fill:"#ffeb3b"}},[o("path",{attrs:{d:"m10.384 8.27c-.317-.893-1.529-.894-1.845-.001-.984 3.052-2.302 4.935-1.492 5.306 1.078.489 1.101-.611 1.359-1.1h2.111c.257.487.282 1.588 1.359 1.1.813-.371-.489-2.195-1.492-5.305zm-1.614 2.987.692-1.951.691 1.951z"}}),o("path",{attrs:{d:"m5.365 13.68c-1.198 0-.49-1.657-.692-4.742-.429-.074-1.76.297-1.76-.673 0-.371.305-.673.679-.673 2.518.18 4.224-.47 4.224.673 0 .987-1.275.59-1.76.673-.2 3.075.505 4.742-.691 4.742z"}}),o("path",{attrs:{d:"m13.154 13.579c-1.159 0-.454-1.565-.663-5.301 0-.91 1.413-.909 1.413 0v4.04c.669.089 2.135-.33 2.135.63-.001 1.007-1.576.503-2.885.631z"}}),o("path",{attrs:{d:"m19.556 13.38-1.624-2.137-.24.239v1.5c0 .38-.31.688-.693.688-1.203 0-.482-1.732-.692-5.392 0-.379.31-.688.692-.688 1.045 0 .594 1.478.692 2.166 1.96-1.873 1.913-2.072 2.316-2.072.556 0 .897.691.527 1.058l-1.578 1.567 1.704 2.243c.556.725-.555 1.556-1.104.828z"}})])])])]),o("li",[o("a",{staticClass:"clipboard",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard.apply(null,arguments)}}},[o("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[o("path",{attrs:{d:"M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"}})])])]),o("v-snackbar",{attrs:{timeout:"1500","min-width":"210",width:"210",rounded:"pill",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[o("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("복사되었습니다!")])],1)}),[],!1,null,"2a3538a6",null);e.default=component.exports;c()(component,{VBtn:f.a,VSnackbar:h.a})},491:function(t,e,o){var content=o(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("26f6d162",content,!0,{sourceMap:!1})},498:function(t,e,o){"use strict";o(479)},499:function(t,e,o){var n=o(17)(!1);n.push([t.i,".share[data-v-2a3538a6]{margin-bottom:0;margin-top:auto;display:flex;padding-left:0;list-style:none}.share a[data-v-2a3538a6]{text-decoration:none}.share .twitter i[data-v-2a3538a6]{color:#219bcf}.share .twitter i[data-v-2a3538a6]:hover{color:#1a7aa3}.share .facebook i[data-v-2a3538a6]{color:#66679d}.share .facebook i[data-v-2a3538a6]:hover{color:#51527f}.share li+li[data-v-2a3538a6]{margin-left:10px}",""]),t.exports=n},505:function(t,e,o){"use strict";o.r(e);var n={name:"DiagnosisInput",props:{buttonOnly:{type:Boolean,required:!1,default:function(){return!1}},loading:{type:Boolean,required:!1,default:function(){return!1}},buttonText:{type:String,required:!1,default:function(){return"진단"}},defaultUrl:{type:String,required:!1,default:function(){return""}}},data:function(){return{activeTooltip:!1,activeInput:!1,inputOption:{name:"dignosis",type:"text",placeholder:"https://jettanalysis.com"},tooltipText:"사이트 진단을 위해 유효한 URL을 입력해주세요",url:""}},mounted:function(){this.url=this.defaultUrl},methods:{inputUrl:function(t){this.activeInput||(this.activeInput=!this.activeInput),this.url=t.target.value},onSubmit:function(t){t.preventDefault();this.activeInput=!0,this.$emit("onSubmit",{isValid:/^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//.test(this.url),url:this.url})},focus:function(){this.$refs.urlInput.focus()}}},r=(o(523),o(38)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"diagnosis-input-container"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t.buttonOnly?t._e():o("div",{staticClass:"form-body"},[o("ul",{staticClass:"diagnosis-form"},[o("li",{staticClass:"form-item"},[o("div",{staticClass:"diagnosis-txt-field"},[o("input",{ref:"urlInput",class:{"inactive-diagnosis-txt-field":!t.activeInput,"active-diagnosis-txt-field":t.activeInput},attrs:{name:t.inputOption.name,type:t.inputOption.type,placeholder:t.inputOption.placeholder,required:""},domProps:{value:t.url},on:{focus:function(e){t.activeTooltip=!0},blur:function(e){t.activeTooltip=!1},input:t.inputUrl}})])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTooltip,expression:"activeTooltip"}],staticClass:"tooltip",attrs:{role:"tooltip","x-placement":"top"}},[o("div",{staticClass:"arrow"}),o("div",{staticClass:"tooltip-inner"},[t._v(t._s(t.tooltipText))])])])]),o("div",{staticClass:"diagnosis-btn-container"},[o("button",{staticClass:"diagnosis-btn",class:{"without-input":t.buttonOnly,"with-input":!t.buttonOnly},attrs:{disabled:t.loading,type:"submit",role:"button"}},[t.loading?[o("div",{staticClass:"loader"},[t._v("Loading...")])]:[t._v(t._s(t.buttonText))]],2)])])])}),[],!1,null,"45304768",null);e.default=component.exports},507:function(t,e,o){"use strict";o.r(e);var n=o(591).a,r=(o(661),o(38)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"css-za4qqw"},[o("div",{staticClass:"css-17ia555"},[o("h1",{staticClass:"css-1bk7ox4"},[t._v(t._s(t.title))]),o("div",{staticClass:"css-70qvj9"},[o("div",{staticClass:"css-1c7u7ph"},[o("p",[t._v(t._s(t.desc))])])]),o("div",{staticClass:"input-action-container"},[o("diagnosis-input",{attrs:{buttonOnly:t.buttonOnly,buttonText:t.buttonText,defaultUrl:t.defaultUrl,loading:t.inputOption&&t.inputOption.isProcessing},on:{onSubmit:t.onSubmit}}),"diagnosis"===t.type?o("div",{staticClass:"share-box-wrapper"},[o("div",{staticClass:"share-box"},[o("div",{staticClass:"share-title"},[t._v("공유하기")]),o("share-box",{attrs:{post:t.post,shareTwitter:t.shareTwitter,shareFacebook:t.shareFacebook,shareUrl:t.shareUrl}})],1)]):t._e()],1)])])}),[],!1,null,"5e36c444",null);e.default=component.exports;installComponents(component,{DiagnosisInput:o(505).default,ShareBox:o(489).default})},523:function(t,e,o){"use strict";o(491)},524:function(t,e,o){var n=o(17)(!1);n.push([t.i,'.diagnosis-form[data-v-45304768],.diagnosis-input-container[data-v-45304768]{position:relative}.diagnosis-form[data-v-45304768]{margin-bottom:0;padding-left:0;list-style:none}.form-item[data-v-45304768]{margin-bottom:0;padding:0}.tooltip[data-v-45304768]{top:calc(-100% + -.4rem);z-index:1}.tooltip[data-v-45304768],.tooltip .arrow[data-v-45304768]{position:absolute;left:0;right:0;margin:0 auto}.tooltip .arrow[data-v-45304768]{display:block;bottom:-.4rem;width:0;height:0;border-left:.4rem solid transparent;border-right:.4rem solid transparent;border-top:.4rem solid #000}.tooltip .tooltip-inner[data-v-45304768]{max-width:200px;margin:0 auto;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:6px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;font-style:normal;font-weight:400;line-height:1.8;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word}.inactive-diagnosis-txt-field[data-v-45304768]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.inactive-diagnosis-txt-field[data-v-45304768]::-ms-expand{background-color:transparent;border:0}.inactive-diagnosis-txt-field[data-v-45304768]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.inactive-diagnosis-txt-field[data-v-45304768]::-moz-placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-45304768]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-45304768]::placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-45304768]:disabled,.inactive-diagnosis-txt-field[readonly][data-v-45304768]{background-color:#e6e6e6;opacity:1}.active-diagnosis-txt-field[data-v-45304768]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border:1px solid #00afff;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);transition:background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s,box-shadow .2s ease-in-out 0s;font-size:1.125rem;font-family:Inter;position:relative}.active-diagnosis-txt-field[data-v-45304768]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.diagnosis-btn[data-v-45304768]{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff}.diagnosis-btn[data-v-45304768]:active,.diagnosis-btn[data-v-45304768]:hover{background-color:#07f;border-color:#07f}.diagnosis-btn:disabled[disabled][data-v-45304768]{cursor:not-allowed;background-color:#00afff;border-color:#00afff}.loader[data-v-45304768],.loader[data-v-45304768]:after{border-radius:50%;width:25px;height:25px}.loader[data-v-45304768]{font-size:10px;position:relative;text-indent:-9999em;border:4px solid hsla(0,0%,100%,.2);border-left-color:#fff;transform:translateZ(0);-webkit-animation:load8-data-v-45304768 1.1s linear infinite;animation:load8-data-v-45304768 1.1s linear infinite}@-webkit-keyframes load8-data-v-45304768{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8-data-v-45304768{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media(max-width:767.98px){.diagnosis-btn[data-v-45304768]{width:100%;margin-top:10px}}@media(min-width:768px){.diagnosis-btn.with-input[data-v-45304768]{position:absolute}.diagnosis-btn.without-input[data-v-45304768]{width:100%}.diagnosis-txt-field>input[data-v-45304768]{width:calc(100% - 162px)}}',""]),t.exports=n},591:function(t,e,o){"use strict";(function(t){o(25);var n=o(489),r=o(505),l=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",d=t.env.NUXT_APP_FRONTEND_PORT||"",c="".concat(l).concat(d);e.a={name:"TopBanner",components:{ShareBox:n.default,DiagnosisInput:r.default},props:{title:{type:String,required:!0},desc:{type:String,required:!0},buttonOnly:{type:Boolean,required:!0},inputOption:{type:Object,required:!1},focusInput:{type:Boolean,required:!1,default:function(){return!1}},tooltipText:{type:String,required:!1},buttonText:{type:String,required:!0},type:{type:String,required:!1,default:function(){return"NO"}}},data:function(){return{url:"",post:{id:"diagnosis",title:"사이트 SEO 진단하기 | JETT Analysis",description:"여러분의 사이트가 SEO 최적화 조건에 맞는지 진단해보세요!",img:"https://jettanalysis.com/images/jett-analysis.jpg"}}},methods:{onSubmit:function(t){this.$emit("onButtonClick",t)}},computed:{shareUrl:function(){return"".concat(c,"/diagnosis")},shareTwitter:function(){return"https://twitter.com/share?text=사이트 진단&url=".concat(this.shareUrl,"&via=jettanalysis")},shareFacebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.shareUrl)},defaultUrl:function(){return this.inputOption&&this.inputOption.defaultUrl?this.inputOption.defaultUrl:""}},watch:{focusInput:function(t,e){t!==e&&this.$refs.diagnosisInput.focus()}}}}).call(this,o(124))},623:function(t,e,o){var content=o(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("ab4423f4",content,!0,{sourceMap:!1})},661:function(t,e,o){"use strict";o(623)},662:function(t,e,o){var n=o(17)(!1);n.push([t.i,".css-za4qqw[data-v-5e36c444]{background-image:linear-gradient(180deg,#fff 10%,#eef0f7);padding:60px 0 70px}.css-17ia555[data-v-5e36c444]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.css-1bk7ox4[data-v-5e36c444]{margin-bottom:40px;font-size:32px}.css-70qvj9[data-v-5e36c444]{display:flex;align-items:center}.css-1c7u7ph[data-v-5e36c444]{text-align:center;line-height:1.6;max-width:330px}.css-1c7u7ph strong[data-v-5e36c444]{font-weight:600}.css-1c7u7ph[data-v-5e36c444] :last-child{margin-bottom:0!important}.input-action-container[data-v-5e36c444]{width:100%;margin:35px 0 0;max-width:460px}.share-box-wrapper[data-v-5e36c444]{margin-top:2rem}.share-box[data-v-5e36c444]{justify-content:center;display:flex;padding:1rem;background:#fff;border:1px solid #ebebeb;border-radius:5px;width:250px;margin:0 auto;position:relative}.share-title[data-v-5e36c444]{position:absolute;left:10px;top:-10px;font-size:14px;padding:0 .3rem;border-left:1px;border-right:1px;border-top:0;border-bottom:0;background:#fff;border-style:solid;border-radius:2px;border-color:#ebebeb;font-weight:700}@media(min-width:576px){.css-17ia555[data-v-5e36c444]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-17ia555[data-v-5e36c444]{max-width:540px}}@media(max-width:767.98px){.css-za4qqw[data-v-5e36c444]{border-bottom:1 solid #ccd3e8}}@media(min-width:768px){.css-17ia555[data-v-5e36c444]{max-width:720px}.css-za4qqw[data-v-5e36c444]{padding:90px 0 135px}.css-1bk7ox4[data-v-5e36c444]{font-size:48px}.input-action-container[data-v-5e36c444]{margin:45px 0 0}}@media(min-width:992px){.css-17ia555[data-v-5e36c444]{max-width:960px}}@media(min-width:1200px){.css-17ia555[data-v-5e36c444]{max-width:1140px}}",""]),t.exports=n}}]);