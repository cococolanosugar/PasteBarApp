import{g as b,c as v}from"./index-CQwUtl0p.js";function y(f,d){for(var o=0;o<d.length;o++){const u=d[o];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in f)){const r=Object.getOwnPropertyDescriptor(u,c);r&&Object.defineProperty(f,c,r.get?r:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}};(function(f,d){(function(o){o(v)})(function(o){o.defineMode("dtd",function(u){var c=u.indentUnit,r;function l(i,e){return r=e,i}function a(i,e){var n=i.next();if(n=="<"&&i.eat("!")){if(i.eatWhile(/[\-]/))return e.tokenize=k,k(i,e);if(i.eatWhile(/[\w]/))return l("keyword","doindent")}else{if(n=="<"&&i.eat("?"))return e.tokenize=p("meta","?>"),l("meta",n);if(n=="#"&&i.eatWhile(/[\w]/))return l("atom","tag");if(n=="|")return l("keyword","separator");if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return l(null,n);if(n.match(/[\[\]]/))return l("rule",n);if(n=='"'||n=="'")return e.tokenize=h(n),e.tokenize(i,e);if(i.eatWhile(/[a-zA-Z\?\+\d]/)){var t=i.current();return t.substr(t.length-1,t.length).match(/\?|\+/)!==null&&i.backUp(1),l("tag","tag")}else return n=="%"||n=="*"?l("number","number"):(i.eatWhile(/[\w\\\-_%.{,]/),l(null,null))}}function k(i,e){for(var n=0,t;(t=i.next())!=null;){if(n>=2&&t==">"){e.tokenize=a;break}n=t=="-"?n+1:0}return l("comment","comment")}function h(i){return function(e,n){for(var t=!1,s;(s=e.next())!=null;){if(s==i&&!t){n.tokenize=a;break}t=!t&&s=="\\"}return l("string","tag")}}function p(i,e){return function(n,t){for(;!n.eol();){if(n.match(e)){t.tokenize=a;break}n.next()}return i}}return{startState:function(i){return{tokenize:a,baseIndent:i||0,stack:[]}},token:function(i,e){if(i.eatSpace())return null;var n=e.tokenize(i,e),t=e.stack[e.stack.length-1];return i.current()=="["||r==="doindent"||r=="["?e.stack.push("rule"):r==="endtag"?e.stack[e.stack.length-1]="endtag":i.current()=="]"||r=="]"||r==">"&&t=="rule"?e.stack.pop():r=="["&&e.stack.push("["),n},indent:function(i,e){var n=i.stack.length;return e.charAt(0)==="]"?n--:e.substr(e.length-1,e.length)===">"&&(e.substr(0,1)==="<"||r=="doindent"&&e.length>1||(r=="doindent"?n--:r==">"&&e.length>1||r=="tag"&&e!==">"||(r=="tag"&&i.stack[i.stack.length-1]=="rule"?n--:r=="tag"?n++:e===">"&&i.stack[i.stack.length-1]=="rule"&&r===">"?n--:e===">"&&i.stack[i.stack.length-1]=="rule"||(e.substr(0,1)!=="<"&&e.substr(0,1)===">"?n=n-1:e===">"||(n=n-1)))),(r==null||r=="]")&&n--),i.baseIndent+n*c},electricChars:"]>"}}),o.defineMIME("application/xml-dtd","dtd")})})();var g=z.exports;const w=b(g),S=y({__proto__:null,default:w},[g]);export{S as d};
