!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("formik")):"function"==typeof define&&define.amd?define(["exports","react","formik"],e):e(t.FormikPersist={},t.React,t.formik)}(this,function(t,e,r){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=NaN,f="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt,l="object"==typeof o&&o&&o.Object===Object&&o,y="object"==typeof self&&self&&self.Object===Object&&self,m=l||y||Function("return this")(),d=Object.prototype.toString,g=Math.max,h=Math.min,j=function(){return m.Date.now()};function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function O(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||(r=e)&&"object"==typeof r&&d.call(e)==f)return i;var e,r;if(w(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=w(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var o=c.test(t);return o||s.test(t)?p(t.slice(2),o?2:8):a.test(t)?i:+t}var v=function(n,o,t){var i,f,u,a,c,s,p=0,l=!1,y=!1,e=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function m(t){var e=i,r=f;return i=f=void 0,p=t,a=n.apply(r,e)}function d(t){var e=t-s;return void 0===s||o<=e||e<0||y&&u<=t-p}function v(){var t,e,r=j();if(d(r))return b(r);c=setTimeout(v,(e=o-((t=r)-s),y?h(e,u-(t-p)):e))}function b(t){return c=void 0,e&&i?m(t):(i=f=void 0,a)}function r(){var t,e=j(),r=d(e);if(i=arguments,f=this,s=e,r){if(void 0===c)return p=t=s,c=setTimeout(v,o),l?m(t):a;if(y)return c=setTimeout(v,o),m(s)}return void 0===c&&(c=setTimeout(v,o)),a}return o=O(o)||0,w(t)&&(l=!!t.leading,u=(y="maxWait"in t)?g(O(t.maxWait)||0,o):u,e="trailing"in t?!!t.trailing:e),r.cancel=function(){void 0!==c&&clearTimeout(c),i=s=f=c=void(p=0)},r.flush=function(){return void 0===c?a:b(j())},r},b=Array.isArray,k=Object.keys,x=Object.prototype.hasOwnProperty;var _=function(t,e){try{return function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){var n,o,i,f=b(e),u=b(r);if(f&&u){if((o=e.length)!=r.length)return!1;for(n=o;0!=n--;)if(!t(e[n],r[n]))return!1;return!0}if(f!=u)return!1;var a=e instanceof Date,c=r instanceof Date;if(a!=c)return!1;if(a&&c)return e.getTime()==r.getTime();var s=e instanceof RegExp,p=r instanceof RegExp;if(s!=p)return!1;if(s&&p)return e.toString()==r.toString();var l=k(e);if((o=l.length)!==k(r).length)return!1;for(n=o;0!=n--;)if(!x.call(r,l[n]))return!1;for(n=o;0!=n--;)if(!("_owner"===(i=l[n])&&e.$$typeof||t(e[i],r[i])))return!1;return!0}return e!=e&&r!=r}(t,e)}catch(t){if(t.message&&t.message.match(/stack|recursion/i))return console.warn("Warning: react-fast-compare does not handle circular references.",t.name,t.message),!1;throw t}},S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.saveForm=v(function(t){window.sessionStorage.setItem(e.props.name,JSON.stringify(t))},e.props.debounce),e}return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.componentDidUpdate=function(t){_(t.formik,this.context.formik)||this.saveForm(t.formik)},e.prototype.componentDidMount=function(){var t=window.sessionStorage.getItem(this.props.name);t&&null!==t&&this.props.formik.setFormikState(JSON.parse(t))},e.prototype.render=function(){return null},e.defaultProps={debounce:300},e}(e.Component),T=r.connect(S);t.Persist=T,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=formik-persist.umd.js.map
