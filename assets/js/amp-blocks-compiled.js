this.AMP=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=63)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.data}()},,,function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t){!function(){e.exports=this.lodash}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},,function(e,t,a){var r=a(38),n=a(7);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?n(e):t}},function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},function(e,t,a){var r=a(39);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},,function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},a.apply(this,arguments)}e.exports=a},,,,,function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return l});var r=a(0),n=a(1),o=a(2);function i(e,t){return Object(r.createElement)(o.Placeholder,{label:e},Object(r.createElement)("p",{className:"components-placeholder__error"},t),Object(r.createElement)("p",{className:"components-placeholder__error"},Object(n.__)("Previews for this are unavailable in the editor, sorry!","amp")))}function l(e,t){var a=e.attributes,i=e.setAttributes,l=a.ampLayout,c=a.height,u=a.width,d=!c&&("fixed"===l||"fixed-height"===l),s=!u&&"fixed"===l;return[Object(r.createElement)(o.SelectControl,{key:"ampLayout",label:Object(n.__)("Layout","amp"),value:l,options:t,onChange:function(e){return i({ampLayout:e})}}),s&&Object(r.createElement)(o.Notice,{key:"showWidthNotice",status:"error",isDismissible:!1},Object(n.sprintf)(Object(n.__)("Width is required for %s layout","amp"),l)),Object(r.createElement)(o.TextControl,{key:"width",type:"number",label:Object(n.__)("Width (px)","amp"),value:void 0!==u?u:"",onChange:function(e){return i({width:e})}}),d&&Object(r.createElement)(o.Notice,{key:"showHeightNotice",status:"error",isDismissible:!1},Object(n.sprintf)(Object(n.__)("Height is required for %s layout","amp"),l)),Object(r.createElement)(o.TextControl,{key:"height",type:"number",label:Object(n.__)("Height (px)","amp"),value:c,onChange:function(e){return i({height:e})}})]}},,,,,,,,function(e,t){!function(){e.exports=this.moment}()},,,,,,,function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?e.exports=r=function(e){return a(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},r(t)}e.exports=r},function(e,t){function a(t,r){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},,,,,,,,,,,,,,,,,,,,,function(e,t,a){var r,n;r="undefined"!=typeof window?window:this,n=function(){function e(e){return e instanceof Date?e:isNaN(e)?/^\d+$/.test(e)?new Date(t(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e)):new Date(t(e))}function t(e){return parseInt(e)}function a(e,a,r){a=d[a]?a:d[r]?r:"en";for(var n=0,o=e<0?1:0,i=e=Math.abs(e);e>=s[n]&&n<b;n++)e/=s[n];return(e=t(e))>(0===(n*=2)?9:1)&&(n+=1),d[a](e,n,i)[o].replace("%s",e)}function r(t,a){return((a=a?e(a):new Date)-e(t))/1e3}function n(e){return o(e,"data-timeago")||o(e,"datetime")}function o(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0}function i(e,t){this.nowDate=e,this.defaultLocale=t||"en"}function l(e,t){return new i(e,t)}var c="second_minute_hour_day_week_month_year".split("_"),u="秒_分钟_小时_天_周_月_年".split("_"),d={en:function(e,t){if(0===t)return["just now","right now"];var a=c[parseInt(t/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]},zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var a=u[parseInt(t/2)];return[e+a+"前",e+a+"后"]}},s=[60,60,24,7,365/7/12,12],b=6,m="data-tid",p={};return i.prototype.doRender=function(e,t,n){var o,i=r(t,this.nowDate),l=this;e.innerHTML=a(i,n,this.defaultLocale),p[o=setTimeout(function(){l.doRender(e,t,n),delete p[o]},Math.min(1e3*function(e){for(var t=1,a=0,r=Math.abs(e);e>=s[a]&&a<b;a++)e/=s[a],t*=s[a];return r=(r%=t)?t-r:t,Math.ceil(r)}(i),2147483647))]=0,function(e,t){e.setAttribute?e.setAttribute(m,t):e.attr&&e.attr(m,t)}(e,o)},i.prototype.format=function(e,t){return a(r(e,this.nowDate),t,this.defaultLocale)},i.prototype.render=function(e,t){void 0===e.length&&(e=[e]);for(var a=0,r=e.length;a<r;a++)this.doRender(e[a],n(e[a]),t)},i.prototype.setLocale=function(e){this.defaultLocale=e},l.register=function(e,t){d[e]=t},l.cancel=function(e){var t;if(e)(t=o(e,m))&&(clearTimeout(t),delete p[t]);else{for(t in p)clearTimeout(t);p={}}},l},e.exports?(e.exports=n(),e.exports.default=e.exports):r.timeago=n()},,,function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(64);n.keys().forEach(function(e){var t=n(e),a=t.name,o=t.settings;Object(r.registerBlockType)(a,o)})},function(e,t,a){var r={"./amp-brid-player/index.js":65,"./amp-ima-video/index.js":66,"./amp-jwplayer/index.js":67,"./amp-latest-stories/index.js":89,"./amp-mathml/index.js":68,"./amp-o2-player/index.js":69,"./amp-ooyala-player/index.js":70,"./amp-reach-player/index.js":71,"./amp-springboard-player/index.js":72,"./amp-timeago/index.js":73};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=64},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-brid-player",u={title:Object(n.__)("AMP Brid Player","amp"),description:Object(n.__)("Displays the Brid Player used in Brid.tv Video Platform.","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp")],attributes:{autoPlay:{type:"boolean"},dataPartner:{source:"attribute",selector:"amp-brid-player",attribute:"data-partner"},dataPlayer:{source:"attribute",selector:"amp-brid-player",attribute:"data-player"},dataVideo:{source:"attribute",selector:"amp-brid-player",attribute:"data-video"},dataPlaylist:{source:"attribute",selector:"amp-brid-player",attribute:"data-playlist"},dataOutstream:{source:"attribute",selector:"amp-brid-player",attribute:"data-outstream"},ampLayout:{default:"responsive",source:"attribute",selector:"amp-brid-player",attribute:"layout"},width:{type:"number",default:600},height:{default:400,source:"attribute",selector:"amp-brid-player",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.autoPlay,u=t.dataPartner,d=t.dataPlayer,s=t.dataVideo,b=t.dataPlaylist,m=t.dataOutstream,p=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed-height",label:Object(n.__)("Fixed height","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")},{value:"fill",label:Object(n.__)("Fill","amp")},{value:"flex-item",label:Object(n.__)("Flex-item","amp")},{value:"nodisplay",label:Object(n.__)("No Display","amp")}],y=!1;return u&&d&&(s||b||m)&&(y="http://cdn.brid.tv/live/partners/".concat(u)),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Brid Player Settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("Brid.tv partner ID (required)","amp"),value:u,onChange:function(e){return a({dataPartner:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Brid.tv player ID (required)","amp"),value:d,onChange:function(e){return a({dataPlayer:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Video ID (one of video / playlist / outstream ID is required)","amp"),value:s,onChange:function(e){return a({dataVideo:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Outstream unit ID (one of video / playlist / outstream ID is required)","amp"),value:m,onChange:function(e){return a({dataOutstream:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Playlist ID (one of video / playlist / outstream ID is required)","amp"),value:b,onChange:function(e){return a({dataPlaylist:e})}}),Object(r.createElement)(i.ToggleControl,{label:Object(n.__)("Autoplay","amp"),checked:c,onChange:function(){return a({autoPlay:!c})}}),Object(l.a)(e,p))),y&&Object(l.b)(Object(n.__)("Brid Player","amp"),y),!y&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("Brid Player","amp")},Object(r.createElement)("p",null,Object(n.__)("Add required data to use the block.","amp"))))},save:function(e){var t=e.attributes,a={layout:t.ampLayout,height:t.height,"data-player":t.dataPlayer,"data-partner":t.dataPartner};return"fixed-height"!==t.ampLayout&&t.width&&(a.width=t.width),t.dataPlaylist&&(a["data-playlist"]=t.dataPlaylist),t.dataVideo&&(a["data-video"]=t.dataVideo),t.dataOutstream&&(a["data-outstream"]=t.dataOutstream),t.autoPlay&&(a.autoplay=t.autoPlay),Object(r.createElement)("amp-brid-player",a)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-ima-video",u={title:Object(n.__)("AMP IMA Video","amp"),description:Object(n.__)("Embeds a video player for instream video ads that are integrated with the IMA SDK","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp")],attributes:{dataDelayAdRequest:{default:!1,source:"attribute",selector:"amp-ima-video",attribute:"data-delay-ad-request"},dataTag:{source:"attribute",selector:"amp-ima-video",attribute:"data-tag"},dataSrc:{source:"attribute",selector:"amp-ima-video",attribute:"data-src"},dataPoster:{source:"attribute",selector:"amp-ima-video",attribute:"data-poster"},ampLayout:{default:"responsive",source:"attribute",selector:"amp-ima-video",attribute:"layout"},width:{default:600,source:"attribute",selector:"amp-ima-video",attribute:"width"},height:{default:400,source:"attribute",selector:"amp-ima-video",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.dataDelayAdRequest,u=t.dataTag,d=t.dataSrc,s=t.dataPoster,b=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")}],m=!1;return u&&d&&(m=!0),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("IMA Video Settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("Https URL for your VAST ad document (required)","amp"),value:u,onChange:function(e){return a({dataTag:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Https URL of your video content (required)","amp"),value:d,onChange:function(e){return a({dataSrc:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Https URL to preview image","amp"),value:s,onChange:function(e){return a({dataPoster:e})}}),Object(r.createElement)(i.ToggleControl,{label:Object(n.__)("Delay Ad Request","amp"),checked:c,onChange:function(){return a({dataDelayAdRequest:!c})}}),Object(l.a)(e,b))),m&&Object(l.b)(Object(n.__)("IMA Video","amp"),d),!m&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("IMA Video","amp")},Object(r.createElement)("p",null,Object(n.__)("Add required data to use the block.","amp"))))},save:function(e){var t=e.attributes,a={layout:t.ampLayout,height:t.height,width:t.width,"data-tag":t.dataTag,"data-src":t.dataSrc};return t.dataPoster&&(a["data-poster"]=t.dataPoster),t.dataDelayAdRequest&&(a["data-delay-ad-request"]=t.dataDelayAdRequest),Object(r.createElement)("amp-ima-video",a)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-jwplayer",u={title:Object(n.__)("AMP JW Player","amp"),description:Object(n.__)("Displays a cloud-hosted JW Player.","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp")],attributes:{dataPlayerId:{source:"attribute",selector:"amp-jwplayer",attribute:"data-player-id"},dataMediaId:{source:"attribute",selector:"amp-jwplayer",attribute:"data-media-id"},dataPlaylistId:{source:"attribute",selector:"amp-jwplayer",attribute:"data-playlist-id"},ampLayout:{default:"responsive",source:"attribute",selector:"amp-jwplayer",attribute:"layout"},width:{default:600,source:"attribute",selector:"amp-jwplayer",attribute:"width"},height:{default:400,source:"attribute",selector:"amp-jwplayer",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.dataPlayerId,u=t.dataMediaId,d=t.dataPlaylistId,s=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed-height",label:Object(n.__)("Fixed height","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")},{value:"fill",label:Object(n.__)("Fill","amp")},{value:"flex-item",label:Object(n.__)("Flex-item","amp")},{value:"nodisplay",label:Object(n.__)("No Display","amp")}],b=!1;return c&&(u||d)&&(b=d?"https://content.jwplatform.com/players/".concat(d,"-").concat(c):"https://content.jwplatform.com/players/".concat(u,"-").concat(c)),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("JW Player Settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("Player ID (required)","amp"),value:c,onChange:function(e){return a({dataPlayerId:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Media ID (required if playlist ID not set)","amp"),value:u,onChange:function(e){return a({dataMediaId:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Playlist ID (required if media ID not set)","amp"),value:d,onChange:function(e){return a({dataPlaylistId:e})}}),Object(l.a)(e,s))),b&&Object(l.b)(Object(n.__)("JW Player","amp"),b),!b&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("JW Player","amp")},Object(r.createElement)("p",null,Object(n.__)("Add required data to use the block.","amp"))))},save:function(e){var t=e.attributes,a={layout:t.ampLayout,height:t.height,"data-player-id":t.dataPlayerId};return"fixed-height"!==t.ampLayout&&t.width&&(a.width=t.width),t.dataPlaylistId&&(a["data-playlist-id"]=t.dataPlaylistId),t.dataMediaId&&(a["data-media-id"]=t.dataMediaId),Object(r.createElement)("amp-jwplayer",a)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return i}),a.d(t,"settings",function(){return l});var r=a(0),n=a(1),o=a(6),i="amp/amp-mathml",l={title:Object(n.__)("AMP MathML","amp"),category:"common",icon:"welcome-learn-more",keywords:[Object(n.__)("Mathematical formula","amp"),Object(n.__)("Scientific content ","amp")],attributes:{dataFormula:{source:"attribute",selector:"amp-mathml",attribute:"data-formula"}},edit:function(e){var t=e.attributes,a=e.setAttributes,i=t.dataFormula;return Object(r.createElement)(o.PlainText,{key:"formula",value:i,placeholder:Object(n.__)("Insert formula","amp"),onChange:function(e){return a({dataFormula:e})}})},save:function(e){var t={"data-formula":e.attributes.dataFormula,layout:"container"};return Object(r.createElement)("amp-mathml",t)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-o2-player",u={title:Object(n.__)("AMP O2 Player","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp"),Object(n.__)("AOL O2Player","amp")],attributes:{dataPid:{source:"attribute",selector:"amp-o2-player",attribute:"data-pid"},dataVid:{source:"attribute",selector:"amp-o2-player",attribute:"data-vid"},dataBcid:{source:"attribute",selector:"amp-o2-player",attribute:"data-bcid"},dataBid:{source:"attribute",selector:"amp-o2-player",attribute:"data-bid"},autoPlay:{default:!1},ampLayout:{default:"responsive",source:"attribute",selector:"amp-o2-player",attribute:"layout"},width:{default:600,source:"attribute",selector:"amp-o2-player",attribute:"width"},height:{default:400,source:"attribute",selector:"amp-o2-player",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.autoPlay,u=t.dataPid,d=t.dataVid,s=t.dataBcid,b=t.dataBid,m=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed-height",label:Object(n.__)("Fixed height","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")},{value:"fill",label:Object(n.__)("Fill","amp")},{value:"flex-item",label:Object(n.__)("Flex-item","amp")},{value:"nodisplay",label:Object(n.__)("No Display","amp")}],p=!1;return u&&(s||d)&&(p="https://delivery.vidible.tv/htmlembed/pid=".concat(u,"/")),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("O2 Player Settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("Player ID (required)","amp"),value:u,onChange:function(e){return a({dataPid:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Buyer Company ID (either buyer or video ID is required)","amp"),value:s,onChange:function(e){return a({dataBcid:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Video ID (either buyer or video ID is required)","amp"),value:d,onChange:function(e){return a({dataVid:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Playlist ID","amp"),value:b,onChange:function(e){return a({dataBid:e})}}),Object(r.createElement)(i.ToggleControl,{label:Object(n.__)("Autoplay","amp"),checked:c,onChange:function(){return a({autoPlay:!c})}}),Object(l.a)(e,m))),p&&Object(l.b)(Object(n.__)("O2 Player","amp"),p),!p&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("O2 Player","amp")},Object(r.createElement)("p",null,Object(n.__)("Add required data to use the block.","amp"))))},save:function(e){var t=e.attributes,a={layout:t.ampLayout,height:t.height,"data-pid":t.dataPid};return"fixed-height"!==t.ampLayout&&t.width&&(a.width=t.width),t.autoPlay||(a["data-macros"]="m.playback=click"),t.dataVid?a["data-vid"]=t.dataVid:t.dataBcid&&(a["data-bcid"]=t.dataBcid),t.dataBid&&(a["data-bid"]=t.dataBid),Object(r.createElement)("amp-o2-player",a)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-ooyala-player",u={title:Object(n.__)("AMP Ooyala Player","amp"),description:Object(n.__)("Displays an Ooyala video.","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp"),Object(n.__)("Ooyala video","amp")],attributes:{dataEmbedCode:{source:"attribute",selector:"amp-ooyala-player",attribute:"data-embedcode"},dataPlayerId:{source:"attribute",selector:"amp-ooyala-player",attribute:"data-playerid"},dataPcode:{source:"attribute",selector:"amp-ooyala-player",attribute:"data-pcode"},dataPlayerVersion:{default:"v3",source:"attribute",selector:"amp-ooyala-player",attribute:"data-playerversion"},ampLayout:{default:"responsive",source:"attribute",selector:"amp-ooyala-player",attribute:"layout"},width:{default:600,source:"attribute",selector:"amp-ooyala-player",attribute:"width"},height:{default:400,source:"attribute",selector:"amp-ooyala-player",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.dataEmbedCode,u=t.dataPlayerId,d=t.dataPcode,s=t.dataPlayerVersion,b=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")},{value:"fill",label:Object(n.__)("Fill","amp")},{value:"flex-item",label:Object(n.__)("Flex-item","amp")}],m=!1;return c&&u&&d&&(m="http://cf.c.ooyala.com/".concat(c)),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Ooyala settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("Video embed code (required)","amp"),value:c,onChange:function(e){return a({dataEmbedCode:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Player ID (required)","amp"),value:u,onChange:function(e){return a({dataPlayerId:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Provider code for the account (required)","amp"),value:d,onChange:function(e){return a({dataPcode:e})}}),Object(r.createElement)(i.SelectControl,{label:Object(n.__)("Player version","amp"),value:s,options:[{value:"v3",label:Object(n.__)("V3","amp")},{value:"v4",label:Object(n.__)("V4","amp")}],onChange:function(e){return a({dataPlayerVersion:e})}}),Object(l.a)(e,b))),m&&Object(l.b)(Object(n.__)("Ooyala Player","amp"),m),!m&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("Ooyala Player","amp")},Object(r.createElement)("p",null,Object(n.__)("Add required data to use the block.","amp"))))},save:function(e){var t=e.attributes,a=t.dataEmbedCode,n=t.dataPlayerId,o=t.dataPcode,i=t.dataPlayerVersion,l=t.ampLayout,c=t.height,u=t.width,d={layout:l,height:c,"data-embedcode":a,"data-playerid":n,"data-pcode":o,"data-playerversion":i};return"fixed-height"!==l&&u&&(d.width=u),Object(r.createElement)("amp-ooyala-player",d)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-reach-player",u={title:Object(n.__)("AMP Reach Player","amp"),description:Object(n.__)("Displays the Reach Player configured in the Beachfront Reach platform.","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp"),Object(n.__)("Beachfront Reach video","amp")],attributes:{dataEmbedId:{source:"attribute",selector:"amp-reach-player",attribute:"data-embed-id"},ampLayout:{default:"fixed-height",source:"attribute",selector:"amp-reach-player",attribute:"layout"},width:{default:600,source:"attribute",selector:"amp-reach-player",attribute:"width"},height:{default:400,source:"attribute",selector:"amp-reach-player",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.dataEmbedId,u=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed-height",label:Object(n.__)("Fixed Height","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")},{value:"fill",label:Object(n.__)("Fill","amp")},{value:"flex-item",label:Object(n.__)("Flex-item","amp")}],d=!1;return c&&(d="https://media-cdn.beachfrontreach.com/acct_1/video/"),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Reach settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("The Reach player embed id (required)","amp"),value:c,onChange:function(e){return a({dataEmbedId:e})}}),Object(l.a)(e,u))),d&&Object(l.b)(Object(n.__)("Reach Player","amp"),d),!d&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("Reach Player","amp")},Object(r.createElement)("p",null,Object(n.__)("Add Reach player embed ID to use the block.","amp"))))},save:function(e){var t=e.attributes,a=t.dataEmbedId,n=t.ampLayout,o=t.height,i=t.width,l={layout:n,height:o,"data-embed-id":a};return"fixed-height"!==n&&i&&(l.width=i),Object(r.createElement)("amp-reach-player",l)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return c}),a.d(t,"settings",function(){return u});var r=a(0),n=a(1),o=a(6),i=a(2),l=a(23),c="amp/amp-springboard-player",u={title:Object(n.__)("AMP Springboard Player","amp"),description:Object(n.__)("Displays the Springboard Player used in the Springboard Video Platform","amp"),category:"embed",icon:"embed-generic",keywords:[Object(n.__)("Embed","amp")],attributes:{dataSiteId:{source:"attribute",selector:"amp-springboard-player",attribute:"data-site-id"},dataContentId:{source:"attribute",selector:"amp-springboard-player",attribute:"data-content-id"},dataPlayerId:{source:"attribute",selector:"amp-springboard-player",attribute:"data-player-id"},dataDomain:{source:"attribute",selector:"amp-springboard-player",attribute:"data-domain"},dataMode:{default:"video",source:"attribute",selector:"amp-springboard-player",attribute:"data-mode"},dataItems:{default:1,source:"attribute",selector:"amp-springboard-player",attribute:"data-items"},ampLayout:{default:"responsive",source:"attribute",selector:"amp-springboard-player",attribute:"layout"},width:{default:600,source:"attribute",selector:"amp-springboard-player",attribute:"width"},height:{default:400,source:"attribute",selector:"amp-springboard-player",attribute:"height"}},edit:function(e){var t=e.attributes,a=e.setAttributes,c=t.dataSiteId,u=t.dataPlayerId,d=t.dataContentId,s=t.dataDomain,b=t.dataMode,m=t.dataItems,p=[{value:"responsive",label:Object(n.__)("Responsive","amp")},{value:"fixed",label:Object(n.__)("Fixed","amp")},{value:"fill",label:Object(n.__)("Fill","amp")},{value:"flex-item",label:Object(n.__)("Flex-item","amp")}],y=!1;return c&&d&&s&&b&&m&&(y="https://cms.springboardplatform.com/embed_iframe/"),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,{key:"inspector"},Object(r.createElement)(i.PanelBody,{title:Object(n.__)("Springboard Player Settings","amp")},Object(r.createElement)(i.TextControl,{label:Object(n.__)("SprintBoard site ID (required)","amp"),value:c,onChange:function(e){return a({dataSiteId:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Player content ID (required)","amp"),value:d,onChange:function(e){return a({dataContentId:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Player ID","amp"),value:u,onChange:function(e){return a({dataPlayerId:e})}}),Object(r.createElement)(i.TextControl,{label:Object(n.__)("Springboard partner domain","amp"),value:s,onChange:function(e){return a({dataDomain:e})}}),Object(r.createElement)(i.SelectControl,{label:Object(n.__)("Mode (required)","amp"),value:b,options:[{value:"video",label:Object(n.__)("Video","amp")},{value:"playlist",label:Object(n.__)("Playlist","amp")}],onChange:function(e){return a({dataMode:e})}}),Object(r.createElement)(i.TextControl,{type:"number",label:Object(n.__)("Number of video is playlist (required)","amp"),value:m,onChange:function(e){return a({dataItems:e})}}),Object(l.a)(e,p))),y&&Object(l.b)(Object(n.__)("Springboard Player","amp"),y),!y&&Object(r.createElement)(i.Placeholder,{label:Object(n.__)("Springboard Player","amp")},Object(r.createElement)("p",null,Object(n.__)("Add required data to use the block.","amp"))))},save:function(e){var t=e.attributes,a=t.dataSiteId,n=t.dataPlayerId,o=t.dataContentId,i=t.dataDomain,l=t.dataMode,c=t.dataItems,u=t.ampLayout,d=t.height,s=t.width,b={layout:u,height:d,"data-site-id":a,"data-mode":l,"data-content-id":o,"data-player-id":n,"data-domain":i,"data-items":c};return"fixed-height"!==u&&s&&(b.width=t.width),Object(r.createElement)("amp-springboard-player",b)}}},function(e,t,a){"use strict";a.r(t),a.d(t,"name",function(){return b}),a.d(t,"settings",function(){return m});var r=a(0),n=a(60),o=a.n(n),i=a(31),l=a.n(i),c=a(1),u=a(6),d=a(2),s=a(23),b="amp/amp-timeago",m={title:Object(c.__)("AMP Timeago"),category:"common",icon:"backup",keywords:[Object(c.__)("Time difference"),Object(c.__)("Time ago"),Object(c.__)("Date")],attributes:{align:{type:"string"},cutoff:{source:"attribute",selector:"amp-timeago",attribute:"cutoff"},dateTime:{source:"attribute",selector:"amp-timeago",attribute:"datetime"},ampLayout:{default:"fixed-height",source:"attribute",selector:"amp-timeago",attribute:"layout"},width:{source:"attribute",selector:"amp-timeago",attribute:"width"},height:{default:20,source:"attribute",selector:"amp-timeago",attribute:"height"}},getEditWrapperProps:function(e){var t=e.align;if("left"===t||"right"===t||"center"===t)return{"data-align":t}},edit:function(e){var t,a=e.attributes,n=e.setAttributes,i=a.align,b=a.cutoff;a.dateTime?t=a.cutoff&&parseInt(a.cutoff)<Math.abs(l()(a.dateTime).diff(l()(),"seconds"))?l()(a.dateTime).format("dddd D MMMM HH:mm"):o()().format(a.dateTime):(t=o()().format(new Date),n({dateTime:l()(l()(),l.a.ISO_8601,!0).format()}));var m=[{value:"",label:Object(c.__)("Responsive","amp")},{value:"fixed",label:Object(c.__)("Fixed","amp")},{value:"fixed-height",label:Object(c.__)("Fixed height","amp")}];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(u.InspectorControls,{key:"inspector"},Object(r.createElement)(d.PanelBody,{title:Object(c.__)("AMP Timeago Settings")},Object(r.createElement)(d.DateTimePicker,{locale:"en",currentDate:a.dateTime||l()(),onChange:function(e){return n({dateTime:l()(e,l.a.ISO_8601,!0).format()})}}),Object(s.a)(e,m),Object(r.createElement)(d.TextControl,{type:"number",className:"blocks-amp-timeout__cutoff",label:Object(c.__)("Cutoff (seconds)"),value:void 0!==b?b:"",onChange:function(e){return n({cutoff:e})}}))),Object(r.createElement)(u.BlockControls,{key:"controls"},Object(r.createElement)(u.BlockAlignmentToolbar,{value:i,onChange:function(e){n({align:e})},controls:["left","center","right"]})),Object(r.createElement)("time",{key:"timeago",dateTime:a.dateTime},t))},save:function(e){var t=e.attributes,a={layout:"responsive",className:"align"+(t.align||"none"),datetime:t.dateTime,locale:"en"};if(t.cutoff&&(a.cutoff=t.cutoff),t.ampLayout)switch(t.ampLayout){case"fixed-height":t.height&&(a.height=t.height,a.layout=t.ampLayout);break;case"fixed":t.height&&t.width&&(a.height=t.height,a.width=t.width,a.layout=t.ampLayout)}return Object(r.createElement)("amp-timeago",a,l()(t.dateTime).format("dddd D MMMM HH:mm"))}}},,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(18),o=a.n(n),i=a(11),l=a.n(i),c=a(12),u=a.n(c),d=a(14),s=a.n(d),b=a(15),m=a.n(b),p=a(16),y=a.n(p),f=a(0),h=a(10),_=a(2),O=a(6),j=a(3),g=function(e){function t(){return l()(this,t),s()(this,m()(t).apply(this,arguments))}return y()(t,e),u()(t,[{key:"componentWillMount",value:function(){this.isStillMounted=!0}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.attributes,a=e.setAttributes,n=e.latestStories,i=t.order,l=t.orderBy,c=t.storiesToShow,u=Object(f.createElement)(O.InspectorControls,null,Object(f.createElement)(_.PanelBody,{title:Object(r.__)("Latest Stories Settings","amp")},Object(f.createElement)(_.QueryControls,o()({order:i,orderBy:l},{numberOfItems:c,onOrderChange:function(e){return a({order:e})},onOrderByChange:function(e){return a({orderBy:e})},onNumberOfItemsChange:function(e){return a({storiesToShow:e})}}))));if(!(Array.isArray(n)&&n.length))return Object(f.createElement)(f.Fragment,null,u,Object(f.createElement)(_.Placeholder,{icon:"admin-post",label:Object(r.__)("Latest Stories","amp")},Array.isArray(n)?Object(r.__)("No stories found.","amp"):Object(f.createElement)(_.Spinner,null)));var d=Object.assign({},t,{useCarousel:!1});return Object(f.createElement)(f.Fragment,null,u,Object(f.createElement)(_.ServerSideRender,{block:"amp/amp-latest-stories",attributes:d}))}}]),t}(f.Component),v=Object(j.withSelect)(function(e,t){var a=t.attributes,r=a.storiesToShow,n=a.order,o=a.orderBy;return{latestStories:(0,e("core").getEntityRecords)("postType","amp_story",Object(h.pickBy)({order:n,orderby:o,per_page:r},function(e){return!Object(h.isUndefined)(e)}))}})(g);a.d(t,"name",function(){return P}),a.d(t,"settings",function(){return x});var P="amp/amp-latest-stories",x={title:Object(r.__)("Latest Stories","amp"),description:Object(r.__)("See the latest AMP stories","amp"),icon:"list-view",category:"widgets",keywords:[Object(r.__)("Recent stories","amp"),Object(r.__)("AMP stories","amp")],supports:{html:!1},edit:v,save:function(){return null}}}]);