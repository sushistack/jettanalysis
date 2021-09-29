(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{491:function(t,o,e){var content=e(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("d0c03afe",content,!0,{sourceMap:!1})},506:function(t,o,e){"use strict";e.r(o);var n={name:"DiagnosisInput",props:{buttonOnly:{type:Boolean,required:!1,default:function(){return!1}},loading:{type:Boolean,required:!1,default:function(){return!1}},buttonText:{type:String,required:!1,default:function(){return"진단"}},directUrl:{type:String,required:!1,default:function(){return""}}},data:function(){return{activeTooltip:!1,activeInput:!1,inputOption:{name:"dignosis",type:"text",placeholder:"https://jettanalysis.com"},tooltipText:"사이트 진단을 위해 유효한 URL을 입력해주세요",url:""}},created:function(){this.url=this.directUrl},methods:{inputUrl:function(t){this.activeInput||(this.activeInput=!this.activeInput),this.url=t.target.value},onSubmit:function(t){t.preventDefault();this.activeInput=!0,this.$emit("onSubmit",{isValid:/^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//.test(this.url),url:this.url})},focus:function(){this.$refs.urlInput.focus()}}},r=(e(525),e(38)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"diagnosis-input-container"},[e("form",{on:{submit:function(o){return o.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t.buttonOnly?t._e():e("div",{staticClass:"form-body"},[e("ul",{staticClass:"diagnosis-form"},[e("li",{staticClass:"form-item"},[e("div",{staticClass:"diagnosis-txt-field"},[e("input",{ref:"urlInput",class:{"inactive-diagnosis-txt-field":!t.activeInput,"active-diagnosis-txt-field":t.activeInput},attrs:{name:t.inputOption.name,type:t.inputOption.type,placeholder:t.inputOption.placeholder,required:""},domProps:{value:t.url},on:{focus:function(o){t.activeTooltip=!0},blur:function(o){t.activeTooltip=!1},input:t.inputUrl}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTooltip,expression:"activeTooltip"}],staticClass:"tooltip",attrs:{role:"tooltip","x-placement":"top"}},[e("div",{staticClass:"arrow"}),e("div",{staticClass:"tooltip-inner"},[t._v(t._s(t.tooltipText))])])])]),e("div",{staticClass:"diagnosis-btn-container"},[e("button",{staticClass:"diagnosis-btn",class:{"without-input":t.buttonOnly,"with-input":!t.buttonOnly},attrs:{disabled:t.loading,type:"submit",role:"button"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loader"},[t._v("Loading...")]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"span"},[t._v(t._s(t.buttonText))])])])])])}),[],!1,null,"397340a4",null);o.default=component.exports},525:function(t,o,e){"use strict";e(491)},526:function(t,o,e){var n=e(17)(!1);n.push([t.i,'.diagnosis-form[data-v-397340a4],.diagnosis-input-container[data-v-397340a4]{position:relative}.diagnosis-form[data-v-397340a4]{margin-bottom:0;padding-left:0;list-style:none}.form-item[data-v-397340a4]{margin-bottom:0;padding:0}.tooltip[data-v-397340a4]{top:calc(-100% + -.4rem);z-index:1}.tooltip[data-v-397340a4],.tooltip .arrow[data-v-397340a4]{position:absolute;left:0;right:0;margin:0 auto}.tooltip .arrow[data-v-397340a4]{display:block;bottom:-.4rem;width:0;height:0;border-left:.4rem solid transparent;border-right:.4rem solid transparent;border-top:.4rem solid #000}.tooltip .tooltip-inner[data-v-397340a4]{max-width:200px;margin:0 auto;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:6px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;font-style:normal;font-weight:400;line-height:1.8;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word}.inactive-diagnosis-txt-field[data-v-397340a4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.inactive-diagnosis-txt-field[data-v-397340a4]::-ms-expand{background-color:transparent;border:0}.inactive-diagnosis-txt-field[data-v-397340a4]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.inactive-diagnosis-txt-field[data-v-397340a4]::-moz-placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-397340a4]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-397340a4]::placeholder{color:#a5a5a5;opacity:1}.inactive-diagnosis-txt-field[data-v-397340a4]:disabled,.inactive-diagnosis-txt-field[readonly][data-v-397340a4]{background-color:#e6e6e6;opacity:1}.active-diagnosis-txt-field[data-v-397340a4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border:1px solid #00afff;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);transition:background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s,box-shadow .2s ease-in-out 0s;font-size:1.125rem;font-family:Inter;position:relative}.active-diagnosis-txt-field[data-v-397340a4]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.diagnosis-btn[data-v-397340a4]{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff}.diagnosis-btn[data-v-397340a4]:active,.diagnosis-btn[data-v-397340a4]:hover{background-color:#07f;border-color:#07f}.diagnosis-btn:disabled[disabled][data-v-397340a4]{cursor:not-allowed;background-color:#00afff;border-color:#00afff}.loader[data-v-397340a4],.loader[data-v-397340a4]:after{border-radius:50%;width:25px;height:25px}.loader[data-v-397340a4]{font-size:10px;position:relative;text-indent:-9999em;border:4px solid hsla(0,0%,100%,.2);border-left-color:#fff;transform:translateZ(0);-webkit-animation:load8-data-v-397340a4 1.1s linear infinite;animation:load8-data-v-397340a4 1.1s linear infinite}@-webkit-keyframes load8-data-v-397340a4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8-data-v-397340a4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media(max-width:767.98px){.diagnosis-btn[data-v-397340a4]{width:100%;margin-top:10px}}@media(min-width:768px){.diagnosis-btn.with-input[data-v-397340a4]{position:absolute}.diagnosis-btn.without-input[data-v-397340a4]{width:100%}.diagnosis-txt-field>input[data-v-397340a4]{width:calc(100% - 162px)}}',""]),t.exports=n}}]);