(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{382:function(t,e,n){"use strict";n(10),n(47),n(7),n(60),n(15),n(36),n(67),n(65),n(469);var r=n(3),o=Symbol("rippleStop");function c(t,e){t.style.transform=e,t.style.webkitTransform=e}function l(t,e){t.style.opacity=e.toString()}function h(t){return"TouchEvent"===t.constructor.name}function d(t){return"KeyboardEvent"===t.constructor.name}var v=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,o=0;if(!d(t)){var c=e.getBoundingClientRect(),l=h(t)?t.touches[t.touches.length-1]:t;r=l.clientX-c.left,o=l.clientY-c.top}var v=0,m=.3;e._ripple&&e._ripple.circle?(m=.15,v=e.clientWidth/2,v=n.center?v:v+Math.sqrt(Math.pow(r-v,2)+Math.pow(o-v,2))/4):v=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var f="".concat((e.clientWidth-2*v)/2,"px"),w="".concat((e.clientHeight-2*v)/2,"px"),_=n.center?f:"".concat(r-v,"px"),x=n.center?w:"".concat(o-v,"px");return{radius:v,scale:m,x:_,y:x,centerX:f,centerY:w}},m=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var r=document.createElement("span"),o=document.createElement("span");r.appendChild(o),r.className="v-ripple__container",n.class&&(r.className+=" ".concat(n.class));var h=v(t,e,n),d=h.radius,m=h.scale,f=h.x,w=h.y,_=h.centerX,x=h.centerY,y="".concat(2*d,"px");o.className="v-ripple__animation",o.style.width=y,o.style.height=y,e.appendChild(r);var k=window.getComputedStyle(e);k&&"static"===k.position&&(e.style.position="relative",e.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),c(o,"translate(".concat(f,", ").concat(w,") scale3d(").concat(m,",").concat(m,",").concat(m,")")),l(o,0),o.dataset.activated=String(performance.now()),setTimeout((function(){o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),c(o,"translate(".concat(_,", ").concat(x,") scale3d(1,1,1)")),l(o,.25)}),0)}},f=function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var n=e[e.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var r=performance.now()-Number(n.dataset.activated),o=Math.max(250-r,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),l(n,0),setTimeout((function(){1===t.getElementsByClassName("v-ripple__animation").length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),o)}}}};function w(t){return void 0===t||!!t}function _(t){var e={},element=t.currentTarget;if(element&&element._ripple&&!element._ripple.touched&&!t[o]){if(t[o]=!0,h(t))element._ripple.touched=!0,element._ripple.isTouch=!0;else if(element._ripple.isTouch)return;if(e.center=element._ripple.centered||d(t),element._ripple.class&&(e.class=element._ripple.class),h(t)){if(element._ripple.showTimerCommit)return;element._ripple.showTimerCommit=function(){m(t,element,e)},element._ripple.showTimer=window.setTimeout((function(){element&&element._ripple&&element._ripple.showTimerCommit&&(element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null)}),80)}else m(t,element,e)}}function x(t){var element=t.currentTarget;if(element&&element._ripple){if(window.clearTimeout(element._ripple.showTimer),"touchend"===t.type&&element._ripple.showTimerCommit)return element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null,void(element._ripple.showTimer=setTimeout((function(){x(t)})));window.setTimeout((function(){element._ripple&&(element._ripple.touched=!1)})),f(element)}}function y(t){var element=t.currentTarget;element&&element._ripple&&(element._ripple.showTimerCommit&&(element._ripple.showTimerCommit=null),window.clearTimeout(element._ripple.showTimer))}var k=!1;function C(t){k||t.keyCode!==r.p.enter&&t.keyCode!==r.p.space||(k=!0,_(t))}function S(t){k=!1,x(t)}function z(t){!0===k&&(k=!1,x(t))}function E(t,e,n){var r=w(e.value);r||f(t),t._ripple=t._ripple||{},t._ripple.enabled=r;var o=e.value||{};o.center&&(t._ripple.centered=!0),o.class&&(t._ripple.class=e.value.class),o.circle&&(t._ripple.circle=o.circle),r&&!n?(t.addEventListener("touchstart",_,{passive:!0}),t.addEventListener("touchend",x,{passive:!0}),t.addEventListener("touchmove",y,{passive:!0}),t.addEventListener("touchcancel",x),t.addEventListener("mousedown",_),t.addEventListener("mouseup",x),t.addEventListener("mouseleave",x),t.addEventListener("keydown",C),t.addEventListener("keyup",S),t.addEventListener("blur",z),t.addEventListener("dragstart",x,{passive:!0})):!r&&n&&L(t)}function L(t){t.removeEventListener("mousedown",_),t.removeEventListener("touchstart",_),t.removeEventListener("touchend",x),t.removeEventListener("touchmove",y),t.removeEventListener("touchcancel",x),t.removeEventListener("mouseup",x),t.removeEventListener("mouseleave",x),t.removeEventListener("keydown",C),t.removeEventListener("keyup",S),t.removeEventListener("dragstart",x),t.removeEventListener("blur",z)}var O={bind:function(t,e,n){E(t,e,!1)},unbind:function(t){delete t._ripple,L(t)},update:function(t,e){e.value!==e.oldValue&&E(t,e,w(e.oldValue))}};e.a=O},390:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("115823b4",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";n(429);var r=n(0);e.a=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},429:function(t,e,n){"use strict";var r=n(4),o=n(259);r({target:"String",proto:!0,forced:n(260)("small")},{small:function(){return o(this,"small","","")}})},436:function(t,e,n){"use strict";n(65),n(36),n(437);var r=n(171),o=n(104),c=n(3);e.a=o.a.extend({name:"v-progress-circular",directives:{intersect:r.a},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(c.d)(this.calculatedSize),width:Object(c.d)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},437:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("e003f1f8",content,!0,{sourceMap:!1})},438:function(t,e,n){var r=n(26)(!1);r.push([t.i,".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}",""]),t.exports=r},444:function(t,e,n){"use strict";var r=n(0),o=n(3);e.a=r.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.f}}})},445:function(t,e,n){"use strict";n(390)},446:function(t,e,n){var r=n(26)(!1);r.push([t.i,".preview-container[data-v-08e15353]{text-align:left;padding:20px;border:2px solid #eee;border-radius:5px;margin-top:16px;overflow:auto}.preview-box[data-v-08e15353]{width:570px;border:1px solid #e8ebee;border-radius:6px;box-shadow:0 1px 1px 0 rgba(0,0,0,.03);background-color:#fff;padding-top:11px}.preview-box .box-wrap[data-v-08e15353]{position:relative;padding:11px 20px 13px}.preview-box .box-wrap .menu[data-v-08e15353]{float:right;position:relative;margin-top:-20px;margin-right:-15px;cursor:pointer}.preview-box .box-wrap .search-head[data-v-08e15353]{overflow:hidden}.preview-box .box-wrap .search-head .source[data-v-08e15353]{font-size:.9rem;line-height:1.5rem}.preview-box .box-wrap .search-head .source .source-box[data-v-08e15353]{display:inline-block;max-width:100%;vertical-align:top}.preview-box .box-wrap .search-head .source .source-box .desktop-snippet-url[data-v-08e15353]{line-height:1rem;color:#666;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:300px;display:inline-block;margin-left:8px;cursor:pointer}.preview-box .box-wrap .search-head .desktop-title[data-v-08e15353]{display:inline-block;max-width:100%;padding-top:2px;font-size:1.2rem;line-height:1.8rem;letter-spacing:-.25px;color:#0c43b7;overflow:hidden;text-overflow:ellipsis;display:block;cursor:pointer}.preview-box .box-wrap .search-body[data-v-08e15353]{margin-top:7px;border-top:1px solid #f1f4f6;padding-top:8px;clear:both;font-size:.8rem;line-height:1.6rem;letter-spacing:-.25px}.preview-box .box-wrap .search-body .meta-description[data-v-08e15353]{line-height:1rem;max-height:3rem;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;word-break:break-all}.mobile.preview-box[data-v-08e15353]{font-family:Roboto,HelveticaNeue,Arial,sans-serif;box-shadow:0 1px 6px rgba(32,33,36,.28);border-radius:8px;border-bottom:1px hidden #fff;padding:12px 16px;width:375px;margin:0 auto}.mobile.preview-box .box-wrap .search-head .source .source-box .desktop-snippet-url[data-v-08e15353]{max-width:275px}.mobile.preview-box .box-wrap .menu[data-v-08e15353]{margin-right:-25px}.device-switch[data-v-08e15353]{margin-top:0;padding-top:0;margin-bottom:16px;padding-bottom:4px}@media(max-width:990px){.preview-box[data-v-08e15353]{position:relative;background-color:#fff;box-sizing:border-box;border-radius:2px;border-bottom:1px hidden #fff;margin:0}}",""]),t.exports=r},451:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(2),o=(n(36),n(0)),c=n(19);function l(t,e){return function(){return Object(c.c)("The ".concat(t," component must be used inside a ").concat(e))}}function h(t,e,n){var c=e&&n?{register:l(e,n),unregister:l(e,n)}:null;return o.a.extend({name:"registrable-inject",inject:Object(r.a)({},t,{default:c})})}},456:function(t,e,n){"use strict";n(12);var r=n(3);function o(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,r=t.touchstartY,o=t.touchendY;t.offsetX=n-e,t.offsetY=o-r,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<r-16&&t.up(t),t.down&&o>r+16&&t.down(t))}(e)}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var l={inserted:function(t,e,n){var o=e.value,l=o.parent?t.parentElement:t,h=o.options||{passive:!0};if(l){var d=c(e.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=d,Object(r.q)(d).forEach((function(t){l.addEventListener(t,d[t],h)}))}},unbind:function(t,e,n){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var c=o._touchHandlers[n.context._uid];Object(r.q)(c).forEach((function(t){o.removeEventListener(t,c[t])})),delete o._touchHandlers[n.context._uid]}}};e.a=l},468:function(t,e,n){"use strict";n.r(e);var r={name:"NaverPreview",props:{url:{type:String,required:!0},title:{type:Object,required:!0},date:{type:String,default:"2021. 01. 01."},description:{type:Object,required:!0},favicon:{type:String,required:!0}},data:function(){return{isMobile:!1}},computed:{faviconUrl:function(){return this.favicon?this.favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA/1JREFUSEvFl11sk1UYx//n/erHamm7rh1dOwuFMXGCEwcoLhmJt4IEE+PdSLw2MSSaqJdqooGYeGlM2J0xQXF4a9wSAhEmLlM+tkGlrl23dl1bStev9+OYc+BtWhijWQh9kjdt8p7n/M7znP/znPMStGCUUuHc5I3X9/cH3jaovm96djGQyq4FmKvf05Ec7O9JCkS8emU2+cuxkd2XCCHGk6YlGw2YmLhj/a+Q+UDVtZODfd2+zi02xJbyuLWQbXLb2etBeKsLq3fLmJ5fTsuidPp5p/fbw4e3VR43/2PBY+f/Oq5ptW8Mwwhtec6CAy8GQSHgwkwclBIQct+VUgpCKIb3hkBg4PL1BO7eq0IQhLgkKR+OHnnlp/Xgj4AppWTs1z8/V2vqJ8yBCASDu4II93hwO57FrXhztOakO0Me7Ah5EFvMYnouAWpQ/kpW5C9H33r1M8JW12BNYAY9Mz71g6Zp73InWYEsy3hz/3ZIkoDJqzGUq9q62bNZJIzsC0PTDPx25V+oqgpVrfGxkiT9eOLo0HuN8CbwmfNTX5iRKhYLRFGC12XH0O4ACmtVXJyJb6iZQ3tDcHZYMHUjiUy+BF3XUKtW65GfODL0qTlBHcz2tFarnGUvTCj739fbiUjQjWgih/mF1Q3B641thCuK9R1zzzmYqTeaS80zIbH0SrJcBxwY6IHHacNsLMPTLIkCf0Tx/pp1nULTDf6wdPeHvcgWyrh8bbE+h/Yg7UxwEbe/j6mde4+NT31UU9WvmJBsVjs6XXYOczut/HczxuC5QoUvYjVfQrlS4oJTZPnj0aNDXxPWHL4/98eSs0PxRYI+BP0uLqSHrVCsolRVoWoGdMPgkTJjkYuCAFkSYLfIcDosj/gywSVSeUQTaRTWaun3jx3cSn6euP5Gb5f9AhORw+HgTkxIK7kSShUVL+3wgUEv/r2xsEzaoT0hDmdbI0siutx2LjhmxWKRi25hpTRMEku5U6pWPQkiIpWrIJEu1EvGYVcw/HIvlleLmJ5bbinjg7u60d3p4OOZHzO290GfE363FaA6ZMlymiwkMxPRRGYkvlICIWLT5GylrETiqQKuRdMtgQciPoT8TvxzO82DaDRKdYS67IgEvZNk/PeZuVR2rc9itbE21zTQ5bDitT1BxJJ53IxlWgK/EPYiHHDh5p0M7+uNZhgGqpUyO1jmyXdnL90D4LDa7PX+aw5mqj44EGyphk0fs5ZZzbPab46YolIu8e1uH/ipp3qblx+RT0x128TVjnKSJOVU+xrIplqmztrmg5YpEIjiJlpm2w4JBm7bscijbsdFwOwubbn6MHjbLnsm/Jlfbxsb+jO/0DfC2/IJ89Bx9tQ/2v4HwYFI5VApi5UAAAAASUVORK5CYII="}}},o=(n(445),n(35)),c=n(46),l=n.n(c),h=n(601),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"switch"},[n("v-switch",{staticClass:"device-switch",attrs:{label:"모바일",color:"#00afff",value:"모바일","hide-details":""},model:{value:t.isMobile,callback:function(e){t.isMobile=e},expression:"isMobile"}})],1),t.isMobile?n("div",{staticClass:"mobile preview-box"},[n("div",{staticClass:"box-wrap"},[n("div",{staticClass:"menu"},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M12 16c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"}})])]),n("div",{staticClass:"search-head"},[n("div",{staticClass:"source"},[n("div",{staticClass:"source-box"},[n("img",{attrs:{width:"15",height:"15",src:t.faviconUrl,alt:"favicon"}}),n("span",{staticClass:"desktop-snippet-url"},[t._v(t._s(t.url))])])]),n("div",{staticClass:"desktop-title"},[t._v(t._s(t.title.self))])]),n("div",{staticClass:"search-body"},[n("div",{staticClass:"meta-description-wrap"},[n("span",{staticClass:"meta-description"},[t._v(t._s(t.description.self))])])])])]):n("div",{staticClass:"preview-box"},[n("div",{staticClass:"box-wrap"},[n("div",{staticClass:"menu"},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M12 16c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"}})])]),n("div",{staticClass:"search-head"},[n("div",{staticClass:"source"},[n("div",{staticClass:"source-box"},[n("img",{attrs:{width:"15",height:"15",src:t.faviconUrl,alt:"favicon"}}),n("span",{staticClass:"desktop-snippet-url"},[t._v(t._s(t.url))])])]),n("div",{staticClass:"desktop-title"},[t._v(t._s(t.title.self))])]),n("div",{staticClass:"search-body"},[n("div",{staticClass:"meta-description-wrap"},[n("span",{staticClass:"meta-description"},[t._v(t._s(t.description.self))])])])])])])}),[],!1,null,"08e15353",null);e.default=component.exports;l()(component,{VSwitch:h.a})},469:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("04604cc2",content,!0,{sourceMap:!1})},470:function(t,e,n){var r=n(26)(!1);r.push([t.i,".v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none}.v-ripple__animation--in{transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1)}",""]),t.exports=r},500:function(t,e,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("2e2bc7da",content,!0,{sourceMap:!1})},501:function(t,e,n){var r=n(26)(!1);r.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},502:function(t,e,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("beda1088",content,!0,{sourceMap:!1})},503:function(t,e,n){var r=n(26)(!1);r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),t.exports=r},601:function(t,e,n){"use strict";n(13),n(10),n(14),n(17),n(12),n(18);var r=n(92),o=n(2),c=(n(172),n(500),n(502),n(7),n(60),n(449)),l=n(382),h=n(0).a.extend({name:"rippleable",directives:{ripple:l.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),d=n(444),v=n(51);function m(t){t.preventDefault()}var f=Object(v.a)(c.a,h,d.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),w=n(456),_=n(374),x=n(436),y=n(3),k=["title"];function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=f.extend({name:"v-switch",directives:{Touch:w.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return S(S({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,k));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",S(S({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",S({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",S({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(_.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(x.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===y.p.left&&this.isActive||t.keyCode===y.p.right&&!this.isActive)&&this.onChange()}}})}}]);