import{g as _,c as b}from"./index-DmJKzMYO.js";function y(c,p){for(var i=0;i<p.length;i++){const u=p[i];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in c)){const f=Object.getOwnPropertyDescriptor(u,o);f&&Object.defineProperty(c,o,f.get?f:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}};(function(c,p){(function(i){i(b)})(function(i){i.defineMode("sieve",function(u){function o(e){for(var n={},r=e.split(" "),t=0;t<r.length;++t)n[r[t]]=!0;return n}var f=o("if elsif else stop require"),k=o("true false not"),g=u.indentUnit;function l(e,n){var r=e.next();if(r=="/"&&e.eat("*"))return n.tokenize=a,a(e,n);if(r==="#")return e.skipToEnd(),"comment";if(r=='"')return n.tokenize=h(r),n.tokenize(e,n);if(r=="(")return n._indent.push("("),n._indent.push("{"),null;if(r==="{")return n._indent.push("{"),null;if(r==")"&&(n._indent.pop(),n._indent.pop()),r==="}")return n._indent.pop(),null;if(r==","||r==";"||/[{}\(\),;]/.test(r))return null;if(/\d/.test(r))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(r==":")return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var t=e.current();return t=="text"&&e.eat(":")?(n.tokenize=v,"string"):f.propertyIsEnumerable(t)?"keyword":k.propertyIsEnumerable(t)?"atom":null}function v(e,n){return n._multiLineString=!0,e.sol()?(e.next()=="."&&e.eol()&&(n._multiLineString=!1,n.tokenize=l),"string"):(e.eatSpace(),e.peek()=="#"?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function a(e,n){for(var r=!1,t;(t=e.next())!=null;){if(r&&t=="/"){n.tokenize=l;break}r=t=="*"}return"comment"}function h(e){return function(n,r){for(var t=!1,d;(d=n.next())!=null&&!(d==e&&!t);)t=!t&&d=="\\";return t||(r.tokenize=l),"string"}}return{startState:function(e){return{tokenize:l,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||l)(e,n)},indent:function(e,n){var r=e._indent.length;return n&&n[0]=="}"&&r--,r<0&&(r=0),r*g},electricChars:"}"}}),i.defineMIME("application/sieve","sieve")})})();var s=z.exports;const x=_(s),S=y({__proto__:null,default:x},[s]);export{S as s};
