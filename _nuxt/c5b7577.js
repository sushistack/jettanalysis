(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{320:function(e,t,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("665e095a",content,!0,{sourceMap:!1})},321:function(e,t,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("5d153e24",content,!0,{sourceMap:!1})},322:function(e,t,o){var content=o(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("315f3998",content,!0,{sourceMap:!1})},324:function(e,t,o){"use strict";o.r(t);var r={name:"DignosisTable",props:{columns:{type:Array,requied:!0},data:{type:Array,requied:!0}},methods:{getAttributeColor:function(e){switch(e){case"New window":return"#777";case"Nofollow":return"#f0ad4e";case"External":return"#777";default:return""}},truncate:function(input){return input.length>30?"".concat(input.substring(0,30),"..."):input}}},n=(o(340),o(73)),l=o(98),c=o.n(l),d=o(446),f=o(447),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dignosis-table-conainer"},[o("v-simple-table",{attrs:{"fixed-header":"",height:"300px"},scopedSlots:e._u([{key:"default",fn:function(){return[o("thead",[o("tr",e._l(e.columns,(function(t,r){return o("th",{key:r,staticClass:"text-left"},[e._v(e._s(t.name))])})),0)]),o("tbody",e._l(e.data,(function(t,r){return o("tr",{key:r},e._l(e.columns,(function(r,n){return o("td",{key:n},["TEXT"===r.type?[e._v(e._s(e.truncate(t[r.id])))]:"CHIP"===r.type?[o("v-chip",{attrs:{small:"",dark:""}},[e._v(e._s(t[r.id]))])]:"CHIP_LIST"===r.type?e._l(t[r.id],(function(t,r){return o("span",{key:r,staticClass:"chips"},[o("v-chip",{attrs:{small:"",dark:"",color:e.getAttributeColor(t)}},[e._v(e._s(t))])],1)})):e._e()],2)})),0)})),0)]},proxy:!0}])})],1)}),[],!1,null,"d06162fa",null);t.default=component.exports;c()(component,{VChip:d.a,VSimpleTable:f.a})},325:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"b",(function(){return l})),o.d(t,"d",(function(){return c}));o(99);var r={DESKTOP:{TITLE:{MIN:200,MAX:580},DESC:{MIN:400,MAX:1e3}},MOBILE:{TITLE:{MIN:200,MAX:550},DESC:{MIN:400,MAX:990}}},n=function(){var e=document.createElement("div"),t=document.createElement("a"),o=document.createElement("span");return e.id="pixel-helper",e.style.visibility="hidden",t.id="title-helper",t.style.fontSize="20px",t.style.fontFamily="arial, sans-serif",t.style.whiteSpace="nowrap",t.style.lineHeight="1.3",o.id="desc-helper",o.style.fontSize="14px",o.style.fontFamily="font-family: arial, sans-serif",o.style.whiteSpace="nowrap",o.style.lineHeight="1.57",e.appendChild(t),e.appendChild(o),e},l=function(e,text){var t=document.querySelector("#".concat(function(e){switch(e){case"TITLE":return"title-helper";case"DESC":return"desc-helper"}}(e)));t.innerText=text;var o=t.offsetWidth;return t.innerText="",o},c=function(e,t,o){if(!document.querySelector("#pixel-helper")){var c=n();document.body.appendChild(c)}var d=function(e,t){switch(t){case!0:switch(e){case"TITLE":return r.MOBILE.TITLE;case"DESC":return r.MOBILE.DESC}case!1:switch(e){case"TITLE":return r.DESKTOP.TITLE;case"DESC":return r.DESKTOP.DESC}}}(e,o),text="";if(1===t.length)for(var f=t[0],i=0;i<f.length;i+=1){if(l(e,text)>d.MAX)return"".concat(text,"...");text+=f.charAt(i)}else for(var v=0;v<t.length;v+=1){if(l(e,text)>d.MAX)return"".concat(text,"...");text+="".concat(t[v]," ")}return text.trim()}},326:function(e,t,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("236600ae",content,!0,{sourceMap:!1})},336:function(e,t,o){"use strict";o(320)},337:function(e,t,o){var r=o(83)(!1);r.push([e.i,".preview-container[data-v-3afc6c34]{text-align:left;padding:20px;border:2px solid #eee;border-radius:5px;margin-top:16px}.preview-container .preview-box[data-v-3afc6c34]{max-width:570px}.preview-container .preview-box .desktop-snippet-url[data-v-3afc6c34]{color:#5f6368;display:inline;font-size:14px;font-weight:400;line-height:21.98px;list-style-image:none;list-style-position:outside;list-style-type:none;text-align:left;word-wrap:break-word;zoom:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.preview-container .preview-box .desktop[data-v-3afc6c34]{cursor:pointer;font-family:arial,sans-serif;font-size:13px;font-weight:400;line-height:20.41px;margin-bottom:4px;color:#3c4043}.preview-container .desktop-title[data-v-3afc6c34]{margin-bottom:3px;font-family:arial,sans-serif;font-size:20px}.preview-container a[data-v-3afc6c34]{color:#1a0dab;cursor:pointer;display:inline-block;font-family:Roboto,HelveticaNeue,Arial,sans-serif;font-size:20px;height:26px;line-height:26px;text-decoration:none;width:auto}.preview-container a[data-v-3afc6c34],.preview-container span[data-v-3afc6c34]{font-weight:400;list-style-image:none;list-style-position:outside;list-style-type:none;text-align:left;zoom:1}.preview-container span[data-v-3afc6c34]{color:#5f6368;display:inline;font-size:14px;line-height:21.98px;word-wrap:break-word}.preview-container .desktop-meta-description-text[data-v-3afc6c34]{font-family:arial,sans-serif}.preview-container .mobile-preview-box[data-v-3afc6c34]{font-family:Roboto,HelveticaNeue,Arial,sans-serif;box-shadow:0 1px 6px rgba(32,33,36,.28);border-radius:8px;border-bottom:1px hidden #fff;padding:12px 16px;width:375px;margin:0 auto}.preview-container .mobile-preview-box .mobile[data-v-3afc6c34]{display:flex}.preview-container .mobile-preview-box .mobile .favicon[data-v-3afc6c34]{margin-right:6px;margin-top:3px}.preview-container .mobile-preview-box .mobile .desktop-snippet-url[data-v-3afc6c34]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;margin-bottom:5px}.preview-container .mobile-preview-box .mobile-title[data-v-3afc6c34]{white-space:normal}.preview-container .device-switch[data-v-3afc6c34]{margin-top:0;padding-top:0;margin-bottom:16px;padding-bottom:4px}@media(max-width:990px){.preview-box[data-v-3afc6c34]{position:relative;background-color:#fff;box-sizing:border-box;border-radius:2px;border-bottom:1px hidden #fff;margin:0;padding-top:11px}.desktop-title[data-v-3afc6c34]{line-height:20px;word-wrap:break-word;font-size:16px;margin-right:16px}.meta-desciption[data-v-3afc6c34]{margin:0 16px 11px 0}}",""]),e.exports=r},338:function(e,t,o){"use strict";o(321)},339:function(e,t,o){var r=o(83)(!1);r.push([e.i,".preview-container[data-v-2f530b84]{text-align:left;padding:20px;border:2px solid #eee;border-radius:5px;margin-top:16px}.preview-box[data-v-2f530b84]{max-width:570px;border:1px solid #e8ebee;border-radius:6px;box-shadow:0 1px 1px 0 rgba(0,0,0,.03);background-color:#fff;padding-top:11px}.preview-box .box-wrap[data-v-2f530b84]{position:relative;padding:11px 20px 13px}.preview-box .box-wrap .menu[data-v-2f530b84]{float:right;position:relative;margin-top:-20px;margin-right:-15px;cursor:pointer}.preview-box .box-wrap .search-head[data-v-2f530b84]{overflow:hidden}.preview-box .box-wrap .search-head .source[data-v-2f530b84]{font-size:.9rem;line-height:1.5rem}.preview-box .box-wrap .search-head .source .source-box[data-v-2f530b84]{display:inline-block;max-width:100%;vertical-align:top}.preview-box .box-wrap .search-head .source .source-box .desktop-snippet-url[data-v-2f530b84]{line-height:1rem;color:#666;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:300px;display:inline-block;margin-left:8px;cursor:pointer}.preview-box .box-wrap .search-head .desktop-title[data-v-2f530b84]{display:inline-block;max-width:100%;padding-top:2px;font-size:1.2rem;line-height:1.8rem;letter-spacing:-.25px;color:#0c43b7;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;cursor:pointer}.preview-box .box-wrap .search-body[data-v-2f530b84]{margin-top:7px;border-top:1px solid #f1f4f6;padding-top:8px;clear:both;font-size:.8rem;line-height:1.6rem;letter-spacing:-.25px}.preview-box .box-wrap .search-body .meta-description[data-v-2f530b84]{line-height:1rem;max-height:3rem;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;word-break:break-all}.mobile.preview-box[data-v-2f530b84]{font-family:Roboto,HelveticaNeue,Arial,sans-serif;box-shadow:0 1px 6px rgba(32,33,36,.28);border-radius:8px;border-bottom:1px hidden #fff;padding:12px 16px;width:375px;margin:0 auto}.mobile.preview-box .box-wrap .search-head .source .source-box .desktop-snippet-url[data-v-2f530b84]{max-width:275px}.mobile.preview-box .box-wrap .menu[data-v-2f530b84]{margin-right:-25px}.device-switch[data-v-2f530b84]{margin-top:0;padding-top:0;margin-bottom:16px;padding-bottom:4px}@media(max-width:990px){.preview-box[data-v-2f530b84]{position:relative;background-color:#fff;box-sizing:border-box;border-radius:2px;border-bottom:1px hidden #fff;margin:0}}",""]),e.exports=r},340:function(e,t,o){"use strict";o(322)},341:function(e,t,o){var r=o(83)(!1);r.push([e.i,".chips[data-v-d06162fa]{line-height:2}",""]),e.exports=r},349:function(e,t,o){var content=o(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("799fad66",content,!0,{sourceMap:!1})},350:function(e,t,o){"use strict";o.r(t);o(33),o(62);var r=o(325),n={name:"GooglePreview",props:{url:{type:String,required:!0},title:{type:Object,required:!0},date:{type:String,default:"2021. 01. 01."},description:{type:Object,required:!0},favicon:{type:String,required:!0}},data:function(){return{isMobile:!1}},methods:{ellipsis:function(e,text){return text?Object(r.d)(e,text.split(" "),this.isMobile):""}},computed:{faviconUrl:function(){return this.favicon?this.favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC"}}},l=(o(336),o(73)),c=o(98),d=o.n(c),f=o(522),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"preview-container"},[o("div",{staticClass:"switch"},[o("v-switch",{staticClass:"device-switch",attrs:{label:"모바일",color:"#00afff","hide-details":""},model:{value:e.isMobile,callback:function(t){e.isMobile=t},expression:"isMobile"}})],1),e.isMobile?o("div",{staticClass:"mobile-preview-box"},[o("div",{staticClass:"mobile"},[o("img",{staticClass:"favicon",attrs:{width:"16",height:"16",src:e.faviconUrl,alt:"favicon"}}),o("span",{staticClass:"desktop-snippet-url"},[e._v(e._s(e.url))])]),o("a",{staticClass:"mobile-title"},[e._v(e._s(e.ellipsis("TITLE",e.title.self)))]),o("div",{staticClass:"meta-desciption"},[o("span",{staticClass:"desktop-snippet-date"},[e._v(e._s(e.date)+" — ")]),o("span",{staticClass:"desktop-meta-description-text"},[e._v(e._s(e.ellipsis("DESC",e.description.self)))])])]):o("div",{staticClass:"preview-box"},[o("div",{staticClass:"desktop"},[o("span",{staticClass:"desktop-snippet-url"},[e._v(e._s(e.url))])]),o("a",{staticClass:"desktop-title"},[e._v(e._s(e.ellipsis("TITLE",e.title.self)))]),o("div",{staticClass:"meta-desciption"},[o("span",{staticClass:"desktop-snippet-date"},[e._v(e._s(e.date)+" — ")]),o("span",{staticClass:"desktop-meta-description-text"},[e._v(e._s(e.ellipsis("DESC",e.description.self)))])])])])}),[],!1,null,"3afc6c34",null);t.default=component.exports;d()(component,{VSwitch:f.a})},351:function(e,t,o){"use strict";o.r(t);var r={name:"NaverPreview",props:{url:{type:String,required:!0},title:{type:Object,required:!0},date:{type:String,default:"2021. 01. 01."},description:{type:Object,required:!0},favicon:{type:String,required:!0}},data:function(){return{isMobile:!1}},computed:{faviconUrl:function(){return this.favicon?this.favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA/1JREFUSEvFl11sk1UYx//n/erHamm7rh1dOwuFMXGCEwcoLhmJt4IEE+PdSLw2MSSaqJdqooGYeGlM2J0xQXF4a9wSAhEmLlM+tkGlrl23dl1bStev9+OYc+BtWhijWQh9kjdt8p7n/M7znP/znPMStGCUUuHc5I3X9/cH3jaovm96djGQyq4FmKvf05Ec7O9JCkS8emU2+cuxkd2XCCHGk6YlGw2YmLhj/a+Q+UDVtZODfd2+zi02xJbyuLWQbXLb2etBeKsLq3fLmJ5fTsuidPp5p/fbw4e3VR43/2PBY+f/Oq5ptW8Mwwhtec6CAy8GQSHgwkwclBIQct+VUgpCKIb3hkBg4PL1BO7eq0IQhLgkKR+OHnnlp/Xgj4AppWTs1z8/V2vqJ8yBCASDu4II93hwO57FrXhztOakO0Me7Ah5EFvMYnouAWpQ/kpW5C9H33r1M8JW12BNYAY9Mz71g6Zp73InWYEsy3hz/3ZIkoDJqzGUq9q62bNZJIzsC0PTDPx25V+oqgpVrfGxkiT9eOLo0HuN8CbwmfNTX5iRKhYLRFGC12XH0O4ACmtVXJyJb6iZQ3tDcHZYMHUjiUy+BF3XUKtW65GfODL0qTlBHcz2tFarnGUvTCj739fbiUjQjWgih/mF1Q3B641thCuK9R1zzzmYqTeaS80zIbH0SrJcBxwY6IHHacNsLMPTLIkCf0Tx/pp1nULTDf6wdPeHvcgWyrh8bbE+h/Yg7UxwEbe/j6mde4+NT31UU9WvmJBsVjs6XXYOczut/HczxuC5QoUvYjVfQrlS4oJTZPnj0aNDXxPWHL4/98eSs0PxRYI+BP0uLqSHrVCsolRVoWoGdMPgkTJjkYuCAFkSYLfIcDosj/gywSVSeUQTaRTWaun3jx3cSn6euP5Gb5f9AhORw+HgTkxIK7kSShUVL+3wgUEv/r2xsEzaoT0hDmdbI0siutx2LjhmxWKRi25hpTRMEku5U6pWPQkiIpWrIJEu1EvGYVcw/HIvlleLmJ5bbinjg7u60d3p4OOZHzO290GfE363FaA6ZMlymiwkMxPRRGYkvlICIWLT5GylrETiqQKuRdMtgQciPoT8TvxzO82DaDRKdYS67IgEvZNk/PeZuVR2rc9itbE21zTQ5bDitT1BxJJ53IxlWgK/EPYiHHDh5p0M7+uNZhgGqpUyO1jmyXdnL90D4LDa7PX+aw5mqj44EGyphk0fs5ZZzbPab46YolIu8e1uH/ipp3qblx+RT0x128TVjnKSJOVU+xrIplqmztrmg5YpEIjiJlpm2w4JBm7bscijbsdFwOwubbn6MHjbLnsm/Jlfbxsb+jO/0DfC2/IJ89Bx9tQ/2v4HwYFI5VApi5UAAAAASUVORK5CYII="}}},n=(o(338),o(73)),l=o(98),c=o.n(l),d=o(442),f=o(522),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"preview-container"},[o("div",{staticClass:"switch"},[o("v-switch",{staticClass:"device-switch",attrs:{label:"모바일",color:"#00afff",value:"모바일","hide-details":""},model:{value:e.isMobile,callback:function(t){e.isMobile=t},expression:"isMobile"}})],1),e.isMobile?o("div",{staticClass:"mobile preview-box"},[o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"menu"},[o("v-icon",{attrs:{small:"",color:"grey lighten-2"}},[e._v("mdi-dots-vertical")])],1),o("div",{staticClass:"search-head"},[o("div",{staticClass:"source"},[o("div",{staticClass:"source-box"},[o("img",{attrs:{width:"15",height:"15",src:e.faviconUrl,alt:"favicon"}}),o("span",{staticClass:"desktop-snippet-url"},[e._v(e._s(e.url))])])]),o("div",{staticClass:"desktop-title"},[e._v(e._s(e.title.self))])]),o("div",{staticClass:"search-body"},[o("div",{staticClass:"meta-description-wrap"},[o("span",{staticClass:"meta-description"},[e._v(e._s(e.description.self))])])])])]):o("div",{staticClass:"preview-box"},[o("div",{staticClass:"box-wrap"},[o("div",{staticClass:"menu"},[o("v-icon",{attrs:{small:"",color:"grey lighten-2"}},[e._v("mdi-dots-vertical")])],1),o("div",{staticClass:"search-head"},[o("div",{staticClass:"source"},[o("div",{staticClass:"source-box"},[o("img",{attrs:{width:"15",height:"15",src:e.faviconUrl,alt:"favicon"}}),o("span",{staticClass:"desktop-snippet-url"},[e._v(e._s(e.url))])])]),o("div",{staticClass:"desktop-title"},[e._v(e._s(e.title.self))])]),o("div",{staticClass:"search-body"},[o("div",{staticClass:"meta-description-wrap"},[o("span",{staticClass:"meta-description"},[e._v(e._s(e.description.self))])])])])])])}),[],!1,null,"2f530b84",null);t.default=component.exports;c()(component,{VIcon:d.a,VSwitch:f.a})},355:function(e,t,o){"use strict";o(326)},356:function(e,t,o){var r=o(83)(!1);r.push([e.i,'.report-element-description{width:60%}.report-element-description .body-info{background-color:#f0f5fd;font-weight:700;padding:8px 13px!important;word-wrap:break-word}.report-element-description .description-content ul{margin:0;padding:0;list-style:none}.report-element-description .description-content ul li{margin-bottom:0;position:relative;display:flex;align-items:center}.report-element-description .description-meta{margin-top:8px}.report-element-description .description-meta ul{margin:0;padding:0;list-style:none}.report-element-description .description-meta ul li{margin-bottom:0;position:relative;display:flex;align-items:center;padding-left:16px;word-break:break-word;color:#000}.report-element-description .description-meta ul li:before{content:"";position:absolute;top:7px;left:0;width:8px;height:8px;border-radius:100%;background:#ccc;transform:none}.report-element-description .description-meta li.passed:before{background:#34bc6e}.report-element-description .description-meta li.warn:before{background:#ffab00}.report-element-description .description-meta li.failed:before{background:#f63842}@media(max-width:768px){.report-element-description{width:100%}}',""]),e.exports=r},364:function(e,t,o){"use strict";o.r(t);var r={name:"DignosisBody",props:["body"],data:function(){return{maxImportance:5}},components:{Description:o(365).default},computed:{isCustom:function(){return this.body.isCustom},topIcon:function(){switch(this.body.validCode){case"PASSED":return"mdi-check-circle-outline";case"WARNING":return"mdi-alert-circle-outline";case"FAILED":return"mdi-close-circle-outline";default:return"mdi-checkbox-blank-circle-outline"}},topIconColor:function(){switch(this.body.validCode){case"PASSED":return"#34bc6e";case"WARNING":return"#ffab00";case"FAILED":return"#f63842";default:return"#ccc"}this.isValid||this.isNotValid},validType:function(){return{custom:"CUSTOM"===this.body.validCode,passed:"PASSED"===this.body.validCode,warn:"WARNING"===this.body.validCode,failed:!this.isCustom&&"FAILED"===this.body.validCode}},filledCount:function(){return this.body.importance},emptyCount:function(){return this.maxImportance-this.body.importance}}},n=(o(395),o(73)),l=o(98),c=o.n(l),d=o(442),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.body?o("div",{staticClass:"diagnosis-body"},[o("div",{staticClass:"report-element",class:e.validType},[o("div",{staticClass:"report-element-title"},[o("v-icon",{staticClass:"top-icon",attrs:{color:e.topIconColor}},[e._v(e._s(e.topIcon))]),o("strong",[e._v(e._s(e.body.title))]),e.filledCount>0?o("div",{staticClass:"importance"},[e._l(e.filledCount,(function(t,r){return o("v-icon",{key:r+"l",attrs:{small:"",color:"#00afff"}},[e._v("mdi-checkbox-blank-circle")])})),e._l(e.emptyCount,(function(t,r){return o("v-icon",{key:r+"r",attrs:{small:"",color:"#00afff"}},[e._v("mdi-checkbox-blank-circle-outline")])}))],2):e._e()],1),o("description",{attrs:{validType:e.validType,body:e.body}}),o("div",{staticClass:"report-element-info"},[o("v-icon",{attrs:{small:""}},[e._v("mdi-information-outline")])],1)],1)]):e._e()}),[],!1,null,"78ad403e",null);t.default=component.exports;c()(component,{VIcon:d.a})},365:function(e,t,o){"use strict";o.r(t);o(33),o(45),o(39);var r=o(350),n=o(351),l=o(324),c={name:"DiagnosisDescription",components:{GooglePreview:r.default,NaverPreview:n.default,DiagnosisTable:l.default},props:{validType:{type:Object,required:!0},body:{type:Object,required:!0}},data:function(){return{tab:null}},computed:{snippetUrl:function(){if(!this.body||!this.body.meta||!this.body.meta.url)return"";var e="/"===this.body.meta.url.pathname?"":this.body.meta.url.pathname.replace(/\//g," › ");return"".concat(this.body.meta.url.origin).concat(e)}},filters:{removeScheme:function(e){return e.replace(/^https?\:\/\//i,"")}}},d=(o(355),o(73)),f=o(98),v=o.n(f),m=o(499),x=o(518),h=o(517),w=o(433),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"report-element-description"},["TEXT"===e.body.descType?o("div",[e.body.value?o("div",{staticClass:"body-info"},[e._v(e._s(e.body.value))]):e._e(),e.body.details&&e.body.details.length>0?o("div",{staticClass:"description-meta"},[o("ul",e._l(e.body.details,(function(t,r){return o("li",{key:r,class:{passed:t.isValid,failed:!t.isValid&&!t.isWarning,warn:t.isWarning}},[o("span",{staticClass:"single-result"},[e._v(e._s(t.text))])])})),0)]):e._e()]):"PREVIEW"===e.body.descType?o("div",{staticClass:"search-preview"},[o("v-tabs",{attrs:{color:"#00afff"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("v-tab",[e._v("GOOGLE")]),o("v-tab",[e._v("NAVER")])],1),o("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("v-tab-item",[o("google-preview",{attrs:{url:e.snippetUrl,title:e.body.meta.title,description:e.body.meta.description,favicon:e.body.meta.favicon}})],1),o("v-tab-item",[o("naver-preview",{attrs:{url:e._f("removeScheme")(e.snippetUrl),title:e.body.meta.title,description:e.body.meta.description,favicon:e.body.meta.favicon}})],1)],1)],1):"TABLE"===e.body.descType?o("div",{staticClass:"desc-table"},[o("diagnosis-table",{attrs:{columns:e.body.columns,data:e.body.data}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;v()(component,{DiagnosisTable:o(324).default}),v()(component,{VTab:m.a,VTabItem:x.a,VTabs:h.a,VTabsItems:w.a})},395:function(e,t,o){"use strict";o(349)},396:function(e,t,o){var r=o(83)(!1);r.push([e.i,".diagnosis-body[data-v-78ad403e]{padding:0;zoom:1}.importance[data-v-78ad403e]{margin-left:32px}.report-element[data-v-78ad403e]{position:relative;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;background:#fff;padding:16px 24px 32px;border-bottom:1px solid #dfe5e5;color:rgba(0,0,0,.54)}.report-element .report-element-title[data-v-78ad403e]{display:flex;align-items:center;flex-wrap:wrap;width:30%}.report-element .report-element-title strong[data-v-78ad403e]{font-size:16px;line-height:normal;color:rgba(0,0,0,.87);font-weight:600;width:calc(100% - 32px)}.top-icon[data-v-78ad403e]{margin-right:8px}.report-element .report-element-info[data-v-78ad403e]{width:32px;height:24px;text-align:right;cursor:pointer}@media(max-width:768px){.report-element[data-v-78ad403e]{padding:16px}.report-element .report-element-title[data-v-78ad403e]{width:100%;margin-bottom:12px}.report-element .report-element-title strong[data-v-78ad403e]{width:calc(100% - 50px)}.report-element .report-element-info[data-v-78ad403e]{position:absolute;right:16px}}",""]),e.exports=r}}]);