(window.webpackJsonp=window.webpackJsonp||[]).push([[43,12,23,40],{464:function(t,e,n){"use strict";n(34),n(25),n(466);var r=n(209),o=n(46),d=n(2);e.a=o.a.extend({name:"v-progress-circular",directives:{intersect:r.a},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(d.g)(this.calculatedSize),width:Object(d.g)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},466:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e003f1f8",content,!0,{sourceMap:!1})},467:function(t,e,n){var r=n(17)(!1);r.push([t.i,".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}",""]),t.exports=r},469:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("d0c03afe",content,!0,{sourceMap:!1})},471:function(t,e,n){"use strict";n.r(e);var r={name:"DiagnosisInput",props:{buttonOnly:{type:Boolean,required:!1,default:function(){return!1}},loading:{type:Boolean,required:!1,default:function(){return!1}},buttonText:{type:String,required:!1,default:function(){return"진단"}},directUrl:{type:String,required:!1,default:function(){return""}}},data:function(){return{activeTooltip:!1,activeInput:!1,inputOption:{name:"dignosis",type:"text",placeholder:"https://jettanalysis.com"},tooltipText:"사이트 진단을 위해 유효한 URL을 입력해주세요",url:""}},created:function(){this.url=this.directUrl},methods:{inputUrl:function(t){this.activeInput||(this.activeInput=!this.activeInput),this.url=t.target.value},onSubmit:function(t){t.preventDefault();this.activeInput=!0,this.$emit("onSubmit",{isValid:/^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//.test(this.url),url:this.url})},focus:function(){this.$refs.urlInput.focus()}}},o=(n(476),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"diagnosis-input-container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t.buttonOnly?t._e():n("div",{staticClass:"form-body"},[n("ul",{staticClass:"diagnosis-form"},[n("li",{staticClass:"form-item"},[n("div",{staticClass:"diagnosis-txt-field"},[n("input",{ref:"urlInput",class:{"inactive-diagnosis-txt-field":!t.activeInput,"active-diagnosis-txt-field":t.activeInput},attrs:{name:t.inputOption.name,type:t.inputOption.type,placeholder:t.inputOption.placeholder,required:""},domProps:{value:t.url},on:{focus:function(e){t.activeTooltip=!0},blur:function(e){t.activeTooltip=!1},input:t.inputUrl}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTooltip,expression:"activeTooltip"}],staticClass:"tooltip",attrs:{role:"tooltip","x-placement":"top"}},[n("div",{staticClass:"arrow"}),n("div",{staticClass:"tooltip-inner"},[t._v(t._s(t.tooltipText))])])])]),n("div",{staticClass:"diagnosis-btn-container"},[n("button",{staticClass:"diagnosis-btn",class:{"without-input":t.buttonOnly,"with-input":!t.buttonOnly},attrs:{disabled:t.loading,type:"submit",role:"button"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loader"},[t._v("Loading...")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"span"},[t._v(t._s(t.buttonText))])])])])])}),[],!1,null,"397340a4",null);e.default=component.exports},473:function(t,e,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("771cdabe",content,!0,{sourceMap:!1})},474:function(t,e,n){var content=n(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5eab6db7",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n(469)},477:function(t,e,n){var r=n(17)(!1);r.push([t.i,'.diagnosis-form[data-v-397340a4],.diagnosis-input-container[data-v-397340a4]{position:relative}.diagnosis-form[data-v-397340a4]{margin-bottom:0;padding-left:0;list-style:none}.form-item[data-v-397340a4]{margin-bottom:0;padding:0}.tooltip[data-v-397340a4]{top:calc(-100% + -.4rem);z-index:1}.tooltip[data-v-397340a4],.tooltip .arrow[data-v-397340a4]{position:absolute;left:0;right:0;margin:0 auto}.tooltip .arrow[data-v-397340a4]{display:block;bottom:-.4rem;width:0;height:0;border-left:.4rem solid transparent;border-right:.4rem solid transparent;border-top:.4rem solid #000}.tooltip .tooltip-inner[data-v-397340a4]{max-width:200px;margin:0 auto;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:6px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;font-style:normal;font-weight:400;line-height:1.8;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word}.inactive-diagnosis-txt-field[data-v-397340a4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.inactive-diagnosis-txt-field[data-v-397340a4]::-ms-expand{background-color:transparent;border:0}.inactive-diagnosis-txt-field[data-v-397340a4]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.inactive-diagnosis-txt-field[data-v-397340a4]::-moz-placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-397340a4]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-397340a4]::placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-397340a4]:disabled,.inactive-diagnosis-txt-field[readonly][data-v-397340a4]{background-color:#e6e6e6;opacity:1}.active-diagnosis-txt-field[data-v-397340a4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border:1px solid #00afff;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);transition:background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s,box-shadow .2s ease-in-out 0s;font-size:1.125rem;font-family:Inter;position:relative}.active-diagnosis-txt-field[data-v-397340a4]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.diagnosis-btn[data-v-397340a4]{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff}.diagnosis-btn[data-v-397340a4]:active,.diagnosis-btn[data-v-397340a4]:hover{background-color:#07f;border-color:#07f}.diagnosis-btn:disabled[disabled][data-v-397340a4]{cursor:not-allowed;background-color:#00afff;border-color:#00afff}.loader[data-v-397340a4],.loader[data-v-397340a4]:after{border-radius:50%;width:25px;height:25px}.loader[data-v-397340a4]{font-size:10px;position:relative;text-indent:-9999em;border:4px solid hsla(0,0%,100%,.2);border-left-color:#fff;transform:translateZ(0);-webkit-animation:load8-data-v-397340a4 1.1s linear infinite;animation:load8-data-v-397340a4 1.1s linear infinite}@-webkit-keyframes load8-data-v-397340a4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8-data-v-397340a4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media(max-width:767.98px){.diagnosis-btn[data-v-397340a4]{width:100%;margin-top:10px}}@media(min-width:768px){.diagnosis-btn.with-input[data-v-397340a4]{position:absolute}.diagnosis-btn.without-input[data-v-397340a4]{width:100%}.diagnosis-txt-field>input[data-v-397340a4]{width:calc(100% - 162px)}}',""]),t.exports=r},478:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0a36290c",content,!0,{sourceMap:!1})},483:function(t,e,n){"use strict";n.r(e);var r={name:"TopBanner",components:{DiagnosisInput:n(471).default},props:{title:{type:String,required:!0},desc:{type:String,required:!0},buttonOnly:{type:Boolean,required:!0},inputOption:{type:Object,required:!1},focusInput:{type:Boolean,required:!1,default:function(){return!1}},tooltipText:{type:String,required:!1},buttonText:{type:String,required:!0},directUrl:{type:String,required:!1,default:function(){return""}}},data:function(){return{url:""}},methods:{onSubmit:function(t){this.$emit("onButtonClick",t)}},watch:{focusInput:function(t,e){t!==e&&this.$refs.diagnosisInput.focus()}}},o=(n(494),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"css-za4qqw",class:{"use-share":!t.buttonOnly}},[n("div",{staticClass:"css-17ia555"},[n("h1",{staticClass:"css-1bk7ox4"},[t._v(t._s(t.title))]),n("div",{staticClass:"css-70qvj9"},[n("div",{staticClass:"css-1c7u7ph"},[n("p",[t._v(t._s(t.desc))])])]),n("div",{staticClass:"input-action-container",class:{long:!t.buttonOnly}},[n("diagnosis-input",{attrs:{buttonOnly:t.buttonOnly,buttonText:t.buttonText,directUrl:t.directUrl,loading:t.inputOption&&t.inputOption.isProcessing},on:{onSubmit:t.onSubmit}})],1)])])}),[],!1,null,"38eb26f8",null);e.default=component.exports;installComponents(component,{DiagnosisInput:n(471).default})},486:function(t,e,n){"use strict";n(473)},487:function(t,e,n){var r=n(17)(!1);r.push([t.i,'a[data-v-52dd6ac5]{text-decoration:none;transition:all .2s ease-in-out 0s}.article-img[data-v-52dd6ac5]{width:100%;max-width:450px;margin:auto}.article-excerpt[data-v-52dd6ac5]{padding-top:2rem}.css-u5p2ag[data-v-52dd6ac5]{padding:25px 0 35px}.css-79elbk[data-v-52dd6ac5],.css-u5p2ag[data-v-52dd6ac5]{position:relative}.css-1izrdyl[data-v-52dd6ac5]{font-size:28px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer;margin-bottom:25px;color:#000;transition:color .5s}.no-link.css-1izrdyl[data-v-52dd6ac5]{font-size:26px;cursor:default}.css-1izrdyl[data-v-52dd6ac5]:focus,.css-1izrdyl[data-v-52dd6ac5]:hover{color:#07f}.no-link.css-1izrdyl[data-v-52dd6ac5]:focus,.no-link.css-1izrdyl[data-v-52dd6ac5]:hover{color:#000}.css-1a2v9hb[data-v-52dd6ac5]{max-width:100%;height:auto}.css-1d7x0cs[data-v-52dd6ac5]{display:flex;align-items:center;justify-content:flex-start;margin-bottom:30px}.css-1d7x0cs p[data-v-52dd6ac5]{margin-bottom:0;line-height:1.2;font-size:14px}.css-qyxjlf[data-v-52dd6ac5]{margin-bottom:0;width:35px;height:35px;border-radius:50%;overflow:hidden;margin-right:15px}.css-12m1dn8[data-v-52dd6ac5]{font-family:"Georgia",serif}.css-12m1dn8 p[data-v-52dd6ac5]{margin-bottom:1.2rem}.css-12m1dn8 figure[data-v-52dd6ac5]{margin-bottom:1.3rem}.css-12m1dn8 img[data-v-52dd6ac5]{width:100%}.css-12m1dn8[data-v-52dd6ac5] :last-child{margin-bottom:0!important}.css-12m1dn8 p>img[data-v-52dd6ac5]{width:auto}.css-12m1dn8 .backlinko-image img[data-v-52dd6ac5]{display:inline-block;width:100%}.css-12m1dn8 .backlinko-image.backlinko-has-border img[data-v-52dd6ac5]{border:4px solid #ccc}.css-12m1dn8 .backlinko-image.img-circle img[data-v-52dd6ac5]{border-radius:50%!important}.css-12m1dn8 .alignnone[data-v-52dd6ac5]{margin-left:0;margin-right:0;max-width:100%;height:auto}.css-12m1dn8 .aligncenter[data-v-52dd6ac5]{display:block;margin:1rem auto;height:auto}.css-12m1dn8 .alignleft[data-v-52dd6ac5],.css-12m1dn8 .alignright[data-v-52dd6ac5]{margin-bottom:1rem;height:auto}.css-12m1dn8 .backlinko-image__centered-image img[data-v-52dd6ac5]{margin:0 auto!important}.css-12m1dn8 .backlinko-image__img-explicit-no-border:not(.backlinko-has-border) img[data-v-52dd6ac5]{border:0!important;border-radius:0!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-xs-up img[data-v-52dd6ac5]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-xs-up img[data-v-52dd6ac5]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-xs-up img[data-v-52dd6ac5]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-xs-up img[data-v-52dd6ac5]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-xs-up img[data-v-52dd6ac5]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-xs-up img[data-v-52dd6ac5]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-xs-up img[data-v-52dd6ac5]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-0 img[data-v-52dd6ac5]{margin-bottom:0!important}.css-12m1dn8 .backlinko-image__img-border-radius-4 img[data-v-52dd6ac5],.css-12m1dn8 .visual>img[data-v-52dd6ac5]{border:0!important;border-radius:.25rem!important}.css-12m1dn8 .backlinko-image__img-hub-rounded img[data-v-52dd6ac5],.css-12m1dn8 .backlinko-image__rounded img[data-v-52dd6ac5]{border:0!important;border-radius:.5rem!important}.css-12m1dn8 .backlinko-image__screenshot img[data-v-52dd6ac5]{outline:none!important;margin:0 auto!important;border:4px solid #ccc;border-radius:0!important}.css-12m1dn8 .backlinko-image__visual-chart img[data-v-52dd6ac5]{outline:none!important;margin:0 auto!important;border:0!important;border-radius:.3rem!important}.css-12m1dn8 .backlinko-image__bg-white img[data-v-52dd6ac5]{background-color:#fff!important}.css-12m1dn8 .backlinko-image__bg-light-gray-lighter img[data-v-52dd6ac5]{background-color:#f8f8f8!important}.css-12m1dn8 .backlinko-image__bg-light-gray-darker img[data-v-52dd6ac5]{background-color:#f4f4f4!important}.css-3872h1[data-v-52dd6ac5]{align-items:center;margin-top:1.5rem}.css-toegfy[data-v-52dd6ac5]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.css-toegfy span[data-v-52dd6ac5]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.css-13xd08w[data-v-52dd6ac5]{display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;color:#fff;background-color:#00afff;border-color:#00afff;width:100%;border-radius:6px}.css-13xd08w[data-v-52dd6ac5]:active,.css-13xd08w[data-v-52dd6ac5]:hover,.css-13xd08w[data-v-52dd6ac5]:link,.css-13xd08w[data-v-52dd6ac5]:visited{color:#fff;-webkit-text-decoration:none;text-decoration:none}.css-13xd08w[data-v-52dd6ac5]:hover{background:#07f;border-color:#07f}.go-link[data-v-52dd6ac5]{margin-top:10px;text-align:right}.go-link a[data-v-52dd6ac5]{text-decoration:underline;font-size:18px;font-weight:800}@media(min-width:540px){.css-12m1dn8 .alignright[data-v-52dd6ac5]{float:right;margin-left:1rem}.css-12m1dn8 .alignleft[data-v-52dd6ac5]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-sm-up img[data-v-52dd6ac5]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-sm-up img[data-v-52dd6ac5]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-sm-up img[data-v-52dd6ac5]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-sm-up img[data-v-52dd6ac5]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-sm-up img[data-v-52dd6ac5]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-sm-up img[data-v-52dd6ac5]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-sm-up img[data-v-52dd6ac5]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-sm-up img[data-v-52dd6ac5]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-sm-up img[data-v-52dd6ac5]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-sm-up img[data-v-52dd6ac5]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-sm-up img[data-v-52dd6ac5]{margin-bottom:-3rem!important}}@media(min-width:768px){.css-u5p2ag[data-v-52dd6ac5]{padding:35px 0 55px}.css-1izrdyl[data-v-52dd6ac5]{font-size:38px}.css-toegfy[data-v-52dd6ac5]{margin-right:30px}.css-12m1dn8 .backlinko-image.alignleft-md-up[data-v-52dd6ac5]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image.alignright-md-up[data-v-52dd6ac5]{float:right;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-md-up img[data-v-52dd6ac5]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-md-up img[data-v-52dd6ac5]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-md-up img[data-v-52dd6ac5]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-md-up img[data-v-52dd6ac5]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-md-up img[data-v-52dd6ac5]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-md-up img[data-v-52dd6ac5]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-md-up img[data-v-52dd6ac5]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-md-up img[data-v-52dd6ac5]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-md-up img[data-v-52dd6ac5]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-md-up img[data-v-52dd6ac5]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-md-up img[data-v-52dd6ac5]{margin-bottom:-3rem!important}.css-3872h1[data-v-52dd6ac5]{display:flex;margin-top:2rem}}@media(min-width:992px){.css-u5p2ag[data-v-52dd6ac5]{padding:50px 0}.css-12m1dn8 .backlinko-image__img-mt-minus-1-lg-up img[data-v-52dd6ac5]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-lg-up img[data-v-52dd6ac5]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-lg-up img[data-v-52dd6ac5]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-lg-up img[data-v-52dd6ac5]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-lg-up img[data-v-52dd6ac5]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-lg-up img[data-v-52dd6ac5]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-lg-up img[data-v-52dd6ac5]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-lg-up img[data-v-52dd6ac5]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-lg-up img[data-v-52dd6ac5]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-lg-up img[data-v-52dd6ac5]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-lg-up img[data-v-52dd6ac5]{margin-bottom:-3rem!important}}',""]),t.exports=r},488:function(t,e,n){"use strict";n(474)},489:function(t,e,n){var r=n(17)(!1);r.push([t.i,".css-15j7bd7 .post+.post>div{border-top:1px solid #e6e6e6}.css-15j7bd7 article:last-of-type>div:last-of-type{border-bottom:1px solid #e6e6e6}@media(min-width:576px){.css-15j7bd7{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-15j7bd7{max-width:540px}}@media(min-width:768px){.css-15j7bd7{padding-bottom:50px;max-width:720px}}@media(min-width:992px){.css-15j7bd7{padding-top:20px;padding-bottom:90px;max-width:850px}.css-15j7bd7 article{padding:0 60px;margin-top:20px}.css-15j7bd7 article:first-child{margin-top:0}}",""]),t.exports=r},493:function(t,e,n){"use strict";n.r(e);n(25);var r={name:"ArticlePreview",props:{type:{type:String,required:!1,default:function(){return null}},article:{type:Object,required:!0},noTitleLink:{type:Boolean,required:!1,default:function(){return!1}},buttonText:{type:String,required:!1,default:function(){return"이어서 읽기"}},useLink:{type:Boolean,required:!1,default:function(){return!1}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},computed:{link:function(){return this.article?"".concat(this.type?"/"+this.type:"","/").concat(this.article.slug):""},excerpt:function(){return this.article,""}}},o=(n(486),n(488),n(38)),d=n(57),c=n.n(d),m=n(317),l=n(464),f=n(460),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post"},[n("div",{staticClass:"css-u5p2ag"},[n("header",{staticClass:"css-79elbk"},[n("div",[t.noTitleLink?n("h2",{staticClass:"css-1izrdyl no-link"},[t._v(t._s(t.article.title))]):n("router-link",{attrs:{to:t.link}},[n("h2",{staticClass:"css-1izrdyl"},[t._v(t._s(t.article.title))])]),t.article.author?n("div",{staticClass:"css-1d7x0cs"},[n("time",{staticClass:"updated",attrs:{datetime:t.article.updatedAt}}),n("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])]):t._e()],1)]),n("div",{staticClass:"css-12m1dn8",style:{background:t.article.backgroundColorForPreview}},[n("v-img",{staticClass:"article-img",attrs:{"lazy-src":"/images/placeholder.png",src:t.article.img},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),n("nuxt-content",{staticClass:"article-excerpt",style:{background:"#fff"},attrs:{document:t.article.excerpt}})],1),t.useLink?n("footer",{staticClass:"go-link"},[n("router-link",{attrs:{to:t.link}},[t._v(t._s(t.buttonText+" >"))])],1):n("footer",{staticClass:"css-3872h1"},[n("router-link",{staticClass:"css-13xd08w",attrs:{to:t.link}},[t._v(t._s(t.buttonText))])],1)])])}),[],!1,null,"52dd6ac5",null);e.default=component.exports;c()(component,{VImg:m.a,VProgressCircular:l.a,VRow:f.a})},494:function(t,e,n){"use strict";n(478)},495:function(t,e,n){var r=n(17)(!1);r.push([t.i,".css-za4qqw[data-v-38eb26f8]{background-image:linear-gradient(180deg,#fff 10%,#eef0f7);padding:60px 0 70px}.css-za4qqw.use-share[data-v-38eb26f8]{padding:90px 0 135px}.css-17ia555[data-v-38eb26f8]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.css-1bk7ox4[data-v-38eb26f8]{margin-bottom:40px;font-size:32px}.css-70qvj9[data-v-38eb26f8]{display:flex;align-items:center}.css-1c7u7ph[data-v-38eb26f8]{text-align:center;line-height:1.6;max-width:400px}.css-1c7u7ph strong[data-v-38eb26f8]{font-weight:600}.css-1c7u7ph[data-v-38eb26f8] :last-child{margin-bottom:0!important}.input-action-container[data-v-38eb26f8]{width:100%;margin:35px 0 0;max-width:460px}.input-action-container.long[data-v-38eb26f8]{max-width:600px}@media(min-width:576px){.css-17ia555[data-v-38eb26f8]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-17ia555[data-v-38eb26f8]{max-width:540px}}@media(max-width:767.98px){.css-za4qqw[data-v-38eb26f8]{border-bottom:1 solid #ccd3e8}}@media(min-width:768px){.css-17ia555[data-v-38eb26f8]{max-width:720px}.css-za4qqw[data-v-38eb26f8]{padding:90px 0 135px}.css-1bk7ox4[data-v-38eb26f8]{font-size:43px}.input-action-container[data-v-38eb26f8]{margin:45px 0 0}}@media(min-width:992px){.css-17ia555[data-v-38eb26f8]{max-width:960px}}@media(min-width:1200px){.css-17ia555[data-v-38eb26f8]{max-width:1140px}}",""]),t.exports=r},587:function(t,e,n){"use strict";(function(t){var r=n(10),o=(n(59),n(25),n(65),n(483)),d=n(493),c=t.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",m=t.env.NUXT_APP_FRONTEND_PORT||"",l="".concat(c).concat(m);e.a={name:"Blog",components:{TopBanner:o.default,ArticlePreview:d.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles","blog").only(["slug"]).fetch();case 3:return r=e.sent,e.next=6,n("articles","blog").only(["title","body","excerpt","img","slug","author","updatedAt","tags","backgroundColorForPreview"]).sortBy("createdAt","desc").limit(5).fetch();case 6:return(o=e.sent).map((function(article){article.excerpt={body:article.excerpt}})),d=r.length>o.length,e.abrupt("return",{articles:o,isMore:d});case 10:case"end":return e.stop()}}),e)})))()},head:function(e){var title="검색엔진 최적화 블로그";return{title:title,meta:(0,e.$seoMeta)({title:"".concat(title," | ").concat(t.env.NUXT_APP_SITE_NAME||"JETT Analysis"),url:"".concat(l).concat(this.$route.path),description:"JETT Analysis의 다양한 노하우를 소개하는 검색엔진 최적화 블로그입니다."},!1).concat([{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"".concat(title," | JETT Analysis")}]),link:[{rel:"canonical",href:"".concat(l).concat(this.$route.path)}]}},methods:{showService:function(){this.$router.push("/service")}}}}).call(this,n(124))},636:function(t,e,n){var content=n(676);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2024fe6c",content,!0,{sourceMap:!1})},675:function(t,e,n){"use strict";n(636)},676:function(t,e,n){var r=n(17)(!1);r.push([t.i,".wrap[data-v-4c18cf48]{font-size:1.125rem;background-color:#fff;overflow-x:hidden}.css-15j7bd7[data-v-4c18cf48]{width:100%;margin-right:auto;margin-left:auto;padding:30px 20px 35px}.css-1i46dgl[data-v-4c18cf48]{max-width:710px;margin:35px auto 0}.css-18dt6si[data-v-4c18cf48]{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;-webkit-clip:rect(0,0,0,0);clip:rect(0,0,0,0);white-space:nowrap;border:0}.css-1ctem6t[data-v-4c18cf48]{display:flex;flex-wrap:nowrap;flex-direction:row-reverse;margin:0 -10px}.css-1lkog1[data-v-4c18cf48]{padding:0 10px;width:100%}.css-419jou[data-v-4c18cf48]{width:100%;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;color:#fff;background-color:#00afff;text-align:center;vertical-align:middle;border:1px solid transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;border-radius:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none}@media(min-width:768px){.css-1i46dgl[data-v-4c18cf48]{margin:50px auto 0}}@media(min-width:992px){.css-1i46dgl[data-v-4c18cf48]{margin:75px auto 0}}",""]),t.exports=r},769:function(t,e,n){"use strict";n.r(e);var r=n(587).a,o=(n(675),n(38)),d=n(57),c=n.n(d),m=n(459),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jett-container"},[n("navigation-bar"),n("div",{staticClass:"wrap"},[n("section",[n("top-banner",{attrs:{title:"검색엔진 최적화 전략에 대해 알아보세요!",desc:"다양한 SEO 전략과 마케팅에 대한 최신 정보를 확인하고, 내 사이트를 한층 더 업그레이드하세요.",buttonOnly:!0,buttonText:"SEO 전략 서비스 알아보기"},on:{onButtonClick:t.showService}})],1),n("v-main",[t.articles?n("div",{staticClass:"css-15j7bd7"},[t._l(t.articles,(function(article){return[n("article-preview",{attrs:{type:"blog",article:article}})]})),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isMore,expression:"isMore"}],staticClass:"css-1i46dgl"},[n("h2",{staticClass:"css-18dt6si"},[t._v("Posts navigation")]),n("div",{staticClass:"css-1ctem6t"},[n("div",{staticClass:"css-1lkog1"},[n("nuxt-link",{staticClass:"css-419jou",attrs:{to:"/blog/page/2"}},[t._v("다음")])],1)])])],2):t._e()])],1),n("page-footer")],1)}),[],!1,null,"4c18cf48",null);e.default=component.exports;c()(component,{NavigationBar:n(155).default,TopBanner:n(483).default,PageFooter:n(156).default}),c()(component,{VMain:m.a})}}]);