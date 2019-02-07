!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";(function(e){var o=n(2),r=setTimeout;function i(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void f(t.promise,e)}a(t.promise,o)}else(1===e._state?a:f)(t.promise,e._value)})):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void d((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,s(e)}catch(t){f(e,t)}var o,r}function f(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&c._immediateFn(function(){e._handled||c._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,f(t,e))})}catch(e){if(n)return;n=!0,f(t,e)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new l(e,t,n)),n},c.prototype.finally=o.a,c.all=function(e){return new c(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var u=c.then;if("function"==typeof u)return void u.call(c,function(t){i(e,t)},n)}o[e]=c,0==--r&&t(o)}catch(e){n(e)}}for(var c=0;c<o.length;c++)i(c,o[c])})},c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.race=function(e){return new c(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},c._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){r(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=c}).call(this,n(4).setImmediate)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var o=n(0);class r{constructor(e,t){if(void 0===e)throw console.warn("Did not specify an image");if(void 0===t)throw console.warn("No contenet container defined");return new o.a((n,o)=>{try{(o=>{e.complete?o(e,t).then((e,t)=>{n(e,t)}):e.addEventListener("load",()=>{o(e,t).then((e,t)=>{n(e,t)})})})(this.check.bind(this))}catch(e){o(e)}})}check(e,t){return e.setAttribute("crossorigin",""),new o.a((n,o)=>{try{let c=e.getBoundingClientRect(),u=t.getBoundingClientRect(),a=-1*c.left+u.left,f=t.offsetTop,s=u.width,l=u.height,d=document.createElement("canvas");d.width=c.width,d.height=c.width;var r=d.getContext("2d");r.drawImage(e,0,0,c.width,c.height);var i=r.getImageData(a,f,s,l);let h={imageData:i,width:s,height:l};n(this.getBrightness(i.data,s,l),h)}catch(e){o(e)}})}getBrightness(e,t,n){let o=0;for(let t=0,n=e.length;t<n;t+=4){let n=e[t],r=e[t+1],i=e[t+2];o+=Math.floor((n+r+i)/3)}return Math.floor(o/(t*n))}}},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(5),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r,i,c,u,a=1,f={},s=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},o=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(r=l.documentElement,o=function(e){var t=l.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(p,0,e)}:(c="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&p(+t.data.slice(c.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),o=function(t){e.postMessage(c+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return f[a]=r,o(a),a++},d.clearImmediate=h}function h(e){delete f[e]}function p(e){if(s)setTimeout(p,0,e);else{var t=f[e];if(t){s=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{h(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(6))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(e){o=c}}();var a,f=[],s=!1,l=-1;function d(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&h())}function h(){if(!s){var e=u(d);s=!0;for(var t=f.length;t;){for(a=f,f=[];++l<t;)a&&a[l].run();l=-1,t=f.length}a=null,s=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new p(e,t)),1!==f.length||s||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}])});
//# sourceMappingURL=main.js.map