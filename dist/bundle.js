!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";(function(t){!function(t,e){function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||u(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?i/n:this.isIntersecting?1:0}function o(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=r(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(){return t.performance&&performance.now&&performance.now()}function r(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function a(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),i=Math.max(t.left,e.left),r=Math.min(t.right,e.right),s=r-i,c=o-n;return s>=0&&c>=0&&{top:n,bottom:o,left:i,right:r,width:s,height:c}}function h(t){var e=t.getBoundingClientRect();if(e)return e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e}function u(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t,e){for(var n=e;n;){if(11==n.nodeType&&n.host&&(n=n.host),n==t)return!0;n=n.parentNode}return!1}if(!("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)){var d=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this._checkForIntersections(),this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():u();this._observationTargets.forEach(function(o){var r=o.element,s=h(r),c=this._rootContainsTarget(r),a=o.entry,u=t&&c&&this._computeTargetAndRootIntersection(r,e),l=o.entry=new n({time:i(),target:r,boundingClientRect:s,rootBounds:e,intersectionRect:u});a?t&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=t.getComputedStyle(e).display){for(var o=h(e),i=o,r=e.parentNode,s=!1;!s;){var c=null;if(r==this.root||1!=r.nodeType?(s=!0,c=n):"visible"!=t.getComputedStyle(r).overflow&&(c=h(r)),c&&!(i=a(c,i)))break;r=r.parentNode}return i}},o.prototype._getRootRect=function(){var t;if(this.root)t=h(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||l(e,this.root)},o.prototype._rootContainsTarget=function(t){return l(this.root||e,t)},o.prototype._registerInstance=function(){d.indexOf(this)<0&&d.push(this)},o.prototype._unregisterInstance=function(){var t=d.indexOf(this);-1!=t&&d.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}}(window,document),t.export="nope"}).call(e,n(3)(t))},function(t,e,n){!function(){function e(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function n(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):document.attachEvent("onreadystatechange",function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())})}function o(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function r(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function s(t,n){function o(){var t=i;r(t)&&t.a.parentNode&&n(t.g)}var i=t;e(t.b,o),e(t.c,o),r(t)}function c(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function a(){if(null===f)if(h()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);f=!!t&&603>parseInt(t[1],10)}else f=!1;return f}function h(){return null===m&&(m=!!document.fonts),m}function u(){if(null===p){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}p=""!==t.style.font}return p}function l(t,e){return[t.style,t.weight,u()?t.stretch:"","100px",e].join(" ")}var d=null,f=null,p=null,m=null;c.prototype.load=function(t,e){var r=this,c=t||"BESbswy",u=0,f=e||3e3,p=(new Date).getTime();return new Promise(function(t,e){if(h()&&!a()){var m=new Promise(function(t,e){function n(){(new Date).getTime()-p>=f?e():document.fonts.load(l(r,'"'+r.family+'"'),c).then(function(e){1<=e.length?t():setTimeout(n,25)},function(){e()})}n()}),v=new Promise(function(t,e){u=setTimeout(e,f)});Promise.race([v,m]).then(function(){clearTimeout(u),t(r)},function(){e(r)})}else n(function(){function n(){var e;(e=-1!=g&&-1!=y||-1!=g&&-1!=b||-1!=y&&-1!=b)&&((e=g!=y&&g!=b&&y!=b)||(null===d&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),d=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=d&&(g==w&&y==w&&b==w||g==_&&y==_&&b==_||g==E&&y==E&&b==E)),e=!e),e&&(I.parentNode&&I.parentNode.removeChild(I),clearTimeout(u),t(r))}function a(){if((new Date).getTime()-p>=f)I.parentNode&&I.parentNode.removeChild(I),e(r);else{var t=document.hidden;!0!==t&&void 0!==t||(g=h.a.offsetWidth,y=m.a.offsetWidth,b=v.a.offsetWidth,n()),u=setTimeout(a,50)}}var h=new o(c),m=new o(c),v=new o(c),g=-1,y=-1,b=-1,w=-1,_=-1,E=-1,I=document.createElement("div");I.dir="ltr",i(h,l(r,"sans-serif")),i(m,l(r,"serif")),i(v,l(r,"monospace")),I.appendChild(h.a),I.appendChild(m.a),I.appendChild(v.a),document.body.appendChild(I),w=h.a.offsetWidth,_=m.a.offsetWidth,E=v.a.offsetWidth,a(),s(h,function(t){g=t,n()}),i(h,l(r,'"'+r.family+'",sans-serif')),s(m,function(t){y=t,n()}),i(m,l(r,'"'+r.family+'",serif')),s(v,function(t){b=t,n()}),i(v,l(r,'"'+r.family+'",monospace'))})})},t.exports=c}()},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(1);n(0);var s=(document.querySelector.bind(document),document.querySelectorAll.bind(document)),c=0,a=1,h=function(){function t(e){var n=this;o(this,t),this.root=e,this.current=e.querySelector(".drop-current"),this.options=e.querySelector(".drop-options"),this.match_size();var i=c,r=function(){n.options.style.display="none",n.root.parentNode.style.zIndex=2e3,i=c},s=function(){n.options.style.display="block",n.root.parentNode.style.zIndex=2100,i=a},h=function(t){t&&t.preventDefault()&&t.preventDefault(),i===c?s():r()};this.root.addEventListener("mouseenter",s,!1),this.root.addEventListener("mouseleave",r,!1),this.current.addEventListener("touchstart",h,!1),document.body.addEventListener("touchstart",function(t){n.root.contains(t.target)||r()},!1)}return i(t,[{key:"match_size",value:function(){var t=this.options.style.display;this.options.style.display="block",this.current.style.width=this.options.style.width="";var e=Math.max(parseFloat(getComputedStyle(this.current).width),parseFloat(getComputedStyle(this.options).width));this.current.style.width=this.options.style.width=e+"px",this.options.style.display=t}}]),t}(),u=Array.from(s(".drop")).map(function(t){return new h(t)});new r("BentonSans-Bold").load().then(function(){u.forEach(function(t){return t.match_size()})});var l=new IntersectionObserver(function(t){t.forEach(function(t){t.target.classList.toggle("offscreen",!t.isIntersecting)})});Array.from(document.querySelectorAll("#asset-list li")).forEach(function(t){l.observe(t)})},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);