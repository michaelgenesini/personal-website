!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var u,s,a=0,c=[];a<e.length;a++)s=e[a],o[s]&&c.push(o[s][0]),o[s]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);for(n&&n(e,r,i);c.length;)c.shift()()};var r={},o={1:0};e.e=function(t){function n(){s.onerror=s.onload=null,clearTimeout(a);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var u=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,e.nc&&s.setAttribute("nonce",e.nc),s.src=e.p+"assets/scripts/"+t+".ca04.js";var a=setTimeout(n,12e4);return s.onerror=s.onload=n,u.appendChild(s),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t},e(e.s=0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n(1);var o=r(n(2)),i=r(n(3));if("serviceWorker"in navigator)o.default.register();var u=document.getElementById("paragraph"),s="Frontend Engineer focused on components systems and automated tools. Currently based in Parma, IT.",a=(0,i.default)(u,{characters:["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","/","+","-","•","~","!","=","*"],speed:75});window.onload=function(){a.start().text(function(t){return s}).reveal(1500),n.e(0).then(n.bind(null,4)).then(function(t){t.default({paragraph:{element:u,text:s,baffle:a}})})}},function(t,e){},function(t,e){var n={scriptURL:"/sw.js"};Object.defineProperty(e,"__esModule",{value:!0}),e.default={register:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!navigator.serviceWorker&&navigator.serviceWorker.register(n.scriptURL,t)}},t.exports=e.default},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(2));t.exports=r.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e.mapString=function(t,e){return t.split("").map(e).join("")},e.sample=function(t){return t[Math.floor(Math.random()*t.length)]},e.each=function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)},e.getTruthyIndices=function(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return!1!==t})},e.getElements=function(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(n(3)),i={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},u=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.options=(0,r.extend)(Object.create(i),n),this.elements=(0,r.getElements)(e).map(o.default),this.running=!1}return t.prototype.once=function(){var t=this;return(0,r.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,r.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,r.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,r.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],o=e/this.options.speed||1;return setTimeout(function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,r.each)(e,function(e){var n=Math.ceil(e.value.length/o);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,r.each)(t.elements,function(t){return t.init()}))},t.options.speed)},n),this},t}();e.default=function(t,e){return new u(t,e)}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=function(t){function e(n){r(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n.textContent));return o.element=n,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(function(){function t(e){r(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,o.mapString)(this.value,function(r,i){return n.indexOf(r)>-1?r:t.bitmap[i]?(0,o.sample)(e):r}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,o.getTruthyIndices)(this.bitmap);this.bitmap[(0,o.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}());e.default=function(t){return new i(t)}}])})}]);