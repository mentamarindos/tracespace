(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{117:function(t,e,r){"use strict";var n=r(139);r.d(e,"BOARD_DELETED",(function(){return n.c})),r.d(e,"BOARD_PACKAGED",(function(){return n.d})),r.d(e,"BOARD_RENDERED",(function(){return n.e})),r.d(e,"BOARD_UPDATED",(function(){return n.f})),r.d(e,"CREATE_BOARD",(function(){return n.g})),r.d(e,"CREATE_BOARD_FROM_URL",(function(){return n.h})),r.d(e,"DELETE_ALL_BOARDS",(function(){return n.i})),r.d(e,"DELETE_BOARD",(function(){return n.j})),r.d(e,"FETCH_APP_PREFERENCES",(function(){return n.l})),r.d(e,"GET_BOARD",(function(){return n.m})),r.d(e,"GET_BOARD_PACKAGE",(function(){return n.n})),r.d(e,"UPDATE_APP_PREFERENCES",(function(){return n.q})),r.d(e,"UPDATE_BOARD",(function(){return n.r})),r.d(e,"WORKER_ERRORED",(function(){return n.s})),r.d(e,"WORKER_INITIALIZED",(function(){return n.t})),r.d(e,"appPreferences",(function(){return n.u})),r.d(e,"createBoard",(function(){return n.v})),r.d(e,"createBoardFromUrl",(function(){return n.w})),r.d(e,"deleteAllBoards",(function(){return n.x})),r.d(e,"deleteBoard",(function(){return n.y})),r.d(e,"dismissError",(function(){return n.z})),r.d(e,"fetchAppPreferences",(function(){return n.A})),r.d(e,"getBoard",(function(){return n.B})),r.d(e,"getBoardPackage",(function(){return n.C})),r.d(e,"setMode",(function(){return n.D})),r.d(e,"toggleVisibility",(function(){return n.E})),r.d(e,"updateAppPreferences",(function(){return n.F})),r.d(e,"updateBoard",(function(){return n.G}));var a=r(132);r.d(e,"useAppState",(function(){return a.c}));r(153)},118:function(t,e,r){"use strict";var n=r(158),a=r(159),c=r(201),_=r(202),o=r(160);t.exports=function(t){"string"==typeof t&&(t=[t]);var e=a(t,_),r=c(e);return t.reduce((function(t,n){var a=function(t,e,r){var n=t.filter((function(t){return t.filename===e}));return n.find((function(t){return t.cad===r}))||n[0]||null}(e,n,r);return t[n]=a?{type:a.type,side:a.side}:{type:null,side:null},t}),{})},t.exports.validate=function(t){return{valid:o.some((function(e){return e.side===t.side&&e.type===t.type})),side:o.some((function(e){return e.side===t.side}))?t.side:null,type:o.some((function(e){return e.type===t.type}))?t.type:null}},t.exports.getAllLayers=function(){return o.map((function(t){return{type:t.type,side:t.side}})).filter((function(t){return null!==t.type}))},Object.keys(n).forEach((function(e){t.exports[e]=n[e]}))},132:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return _})),r.d(e,"c",(function(){return o}));r(115);var n=r(29);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var c={appPreferences:{},board:null,savedBoards:[],mode:null,loading:!1,updating:!1,downloading:!1,layerVisibility:{},error:null},_=r.n(n).a.createContext({getState:function(){return c},dispatch:function(t){return t}}),o=function(){var t=Object(n.useContext)(_),e=t.getState,r=t.dispatch;return a({},e(),{dispatch:r})}},135:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return D})),r.d(e,"d",(function(){return s})),r.d(e,"c",(function(){return l}));r(128),r(205),r(129),r(72),r(130),r(115),r(125),r(136);var n=r(118);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,"b",(function(){return n.SIDE_ALL}));var c=[n.TYPE_COPPER,n.TYPE_SOLDERMASK,n.TYPE_SILKSCREEN,n.TYPE_SOLDERPASTE,n.TYPE_DRILL,n.TYPE_OUTLINE,n.TYPE_DRAWING],_=[n.SIDE_TOP,n.SIDE_BOTTOM,n.SIDE_INNER,n.SIDE_ALL],o=[n.TYPE_COPPER],u=[n.SIDE_TOP,n.SIDE_BOTTOM,n.SIDE_INNER],A=[n.TYPE_SOLDERMASK,n.TYPE_SILKSCREEN,n.TYPE_SOLDERPASTE],i=[n.SIDE_TOP,n.SIDE_BOTTOM],d=[n.TYPE_DRILL,n.TYPE_OUTLINE],E=[n.SIDE_ALL];function D(t){return o.includes(t)?u:A.includes(t)?i:d.includes(t)?E:[]}function s(t,e){if(!t.type&&e.type||!t.side&&e.side)return 1;if(t.type&&!e.type||t.side&&!e.side)return-1;var r;for(r=0;r<_.length;r++){var n=_[r];if(t.side===n&&e.side!==n)return-1;if(t.side!==n&&e.side===n)return 1}for(r=0;r<c.length;r++){var a=c[r];if(t.type===a&&e.type!==a)return-1;if(t.type!==a&&e.type===a)return 1}return 0}var C=["coordinateFormat","zeroSuppression","units"];function l(t,e){return t.filter((function(t){return 0!==t.converter.layer.length&&("gerber"===e&&t.type&&t.type!==n.TYPE_DRILL||"drill"===e&&t.type===n.TYPE_DRILL)})).reduce((function(t,e){return C.forEach((function(r){var n=e.initialOptions[r],c=t[r];void 0===c?c=n:null!==c&&(Array.isArray(c)?Array.isArray(n)&&c[0]===n[0]&&c[1]===n[1]||(c=null):c!==n&&(c=null)),c!==t[r]&&(t=a({},t,function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},r,c)))})),t}),{})}},137:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));r(121),r(127);var n,a=["debug","info","warn","error"],c={debug:o("debug"),info:o("info"),warn:o("warn"),error:o("error")};e.b=c;var _=function(){return function(t){return function(e){return function(r){var n=e(r);return c.debug("action",r),c.debug("next state",t.getState()),n}}}};function o(t){return n||(n=function(){if("undefined"!=typeof window&&window.localStorage)try{var t=window.localStorage.getItem("logLevel");if("debug"===t||"info"===t||"warn"===t||"error"===t)return t}catch(t){console.error("Could not read logLevel from localStorage",t)}return"warn"}()),a.indexOf(t)>=a.indexOf(n)?function(e){for(var r,n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return(r=console)[t].apply(r,["".concat(t,": ").concat(e)].concat(a))}:function(){}}},139:function(t,e,r){"use strict";r.d(e,"l",(function(){return n})),r.d(e,"q",(function(){return a})),r.d(e,"b",(function(){return c})),r.d(e,"g",(function(){return _})),r.d(e,"h",(function(){return o})),r.d(e,"m",(function(){return u})),r.d(e,"n",(function(){return A})),r.d(e,"r",(function(){return i})),r.d(e,"j",(function(){return d})),r.d(e,"i",(function(){return E})),r.d(e,"o",(function(){return D})),r.d(e,"p",(function(){return s})),r.d(e,"e",(function(){return C})),r.d(e,"f",(function(){return l})),r.d(e,"c",(function(){return p})),r.d(e,"d",(function(){return f})),r.d(e,"a",(function(){return L})),r.d(e,"t",(function(){return m})),r.d(e,"s",(function(){return R})),r.d(e,"k",(function(){return P})),r.d(e,"A",(function(){return O})),r.d(e,"F",(function(){return G})),r.d(e,"u",(function(){return T})),r.d(e,"v",(function(){return y})),r.d(e,"w",(function(){return I})),r.d(e,"B",(function(){return h})),r.d(e,"G",(function(){return b})),r.d(e,"y",(function(){return g})),r.d(e,"x",(function(){return S})),r.d(e,"C",(function(){return x})),r.d(e,"D",(function(){return B})),r.d(e,"E",(function(){return v})),r.d(e,"z",(function(){return Y}));r(73),r(66),r(67),r(74);var n="FETCH_APP_PREFERENCES",a="UPDATE_APP_PREFERENCES",c="APP_PREFERENCES",_="CREATE_BOARD",o="CREATE_BOARD_FROM_URL",u="GET_BOARD",A="GET_BOARD_PACKAGE",i="UPDATE_BOARD",d="DELETE_BOARD",E="DELETE_ALL_BOARDS",D="SET_MODE",s="TOGGLE_VISIBILITY",C="BOARD_RENDERED",l="BOARD_UPDATED",p="BOARD_DELETED",f="BOARD_PACKAGED",L="ALL_BOARDS_DELETED",m="WORKER_INITIALIZED",R="WORKER_ERRORED",P="DISMISS_ERROR",O=function(){return{type:n}},G=function(t){return{type:a,payload:t}},T=function(t){return{type:c,payload:t}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:_,payload:t,metadata:{dragAndDrop:e}}},I=function(t){return{type:o,payload:t}},h=function(t){return{type:u,payload:t}},b=function(t,e){return{type:i,payload:{id:t,update:e}}},g=function(t){return{type:d,payload:t}},S=function(){return{type:E}},x=function(t){return{type:A,payload:t}},B=function(t){return{type:D,payload:t}},v=function(t,e){return{type:s,payload:{id:t,solo:e}}},Y=function(){return{type:P}}},153:function(t,e){},158:function(t,e,r){"use strict";t.exports={TYPE_COPPER:"copper",TYPE_SOLDERMASK:"soldermask",TYPE_SILKSCREEN:"silkscreen",TYPE_SOLDERPASTE:"solderpaste",TYPE_DRILL:"drill",TYPE_OUTLINE:"outline",TYPE_DRAWING:"drawing",SIDE_TOP:"top",SIDE_BOTTOM:"bottom",SIDE_INNER:"inner",SIDE_ALL:"all",_CAD_KICAD:"kicad",_CAD_ALTIUM:"altium",_CAD_ALLEGRO:"allegro",_CAD_EAGLE:"eagle",_CAD_EAGLE_LEGACY:"eagle-legacy",_CAD_EAGLE_OSHPARK:"eagle-oshpark",_CAD_EAGLE_PCBNG:"eagle-pcbng",_CAD_GEDA_PCB:"geda-pcb",_CAD_ORCAD:"orcad",_CAD_DIPTRACE:"diptrace"}},159:function(t,e,r){"use strict";t.exports=function(t,e){return t.reduce((function(t,r){return t.concat(e(r))}),[])}},160:function(t,e,r){"use strict";var n=r(158);t.exports=[{type:null,side:null,matchers:[{ext:"gpi",cad:[n._CAD_EAGLE,n._CAD_EAGLE_LEGACY,n._CAD_EAGLE_OSHPARK,n._CAD_EAGLE_PCBNG]},{ext:"dri",cad:[n._CAD_EAGLE,n._CAD_EAGLE_LEGACY,n._CAD_EAGLE_OSHPARK,n._CAD_EAGLE_PCBNG]},{ext:"csv",cad:null},{match:/pnp_bom/,cad:n._CAD_EAGLE_PCBNG}]},{type:n.TYPE_COPPER,side:n.SIDE_TOP,matchers:[{ext:"cmp",cad:n._CAD_EAGLE_LEGACY},{ext:"top",cad:[n._CAD_EAGLE_LEGACY,n._CAD_ORCAD]},{ext:"gtl",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"toplayer\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/top\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/f[._]cu/,cad:n._CAD_KICAD},{match:/copper_top/,cad:n._CAD_EAGLE},{match:/top_copper/,cad:n._CAD_EAGLE_PCBNG},{match:/top copper/,cad:null}]},{type:n.TYPE_SOLDERMASK,side:n.SIDE_TOP,matchers:[{ext:"stc",cad:n._CAD_EAGLE_LEGACY},{ext:"tsm",cad:n._CAD_EAGLE_LEGACY},{ext:"gts",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"smt",cad:n._CAD_ORCAD},{ext:"topsoldermask\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/topmask\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/f[._]mask/,cad:n._CAD_KICAD},{match:/soldermask_top/,cad:n._CAD_EAGLE},{match:/top_mask/,cad:n._CAD_EAGLE_PCBNG},{match:/top solder resist/,cad:null}]},{type:n.TYPE_SILKSCREEN,side:n.SIDE_TOP,matchers:[{ext:"plc",cad:n._CAD_EAGLE_LEGACY},{ext:"tsk",cad:n._CAD_EAGLE_LEGACY},{ext:"gto",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"sst",cad:n._CAD_ORCAD},{ext:"topsilkscreen\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/topsilk\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/f[._]silks/,cad:n._CAD_KICAD},{match:/silkscreen_top/,cad:n._CAD_EAGLE},{match:/top_silk/,cad:n._CAD_EAGLE_PCBNG},{match:/top silk screen/,cad:null}]},{type:n.TYPE_SOLDERPASTE,side:n.SIDE_TOP,matchers:[{ext:"crc",cad:n._CAD_EAGLE_LEGACY},{ext:"tsp",cad:n._CAD_EAGLE_LEGACY},{ext:"gtp",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"spt",cad:n._CAD_ORCAD},{ext:"tcream\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/toppaste\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/f[._]paste/,cad:n._CAD_KICAD},{match:/solderpaste_top/,cad:n._CAD_EAGLE},{match:/top_paste/,cad:n._CAD_EAGLE_PCBNG}]},{type:n.TYPE_COPPER,side:n.SIDE_BOTTOM,matchers:[{ext:"sol",cad:n._CAD_EAGLE_LEGACY},{ext:"bot",cad:[n._CAD_EAGLE_LEGACY,n._CAD_ORCAD]},{ext:"gbl",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"bottomlayer\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/bottom\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/b[._]cu/,cad:n._CAD_KICAD},{match:/copper_bottom/,cad:n._CAD_EAGLE},{match:/bottom_copper/,cad:n._CAD_EAGLE_PCBNG},{match:/bottom copper/,cad:null}]},{type:n.TYPE_SOLDERMASK,side:n.SIDE_BOTTOM,matchers:[{ext:"sts",cad:n._CAD_EAGLE_LEGACY},{ext:"bsm",cad:n._CAD_EAGLE_LEGACY},{ext:"gbs",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"smb",cad:n._CAD_ORCAD},{ext:"bottomsoldermask\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/bottommask\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/b[._]mask/,cad:n._CAD_KICAD},{match:/soldermask_bottom/,cad:n._CAD_EAGLE},{match:/bottom_mask/,cad:n._CAD_EAGLE_PCBNG},{match:/bottom solder resist/,cad:null}]},{type:n.TYPE_SILKSCREEN,side:n.SIDE_BOTTOM,matchers:[{ext:"pls",cad:n._CAD_EAGLE_LEGACY},{ext:"bsk",cad:n._CAD_EAGLE_LEGACY},{ext:"gbo",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"ssb",cad:n._CAD_ORCAD},{ext:"bottomsilkscreen\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/bottomsilk\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/b[._]silks/,cad:n._CAD_KICAD},{match:/silkscreen_bottom/,cad:n._CAD_EAGLE},{match:/bottom_silk/,cad:n._CAD_EAGLE_PCBNG},{match:/bottom silk screen/,cad:null}]},{type:n.TYPE_SOLDERPASTE,side:n.SIDE_BOTTOM,matchers:[{ext:"crs",cad:n._CAD_EAGLE_LEGACY},{ext:"bsp",cad:n._CAD_EAGLE_LEGACY},{ext:"gbp",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"spb",cad:n._CAD_ORCAD},{ext:"bcream\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/bottompaste\.\w+$/,cad:[n._CAD_GEDA_PCB,n._CAD_DIPTRACE]},{match:/b[._]paste/,cad:n._CAD_KICAD},{match:/solderpaste_bottom/,cad:n._CAD_EAGLE},{match:/bottom_paste/,cad:n._CAD_EAGLE_PCBNG}]},{type:n.TYPE_COPPER,side:n.SIDE_INNER,matchers:[{ext:"ly\\d+",cad:n._CAD_EAGLE_LEGACY},{ext:"gp?\\d+",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"in\\d+",cad:n._CAD_ORCAD},{ext:"internalplane\\d+\\.ger",cad:n._CAD_EAGLE_OSHPARK},{match:/in(?:ner)?\d+[._]cu/,cad:n._CAD_KICAD},{match:/inner/,cad:n._CAD_DIPTRACE}]},{type:n.TYPE_OUTLINE,side:n.SIDE_ALL,matchers:[{ext:"dim",cad:n._CAD_EAGLE_LEGACY},{ext:"mil",cad:n._CAD_EAGLE_LEGACY},{ext:"gml",cad:n._CAD_EAGLE_LEGACY},{ext:"gm\\d+",cad:[n._CAD_KICAD,n._CAD_ALTIUM]},{ext:"gko",cad:n._CAD_ALTIUM},{ext:"fab",cad:n._CAD_ORCAD},{ext:"drd",cad:n._CAD_ORCAD},{match:/outline/,cad:[n._CAD_GEDA_PCB,n._CAD_EAGLE_PCBNG]},{match:/boardoutline/,cad:[n._CAD_EAGLE_OSHPARK,n._CAD_DIPTRACE]},{match:/edge[._]cuts/,cad:n._CAD_KICAD},{match:/profile/,cad:n._CAD_EAGLE},{match:/mechanical \d+/,cad:null}]},{type:n.TYPE_DRILL,side:n.SIDE_ALL,matchers:[{ext:"txt",cad:[n._CAD_EAGLE_LEGACY,n._CAD_ALTIUM]},{ext:"xln",cad:[n._CAD_EAGLE,n._CAD_EAGLE_LEGACY,n._CAD_EAGLE_OSHPARK]},{ext:"exc",cad:n._CAD_EAGLE_LEGACY},{ext:"drd",cad:n._CAD_EAGLE_LEGACY},{ext:"drl",cad:[n._CAD_KICAD,n._CAD_DIPTRACE]},{ext:"tap",cad:n._CAD_ORCAD},{ext:"npt",cad:n._CAD_ORCAD},{ext:"plated-drill\\.cnc",cad:n._CAD_GEDA_PCB},{match:/fab/,cad:n._CAD_GEDA_PCB},{match:/npth/,cad:n._CAD_KICAD},{match:"/drill/",cad:n._CAD_EAGLE_PCBNG}]},{type:n.TYPE_DRAWING,side:null,matchers:[{ext:"pos",cad:n._CAD_KICAD},{ext:"art",cad:n._CAD_ALLEGRO},{ext:"gbr",cad:null},{ext:"gbx",cad:null},{ext:"ger",cad:null},{ext:"pho",cad:null}]}]},183:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return f}));r(71),r(75),r(76),r(77),r(72),r(39),r(69),r(73),r(66),r(67),r(74),r(70),r(68);var n=r(210),a=r.n(n),c=r(137),_=(r(143),r(156),r(130),r(211),r(115),r(212)),o=r.n(_),u=r(117),A=(r(129),r(226),["application/zip","application/x-zip","application/x-zip-compressed"]);function i(t){return"name"in t&&t.name.endsWith(".zip")||A.includes(t.type)}var d=r(135);function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function D(t){var e=t.options,r=t.gerberOptions,n=t.drillOptions,a=Object(d.c)(t.layers,"gerber"),c=Object(d.c)(t.layers,"drill"),_=r.units||a.units,u=r.zeroSuppression||a.zeroSuppression,A=r.coordinateFormat||a.coordinateFormat,i=n.units||c.units,E=n.zeroSuppression||c.zeroSuppression,D=n.coordinateFormat||c.coordinateFormat;return{useOutline:e.useOutline,outlineGapFill:e.outlineGapFill,colorSoldermask:e.color.sm,colorSilkscreen:e.color.ss,colorCopperFinish:e.color.cf,gerberUnits:_,gerberZeroSuppression:u,gerberCoordinateFormat:A&&A.join(","),drillUnits:i,drillZeroSuppression:E,drillCoordinateFormat:D&&D.join(","),sourceUrlHash:t.sourceUrl?(new o.a).update(t.sourceUrl).digest("hex"):null,sourceFilesHash:t.sourceIds.reduce((function(t,e){return t.update(e)}),new o.a).digest("hex")}}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var _,o=t[Symbol.iterator]();!(n=(_=o.next()).done)&&(r.push(_.value),!e||r.length!==e);n=!0);}catch(t){a=!0,c=t}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=null;function p(){return l}function f(){return c.b.debug("no mixpanel token found; not initializing"),function(t){return function(e){return function(r){var n=t.getState(),_=e(r),o=t.getState();if(l){var A=o.appPreferences.analyticsOptIn,d=function(t,e,r){switch(t.type){case u.CREATE_BOARD:var n=t.metadata.dragAndDrop?"dragAndDrop":"filePicker",a="files";return t.payload.every(i)?a="zip":t.payload.some(i)&&(a="mixed"),["createBoardRequest",{source:n,uploadType:a}];case u.CREATE_BOARD_FROM_URL:return["createBoardRequest",{source:"url"}];case u.GET_BOARD:return["getBoardRequest",{}];case u.BOARD_RENDERED:return["boardRendered",E({},D(t.payload),{renderTime:t.metadata.time})];case u.BOARD_UPDATED:return["boardUpdated",e.board&&t.payload.id===e.board.id?D(e.board):{}];case u.BOARD_DELETED:return["boardDeleted",r.board&&t.payload===r.board.id?D(r.board):{}];case u.BOARD_PACKAGED:return["boardDownloaded",e.board&&t.payload.id===e.board.id?D(e.board):{}];case u.WORKER_INITIALIZED:return["appOpened",{savedBoards:t.payload.length}];case u.WORKER_ERRORED:return["error",{trigger:t.payload.request.type,message:t.payload.error.message}]}return null}(r,o,n);if(A&&a.a.has_opted_out_tracking()?a.a.opt_in_tracking():A||a.a.has_opted_out_tracking||a.a.opt_out_tracking(),A&&d){var C=s(d,2),p=C[0],f=C[1];c.b.debug("track",d),a.a.track(p,f)}else d&&c.b.debug("did not track",d)}return _}}}}},201:function(t,e,r){"use strict";t.exports=function(t){var e=t.reduce((function(t,e){return t[e.cad]=t[e.cad]+1||1,t}),{});return Object.keys(e).reduce((function(t,r){var n=e[r];return n>t.max?{max:n,name:r}:t}),{max:0,name:null}).name}},202:function(t,e,r){"use strict";var n=r(203),a=r(204);t.exports=function(t){return a.map((function(e){return e.match.test(t)?n(e,{filename:t}):null})).filter(Boolean)}},204:function(t,e,r){"use strict";var n=r(159),a=r(160);t.exports=n(a,(function(t){return n(t.matchers,(function(e){var r=e.ext?new RegExp("\\."+e.ext+"$","i"):new RegExp(e.match,"i");return[].concat(e.cad).map((function(e){return{type:t.type,side:t.side,match:r,cad:e}}))}))}))},217:function(t,e){},219:function(t,e){}}]);
//# sourceMappingURL=1.fd31cf13089a8a954964.js.map