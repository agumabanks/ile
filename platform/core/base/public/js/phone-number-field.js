(()=>{function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var t=function(){function t(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i,o;return e=t,(i=[{key:"init",value:function(){$(document).find(".js-phone-number-mask").each((function(n,t){window.intlTelInput(t,{geoIpLookup:function(n){$.get("https://ipinfo.io",(function(){}),"jsonp").always((function(t){n(t&&t.country?t.country:"")}))},initialCountry:"auto",utilsScript:"/vendor/core/core/base/libraries/intl-tel-input/js/utils.js"})}))}}])&&n(e.prototype,i),o&&n(e,o),t}();$(document).ready((function(){(new t).init(),document.addEventListener("payment-form-reloaded",(function(){(new t).init()}))}))})();